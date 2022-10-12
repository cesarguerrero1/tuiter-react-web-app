/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

function WhoToFollowListItem(who){
    return(`
        <div class="col-12 row align-items-center py-2">
            <div class = "col-2">
                <img class = "wd-user-image" src="../../images/${who.avatarIcon}"/>
            </div>
            <div class = "col-7 pe-0">
                <h6 class="m-0 fw-bold">${who.userName} <i class="fas fa-check-circle"></i></h6>
                <p class="m-0">@${who.handle}</p>
            </div>
            <div class = "col-3 px-0">
                <button class="btn wd-override-follow-btn w-100">Follow</button>
            </div>
        </div>
    `)
}

export default WhoToFollowListItem;