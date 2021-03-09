import React from 'react';
import db from '../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemText, Checkbox, IconButton } from '@material-ui/core';
import '../css/todo.css';

function Todo(props) {
    return (
        <div className="list__item">
            <div className="list__left">
                <Checkbox
                    // defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <ListItemText primary={props.todo.todo} />
            </div>
            <div className="list-right">
                <IconButton>
                    <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
                </IconButton>
            </div>
        </div >
    )
}

export default Todo
