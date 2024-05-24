import styles from "../assets/styles/Load.module.css";
import React from "react";

function Load() {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles["dot-pulse"]}></div>
    </div>
  );
}

export default Load;
