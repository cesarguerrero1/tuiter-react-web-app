/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

import React from "react";
import WhoArray from "./who.json"
import WhoToFollowListItem from "./who-to-follow-list-item.js";

function WhoToFollowList(){
    return(
        <div class = "row m-0 justify-content-center wd-who-to-follow">
            <div class="col-12 row p-2 wd-border-bottom">
                <h6 class="fw-bold m-0">Who to follow</h6>
            </div>
            {WhoArray.map((entry) => {
                return (<WhoToFollowListItem key={entry._id} who={entry}/>);
            })}
        </div>
    )

}

export default WhoToFollowList;