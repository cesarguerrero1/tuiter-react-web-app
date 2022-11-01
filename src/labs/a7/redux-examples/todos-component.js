/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7 Lab
*/

import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

function Todos(){
    const todos = useSelector((state) =>{return state.todos});

    //We want to manage local data!
    const [todo, setTodo] = useState({do: ''});

    //We want to be able to send hte local data to our application storage
    const dispatch = useDispatch();

    function createTodoClickHandler(){
        dispatch(addTodo(todo));
    }

    //We want to delete data from our application storage
    function deleteTodoClickHandler(index){
        dispatch(deleteTodo(index))
    }
    
    function toggleTodoDone(todo){
        dispatch(todoDoneToggle(todo))
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
                    <button onClick={createTodoClickHandler} className = "btn btn-primary w-25 float-end">Create</button>
                    <input onChange={todoChangeHandler} value={todo.do} className = "form-control w-75"/>
                </li>
                {
                    todos.map((todo, index) => {
                        return (<li key={todo._id} className = "list-group-item"><input type="checkbox" className="me-2" checked={todo.done} onChange={() => toggleTodoDone(todo)}/>{todo.do}<button onClick={() => deleteTodoClickHandler(index)}  className="btn btn-danger float-end ms-2">Delete</button></li>);
                    })
                }
            </ul>
        </div>
    )
}

export default Todos;