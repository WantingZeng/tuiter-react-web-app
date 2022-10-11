import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList  = () => {
    return(`
    <ul class = "list-group">
        ${posts.map(value => {
            return PostItem(value)
    }).join('')
        
    }
    </ul>
    `)
}
export default PostList