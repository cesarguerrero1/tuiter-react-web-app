/**
 * Cesar Guerrero
 * 10/10/22
 * CS610 - Fall 2022
 * 
 * Assignment 5 - Lab TODO
 */

import TodoList from "./TodoList.js"

//alert("Hello World!");
$('#wd-todo').append(`
    <div class="container">
        <h1>Todo Example</h1>
        ${TodoList()}
    </div>
`);
