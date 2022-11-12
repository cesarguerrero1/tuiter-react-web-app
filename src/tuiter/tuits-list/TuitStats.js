/*
  Cesar Guerrero
  11/1/22
  CS5610

  Assignment 7: Redux
*/

import {useDispatch} from "react-redux"
import {updateTuitThunk} from "../../services/tuits-thunks.js"

function TuitStats({tuit = {}}) {

    const dispatch = useDispatch();

    return (
        <div className="col-12 row my-2">
            <div className="col-auto wd-info-color">
                <i className="far fa-comment fa-fw me-2 wd-tuit-pointer"></i><span>{tuit.replies}</span>
            </div>
            <div className="col-auto wd-info-color">
                <i className="fas fa-retweet fa-fw me-2 wd-tuit-pointer"></i><span>{tuit.retuits}</span>
            </div>
            <div className="col-auto wd-info-color">
                <i className={tuit.liked ? "fa fa-heart fa-fw me-2 wd-tuit-pointer text-danger" : "fa fa-heart fa-fw me-2 wd-tuit-pointer"} onClick={() => dispatch(updateTuitThunk([tuit, 'likeTuit']))}></i><span>{tuit.likes}</span>
            </div>
            <div className="col-auto wd-info-color">
                <i className={tuit.disliked ?  "fas fa-thumbs-down fa-fw me-2 wd-tuit-pointer" : "far fa-thumbs-down fa-fw me-2 wd-tuit-pointer"} onClick={() => dispatch(updateTuitThunk([tuit, 'dislikeTuit']))}></i><span>{tuit.dislikes}</span>
            </div>
            <div className="col-auto wd-info-color">
                <i className="fas fa-share fa-fw wd-tuit-pointer"></i>
            </div> 
        </div>
    )
}

export default TuitStats;