import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return axios
    .get("https://blog-api-zk5m.onrender.com/v1/posts")
    .then((response) => response.data);
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;
export { fetchPosts };
