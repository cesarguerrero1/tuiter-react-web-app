/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

import React from "react";

//The Navigation Sidebar is now a component for use anywhere
function NavigationSidebar({active='explore'}){
    //Applyin CSS logically 
    var activeClass = "wd-active-page";

    return(
        <div className="mb-2 wd-navbar-styling">
            <nav className = "navbar py-0">
                <ul className = "navbar-nav w-100">
                    <li className = "nav-item py-1 px-3 wd-border-bottom"><i className = "fab fa-twitter fa-fw"></i></li>
                    <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "home" ? activeClass : ''}`}><a className = "nav-link wd-override-navlink" ><i className = "fas fa-home fa-fw"></i><span className = "d-none d-xl-inline"> Home</span></a></li>
                    <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "explore" ? activeClass : ''}`}><a className = "nav-link wd-override-navlink" ><i className = "fas fa-hashtag fa-fw"></i><span className = "d-none d-xl-inline"> Explore</span></a></li>
                    <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "notifications" ? activeClass : ''}`}><a className = "nav-link wd-override-navlink" ><i className = "fas fa-bell fa-fw"></i><span  className = "d-none d-xl-inline"> Notifications</span></a></li>
                    <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "messages" ? activeClass : ''}`}><a className = "nav-link wd-override-navlink" ><i className = "fas fa-envelope fa-fw"></i><span  className = "d-none d-xl-inline"> Messages</span></a></li>
                    <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "bookmarks" ? activeClass : ''}`}><a className = "nav-link wd-override-navlink" ><i className = "fas fa-bookmark fa-fw"></i><span  className = "d-none d-xl-inline"> Bookmarks</span></a></li>
                    <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "lists" ? activeClass : ''}`}><a className = "nav-link wd-override-navlink" ><i className = "fas fa-list-ul fa-fw"></i><span  className = "d-none d-xl-inline"> Lists</span></a></li>
                    <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "profile" ? activeClass : ''}`}><a className = "nav-link wd-override-navlink" ><i className = "fas fa-user fa-fw"></i><span  className = "d-none d-xl-inline"> Profile</span></a></li>
                    <li className = "nav-item py-1 px-3"><a className = "nav-link wd-override-navlink"><i className = "fas fa-ellipsis-h fa-fw"></i><span  className = "d-none d-xl-inline"> More</span></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationSidebar;


