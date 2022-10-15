/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js"

function exploreComponent(){
    //Grab the main DIV using its ID
    var mainDiv = $("#wd-explore");
    mainDiv.append(`
        <!-- <h2>Explore</h2> -->
        <div class="row my-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("explore")}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${ExploreComponent()}
            </div>
            <div class="d-none d-lg-block col-lg-4">
                ${WhoToFollowList()}
            </div>
       </div>
     
    `)
}

//Call our function once the page loads!
$(exploreComponent);