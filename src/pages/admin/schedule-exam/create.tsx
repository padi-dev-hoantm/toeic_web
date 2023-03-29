import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminExamCreateView from "@/view/admin/exam/AdminExamCreateView";
import AdminExamView from "@/view/admin/exam/AdminExamView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminScheduleExamCreate = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam");
  }, []);

  return (
    <LayoutAdmin title="Schedule exam create">
      <AdminExamCreateView />
    </LayoutAdmin>
  );
};

export default AdminScheduleExamCreate;
