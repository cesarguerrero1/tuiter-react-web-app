/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

//The navigation sidebar is used EVERYWHERE so we need to make it a component
function NavigationSidebar(){
    return(`
        <div class="mb-2 wd-navbar-styling">
            <nav class = "navbar py-0">
                <ul class = "navbar-nav w-100">
                    <li class = "nav-item py-1 px-3 wd-border-bottom"><i class = "fab fa-twitter fa-fw"></i></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom"><a class = "nav-link wd-override-navlink" href="../home.html"><i class = "fas fa-home fa-fw"></i><span class = "d-none d-xl-inline"> Home</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-active-page wd-border-bottom"><a class = "nav-link wd-override-navlink" href="index.html"><i class = "fas fa-hashtag fa-fw"></i><span class = "d-none d-xl-inline"> Explore</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom"><a class = "nav-link wd-override-navlink" href="../notifications/index.html"><i class = "fas fa-bell fa-fw"></i><span  class = "d-none d-xl-inline"> Notifications</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom"><a class = "nav-link wd-override-navlink" href="../messages/index.html"><i class = "fas fa-envelope fa-fw"></i><span  class = "d-none d-xl-inline"> Messages</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom"><a class = "nav-link wd-override-navlink" href="../bookmarks/index.html"><i class = "fas fa-bookmark fa-fw"></i><span  class = "d-none d-xl-inline"> Bookmarks</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom"><a class = "nav-link wd-override-navlink" href="../lists/index.html"><i class = "fas fa-list-ul fa-fw"></i><span  class = "d-none d-xl-inline"> Lists</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom"><a class = "nav-link wd-override-navlink" href="../profile.html"><i class = "fas fa-user fa-fw"></i><span  class = "d-none d-xl-inline"> Profile</span></a></li>
                    <li class = "nav-item py-1 px-3"><a class = "nav-link wd-override-navlink" href="#"><i class = "fas fa-ellipsis-h fa-fw"></i><span  class = "d-none d-xl-inline"> More</span></a></li>
                </ul>
            </nav>
        </div>
        <button class="btn wd-override-tweet-btn w-100">Tweet</button>
    `)
}

export default NavigationSidebar;