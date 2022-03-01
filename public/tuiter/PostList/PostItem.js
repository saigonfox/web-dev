const PostItem = (post) => {
    return(`
                <div class="row wd-home-center-frame pt-1">
                    <div class="col-2 ps-1 pe-1 wd-profile-frame">
                        <img src=${post.profileImage} 
                        class="img-fluid wd-profile-image ">
                    </div>
                    <div class="col-10 ">
                        <div>
                            <p class="m-0">
                                <span class="wd-text-bold text-white">${post.userID} </span>
                                <i class="fa-solid fa-circle-check text-white"></i> 
                                <span class="fg-color-darkgray">${post.handle} - ${post.time}</span>
                                <span class="float-end">&#8230;</span>
                            </p>
                            <p class="m-0 text-white">${post.quote}</p>
                        </div>
                        ${post.more ?
                        `
                            <div class="row mt-2 m-0 p-0">
                                    <img src=${post.image} 
                                    class="m-0 p-0 wd-post-image"
                                    id = "post-image">
                            </div>
                            <div class="m-0 p-0 wd-post-detail" id="post-detail">
                            <p class="ms-3 mt-0 mb-0 pt-2 text-white">
                                ${post.title}
                            </p>
                            <p class="ms-3 mt-0 mb-0 p-0 wd-post-subtext">${post.preview}</p>                          
                            <p class="ms-3 mt-0 mb-2 p-0 wd-post-subtext">
                                <i class="fa-solid fa-link"></i>${post.website}
                            </p> 
                            </div>
                        ` : 
                        `
                            <div class="row mt-2 m-0 p-0">
                                    <img src=${post.image} 
                                    class="m-0 p-0 wd-round-frame"
                                    id = "post-image">
                        </div>
                        `}
                        <div class="row mt-3">
                            <div class="row col-3">
                                <p class="col-1">
                                    <a href="#">
                                        <i class="wd-post-icon fa-regular fa-comment"></i>
                                    </a>
                                </p>
                                <p class="col-1 ms-0">${post.comments}</p>
                            </div>
                            <div class="row col-3 ms-2">
                                <p class="col-1">
                                    <a href="#">
                                        <i class="wd-post-icon fa-solid fa-retweet"></i>
                                    </a>
                                </p>
                                <p class="col-1 ms-0">${post.tweets}</p>
                            </div>
                            <div class="row col-3 ms-3">
                                <p class="col-1">
                                    <a href="#">
                                        <i class="wd-post-icon fa-regular fa-heart"></i>
                                    </a>
                                </p>
                                <p class="col-1 ms-0">${post.love}</p>
                            </div>
                            <div class="row col-3 ms-4">
                                <p class="">
                                    <a href="#">
                                        <i class="wd-post-icon fa-solid fa-upload"></i>
                                    </a>
                                </p>
                            </div>
                        </div>           
                    </div>
                </div>

`);

}
export default PostItem;

