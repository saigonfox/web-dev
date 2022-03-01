const PostSummaryItem = (post) => {
    return(`
        <div class="row mt-0 wd-tuit-post ">
                <div class="col-9 col-sm-10 wd-text-tuit-post">
                    <p class="m-0 fs-6">${post.topic}</p>
                    <p class="m-0 fs-6 fw-bold text-white">${post.userName} <i class="fa-solid fa-circle"></i>
                        <span class="fw-lighter wd-text-tuit-post"> - ${post.time}</span></p>
                    <p class="m-0 fs-6 fw-bold text-white">${post.title}</p>
                </div>
                <div class="col-3 col-sm-2">
                    <img src=${post.image} class="img-fluid mt-1 wd-image-tuit-post">
                </div>
            </div>
`);

}
export default PostSummaryItem;