/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

import postsArray from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js"

function PostSummaryList(){
    return(`
        <div class="row justify-content-center m-0 wd-post-container">
            ${postsArray.map((post) => {
                return (PostSummaryItem(post));
            }).join('')}
        </div>
    `);
}

export default PostSummaryList;