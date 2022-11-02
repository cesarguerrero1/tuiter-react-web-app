/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

import React from "react";

import TuitItem from "./tuit-item.js";
import { useSelector } from "react-redux";

function TuitsList() {

    //Remember to use Reduer
    const tuitsArray = useSelector((state) => state.tuits);

    return (
      <div className="wd-post-list-container">
          {tuitsArray.map((tuit) => {
              return(<TuitItem key={tuit._id} tuit={tuit}/>);
          })}
      </div>
    )
}

export default TuitsList;