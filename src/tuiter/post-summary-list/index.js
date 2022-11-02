/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
  (Updated on 11/1/2022 for Assignment 7: Redux)
*/

import React from "react";
//import postsArray from "./post.json" Getting this from the reducer
import PostSummaryItem from "./post-summary-item.js";
import {useSelector} from "react-redux";

function PostSummaryList(){

    //Get Tuits from the state in the store
    const postsArray = useSelector((state) => state.tuits);

    return(
        <div className="row justify-content-center m-0 wd-post-container">
            {postsArray.map((post) => {
                return (<PostSummaryItem key={post._id} post={post}/>);
            })}
        </div>
    )
}

export default PostSummaryList;