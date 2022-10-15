/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

function PostSummaryItem(post){
    return(`
        <div class = "col-12 row wd-border-bottom px-1 py-2">
            <div class = "col-9">
                <p class="m-0 wd-info-color">${post.topic}</p>
                <h6 class="my-1 fw-bold">${post.userName} <i class="fas fa-check-circle"></i><span class="wd-info-color fw-normal"> - ${post.time}</span></h6>
                <h6 class="fw-bold">${post.title}</h6>
            </div>
            <div class = "col-3 text-end">
                <img class="wd-post-image rounded-3" src="../../images/${post.image}"/>
            </div>
        </div>
    `);

}

export default PostSummaryItem;