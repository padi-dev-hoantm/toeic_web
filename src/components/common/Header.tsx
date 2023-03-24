import React from "react";
import { useRouter } from "next/router";
import { routerConstant } from "@/constant/routerConstant";
import CustomButton from "./Button";

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(routerConstant.home);
  };

  return (
    <div className="flex justify-between items-center h-[160px] bg-[#56a4fe] box-shadow-item">
      <img src="https://sis.utc.edu.vn/logo.png" alt="logo UTC" />
      <CustomButton onClick={() => handleClick()} text="Logout" />
    </div>
  );
};

export default Header;
