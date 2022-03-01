import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('explore')}
        </div>
        ${ExploreComponent()}
        <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-2">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);


