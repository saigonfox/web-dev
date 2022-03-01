import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"
const PostSummaryList = () => {
    return (`
            ${exploreItems.map(post => {
            return(PostSummaryItem(post));
            }).join('')}
`); }

export default PostSummaryList;