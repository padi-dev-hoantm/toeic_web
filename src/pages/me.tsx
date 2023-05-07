import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import ProfileMeView from "@/view/ProfileMeView";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";

const MyProfile = () => {
    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
      setCurrentMenuItem("me");
    }, []);
    
    return (
        <LayoutAdmin title="Admin">
            <ProfileMeView />
        </LayoutAdmin>
    );
};

export default MyProfile;
