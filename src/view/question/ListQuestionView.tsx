import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";
import Link from "next/link";
import React from "react";

const ListQuestionView = () => {

    return (
        <div className="mt-[30px]">
            <Link href={routerConstant.admin.question.create}>
                <CustomButton text="Tạo bài thi" />
            </Link>
        </div>
    );
};

export default ListQuestionView;
