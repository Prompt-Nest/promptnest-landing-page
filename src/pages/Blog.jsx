// src/pages/Blog.js
import {Link} from "react-router-dom";
import blogPosts from "../data/blogPosts";

export default function Blog() {
    const posts=Object.entries(blogPosts);

    return (
        <div className="container py-5">
            <h1>PromptNest Blog</h1>
            {posts.map(([slug,post]) => (
                <div key={slug} className="my-4">
                    <h3><Link to={`/promptnest-landing-page/blog/${slug}`}>{post.title}</Link></h3>
                    <small>{post.date}</small>
                    <p>{post.excerpt}</p>
                </div>
            ))}
        </div>
    );
}
