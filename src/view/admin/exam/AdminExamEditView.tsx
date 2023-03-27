import React from "react";
import { ScheduleFakeData } from "@/untils/fakeData";
import { AdminExamItem } from "@/components/admin/exam/AdminExamItem";

const AdminExamEditView = () => {
  const exams = ScheduleFakeData;

  return (
    <div>
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

export default AdminExamEditView;
