/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

import React from "react";
import {Link} from "react-router-dom"; //This is JSX way of saying <a></a>
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
                    <Link to="./explore-settings.html"><i className="fas fa-cog fa-2x wd-gear-icon"></i></Link>
                </div>
            </div>
            <div>
                <ul className = "nav nav-tabs">
                    <li className = "nav-item"><Link to="./for-you.html" className="nav-link px-3 active">For you</Link></li>
                    <li className = "nav-item"><Link to="./trending.html" className="nav-link px-3" >Trending</Link></li>
                    <li className = "nav-item"><Link to="./news.html" className="nav-link px-3" >News</Link></li>
                    <li className = "nav-item"><Link to="./sports.html" className="nav-link px-3">Sports</Link></li>
                    <li className = "nav-item d-none d-md-block"><Link to="./entertainment.html" className="nav-link px-3">Entertainment</Link></li>
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