import post from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () =>  {
    return(`
        <ul class="list-group">
            ${post.map(value => {
                return PostSummaryItem(value)
            }).join('')
    }
        </ul>
    `)

}
export default PostSummaryList