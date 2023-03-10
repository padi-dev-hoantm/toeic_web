import React from "react";

const Button = ({ text, ...rest }: any) => {
  return (
    <button
      {...rest}
      className="rounded-sm text-sm leading-[22px] px-[15px] py-[4px] bg-blue-500 text-blue-100 hover:bg-[#1890FF] duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
