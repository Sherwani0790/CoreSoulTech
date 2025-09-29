import React from "react";
const Footer = () => {
  return (
   <footer className="py-3 mt-5">
      <div className="container-fluid">
        <p className="mb-0">
          © {new Date().getFullYear()} CoreSoulTech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
