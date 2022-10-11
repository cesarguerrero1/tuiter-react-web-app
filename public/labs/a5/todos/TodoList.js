/**
 * Cesar Guerrero
 * 10/10/22
 * CS610 - Fall 2022
 * 
 * Assignment 5 - Lab TODO
 */

import TodoItem from "./TodoItem.js";

const TodoList = () => {
    return(`
        <ul>
            ${TodoItem('Buy Milk')}
            ${TodoItem('Pickup the kids')}
            ${TodoItem('Walk the doh')}
        </ul>
    `)
}

export default TodoList;