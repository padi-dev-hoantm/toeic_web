import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminTeacherDetailView from "@/view/admin/teacher/AdminTeacherDetailView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminTeacherAdminTeacher = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("listTeacher");
  }, []);

  return (
    <LayoutAdmin title="Teacher exam">
      <AdminTeacherDetailView />
    </LayoutAdmin>
  );
};

export default AdminTeacherAdminTeacher;
