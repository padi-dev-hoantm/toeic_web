import LayoutTeacher from "@/components/layouts/LayoutTeacher";
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
    <LayoutTeacher title="Teacher">
      <TeacherExamCreateView />
    </LayoutTeacher>
  );
};

export default TeacherScheduleExamCreate;
