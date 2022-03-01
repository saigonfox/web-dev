const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item override-bs wd-page-element" href="/">
                    <i class="fab fa-twitter wd-nav-icon"></i></a>
                <a href="../HomeScreen/index.html" 
                class="wd-page-element text-decoration-none list-group-item 
                       ${active === 'home' ? 'active' : 'override-bs'}" >
                        <i class="fa-circle fa-solid fa-house-chimney wd-nav-icon"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Home
                        </span>
                </a>
                <a href="../ExploreScreen/index.html" 
                class="wd-page-element text-decoration-none list-group-item
                       ${active === 'explore' ? 'active' : 'override-bs'}" >
                        <i class="fa-solid fa-hashtag wd-nav-icon"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Explore
                        </span>
                    </a>
                <a href="../notifications.html" 
                class="wd-page-element text-decoration-none list-group-item
                       ${active === 'notifications' ? 'active' : 'override-bs'}" >
                        <i class="fa-solid fa-bell wd-nav-icon"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Notifications
                        </span>
                    </a>
                <a href="../messages.html" 
                class="wd-page-element text-decoration-none list-group-item
                       ${active === 'messages' ? 'active' : 'override-bs'}" >
                        <i class="fa-solid fa-envelope wd-nav-icon"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Messages
                        </span>
                    </a>
                <a href="../bookmarks.html" 
                class="wd-page-element text-decoration-none list-group-item
                       ${active === 'bookmarks' ? 'active' : 'override-bs'}" >
                        <i class="fa-solid fa-bookmark wd-nav-icon"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Bookmarks
                        </span>
                    </a>
                <a href="../lists.html" 
                class="wd-page-element text-decoration-none list-group-item
                       ${active === 'lists' ? 'active' : 'override-bs'}" >
                        <i class="fa-solid fa-list wd-nav-icon"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Lists
                        </span>
                    </a>
                <a href="../profile.html" 
                class="wd-page-element text-decoration-none list-group-item
                       ${active === 'profile' ? 'active' : 'override-bs'}" >
                        <i class="fa-solid fa-user wd-nav-icon"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Profile
                        </span>
                    </a>
                <a href="#" 
                class="wd-page-element text-decoration-none list-group-item
                       ${active === 'more' ? 'active' : 'override-bs'}" >
                        <i class="fa-solid fa-circle wd-nav-icon"></i>
                        <span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            More
                        </span>
                    </a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

