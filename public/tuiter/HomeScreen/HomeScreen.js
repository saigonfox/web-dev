import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('home')}
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-9 col-9 m-0 ps-0">
            ${PostList()}
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);