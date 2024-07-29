import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  post: {},
  error: "",
};

const fetchSinglePost = createAsyncThunk(
  "singlePost/fetchSinglePost",
  (postId) => {
    return axios
      .get(`https://blog-api-zk5m.onrender.com/v1/posts/${postId}`)
      .then((response) => response.data);
  }
);

const fetchWithoutRefresing = createAsyncThunk(
  "singlePost/fetchWithoutRefreshing",
  (postId) => {
    return axios
      .get(`https://blog-api-zk5m.onrender.com/v1/posts/${postId}`)
      .then((response) => response.data);
  }
);

const singlePostSlice = createSlice({
  name: "singlePost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.post = action.payload;
    });

    builder.addCase(fetchSinglePost.rejected, (state, action) => {
      state.loading = false;
      state.post = {};
      state.error = action.error.message;
    });

    // Fethching without setting the loading to true
    builder.addCase(fetchWithoutRefresing.pending, (state) => {
      state.loading = false;
    });

    builder.addCase(fetchWithoutRefresing.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.post = action.payload;
    });

    builder.addCase(fetchWithoutRefresing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default singlePostSlice.reducer;
export { fetchSinglePost, fetchWithoutRefresing };
