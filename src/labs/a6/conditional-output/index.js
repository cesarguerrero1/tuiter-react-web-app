/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/
import React from "react";
import ConditionalOutputIfElse from "./conditional-output-if-else.js";
import ConditionalOutputInline from "./conditional-output-inline.js";

//Merge our content
function ConditionalOutput(){
    return (
        //Do we not need to include <div>? Does it just assume its a div?
        <>
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
        </>
    );
};

export default ConditionalOutput;