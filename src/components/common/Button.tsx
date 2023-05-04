import React from "react";

const CustomButton = ({ text, ...rest }: any) => {
  return (
    <button
      {...rest}
      className="font-semibold text-white	rounded-sm text-sm leading-[22px] px-[15px] py-[10px] bg-blue-500 text-blue-100 hover:bg-[#1890FF] duration-300"
    >
      {text}
    </button>
  );
};

export default CustomButton;
