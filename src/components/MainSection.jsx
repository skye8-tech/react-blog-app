import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./MainSection.css";
import axios from "axios";

function MainSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
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
  }, []);
  return (
    <>
      <section className="main-content">
        <div className="container grid">
          {loading ? (
            <div className="loading-container">
              <div className="dot-pulse"></div>
            </div>
          ) : error ? (
            <div style={{ textAlign: "center" }}>
              <h1>There was an error!!!</h1>
            </div>
          ) : posts.length !== 0 ? (
            posts.map((post) => <Post key={post.id} {...post} />)
          ) : (
            <div style={{ textAlign: "center" }}>
              <h1>There are no Posts!!!</h1>
            </div>
          )}
        </div>
      </section>
      <div className="container load">
        <p className="load-more">
          <i className="fas fa-arrow-down"></i> Load more
        </p>
      </div>
    </>
  );
}

export default MainSection;
