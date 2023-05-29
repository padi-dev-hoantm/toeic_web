import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import TeacherInviteListView from "@/view/teacher/Invite/TeacherInviteListView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const Teacher = () => {
    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
        setCurrentMenuItem("student");
    }, []);

    return (
        <LayoutAdmin title="Candidate">
            <TeacherInviteListView />
        </LayoutAdmin>
    );
};

export default Teacher;
