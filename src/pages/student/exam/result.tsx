import LayoutDocument from "@/components/layouts/LayoutDocument";
import { useQueryGetExamSubmit } from "@/pages/api/examSubmit";
import StudentResultExamView from "@/view/student/StudentResultExamView";
import React from "react";

const StudentResultExam = () => {
    
    return (
        <LayoutDocument title="Student Result Exam">
            <StudentResultExamView />
        </LayoutDocument>
    );
};

export default StudentResultExam;
