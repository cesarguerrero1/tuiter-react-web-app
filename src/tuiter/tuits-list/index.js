/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

//Get libraries from React and Redux
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

//Import the components
import TuitItem from "./tuit-item.js";
import {findTuitsThunk} from "../../services/tuits-thunks.js";

function TuitsList() {

    //Remember to use Reducer
    const {tuits, loading} = useSelector((state) => state.tuits);
    //In order to send data to the reducer we need to use dispatch
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(findTuitsThunk())
    }, []);

    //We want to inform the user that we are loading then make it disappear when we have the content
    return (
      <div className="wd-post-list-container">
          { loading && <div>Loading...</div> }
          { !loading && 
              tuits.map((tuit) => {
                  return(<TuitItem key={tuit._id} tuit={tuit}/>);
              })
          }
      </div>
    )
}

export default TuitsList;