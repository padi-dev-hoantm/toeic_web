import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import { routerConstant } from "@/constant/routerConstant";

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(routerConstant.home);
  };

  return (
    <div className="flex justify-between items-center">
      <img src="https://sis.utc.edu.vn/logo.png" alt="logo UTC" />
      <Button onClick={() => handleClick()} text="Logout" />
    </div>
  );
};

export default Header;
