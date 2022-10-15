/**
 * Cesar Guerrero
 * 10/14/12
 * CS5610 - Fall 2022
 */

import postArray from "./mainPosts.js"
import PostListItem from "./PostListitem.js"

//We are rendering full size posts
function PostList(){
    return(`
        ${postArray.map((post) => {
            return (PostListItem(post));
        }).join('')}
    `);
}

export default PostList;