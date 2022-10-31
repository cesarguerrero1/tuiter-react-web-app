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
    const message = useSelector((hello) => {return hello.message});
    console.log(message);
    return (
        <h3>{message}</h3>
    )
}

export default HelloReduxExampleComponent;