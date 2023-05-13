import { AdminTeacherItem } from "@/components/admin/teacher/AdminTeacherItem";
import { useQueryGetListStudent, useQueryGetListTeacher } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import Link from "next/link";
import { Title } from "@/components/common/Title";
import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";

const AdminTeacherView = () => {

  const { data } = useQueryGetListTeacher()
  const teachers = data?.data

  return (
    <div>
      <div className="flex items-center	px-5 justify-between">
        <Title text="Danh sách giảng viên" />
        <Link href={routerConstant.admin.teacher.create}>
          <CustomButton text="Tạo mới" />
        </Link>
      </div>
      {teachers?.map((teacher: IRegister) => (
        <div key={teacher.ID}>
          <AdminTeacherItem
            ID={teacher.ID}
            name={teacher.name}
            email={teacher.email}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminTeacherView;
