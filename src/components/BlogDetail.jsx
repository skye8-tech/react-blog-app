import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import styles from "./BlogDetail.module.css";
import Footer from "./Footer";

function BlogDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/664dd5fce41b4d34e4f7ac44")
      .then((res) => res.data.record.filter((item) => item.id == postId)[0])
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, [postId]);

  const { category, title, datePublished, author, image, content } = post;

  return (
    <div>
      <div className={styles.postDetail}>Post Detail</div>
      <div className={styles.container}>
        <p className="category">{category}</p>
        <div className={styles.title}>{title}</div>
        {author && <Avatar datePublished={datePublished} author={author} />}
        <img className={styles.blogImage} src={`/images/${image}.jpg`} alt="" />
        <p className={styles.textContent}>{content}</p>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
