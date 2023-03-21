import { sidebarItemAdmin } from "@/constant/sidebarConstant";
import { useCurrentMenuItemState } from "@/recoil/side-bar.recoil";
import Link from "next/link";
import React from "react";

const SidebarAdmin = () => {
  const data = {
    name: "Hoa Nguyen",
    role: "Admin",
  };
  const currentMenuItem = useCurrentMenuItemState();

  return (
    <div className="bg-[#FAFAFA] w-[280px] left-0 h-full pl-3 mr-[5%]">
      <div>
        <h1 className="text-2xl">{data.name}</h1>
        <p className="text-base font-bold">{data.role}</p>
      </div>
      <div className="flex flex-col">
        {sidebarItemAdmin.map((item) => (
          <Link
            className={`p-2 ${
              currentMenuItem === item.currentMenu ? "side-active" : ""
            }`}
            href={item.router}
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarAdmin;
