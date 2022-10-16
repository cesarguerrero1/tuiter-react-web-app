/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

//Handle Routing!
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/index.js"
import PostSummaryList from "./post-summary-list/index.js"
import "./index.css"


function Tuiter() {
    return (
        <div className="row my-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="/home" element={<HomeComponent/>}/>
                    <Route path="/explore" element={<ExploreComponent />}/>
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-4">
            <Routes>
                    <Route index element={<PostSummaryList/>}/>
                    <Route path="/home" element={<PostSummaryList/>}/>
                    <Route path="/explore" element={<WhoToFollowList/>}/>
            </Routes>
            </div>
        </div>
    );
}

export default Tuiter