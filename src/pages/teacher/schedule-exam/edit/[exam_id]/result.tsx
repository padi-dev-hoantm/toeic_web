import LayoutTeacher from "@/components/layouts/LayoutTeacher";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import TeacherScheduleExamResultView from "@/view/teacher/exam/TeacherScheduleExamResultView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const TeacherScheduleExamResult = () => {

    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
        setCurrentMenuItem("exam-teacher");
    }, []);

    return (
        <LayoutTeacher title="Teacher">
            <TeacherScheduleExamResultView />
        </LayoutTeacher>
    );
};

export default TeacherScheduleExamResult;
