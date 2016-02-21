import React from 'react';
import ToDoList from './todo_list.js';
import ToDoForm from './todo_form.js';

export default React.createClass({
    render() {
        let name = `${this.props.name}`
        return (
            <div>
                <h1>{ name }'s todo list</h1>
                < ToDoForm />
                < ToDoList />
            </div>
        )
    }
})
