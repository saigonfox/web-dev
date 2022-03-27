import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import exploreItems from "./posts.json"

const PostSummaryList = () => {
    return (
        <>
            {exploreItems.map(post => {
                return(<PostSummaryItem post={post}/>);
            })

            }
        </>
    );
}

export default PostSummaryList;