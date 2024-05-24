import React from "react";
import Avatar from "./Avatar";
import styles from "../assets/styles/Post.module.css";
import { Link } from "react-router-dom";

const truncateChars = (text) => {
  return text.length < 90 ? text : text.slice(0, 85) + ". . .";
};

function Post(props) {
  const { id, image, category, title, content, datePublished, author } = props;
  return (
    <Link to={`/posts/${id}`}>
      <div className={styles.card}>
        <img src={`/images/${image}.jpg`} alt="" />
        <div>
          <div>
            <p className="category">{category}</p>
            <div className={styles.title}>
              <p>{title}</p>
              <img src="/images/Icon wrap.jpg" alt="" />
            </div>
            <p className={styles.text}>{truncateChars(content)}</p>
          </div>

          <Avatar datePublished={datePublished} author={author} />
        </div>
      </div>
    </Link>
  );
}

export default Post;
