/**
 * Cesar Guerrero
 * 10/11/12
 * CS5610 - Fall 2022
 */

//The navigation sidebar is used EVERYWHERE so we need to make it a component
function NavigationSidebar(active){

    var activeClass = "wd-active-page";

    return(`
        <div class="mb-2 wd-navbar-styling">
            <nav class = "navbar py-0">
                <ul class = "navbar-nav w-100">
                    <li class = "nav-item py-1 px-3 wd-border-bottom"><i class = "fab fa-twitter fa-fw"></i></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom ${active == "home" ? activeClass : ''}"><a class = "nav-link wd-override-navlink" href="../HomeScreen/index.html"><i class = "fas fa-home fa-fw"></i><span class = "d-none d-xl-inline"> Home</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom ${active == "explore" ? activeClass : ''}"><a class = "nav-link wd-override-navlink" href="../ExploreScreen/index.html"><i class = "fas fa-hashtag fa-fw"></i><span class = "d-none d-xl-inline"> Explore</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom ${active == "notifications" ? activeClass : ''}"><a class = "nav-link wd-override-navlink" href="../NotificationScreen/index.html"><i class = "fas fa-bell fa-fw"></i><span  class = "d-none d-xl-inline"> Notifications</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom ${active == "messages" ? activeClass : ''}"><a class = "nav-link wd-override-navlink" href="../MessageScreen/index.html"><i class = "fas fa-envelope fa-fw"></i><span  class = "d-none d-xl-inline"> Messages</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom ${active == "bookmarks" ? activeClass : ''}"><a class = "nav-link wd-override-navlink" href="../BookmarkScreen/index.html"><i class = "fas fa-bookmark fa-fw"></i><span  class = "d-none d-xl-inline"> Bookmarks</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom ${active == "lists" ? activeClass : ''}"><a class = "nav-link wd-override-navlink" href="../ListScreen/index.html"><i class = "fas fa-list-ul fa-fw"></i><span  class = "d-none d-xl-inline"> Lists</span></a></li>
                    <li class = "nav-item py-1 px-3 wd-border-bottom ${active == "profile" ? activeClass : ''}"><a class = "nav-link wd-override-navlink" href="../ProfileScreen/index.html"><i class = "fas fa-user fa-fw"></i><span  class = "d-none d-xl-inline"> Profile</span></a></li>
                    <li class = "nav-item py-1 px-3"><a class = "nav-link wd-override-navlink" href="#"><i class = "fas fa-ellipsis-h fa-fw"></i><span  class = "d-none d-xl-inline"> More</span></a></li>
                </ul>
            </nav>
        </div>
        <button class="btn wd-override-tweet-btn w-100">Tweet</button>
    `)
}

export default NavigationSidebar;