import React from "react";
import postsArray from './posts.json';
import PostsItem from "./posts-item";

const PostsList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post => <PostsItem
                key={post._id} posts={post}/>)
            }
        </ul>
    );

};
export default PostsList