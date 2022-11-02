/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
    (Updated on 11/1/22 for Assignment 7: Redux)
*/

//Handle Routing!
import {Routes, Route} from "react-router";

//Bring in our components
import NavigationSidebar from "./navigation-sidebar/index.js";
import HomeComponent from "./home/index.js";
import ExploreComponent from "./explore/index.js"
import ProfileComponent from "./profile/index.js"
import WhoToFollowList from "./who-to-follow-list/index.js";

//Bring in our CSS
import "./index.css"

//Bring in our redux items
import whoReducer from "./reducers/who-reducer.js";
import tuitsReducer from "./reducers/tuits-reducer.js";
import profileReducer from "./reducers/profile-reducer.js";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

//We want to compile all our reducers together and give them a reference name
const store = configureStore({
    reducer: {
        who: whoReducer,
        tuits: tuitsReducer,
        profile: profileReducer
    }
});

//This is the base function for our Tuiter App called by App.js
function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row my-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="/home" element={<HomeComponent/>}/>
                        <Route path="/explore" element={<ExploreComponent/>}/>
                        <Route path="/profile/*" element={<ProfileComponent/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter