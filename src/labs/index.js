/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

import Assignment6 from "./a6/index.js";
import Nav from "../nav.js"

//Since this is react you can just write raw HTML!!!
function Labs(){
    return(
        <div>
            <Nav/>
            <Assignment6/>
        </div>
    )
}

export default Labs;