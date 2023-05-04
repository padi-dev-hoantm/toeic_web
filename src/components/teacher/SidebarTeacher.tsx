import { sidebarItemTeacher } from "@/constant/sidebarConstant";
import { useQueryGetMe } from "@/pages/api/auth.api";
import React from "react";

const SidebarTeacher = () => {
  const user = {
    name: "Hoa Nguyen",
    role: "Teacher",
  };

  const {data} = useQueryGetMe();
  console.log('data', data)

  return (
    <div className="bg-[#FAFAFA] w-[280px] sidebar-shadow left-0 h-[100vh] pl-3 ">
      <div className="mt-[20px]">
        <h1 className="text-2xl">{user.name}</h1>
        <p className="text-base font-bold">{user.role}</p>
      </div>
      {sidebarItemTeacher.map((item) => (
        <p key={item.id}>{item.name} </p>
      ))}
    </div>
  );
};

export default SidebarTeacher;
