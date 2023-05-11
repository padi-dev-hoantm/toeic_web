import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import AdminDashboardView from "@/view/admin/dashboard/AdminDashboardView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const Teacher = () => {
    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
        setCurrentMenuItem("result");
    }, []);

    return (
        <LayoutAdmin title="Teacher">
            result
        </LayoutAdmin>

    );
};

export default Teacher;
