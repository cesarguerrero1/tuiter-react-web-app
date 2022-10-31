/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7 Lab
*/

import {createSlice} from "@reduxjs/toolkit";

//A simple Array of objects
const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
]

//At this point we are using the slicer to automaitcally create a reducer and allow us to mutate data that we can use across the application
const todosSlice = createSlice({
    name:'todos',
    initialState: initialTodos,
    //Here we are now making a reducer function
    reducers: {
        addTodo(state, action){
            state.push({
                _id: (new Date()).getTime(),
                do: action.payload.do,
                done: false
            });
        }
    }
});

export const {addTodo} = todosSlice.actions //Export the actions
export default todosSlice.reducer