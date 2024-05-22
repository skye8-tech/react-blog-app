import React from "react";
import Avatar from "./Avatar";
import "./Post.css";

function Post(props) {
  const { image, category, title, content, datePublished, author } = props;
  return (
    <div className="card">
      <img src={`/images/${image}.jpg`} alt="" />
      <div>
        <div>
          <p className="category">{category}</p>
          <div className="title">
            <p>{title}</p>
            <img src="/images/Icon wrap.jpg" alt="" />
          </div>
          <p className="text">{content}</p>
        </div>

        <Avatar datePublished={datePublished} author={author} />
      </div>
    </div>
  );
}

export default Post;
