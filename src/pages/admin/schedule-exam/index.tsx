import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminExamView from "@/view/admin/exam/AdminExamView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const ScheduleExam = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam");
  }, []);

  return (
    <LayoutAdmin title="Schedule exam">
      <AdminExamView />
    </LayoutAdmin>
  );
};

export default ScheduleExam;
