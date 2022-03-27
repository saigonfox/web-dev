import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }) => {
    return(
        <>
        <div className="row mt-0 wd-tuit-post ">
                <div className="col-9 col-sm-10 wd-text-tuit-post">
                    <p className="m-0 fs-6">{post.topic}</p>
                    <p className="m-0 fs-6 fw-bold text-white">{post.userName} <i className="fa-solid fa-circle"></i>
                        <span className="fw-lighter wd-text-tuit-post"> - {post.time}</span></p>
                    <p className="m-0 fs-6 fw-bold text-white">{post.title}</p>
                </div>
                <div className="col-3 col-sm-2">
                    <img src={post.image}
                         className="img-fluid mt-1 wd-image-tuit-post"
                         alt="post-summary" />
                </div>
            </div>
        </>
);

}
export default PostSummaryItem;