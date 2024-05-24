import React from "react";
import styles from "../assets/styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <p className={styles.badge}>Our blog</p>
            <h1>Resources and insights</h1>
            <p>
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>
          <input
            className={styles["search-bar"]}
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
