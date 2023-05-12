import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import TeacherExamView from "@/view/teacher/exam/TeacherExamView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AdminScheduleExam = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam-teacher");
  }, []);

  return (
    <LayoutAdmin title="Schedule exam">
      <TeacherExamView />
    </LayoutAdmin>
  );
};

export default AdminScheduleExam;
