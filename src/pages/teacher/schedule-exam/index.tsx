import LayoutTeacher from "@/components/layouts/LayoutTeacher";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import TeacherExamView from "@/view/teacher/exam/TeacherExamView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const TeacherScheduleExam = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam-teacher");
  }, []);

  return (
    <LayoutTeacher title="Teacher">
      <TeacherExamView />
    </LayoutTeacher>
  );
};

export default TeacherScheduleExam;
