import React from "react";
import { ScheduleFakeData } from "@/untils/fakeData";
import { AdminExamItem } from "@/components/admin/exam/AdminExamItem";
import CustomButton from "@/components/common/Button";
import Link from "next/link";
import { routerConstant } from "@/constant/routerConstant";
import { Label } from "@/components/common/Label";
import { Title } from "@/components/common/Title";
import { useQueryGetListExam } from "@/pages/api/exams";
import { ISchedule } from "@/type/common.type";

const AdminExamView = () => {
  const {data } = useQueryGetListExam()
  const exams = data?.data
  if(!exams) return
  
  return (
    <div className="mt-[20px]">
      <div className="flex items-center	px-5 justify-between">
        <Title text="Danh sách bài thi" />
        <Link href={routerConstant.admin.exam.create}>
          <CustomButton text="Tạo mới" />
        </Link>
      </div>
      {exams?.map((exam : ISchedule) => (
        <div key={exam.id}>
          <AdminExamItem
            id={exam.id}
            exam_name={exam.exam_name}
            exam_start_time={exam.exam_start_time}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminExamView;
