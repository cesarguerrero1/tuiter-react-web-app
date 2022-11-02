/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

import React, {useState} from "react";

//Reducer Imports
import {createTuit} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

function WhatsHappening(){

    //Create our Local State Machine
    let [whatsHappening, setWhatsHappening] = useState('');//Recall that this means the variable 'whatsHappening' is set to an empty string
    const dispatch = useDispatch(); //We need a variable so we can store and call this function as needed

    function tuitClickHandler(){
        //We want to stop empty strings from being submitted
        if(whatsHappening){
            const newTopic = {
                "title": whatsHappening.slice(0, (Math.round((whatsHappening.length)*.25))) + "...",
                "tuit": whatsHappening
            };
    
            dispatch(createTuit(newTopic));

        }
    }

    return(
        <div className="row mx-0">
            <div className="col-2">
                <img className="wd-user-image" alt="User" src="../images/nasa.jpeg"/>
            </div>
            <div className="col-10">
                <textarea className="w-100 wd-tuit-input-formatting mb-3" value={whatsHappening} placeholder="What's Happening?" onChange={(event) => {setWhatsHappening(event.target.value)}}></textarea>
                <div>
                    <i className="far fa-image fa-fw fa-2x me-2"></i>
                    <i className="fas fa-video fa-fw fa-2x me-2"></i>
                    <i className="fas fa-poll fa-fw fa-2x me-2"></i>
                    <i className="fas fa-icons fa-fw fa-2x me-2"></i>
                    <i className="fas fa-map-marker-alt fa-fw fa-2x me-2"></i>
                    <button className="btn wd-override-tweet-btn p-2 float-end w-25" onClick={tuitClickHandler}>Tuit</button>
                </div>
            </div>
            <hr className="my-3 wd-info-color"/>
        </div>
    )
}

export default WhatsHappening