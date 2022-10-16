/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

import React from "react";
import postsArray from "./post.json"
import PostSummaryItem from "./post-summary-item.js";

function PostSummaryList(){
    return(
        <div className="row justify-content-center m-0 wd-post-container">
            {postsArray.map((post) => {
                return (<PostSummaryItem key={post._id} post={post}/>);
            })}
        </div>
    )
}

export default PostSummaryList;