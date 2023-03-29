import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminExamEditView from "@/view/admin/exam/AdminExamEditView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminScheduleExamEdit = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam");
  }, []);

  return (
    <LayoutAdmin title="Schedule exam edit">
      <AdminExamEditView />
    </LayoutAdmin>
  );
};

export default AdminScheduleExamEdit;
