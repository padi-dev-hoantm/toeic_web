import Link from "next/link";
import React from "react";
import Image from "next/image";
import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";
import { IRegister } from "@/type/common.type";

export const AdminTeacherItem = ({ ID, name, email }: IRegister) => {
  return (
    <div className="flex p-5 items-center my-[30px]  rounded-md	box-shadow-item justify-between">
      <div className="flex">
        <Image
          src="/img/home-img.png"
          width={100}
          height={100}
          className="rounded-full"
          alt=""
          objectFit="cover"
        />
        <p className="flex flex-col pl-2.5 mr-[30%]">
          <span>{name}</span>
          <span>{email}</span>
        </p>
      </div>
      <Link href={routerConstant.admin.teacher.detail(Number(ID))}>
        <CustomButton text="Chi tiết" />
      </Link>
    </div>
  );
};
