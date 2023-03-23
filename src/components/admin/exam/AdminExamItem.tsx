import { ISchedule } from "@/type/common.type";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";

export const AdminExamItem = ({
  id,
  exam_name,
  exam_start_time,
}: ISchedule) => {
  return (
    <div className="p-5 items-center my-[30px] box-shadow-item rounded-md	">
      <div className="mr-[30%] ">
        <p>Bài thi: {exam_name}</p>
        <p>Bài thi bắt đầu lúc: {exam_start_time}</p>
      </div>
      <Link href={routerConstant.admin.exam.edit(Number(id))}>
        <Button text="Chi tiết" />
      </Link>
    </div>
  );
};
