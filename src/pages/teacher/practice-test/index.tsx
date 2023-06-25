import LayoutTeacher from "@/components/layouts/LayoutTeacher";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const TeacherPracticeTest = () => {
    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
        setCurrentMenuItem("teacher-test");
    }, []);

    return (
        <LayoutTeacher title="Teacher">
            TeacherPracticeTest
        </LayoutTeacher>

    );
};

export default TeacherPracticeTest;
