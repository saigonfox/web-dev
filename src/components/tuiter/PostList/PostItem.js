import React from "react";
const PostItem = (
    {
        post = {
            "profileImage": "../../images/elon_musk.jpg",
            "userID": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "quote": "Amazing show about mission!",
            "more": true,
            "image": "../../images/inspiration4.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "preview": "From training to launch to landing",
            "website": "netflix.com",
            "comments": "4.2K",
            "tweets": "3.5K",
            "love": "37.5K"
        }
    }) => {
    const more = post.more;
    return(
                <div className="row wd-home-center-frame pt-1">
                    <div className="col-2 ps-1 pe-1 wd-profile-frame">
                        <img src={post.profileImage}
                             alt="profile"
                             className="img-fluid wd-profile-image "/>
                    </div>
                    <div className="col-10 ">
                        <div>
                            <p className="m-0">
                                <span className="wd-text-bold text-white">{post.userID} </span>
                                <i className="fa-solid fa-circle-check text-white"></i> 
                                <span className="fg-color-darkgray">{post.handle} - {post.time}</span>
                                <span className="float-end">&#8230;</span>
                            </p>
                            <p className="m-0 text-white">{post.quote}</p>
                        </div>

                        {more &&
                            <>
                                <div className="row mt-2 m-0 p-0">
                                        <img src={post.image}
                                             alt="post-more"
                                             className="m-0 p-0 wd-post-image"
                                            id = "post-image"/>
                                </div>
                                <div className="m-0 p-0 wd-post-detail" id="post-detail">
                                <p className="ms-3 mt-0 mb-0 pt-2 text-white">
                                    {post.title}
                                </p>
                                <p className="ms-3 mt-0 mb-0 p-0 wd-post-subtext">{post.preview}</p>
                                <p className="ms-3 mt-0 mb-2 p-0 wd-post-subtext">
                                    <i className="fa-solid fa-link"></i>${post.website}
                                </p>
                                </div>
                            </>
                        }
                        {!more &&
                            <div className="row mt-2 m-0 p-0">
                                    <img src={post.image} 
                                        className="m-0 p-0 wd-round-frame"
                                         alt="post-no-more"
                                         id = "post-image"/>
                            </div>
                        }
                        <div className="row mt-3">
                            <div className="row col-3">
                                <p className="col-1">
                                    <a href="./comment.html">
                                        <i className="wd-post-icon fa-regular fa-comment"></i>
                                    </a>
                                </p>
                                <p className="col-1 ms-0">{post.comments}</p>
                            </div>
                            <div className="row col-3 ms-2">
                                <p className="col-1">
                                    <a href="./tweet.html">
                                        <i className="wd-post-icon fa-solid fa-retweet"></i>
                                    </a>
                                </p>
                                <p className="col-1 ms-0">{post.tweets}</p>
                            </div>
                            <div className="row col-3 ms-3">
                                <p className="col-1">
                                    <a href="./love.html">
                                        <i className="wd-post-icon fa-regular fa-heart"></i>
                                    </a>
                                </p>
                                <p className="col-1 ms-0">{post.love}</p>
                            </div>
                            <div className="row col-3 ms-4">
                                <p className="">
                                    <a href="./upload.html">
                                        <i className="wd-post-icon fa-solid fa-upload"></i>
                                    </a>
                                </p>
                            </div>
                        </div>           
                    </div>
                </div>

);

}
export default PostItem;

