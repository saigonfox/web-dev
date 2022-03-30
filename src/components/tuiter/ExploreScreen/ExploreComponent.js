import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return(
           <div className="mt-2">
               {/*  search field and cog */}
               <div className="row pt-1 wd-page-element wd-no-border-bottom">
                    <div className="col-11 mt-1">
                        <input className="col-12 wd-search-bar"
                               type="text"
                               placeholder="Search Tuiter"/>
                        <i className="fa-solid fa-magnifying-glass wd-search-icon-render"></i>
                    </div>
                    <div className="col-1 wd-gear-setting">
                        <a href="explore-settings.html"><i className="fa-solid fa-gear fa-xl wd-gear-color"></i></a>
                    </div>
                </div>
               {/* tabs */}
               <div className="row mt-2 wd-page-element wd-no-border-top">
                    <ul className="nav nav-tabs wd-no-border wd-no-padding">
                        <li className="nav-item">
                            <a className="nav-link active override-bs" href="for-you.html">For you</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link override-bs" href="trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link override-bs" href="news.html">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link override-bs" href="sports.html">Sports</a>
                        </li>
                        <li className="nav-item  d-none d-xs-none d-sm-none d-md-inline ">
                            <a className="nav-link override-bs" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
               {/* image with overlaid text */}
               <div className="row mt-0 wd-page-element wd-big-photo-frame">
                <img src="../../../images/explore-midcol-ig0.jpg" alt="starship" className="m-0 p-0"/>
                <div className="wd-big-photo-title">SpaceX's Starship</div>
            </div>
               <PostSummaryList/>
           </div>
    )
};

export default ExploreComponent;

