/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

import React from "react";
import postArray from "./post.json";
import PostListItem from "./post-list-item.js";

function PostList(){
    return(
        <div>
            {postArray.map((post) => {
                return(<PostListItem key={post._id} post={post} />);
            })}
        </div>
    )
}

export default PostList;