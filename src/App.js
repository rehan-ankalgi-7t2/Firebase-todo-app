import React, { useState, useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';
import './App.css';
import { TextField, Button } from '@material-ui/core';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Webster 👋!</h1>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="write your todo here" value={input} onChange={event => setInput(event.target.value)} />
        <Button variant="contained" color="primary" onClick={addTodo}>Add todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
