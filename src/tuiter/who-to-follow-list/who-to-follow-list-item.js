/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

//Recall that all of this html is being injected into the PUBLIC folder where index.html is located!!!
function WhoToFollowListItem({who = {}}){
    return(
        <div className="col-12 row align-items-center py-2">
            <div className = "col-2">
                <img className = "wd-user-image" alt="Other User" src={`../images/${who.avatarIcon}`}/>
            </div>
            <div className = "col-7 pe-0">
                <h6 className="m-0 fw-bold">{who.userName} <i className="fas fa-check-circle"></i></h6>
                <p className="m-0">@{who.handle}</p>
            </div>
            <div className = "col-3 px-0">
                <button className="btn wd-override-follow-btn w-100">Follow</button>
            </div>
        </div>
    )

}

export default WhoToFollowListItem;