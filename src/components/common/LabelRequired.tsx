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
    <label
      className="text-left block tracking-wide font-normal pb-[8px]"
      htmlFor={name}
    >
      <span className={isRequired ? "text-[#FF4D4F]" : "hidden"}>*</span>
      <span className="text-lg font-medium leading-[22px]">{label}</span>
    </label>
  );
};

export default LabelRequired;
