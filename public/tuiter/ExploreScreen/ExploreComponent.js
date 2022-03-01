import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
           <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-9 col-9 mt-2">
               <!-- search field and cog -->
               <div class="row pt-1 wd-page-element wd-no-border-bottom">
                    <div class="col-11 mt-1">
                        <input class="col-12 wd-search-bar"
                               type="text"
                               placeholder="Search Tuiter"/>
                        <i class="fa-solid fa-magnifying-glass wd-search-icon-render"></i>
                    </div>
                    <div class="col-1 wd-gear-setting">
                        <a href="explore-settings.html"><i class="fa-solid fa-gear fa-xl wd-gear-color"></i></a>
                    </div>
                </div>
               <!-- tabs -->
               <div class="row mt-0 wd-page-element wd-no-border-top">
                    <ul class="nav nav-tabs wd-no-border wd-no-padding">
                        <li class="nav-item">
                            <a class="nav-link active override-bs" href="for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item  d-none d-xs-none d-sm-none d-md-inline ">
                            <a class="nav-link override-bs" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
               <!-- image with overlaid text -->
               <div class="row mt-0 wd-page-element">
                <img src="../explore-midcol-ig0.jpg" class="m-0 p-0">
                <div class="wd-big-photo-title">SpaceX's Starship</div>
            </div>
               ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;

