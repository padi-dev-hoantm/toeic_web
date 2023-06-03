import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import TeacherExamCreateView from "@/view/teacher/exam/TeacherExamCreateView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const TeacherScheduleExamCreate = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam-teacher");
  }, []);

  return (
    <LayoutAdmin title="Schedule exam create">
      <TeacherExamCreateView />
    </LayoutAdmin>
  );
};

export default TeacherScheduleExamCreate;
