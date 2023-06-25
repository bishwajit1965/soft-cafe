import React from "react";
import "./Header.css";
import Logo from "../../assets/author_5.jpg";
const Header = () => {
  return (
    <div className="header-container">
      <div className="navbar">
        <div className="brand-name">
          <h2>Soft cafe</h2>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="logo" className="admin-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
