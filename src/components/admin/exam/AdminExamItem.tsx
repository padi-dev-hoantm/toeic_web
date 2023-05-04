import { ISchedule } from "@/type/common.type";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";
import { formatDateTime } from "@/untils/handleDateTime";

export const AdminExamItem = ({
  id,
  exam_name,
  exam_start_time,
}: ISchedule) => {

  return (
    <div className="p-5 items-center my-[30px] box-shadow-item rounded-md	flex justify-between">
      <div className="mr-[30%] ">
        <p>Bài thi: {exam_name}</p>
        <p>Bài thi bắt đầu lúc: {formatDateTime(exam_start_time) }</p>
      </div>
      <Link href={routerConstant.admin.exam.edit(Number(id))}>
        <CustomButton text="Chi tiết" />
      </Link>
    </div>
  );
};
