import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminTeacherView from "@/view/admin/teacher/AdminTeacherView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminTeacher = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("listTeacher");
  }, []);

  return (
    <LayoutAdmin title="List teacher">
      <AdminTeacherView />
    </LayoutAdmin>
  );
};

export default AdminTeacher;
