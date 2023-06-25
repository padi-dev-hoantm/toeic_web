import LayoutStudent from "@/components/layouts/LayoutStudent";
import LayoutTeacher from "@/components/layouts/LayoutTeacher";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import ProfileMeView from "@/view/ProfileMeView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const StudentProfile = () => {
    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
      setCurrentMenuItem("profile-student");
    }, []);
    
    return (
        <LayoutStudent title="Student Profile">
            <ProfileMeView />
        </LayoutStudent>
    );
};

export default StudentProfile;
