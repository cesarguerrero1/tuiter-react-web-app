/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import WhoArray from "./who.js"

//NOTE: REMEMBER THAT MAP() RETURNS AN ARRAY!!!
function WhoToFollowList(){
    return(`
    <div class = "row m-0 justify-content-center wd-who-to-follow">
        <div class="col-12 row px-2 py-2 wd-border-bottom">
            <h6 class="fw-bold m-0">Who to follow</h6>
        </div>
        ${WhoArray.map((entry) => {
            return (WhoToFollowListItem(entry));
        }).join('')}
    </div>
`)

}

export default WhoToFollowList;