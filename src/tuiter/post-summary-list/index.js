/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
  (Updated on 11/1/2022 for Assignment 7: Redux)
*/

import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {findTuitsThunk} from "../../services/tuits-thunks.js";
import PostSummaryItem from "./post-summary-item.js";

function PostSummaryList(){

    //Get Tuits from the state in the store
    const {tuits, loading} = useSelector((state) => state.tuits);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(findTuitsThunk())
    }, []);

    return(
        <div className="row justify-content-center m-0 wd-post-container">
            { loading && <div>Loading...</div> }
            { !loading && 
                tuits.map((tuit) => {
                    return (<PostSummaryItem key={tuit._id} post={tuit}/>);
                })
            }
        </div>
    )
}

export default PostSummaryList;