/*
  Cesar Guerrero
  10/31/22
  CS5610

  Assignment 7 Lab
*/

import React from "react"
//Recall: useSelector extracts things from reducers! When the function loads, reducers pass their data into the function declared in useSelector
import {useSelector} from "react-redux"

function HelloReduxExampleComponent(){
    //Use Selector is now returning an array of whatever reducers state finds
    const message = useSelector((state) => {return state.hello.message});
    return (
        <h1>{message}</h1>
    )
}

export default HelloReduxExampleComponent;