import styles from "../assets/styles/Load.module.css";
import React from "react";

function Load() {
  return (
    <div className="flex justify-center mt-8">
      <div className={styles["dot-pulse"]}></div>
    </div>
  );
}

export default Load;
