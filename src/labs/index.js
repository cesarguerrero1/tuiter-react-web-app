/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

import Assignment6 from "./a6/index.js";
import Assignment7 from "./a7/index.js";
import Nav from "../nav.js"

//Importing React Routing
import {Routes, Route} from "react-router";

//Since this is react you can just write raw HTML!!!
function Labs(){
    return(
        <div>
            <Nav/>
            <Routes>
                <Route index element={<Assignment6/>}/>
                <Route path="/a7" element={<Assignment7/>}/>
            </Routes>
        </div>
    )
}

export default Labs;