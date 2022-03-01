import PostItem from "./PostItem.js";
import homeItems from "./posts.js"
const PostList = () => {
    return (`
            ${homeItems.map(post => {
        return(PostItem(post));
    }).join('')}
`); }

export default PostList;