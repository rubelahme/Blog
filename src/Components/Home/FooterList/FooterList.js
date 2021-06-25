import React from "react";
import "./FooterList.scss";

const FooterList = () => {
  return (
    <div>
      <div className="copyRight text-light  footer-1 text-center">
        <p>Copyright@{new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterList;
