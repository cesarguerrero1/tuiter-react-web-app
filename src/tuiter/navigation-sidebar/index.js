/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

import React from "react";
import {Link} from "react-router-dom"; //This is JSX way of saying <a></a>
import {useLocation} from "react-router";

//The Navigation Sidebar is now a component for use anywhere
function NavigationSidebar(){
    //This allows us to navigate as needed from the navigation links
    const {pathname} = useLocation(); //useLocation() returns an OBJECT!!!
    const paths = pathname.split('/')
    var active = paths[2];

    //I want to make sure that home is highlighted even if we are at /tuiter or /tuiter/
    if((active === undefined || active === '') && paths[1] === 'tuiter'){
        active = 'home';
    }

    //Applying CSS logically 
    var activeClass = "wd-active-page";

    //Recall that 'class' is a keyword so we have to use 'className'
    return(
        <div>
            <div className="mb-2 wd-navbar-styling">
                <nav className = "navbar py-0">
                    <ul className = "navbar-nav w-100">
                        <li className = "nav-item py-1 px-3 wd-border-bottom"><i className = "fab fa-twitter fa-fw"></i></li>
                        <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "home" ? activeClass : ''}`}><Link to="/tuiter/home" className = "nav-link wd-override-navlink"><i className = "fas fa-home fa-fw"></i><span className = "d-none d-xl-inline"> Home</span></Link></li>
                        <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "explore" ? activeClass : ''}`}><Link to="/tuiter/explore" className = "nav-link wd-override-navlink"><i className = "fas fa-hashtag fa-fw"></i><span className = "d-none d-xl-inline"> Explore</span></Link></li>
                        <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "notifications" ? activeClass : ''}`}><Link to="/tuiter/notifications" className = "nav-link wd-override-navlink"><i className = "fas fa-bell fa-fw"></i><span className = "d-none d-xl-inline"> Notifications</span></Link></li>
                        <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "messages" ? activeClass : ''}`}><Link to="/tuiter/messages" className = "nav-link wd-override-navlink"><i className = "fas fa-envelope fa-fw"></i><span className = "d-none d-xl-inline"> Messages</span></Link></li>
                        <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "bookmarks" ? activeClass : ''}`}><Link to="/tuiter/bookmarks" className = "nav-link wd-override-navlink"><i className = "fas fa-bookmark fa-fw"></i><span className = "d-none d-xl-inline"> Bookmarks</span></Link></li>
                        <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "lists" ? activeClass : ''}`}><Link to="/tuiter/lists" className = "nav-link wd-override-navlink"><i className = "fas fa-list-ul fa-fw"></i><span className = "d-none d-xl-inline"> Lists</span></Link></li>
                        <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "profile" ? activeClass : ''}`}><Link to="/tuiter/profile" className = "nav-link wd-override-navlink"><i className = "fas fa-user fa-fw"></i><span className = "d-none d-xl-inline"> Profile</span></Link></li>
                        <li className = {`nav-item py-1 px-3 wd-border-bottom ${active === "more" ? activeClass : ''}`}><Link to="/tuiter/more" className = "nav-link wd-override-navlink"><i className = "fas fa-ellipsis-h fa-fw"></i><span  className = "d-none d-xl-inline"> More</span></Link></li>
                        <li className = "nav-item py-1 px-3"><Link to="/" className = "nav-link wd-override-navlink"><span  className = "d-none d-xl-inline">Labs</span></Link></li>
                    </ul>
                </nav>
            </div>
            <button className="btn wd-override-tweet-btn w-100">Tweet</button>
        </div>
    )
}

export default NavigationSidebar;


