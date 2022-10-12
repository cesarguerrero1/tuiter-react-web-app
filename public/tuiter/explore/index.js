/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

import NavigationSidebar from "../NavigationSidebar/index.js";

function exploreComponent(){
    //Grab the main DIV using its ID
    var mainDiv = $("#wd-explore");
    mainDiv.append(`
        <!-- <h2>Explore</h2> -->
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <!-- <h3>Navigation Sidebar</h3> -->
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                <h3>Explore Component</h3>
            </div>
            <div class="d-none d-lg-block col-lg-4">
                <h3>Who To Follow List </h3>
            </div>
       </div>
     
    `)
}

//Call our function once the page loads!
$(exploreComponent);