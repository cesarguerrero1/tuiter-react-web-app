/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

import PostSummaryList from "../PostSummaryList/index.js"

function ExploreComponent(){
    return(`
        <div class="row align-items-center justify-content-between mb-2">
            <div class="col-11 position-relative">
                <i class = "fa fa-search wd-input-icon"></i>
                <input class="w-100 wd-input-formatting" placeholder="Search Twitter"/>
            </div>
            <div class="col-1 text-end">
                <a href="explore-settings.html"><i class="fas fa-cog fa-2x wd-gear-icon"></i></a>
            </div>
        </div>
        <div>
            <ul class = "nav nav-tabs">
                <li class = "nav-item"><a class="nav-link px-3 active" href="for-you.html">For you</a></li>
                <li class = "nav-item"><a class="nav-link px-3" href="trending.html">Trending</a></li>
                <li class = "nav-item"><a class="nav-link px-3" href="news.html">News</a></li>
                <li class = "nav-item"><a class="nav-link px-3" href="sports.html">Sports</a></li>
                <li class = "nav-item d-none d-md-block"><a class="nav-link px-3" href="entertainment.html">Entertainment</a></li>
            </ul>
        </div>
        <div class="my-2 position-relative">
            <img class="img-fluid wd-main-image" src="../../images/starship.jpeg"/>
            <div class="wd-overlayed-text">
                <h3 class="m-0 fw-bold wd-overlayed-text-color">SpaceX's Starship</h3>
            </div>
        </div>
        ${PostSummaryList()}
    `)
}

export default ExploreComponent;