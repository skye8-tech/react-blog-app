import React from "react";
import Post from "./Post";
import styles from "../assets/styles/MainSection.module.css";
import Load from "./Load";
import { useBlogProvider } from "./BlogContext";

function MainSection() {
  const { posts, loading, error } = useBlogProvider();
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
