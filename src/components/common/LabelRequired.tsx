import React from "react";

const LabelRequired = ({
  name,
  label,
  isRequired,
}: {
  name: string;
  label?: string;
  isRequired: boolean;
}) => {
  return (
    <label className="block tracking-wide font-normal pb-[8px]" htmlFor={name}>
      <span className={isRequired ? "text-[#FF4D4F]" : "hidden"}>*</span>
      <span className="text-sm leading-[22px]">{label}</span>
    </label>
  );
};

export default LabelRequired;
