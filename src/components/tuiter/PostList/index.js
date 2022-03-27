import PostItem from "./PostItem";
import homeItems from "./posts.json"

const PostList = () => {
    return (
        <>
            {homeItems.map(post => {
        return(<PostItem post={post}/>);
    })}
        </>
); }

export default PostList;