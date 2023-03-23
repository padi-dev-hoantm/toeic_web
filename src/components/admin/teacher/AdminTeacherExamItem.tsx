import { ITeacher } from "@/type/common.type";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";

export const AdminTeacherExamItem = ({ name, email, level }: ITeacher) => {
  return (
    <div className="">
      <h1>
        {level}: {name}
      </h1>
      <p>{email}</p>
    </div>
  );
};
