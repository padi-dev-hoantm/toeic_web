import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ text, ...rest }: any) => {
  return (
    <Button
      {...rest}
      className="rounded-sm text-sm leading-[22px] px-[15px] py-[4px] bg-blue-500 text-blue-100 hover:bg-[#1890FF] duration-300"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
