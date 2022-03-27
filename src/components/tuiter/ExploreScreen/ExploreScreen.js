import React from "react";
import NavigationSidebar from "../NavigationSidebar/index";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList/index";

const ExploreScreen = () => {
    return(
        <>
            <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <ExploreComponent/>
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-2">
                <WhoToFollowList/>
            </div>
            </div>
        </>
    );
}

export default ExploreScreen;


