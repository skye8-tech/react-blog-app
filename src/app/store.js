import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "../features/posts/postsSlice";
import singlePostReducer from "../features/singlePost/singlePostSlice";

const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    singlePost: singlePostReducer,
  },
});

export default store;
