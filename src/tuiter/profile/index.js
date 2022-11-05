/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"; //This is JSX way of saying <a></a>

function ProfileComponent() {

  const userData = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
      <div className = "wd-profile-border">
          <div className="row align-items-center px-3 py-2">
              <div className="col-1 text-end">
                  <i className="fas fa-arrow-left"></i>
              </div>
              <div className="col-11">
                  <h5 className = "fw-bold m-0">{userData.firstName} {userData.lastName}</h5>
                  <p className = "m-0 wd-info-color">{userData.tweetCount} Tweets</p>
              </div>
          </div>
          <div className = "position-relative">
              <img className = "img-fluid mb-2" alt="astronaut-visor" src={`../images/${userData.bannerPicture}`}/>
              <img className = "wd-profile-image-container" alt="elon-musk" src={`../images/${userData.profilePicture}`}></img>
              <button className = "btn wd-edit-profile-btn float-end me-3 mt-2 fw-bold" onClick={() => navigate("../edit-profile")}>Edit Profile</button>
          </div>
          <div className="wd-clear-float"></div>
          <div className="mt-3 px-3 pt-3">
              <h5 className="fw-bold m-0">{userData.firstName} {userData.lastName}</h5>
              <p className="wd-info-color m-0">{userData.handle}</p>
              <p className="my-2">{userData.bio}</p>
              <div className="col-12 row m-0">
                  <div className="col-auto wd-info-color ps-0">
                      <i className="fas fa-map-marker-alt fa-fw me-1"></i><span>{userData.location}</span>
                  </div>
                  <div className="col-auto wd-info-color ps-0">
                      <i className="fas fa-birthday-cake fa-fw me-1"></i><span>{userData.dateOfBirth}</span>
                  </div>
                  <div className="col-auto wd-info-color ps-0">
                      <i className="fas fa-poll fa-fw me-1"></i><span>Joined {userData.dateJoined}</span>
                  </div>
              </div>
              <div className="mt-2">
                  <p className="wd-info-color"><span className="fw-bold text-white">{userData.followingCount}</span> Following <span className="fw-bold text-white">{userData.followersCount}</span> Followers</p>
              </div>
          </div>
      </div>
  )
}

export default ProfileComponent;