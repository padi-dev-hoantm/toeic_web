import LayoutStudent from "@/components/layouts/LayoutStudent";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import StudentAllExamView from "@/view/student/StudentAllExamView";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const StudentAllResultExam = () => {
    const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
    useEffect(() => {
      setCurrentMenuItem("result-student");
    }, []);
  
    return (
        <LayoutStudent title="Student Result Exam">
            <StudentAllExamView />
        </LayoutStudent>
    );
};

export default StudentAllResultExam;
