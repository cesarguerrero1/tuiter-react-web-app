/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7 Lab
*/

import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo} from "./reducers/todos-reducer";

function Todos(){
    const todos = useSelector((state) =>{return state.todos});

    //We want to manage local data!
    const [todo, setTodo] = useState({do: ''});

    //We want to be able to send hte local data to our application storage
    const dispatch = useDispatch();
    function TodoClickHandler(){
        dispatch(addTodo(todo));
    }


    function todoChangeHandler(event){
        const doValue = event.target.value; //Grab the value for this input text field
        //Creating a new object with do: doValue, key-value pair
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    //Anytime there is a keystroke, call the todoChangeHandler function and then update the value of textinput field with the state variable, todo
    return(
        <div>
            <h3>Todos</h3>
            <ul className = "list-group">
                <li className = "list-group-item">
                    <button onClick={TodoClickHandler} className = "btn btn-primary w-25 float-end">Create</button>
                    <input onChange={todoChangeHandler} value={todo.do} className = "form-control w-75"/>
                </li>
                {
                    todos.map((todo) => {
                        return (<li className = "list-group-item">{todo.do}</li>);
                    })
                }
            </ul>
        </div>
    )
}

export default Todos;