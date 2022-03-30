import React from "react";
import {Link, useLocation} from "react-router-dom"

const NavigationSidebar = (active) => {
    active = "" + useLocation().pathname.split('/')[2];
    return(
        <div>
            <div className="list-group me-2">
                <Link to="/" className="list-group-item override-bs wd-page-element" >
                    <i className="fab fa-fw fa-twitter wd-nav-icon"></i>
                </Link>
                <Link to="/tuiter/home"
                className={`wd-page-element text-decoration-none list-group-item
                       ${active === 'home' || active === '' || active === 'undefined'? 'active' : ''}`} >
                        <i className="fa-fw fa-circle fa-solid fa-house-chimney wd-nav-icon"></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Home
                        </span>
                </Link>
                <Link to="/tuiter/explore"
                className={`wd-page-element text-decoration-none list-group-item
                       ${active === 'explore' ? 'active' : ''}`} >
                        <i className="fa-fw fa-solid fa-hashtag wd-nav-icon"></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Explore
                        </span>
                </Link>
                <a href="../notifications.html"
                className={`wd-page-element text-decoration-none list-group-item
                       ${active === 'notifications' ? 'active' : ''}`} >
                        <i className="fa-fw fa-solid fa-bell wd-nav-icon"></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Notifications
                        </span>
                    </a>
                <a href="../messages.html"
                className={`wd-page-element text-decoration-none list-group-item
                       ${active === 'messages' ? 'active' : ''}`} >
                        <i className="fa-fw fa-solid fa-envelope wd-nav-icon"></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Messages
                        </span>
                    </a>
                <a href="../bookmarks.html"
                className={`wd-page-element text-decoration-none list-group-item
                       ${active === 'bookmarks' ? 'active' : ''}`} >
                        <i className="fa-fw fa-solid fa-bookmark wd-nav-icon"></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Bookmarks
                        </span>
                    </a>
                <a href="../lists.html"
                className={`wd-page-element text-decoration-none list-group-item
                       ${active === 'lists' ? 'active' : ''}`} >
                        <i className="fa-fw fa-solid fa-list wd-nav-icon"></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Lists
                        </span>
                    </a>
                <a href="/tuiter/profile"
                className={`wd-page-element text-decoration-none list-group-item
                       ${active === 'profile' ? 'active' : ''}`} >
                        <i className="fa-fw fa-solid fa-user wd-nav-icon"></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            Profile
                        </span>
                    </a>
                <a href="../more.html"
                className={`"wd-page-element text-decoration-none list-group-item
                       ${active === 'more' ? 'active' : ''}`} >
                        <i className="fa-fw fa-solid fa-circle wd-nav-icon"></i>
                        <span className="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline wd-nav-element">
                            More
                        </span>
                    </a>
            </div>
            <div className="d-grid mt-2 me-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill wd-tuit-button
                   ">
                    Tuit
                </a>
            </div>
        </div>
    );
}

export default NavigationSidebar;

