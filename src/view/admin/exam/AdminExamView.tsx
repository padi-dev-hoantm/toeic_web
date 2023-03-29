import React from "react";
import { ScheduleFakeData } from "@/untils/fakeData";
import { AdminExamItem } from "@/components/admin/exam/AdminExamItem";
import CustomButton from "@/components/common/Button";
import Link from "next/link";
import { routerConstant } from "@/constant/routerConstant";

const AdminExamView = () => {
  const exams = ScheduleFakeData;

  return (
    <div className="mt-[20px]">
      <Link href={routerConstant.admin.exam.create}>
        <CustomButton text="Tạo mới" />
      </Link>
      {exams.map((exam) => (
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
