/**
 * Cesar Guerrero
 * 10/14/12
 * CS5610 - Fall 2022
 */

import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

//This function is what generates all of the HTML for our Home Page
function homeComponent(){
    //Grab main div ID
    var mainDiv = $("#wd-home");
    mainDiv.append(`
        <div class="row my-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("home")}
            </div>
            <div class="col-10 col-lg-7 col-xl-6 wd-post-list-container">
                ${PostList()}
            </div>
            <div class="d-none d-lg-block col-lg-4">
                ${PostSummaryList()}
            </div>
        </div>
    `)
}

//This function will run once the page is fully loaded
$(homeComponent());
