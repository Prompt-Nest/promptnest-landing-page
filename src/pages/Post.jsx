// src/pages/Post.js
import {useParams} from "react-router-dom";
import blogPosts from "../data/blogPosts";

export default function Post() {
    const {slug}=useParams();
    const post=blogPosts[slug];

    if(!post) return <div className="container py-5">Post not found</div>;

    return (
        <div className="container py-5">
            <h1>{post.title}</h1>
            <small>{post.date}</small>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
    );
}
