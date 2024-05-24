import React from "react";
import styles from "../assets/styles/Avatar.module.css";

function Avatar(props) {
  const { datePublished, author } = props;
  return (
    <div className={styles.avatar}>
      <img
        className={styles.image}
        src={`/images/${author.profilePic}.jpg`}
        alt=""
      />
      <div>
        <p className={styles.name}>{author.name}</p>
        <p className={styles.datePublished}>{datePublished}</p>
      </div>
    </div>
  );
}

export default Avatar;
