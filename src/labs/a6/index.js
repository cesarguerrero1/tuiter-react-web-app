/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

//Importing other JSX Files
import Classes from "./classes/index.js";
import ConditionalOutput from "./conditional-output/index.js";
import Styles from "./styles/index.js";
import TodoList from "./todo/todo-list.js";

function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <ConditionalOutput />
            <Styles/>
            <br/>
            <Classes/>
            <br/>
            <TodoList />
        </div>
    );
}

export default Assignment6;

