import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminTeacherCreateView from "@/view/admin/teacher/AdminTeacherCreateView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminTeacher = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("listTeacher");
  }, []);

  return (
    <LayoutAdmin title="List teacher">
      <AdminTeacherCreateView />
    </LayoutAdmin>
  );
};

export default AdminTeacher;
