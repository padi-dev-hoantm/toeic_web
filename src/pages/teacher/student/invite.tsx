import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import TeacherInviteCandidateView from "@/view/teacher/Invite/TeacherInviteCandidateView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const Teacher = () => {
    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
        setCurrentMenuItem("student");
    }, []);

    return (
        <LayoutAdmin title="Teacher">
            <TeacherInviteCandidateView />
        </LayoutAdmin>
    );
};

export default Teacher;
