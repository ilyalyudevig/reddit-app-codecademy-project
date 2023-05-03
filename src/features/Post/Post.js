import React from "react";
import Card from "../../components/Card/Card";
import "./Post.css";

const Post = ({ post }) => {
    return (
        <article key={post.id}>
            <Card>
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">{post.title}</h3>
                    </div>
                </div>
            </Card>
        </article>
    )
};

export default Post;

