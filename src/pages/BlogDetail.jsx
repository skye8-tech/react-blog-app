import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import styles from "../assets/styles/BlogDetail.module.css";
import Footer from "../components/Footer";
import Load from "../components/Load";
import { useBlogProvider } from "../components/BlogContext";

function BlogDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const { loading, error, fetchPost } = useBlogProvider();

  const isEmpty = (obj) => {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    setPost(fetchPost(postId));
  }, [fetchPost, postId]);

  return (
    <div>
      <div className={styles.postDetail}>Post Detail</div>

      <div className={styles.container}>
        {loading ? (
          <Load />
        ) : error ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h1>There was an error!!!</h1>
          </div>
        ) : !isEmpty(post) ? (
          <>
            <p className="category">{post.category}</p>
            <div className={styles.title}>{post.title}</div>
            {post.author && (
              <Avatar datePublished={post.datePublished} author={post.author} />
            )}
            <img
              className={styles.blogImage}
              src={`/images/${post.image}.jpg`}
              alt=""
            />
            <p className={styles.textContent}>{post.content}</p>
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h1>Post not found!!!</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
