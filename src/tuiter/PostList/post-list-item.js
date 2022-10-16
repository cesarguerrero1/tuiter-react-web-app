/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

//If there is content under the image then we need to 
function imageContent(include, post){
    if(include === true){
        return(
            <div className="col-12 wd-content-container p-0 mt-3">
                <div>
                    <img className="img-fluid wd-border-bottom wd-content-image" src={`../images/${post.image} `}/>
                </div>
                <div className="p-3">
                    <h6 className="mb-1 fw-bold">{post.contentTitle}</h6>
                    <p className="my-0 wd-info-color">{post.contentPreview}</p>
                    <p className="my-0 wd-info-color"><i className='fas fa-link fa-fw'></i> {post.contentLink}</p>
                </div>
            </div>
        )
    }else{
        return(
            <div className="col-12 wd-content-container p-0 mt-3">
                <img className="img-fluid wd-no-content-image" src={`../images/${post.image} `}/>
            </div>
        )
    }
}

function PostListItem({post = {}}){
    return(
        <div className = "row mt-2 wd-border-bottom">
            <div className="col text-end">
                <img className="wd-user-image" src={`../images/${post.userImage}`}/>
            </div>
            <div className="col-10 row m-0">
                <div className="col-12 row m-0 p-0">
                    <div className="col-11 p-0">
                        <h6 className="my-1 fw-bold">{post.userName} <i className="fas fa-check-circle"></i><span className="wd-info-color fw-normal"> {post.userHandle} · {post.time}</span></h6>
                        <p className="m-0">{post.tweet}</p>
                    </div>
                    <div className="col-1 text-end p-0">
                        <i className="fas fa-ellipsis-h fa-fw wd-info-color"></i>
                    </div>
                </div>
                {imageContent((post.contentTitle !== '' ? true : false), post)}
                <div className="col-12 row my-2">
                    <div className="col-3 wd-info-color">
                        <i className = "far fa-comment fa-fw me-2"></i><span>{post.commentCount}</span>
                    </div>
                    <div className="col-3 wd-info-color">
                        <i className = "fas fa-retweet fa-fw me-2"></i><span>{post.retweetCount}</span>
                    </div>
                    <div className="col-3 wd-info-color">
                        <i className = "far fa-heart fa-fw me-2"></i><span>{post.likeCount}</span>
                    </div>
                    <div className="col-3 wd-info-color">
                        <i className = "fas fa-share fa-fw"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostListItem;