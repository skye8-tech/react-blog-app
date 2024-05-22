import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./MainSection.css";
import axios from "axios";

function MainSection() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/664dd5fce41b4d34e4f7ac44")
      .then((res) => setPosts(res.data.record))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="main-content">
      <div className="container grid">
        {posts && posts.map((post) => <Post key={post.id} {...post} />)}
      </div>

      <div className="container load">
        <p className="load-more">
          <i className="fas fa-arrow-down"></i> Load more
        </p>
      </div>
    </section>
  );
}

export default MainSection;
