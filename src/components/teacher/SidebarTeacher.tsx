import { sidebarItemTeacher } from "@/constant/sidebarConstant";
import React from "react";

const SidebarTeacher = () => {
  const data = {
    name: "Hoa Nguyen",
    role: "Teacher",
  };

  return (
    <div className="bg-[#FAFAFA] w-[280px] left-0 h-full pl-3">
      <div>
        <h1 className="text-2xl">{data.name}</h1>
        <p className="text-base font-bold">{data.role}</p>
      </div>
      {sidebarItemTeacher.map((item) => (
        <p key={item.id}>{item.name} </p>
      ))}
    </div>
  );
};

export default SidebarTeacher;
