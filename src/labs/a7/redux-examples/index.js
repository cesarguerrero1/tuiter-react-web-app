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
import {createStore} from "redux"; //The store is what stores the data from the reducers
import {Provider} from "react-redux"; //The Provider delivers the data from the store into any components that request data

//Create the store and initiliaze it with the hello reducer
const store = createStore(hello);

function ReduxExamples(){
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples </h2>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    )
}

export default ReduxExamples;