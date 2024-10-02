import React from "react";
import "./Header.css";

const Header = () => {
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <header>
      <h1>Task Management System</h1>
      <button onClick={Logout}>Logout</button>
    </header>
  );
};

export default Header;