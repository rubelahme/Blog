import React from "react";
import MainSection from "../MainSection/MainSection";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header-1">
      <NavBar></NavBar>
      <MainSection></MainSection>
    </div>
  );
};

export default Header;
