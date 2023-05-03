import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectPosts, selectSubreddit } from "../../app/redditSlice";
import Post from "../Post/Post";
import "./Home.css";

const Home = () => {
    const posts = useSelector(selectPosts);
    const selectedSubreddit = useSelector(selectSubreddit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [dispatch, selectedSubreddit]);


    return (
        <>
            {posts.map((post, index) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
};

export default Home;
