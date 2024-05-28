import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const BlogContext = React.createContext(null);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPosts = () => {
    axios
      .get("https://api.jsonbin.io/v3/b/664dd5fce41b4d34e4f7ac44")
      .then((res) => {
        setPosts(res.data.record);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  const fetchPost = (postId) => {
    // eslint-disable-next-line
    const post = posts.find((item) => item.id == postId);
    return post;
  };

  useEffect(() => {
    fetchPosts();
    console.log(">>>>>>>>>>>>>>>>>>Blog context");
  }, []);

  return (
    <BlogContext.Provider value={{ posts, loading, error, fetchPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogProvider = () => {
  return useContext(BlogContext);
};
