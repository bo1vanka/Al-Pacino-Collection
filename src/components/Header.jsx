import React from "react";
import "../styles/main.css";
import userIcon from "../img/user.svg";

const Header = () => {
  return (
    <div className="header">
      <h1>AL PACINO COLLECTION</h1>
      <div className="user">
        <img src={userIcon} alt="User" />
      </div>
    </div>
  );
};

export default Header;
