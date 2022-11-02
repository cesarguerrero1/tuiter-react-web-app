/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

import React from "react";
import TuitsList from "../tuits-list/index.js";
import WhatsHappening from "./whats-happening.js";

function HomeComponent(){
    return(
        <div>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    )
}

export default HomeComponent;