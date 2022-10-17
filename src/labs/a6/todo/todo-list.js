/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

import TodoItem from "./todo-item";
import todos from "./todos.json";

const TodoList = () => {
    return (
        //We use {} if it is NOT in a string. Otherwise we use {`${}`}
        <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map((todo) => {
                        return (<TodoItem todo={todo} />);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;