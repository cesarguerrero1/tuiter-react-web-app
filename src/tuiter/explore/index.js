/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

import React from "react";
import PostSummaryList from "../post-summary-list/index.js";
import "./index.css";

function ExploreComponent() {
    return (
        <div>
            <div className="row align-items-center justify-content-between mb-2">
                <div className="col-11 position-relative">
                    <i className = "fa fa-search wd-input-icon"></i>
                    <input className="w-100 wd-input-formatting" placeholder="Search Twitter"/>
                </div>
                <div className="col-1 text-end">
                    <a href="explore-settings.html"><i className="fas fa-cog fa-2x wd-gear-icon"></i></a>
                </div>
            </div>
            <div>
                <ul className = "nav nav-tabs">
                    <li className = "nav-item"><a className="nav-link px-3 active" href="for-you.html">For you</a></li>
                    <li className = "nav-item"><a className="nav-link px-3" href="trending.html">Trending</a></li>
                    <li className = "nav-item"><a className="nav-link px-3" href="news.html">News</a></li>
                    <li className = "nav-item"><a className="nav-link px-3" href="sports.html">Sports</a></li>
                    <li className = "nav-item d-none d-md-block"><a className="nav-link px-3" href="entertainment.html">Entertainment</a></li>
                </ul>
            </div>
            <div className="my-2 position-relative">
                <img className="img-fluid wd-main-image" alt="Main" src="../images/starship.jpeg" />
                <div className="wd-overlayed-text">
                    <h3 className="m-0 fw-bold wd-overlayed-text-color">SpaceX's Starship</h3>
                </div>
            </div>
            <PostSummaryList />
        </div>
    )
}

export default ExploreComponent;