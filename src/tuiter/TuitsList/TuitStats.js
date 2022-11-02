/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

function TuitStats({tuit = { }}) {
    return (
        <div className="col-12 row my-2">
            <div className="col-3 wd-info-color">
                <i className="far fa-comment fa-fw me-2"></i><span>{tuit.replies}</span>
            </div>
            <div className="col-3 wd-info-color">
                <i className="fas fa-retweet fa-fw me-2"></i><span>{tuit.retuits}</span>
            </div>
            <div className="col-3 wd-info-color">
                {tuit.liked ? <i className="fa fa-heart fa-fw me-2 text-danger"></i> : <i className="far fa-heart fa-fw me-2"></i>}<span>{tuit.likes}</span>
            </div>
            <div className="col-3 wd-info-color">
                <i className="fas fa-share fa-fw"></i>
            </div>
        </div>
    )
}

export default TuitStats;