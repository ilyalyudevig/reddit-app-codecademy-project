import { createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../api/reddit";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/popular/',
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        startGetPosts: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess: (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.posts = action.payload;
        },
        getPostsFailed: (state) => {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm: (state, action)  => {
            state.searchTerm = action.payload;
        },

    }
});

export const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectPosts = (state) => state.reddit.posts;
export const selectSubreddit = (state) => state.reddit.selectedSubreddit;

export const { 
    etPosts, 
    startGetPosts, 
    getPostsSuccess, 
    getPostsFailed,
    setSearchTerm 
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);
        dispatch(getPostsSuccess(posts));
    } catch (error) {
        dispatch(getPostsFailed());
    };
};
