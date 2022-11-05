/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

import React, {useState} from "react";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//Reducers
import {editProfile} from "../reducers/profile-reducer";
import {useDispatch} from "react-redux";

function EditProfile() {

    const userData = useSelector((state) => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Handling the state 
    let [firstName, updatefirstName] = useState(userData.firstName);
    let [lastName, updatelastName] = useState(userData.lastName);
    //I did not include the text area as that is updated without the need for all of this state stuff!
    let [location, updateLocation] = useState(userData.location);
    let [website, updateWebsite] = useState(userData.website);
    let [dateOfBirth, updateDateOfBirth] = useState(userData.dateOfBirth);

    function saveClickHandler(){
        const newUserData = {
            "firstName": firstName,
            "lastName": lastName,
            "bio": document.getElementById("bio").value,
            "location": location,
            "website": website,
            "dateOfBirth": dateOfBirth
        }
        dispatch(editProfile(newUserData));
        navigate("../profile");
    }

    return (
        <div className="wd-profile-border">
            <div className="row align-items-center mx-0 my-2 px-3">
                <div className="col-1 text-center p-0">
                    <i className="fas fa-times fa-fw wd-info-color" onClick={() => navigate("../profile")}></i>
                </div>
                <div className="col-8">
                    <h5 className="fw-bold m-0">Edit Profile</h5>
                </div>
                <div className="col-3 p-0">
                <button className = "btn wd-edit-profile-btn fw-bold px-3 float-end" onClick={saveClickHandler}>Save</button>
                </div>
            </div>
            <div className = "position-relative">
              <img className = "img-fluid mb-2" alt="astronaut-visor" src={`../images/${userData.bannerPicture}`}/>
              <img className = "wd-profile-image-container" alt="elon-musk" src={`../images/${userData.profilePicture}`}></img>
          </div>
          <div className="wd-clear-float"></div>
          <div className="mt-5 px-3 pt-2">
              <div className = "my-3 p-2 wd-input-border">
                <label for="fname" className="wd-info-color">First Name</label>
                <input id="fname" className="w-100 wd-input-box" value={firstName} onChange={(event) => {updatefirstName(event.target.value)}}/>
              </div>
              <div className = "my-3 p-2 wd-input-border">
                <label for="lname" className="wd-info-color">Last Name</label>
                <input id="lname" className="w-100 wd-input-box" value={lastName} onChange={(event) => {updatelastName(event.target.value)}}/>
              </div>
              <div className = "my-3 p-2 wd-input-border">
                <label for="bio" className="wd-info-color">Bio</label>
                <textarea id="bio" className="w-100 wd-input-box">{userData.bio}</textarea>
              </div>
              <div className = "my-3 p-2 wd-input-border">
                <label for="location" className="wd-info-color">Location</label>
                <input id="location" type="text" className="w-100 wd-input-box" value={location} onChange={(event) => {updateLocation(event.target.value)}}/>
              </div>
              <div className = "my-3 p-2 wd-input-border">
                <label for="website" className="wd-info-color">Website</label>
                <input id="website" type="text" className="w-100 wd-input-box" value={website} onChange={(event) => {updateWebsite(event.target.value)}}/>
              </div>
              <div className = "my-3">
                <label for="birthDate" className="wd-info-color">Birth Date · <span className="wd-edit-date-link">Edit</span></label>
                <input id="birthDate" type="date" className="w-100 wd-input-box" value={dateOfBirth} onChange={(event) => {updateDateOfBirth(event.target.value)}}/>
              </div>
              <div className = "my-3">
                <span className="p-0 m-0">Switch to Professional</span>
                <i className="fas fa-chevron-right fa-fw float-end"></i>
              </div>
          </div>
        </div>
    )
}

export default EditProfile;