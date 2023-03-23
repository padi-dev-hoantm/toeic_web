import { ITeacher } from "@/type/common.type";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";

export const AdminTeacherItem = ({ id, name, email, level }: ITeacher) => {
  return (
    <div className="flex p-5 items-center my-[30px] box-shadow-item rounded-md	">
      <Image
        src="/img/home-img.png"
        width={100}
        height={100}
        className="rounded-full"
        alt=""
        objectFit="cover"
      />
      <p className="flex flex-col pl-2.5 mr-[30%]">
        <span>
          {level}- {name}
        </span>
        <span>{email}</span>
      </p>
      <Link href={routerConstant.admin.teacher.exam(Number(id))}>
        <Button text="Chi tiết" />
      </Link>
    </div>
  );
};
