/**
 * Cesar Guerrero
 * 10/14/12
 * CS5610 - Fall 2022
 */

//If there is content under the image then we need to 
function imageContent(include, post){
    if(include == true){
        return(`
        <div class="col-12 wd-content-container p-0 mt-3">
            <div>
                <img class="img-fluid wd-border-bottom wd-content-image" src="../../images/${post.image} "/>
            </div>
            <div class="p-3">
                <h6 class="mb-1 fw-bold">${post.contentTitle}</h6>
                <p class="my-0 wd-info-color">${post.contentPreview}</p>
                <p class="my-0 wd-info-color"><i class='fas fa-link fa-fw'></i> ${post.contentLink}</p>
            </div>
        </div>
        `)
    }else{
        return(`
        <div class="col-12 wd-content-container p-0 mt-3">
            <img class="img-fluid wd-no-content-image" src="../../images/${post.image} "/>
        </div>
        `)
    }

}

function PostListItem(post){
    return(`
        <div class = "row mt-2 wd-border-bottom">
            <div class = "col text-end">
                <img class="wd-user-image" src="../../images/${post.userImage}"/>
            </div>
            <div class="col-10 row m-0">
                <div class="col-12 row m-0 p-0">
                    <div class="col-11 p-0">
                        <h6 class="my-1 fw-bold">${post.userName} <i class="fas fa-check-circle"></i><span class="wd-info-color fw-normal"> ${post.userHandle} · ${post.time}</span></h6>
                        <p class="m-0">${post.tweet}</p>
                    </div>
                    <div class="col-1 text-end p-0">
                        <i class="fas fa-ellipsis-h fa-fw wd-info-color"></i>
                    </div>
                </div>
                ${imageContent((post.contentTitle != '' ? true : false), post)}
                <div class="col-12 row my-2">
                    <div class="col-3 wd-info-color">
                        <i class = "far fa-comment fa-fw me-2"></i><span>${post.commentCount}</span>
                    </div>
                    <div class="col-3 wd-info-color">
                        <i class = "fas fa-retweet fa-fw me-2"></i><span>${post.retweetCount}</span>
                    </div>
                    <div class="col-3 wd-info-color">
                        <i class = "far fa-heart fa-fw me-2"></i><span>${post.likeCount}</span>
                    </div>
                    <div class="col-3 wd-info-color">
                        <i class = "fas fa-share fa-fw"></i>
                    </div>
                </div>
            </div>
        </div>
    `)
}

export default PostListItem;