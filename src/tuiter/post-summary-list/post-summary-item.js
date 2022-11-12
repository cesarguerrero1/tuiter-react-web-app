/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

function PostSummaryItem({post = {}}){
    return(
        <div className = "col-12 row wd-border-bottom px-1 py-2">
            <div className = "col-9">
                <p className="m-0 wd-info-color">{post.topic}</p>
                <h6 className="my-1 fw-bold">{post.username} <i className="fas fa-check-circle"></i><span className="wd-info-color fw-normal"> - {post.time}</span></h6>
                <h6 className="fw-bold">{post.title}</h6>
            </div>
            <div className = "col-3 text-end">
                <img className="wd-post-image rounded-3" alt="Preview" src={`../images/${post.image}`}/>
            </div>
        </div>
    )
}

export default PostSummaryItem;