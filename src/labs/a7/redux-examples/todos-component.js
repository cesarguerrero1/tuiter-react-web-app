/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7 Lab
*/

import React from "react";
import { useSelector } from "react-redux";

function Todos(){
    const todos = useSelector((state) =>{return state.todos});
    
    return(
        <div>
            <h3>Todos</h3>
            <ul className = "list-group">
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