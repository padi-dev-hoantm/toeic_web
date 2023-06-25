import LayoutTeacher from "@/components/layouts/LayoutTeacher";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import ProfileMeView from "@/view/ProfileMeView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const TeahcherProfile = () => {
    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
      setCurrentMenuItem("profile-teacher");
    }, []);
    
    return (
        <LayoutTeacher title="Teahcher Profile">
            <ProfileMeView />
        </LayoutTeacher>
    );
};

export default TeahcherProfile;
