/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
  (Updated on 11/1/2022 for Assignment 7: Redux)
*/

import React from "react";
//import WhoArray from "./who.json" - This was replaced by the reducer
import WhoToFollowListItem from "./who-to-follow-list-item.js";
import {useSelector} from "react-redux";


function WhoToFollowList(){
    //This is now the array from the reducer
    const WhoArray = useSelector((state) => state.who);
    return(
        <div className = "row m-0 justify-content-center wd-who-to-follow">
            <div className="col-12 row p-2 wd-border-bottom">
                <h6 className="fw-bold m-0">Who to follow</h6>
            </div>
            {WhoArray.map((entry) => {
                //entry is a JSON object
                return (<WhoToFollowListItem key={entry._id} who={entry}/>);
            })}
        </div>
    )

}

export default WhoToFollowList;