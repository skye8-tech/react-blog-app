import React from "react";
import "./Avatar.css";

function Avatar(props) {
  const { datePublished, author } = props;
  return (
    <div className="avatar">
      <img src={`/images/${author.profilePic}.jpg`} alt="" />
      <div>
        <p>{author.name}</p>
        <p>{datePublished}</p>
      </div>
    </div>
  );
}

export default Avatar;
