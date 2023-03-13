import React from "react";
import Button from "./Button";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src="https://sis.utc.edu.vn/logo.png" alt="logo UTC" />
      <Button text="Logout" />
    </div>
  );
};

export default Header;
