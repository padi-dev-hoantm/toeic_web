import React from "react";
import { useRouter } from "next/router";
import { AdminTeacherItem } from "@/components/admin/teacher/AdminTeacherItem";
import { DummyData } from "@/untils/fakeData";

const AdminTeacherView = () => {
  const teacher = DummyData;

  return (
    <div>
      {teacher.map((teacher) => (
        <div key={teacher.id}>
          <AdminTeacherItem
            id={teacher.id}
            name={teacher.name}
            email={teacher.email}
            level={teacher.level}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminTeacherView;
