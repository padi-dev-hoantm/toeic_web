import LayoutTeacher from "@/components/layouts/LayoutTeacher";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import TeacherExamInviteView from "@/view/teacher/exam/TeacherExamInviteView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const TeacherScheduleExamInvite = () => {

    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
        setCurrentMenuItem("exam-teacher");
    }, []);

    return (
        <LayoutTeacher title="Teacher">
            <TeacherExamInviteView />
        </LayoutTeacher>
    );
};

export default TeacherScheduleExamInvite;
