import Link from "next/link";
import React from "react";
import Image from "next/image";
import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";
import { IRegister } from "@/type/common.type";
import { Button } from "antd";
import CustomButtonDelete from "@/components/common/ButtonDelete";

export const AdminTeacherItem = ({ ID, name, email, avatar }: IRegister) => {
  return (
    <div className="flex p-5 items-center my-[30px]  rounded-md	box-shadow-item justify-between">
      <div className="flex items-center">
        <Image
          src={avatar ?? "/img/home-img.png"}
          width={100}
          height={100}
          className="rounded-full h-[100px]"
          alt=""
          objectFit="cover"
        />
        <p className="flex flex-col pl-2.5 ">
          <span className="flex gap-2"><span>Giảng viên: </span>{name}</span>
          <span className="flex gap-2"><span>Email: </span>{email}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <Link href={routerConstant.admin.candidate.detail(Number(ID))}>
          <CustomButtonDelete text="Xóa" />
        </Link>
        <Link href={routerConstant.admin.candidate.detail(Number(ID))}>
          <CustomButton text="Chi tiết" />
        </Link>
      </div>
    </div>
  );
};
