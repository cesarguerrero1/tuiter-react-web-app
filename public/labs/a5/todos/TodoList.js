/**
 * Cesar Guerrero
 * 10/10/22
 * CS610 - Fall 2022
 * 
 * Assignment 5 - Lab TODO
 */

import TodoItem from "./TodoItem.js";
import Todos from "./todo.js";

const TodoList = () => {
    return(`
        <ul>
            ${
                Todos.map((todoItem) => {
                    return (
                        TodoItem(todoItem)
                    )
                }).join('')
            }
        </ul>
    `)
}

export default TodoList;