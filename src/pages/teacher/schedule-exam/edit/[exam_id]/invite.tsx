import LayoutAdmin from "@/components/layouts/LayoutAdmin";
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
        <LayoutAdmin title="Admin">
            <TeacherExamInviteView />
        </LayoutAdmin>
    );
};

export default TeacherScheduleExamInvite;
