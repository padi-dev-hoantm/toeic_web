import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminCandidateView from "@/view/admin/candidate/AdminCandidateView";
import AdminTeacherDetailView from "@/view/admin/teacher/AdminTeacherDetailView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminTeacherAdminTeacher = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("student");
  }, []);

  return (
    <LayoutAdmin title="Candidate">
      <AdminCandidateView />
    </LayoutAdmin>
  );
};

export default AdminTeacherAdminTeacher;
