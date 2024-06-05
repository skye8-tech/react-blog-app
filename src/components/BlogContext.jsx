import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const BlogContext = React.createContext(null);

export const BlogProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(
        "https://blog-api-zk5m.onrender.com/v1/posts"
      );
      setLoading(false);
      setError(false);
      return result.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      return [];
    }
  };

  const fetchPostById = async (postId) => {
    setLoading(true);
    setError(false);
    try {
      const post = await axios.get(
        `https://blog-api-zk5m.onrender.com/v1/posts/${postId}`
      );
      setLoading(false);
      setError(false);
      return post.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      return {};
    }
  };

  // const fetchPostById = (postId) => {
  //   const post = posts.find((item) => item._id == postId);
  //   return post;
  // };

  return (
    <BlogContext.Provider value={{ loading, error, fetchPostById, fetchPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogProvider = () => {
  return useContext(BlogContext);
};
