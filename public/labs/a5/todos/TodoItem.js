/**
 * Cesar Guerrero
 * 10/10/22
 * CS610 - Fall 2022
 * 
 * Assignment 5 - Lab TODO
 */

const TodoItem = (todo) => {
    return(`
        <li>
            <input type = "checkbox" ${(todo.done) ? 'checked' : ''}/>
            ${todo.title} (${todo.status})
        </li>
    `)
}

export default TodoItem;