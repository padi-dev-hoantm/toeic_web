import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminCandidateCreate from "@/view/admin/candidate/AdminCandidateCreate";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminTeacherAdminTeacher = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("student");
  }, []);

  return (
    <LayoutAdmin title="Candidate">
        <AdminCandidateCreate />
    </LayoutAdmin>
  );
};

export default AdminTeacherAdminTeacher;
