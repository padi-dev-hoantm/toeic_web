import CustomButton from "@/components/common/Button";
import Link from "next/link";
import { routerConstant } from '@/constant/routerConstant';

const TeacherInviteListView = () => {

    return (
        <div className="mt-[20px]">
            <Link href={routerConstant.teacher.student.invite} ><CustomButton text="Mời thi" /></Link>
        </div>
    );
};

export default TeacherInviteListView;
