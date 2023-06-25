import LayoutTeacher from "@/components/layouts/LayoutTeacher";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import TeacherExamDetailView from "@/view/teacher/exam/TeacherExamDetailView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const TeacherScheduleExamDetail = () => {

  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam-teacher");
  }, []);

  return (
    <LayoutTeacher title="Teacher">
        <TeacherExamDetailView />
    </LayoutTeacher>
  );
};

export default TeacherScheduleExamDetail;
