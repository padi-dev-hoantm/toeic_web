import LayoutDocument from "@/components/layouts/LayoutDocument";
import StudentExamView from "@/view/student/StudentExamView";
import React from "react";

const StudentExam = () => {
    return (
        <LayoutDocument title="Student Exam">
            <StudentExamView />
        </LayoutDocument>
    );
};

export default StudentExam;
