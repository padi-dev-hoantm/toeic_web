import React from "react";

const CustomButtonDelete = ({ text, ...rest }: any) => {
  return (
    <button
      {...rest}
      className={`font-semibold text-white	rounded-sm text-sm leading-[22px] px-[15px] py-[10px] bg-[#FF0000] text-blue-100 hover:bg-[#DD0000] duration-300`}
    >
      {text}
    </button>
  );
};

export default CustomButtonDelete;
