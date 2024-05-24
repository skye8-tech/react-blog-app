import React from "react";
import styles from "../assets/styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      copyright &#169; {new Date().getFullYear()} @Skye8
    </div>
  );
}

export default Footer;
