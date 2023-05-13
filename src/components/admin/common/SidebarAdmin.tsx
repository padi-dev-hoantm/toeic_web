import { routerConstant } from "@/constant/routerConstant";
import { sidebarItemAdmin, sidebarItemTeacher } from "@/constant/sidebarConstant";
import { useQueryGetMe } from "@/pages/api/auth.api";
import { useCurrentMenuItemState } from "@/recoil/side-bar.recoil";
import { addCookie } from "@/untils/addCookies";
import { userRole } from "@/untils/role";
import Link from "next/link";
import React from "react";

const SidebarAdmin = () => {
  const currentMenuItem = useCurrentMenuItemState();

  const { data: dataMe } = useQueryGetMe();
  const data = dataMe?.data;
  addCookie(data)

  return (
    <div className="bg-[#FAFAFA] left-0 h-full p-3 h-screen pt-[30px] ">
      <div className="text-center text-base font-bold uppercase">
        <Link href={routerConstant.me}>
          <h1 className="">{data?.name}</h1>
        </Link>
        <p >{userRole(data?.role)}</p>
      </div>
      <div className="flex flex-col">
        {sidebarItemAdmin.map((item) => (
          <Link
            className={`p-2 my-2 ${currentMenuItem === item.currentMenu
              ? "side-active"
              : "hover:bg-[lightsteelblue]"
              }`}
            href={item.router}
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
        {sidebarItemTeacher.map((item) => (
          <Link
            className={`p-2 my-2 ${currentMenuItem === item.currentMenu
              ? "side-active"
              : "hover:bg-[lightsteelblue]"
              }`}
            href={``}
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
