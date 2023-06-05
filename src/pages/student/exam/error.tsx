import LayoutDocument from "@/components/layouts/LayoutDocument";
import StudentExamErrorView from "@/view/student/StudentExamErrorView";
import React from "react";

const StudentExamError = () => {
    return (
        <LayoutDocument title="Student Exam Error">
            <StudentExamErrorView />
        </LayoutDocument>
    );
};

export default StudentExamError;
