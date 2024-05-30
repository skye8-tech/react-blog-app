import React from "react";

function Footer() {
  return (
    <div className="h-20 flex items-center justify-center bg-[var(--secondary-color)]">
      copyright &#169; {new Date().getFullYear()} @Skye8
    </div>
  );
}

export default Footer;
