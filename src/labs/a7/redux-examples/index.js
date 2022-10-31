/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7 Lab
*/

import React from "react";

//These are all import related to redux
import HelloReduxExampleComponent from "./hello-redux-example-component.js";
import hello from "./reducers/hello.js"
import todos from "./reducers/todos-reducer";
import Todos from "./todos-component"

import {Provider} from "react-redux"; //The Provider delivers the data from the store into any components that request data
import {configureStore} from "@reduxjs/toolkit" //The configurestore function lets us lump all of our reducers into a single store for centralized access


//Create the store and configure it to access all of our reducers
const store = configureStore({
    reducer: {hello, todos}
});
function ReduxExamples(){
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples </h2>
                <HelloReduxExampleComponent/>
                <Todos/>
            </div>
        </Provider>
    )
}

export default ReduxExamples;