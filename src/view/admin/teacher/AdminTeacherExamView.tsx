import React from "react";
import { AdminTeacherExamItem } from "@/components/admin/teacher/AdminTeacherExamItem";
import { DummyData } from "@/untils/fakeData";

const AdminTeacherExamView = () => {
  const teacher = DummyData[0];

  return (
    <div>
      <AdminTeacherExamItem
        email={teacher.email}
        name={teacher.name}
        level={teacher.level}
      />
    </div>
  );
};

export default AdminTeacherExamView;
