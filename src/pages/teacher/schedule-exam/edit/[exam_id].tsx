import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import UpdateQuestionView from "@/view/question/UpdateQuestionView";
import TeacherExamDetailView from "@/view/teacher/exam/TeacherExamDetailView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const TeacherScheduleExamDetail = () => {

  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("exam-teacher");
  }, []);

  return (
    <LayoutAdmin title="Admin">
        <TeacherExamDetailView />
    </LayoutAdmin>
  );
};

export default TeacherScheduleExamDetail;
