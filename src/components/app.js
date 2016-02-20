import React from 'react';
import ToDoList from './todo_list.js';
import ToDoForm from './todo_form.js';

export default React.createClass({
    render() {
        return (
            <div>
                < ToDoForm />
                < ToDoList />
                <div>
                    <h1>Hello World!</h1>
                </div>
            </div>
        )
    }
})
