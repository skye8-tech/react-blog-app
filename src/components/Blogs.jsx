import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "../assets/styles/MainSection.module.css";
import axios from "axios";
import Load from "./Load";

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
      <section className={styles["main-content"]}>
        <div className={`container ${styles["grid"]}`}>
          {loading ? (
            <Load />
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
      <div className={`container ${styles.load}`}>
        <p className={styles["load-more"]}>
          <i className="fas fa-arrow-down"></i> Load more
        </p>
      </div>
    </>
  );
}

export default MainSection;
