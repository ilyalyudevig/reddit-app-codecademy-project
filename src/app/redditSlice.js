import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
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

export const { 
    etPosts, 
    startGetPosts, 
    getPostsSuccess, 
    getPostsFailed,
    setSearchTerm 
} = redditSlice.actions;

export default redditSlice.reducer;