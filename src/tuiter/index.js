/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

import Nav from "../nav.js";
import NavigationSidebar from "./navigation-sidebar/index.js";
import "./index.css"


function Tuiter() {
    return (
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
        </div>
    );
}

export default Tuiter