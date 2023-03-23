import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { DummyData } from "@/untils/fakeData";
import AdminTeacherExamView from "@/view/admin/teacher/AdminTeacherExamView";

const AdminTeacherAdminTeacher = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("listTeacher");
  }, []);
  const teacher = DummyData;
  return (
    <LayoutAdmin title="Teacher exam">
      <AdminTeacherExamView />
    </LayoutAdmin>
  );
};

export default AdminTeacherAdminTeacher;
