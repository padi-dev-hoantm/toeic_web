import CustomButton from "@/components/common/Button";
import { Title } from "@/components/common/Title";
import { TeacherExamItem } from "@/components/teacher/exam/TeacherExamItem";
import { ID_PERSON } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useQueryGetListExam } from "@/pages/api/exams";
import { ISchedule } from "@/type/common.type";
import Link from "next/link";
import Cookies from "universal-cookie";

const TeacherExamView = () => {
    const cookies = new Cookies();

    const teacherId = cookies.get(ID_PERSON)
    const { data } = useQueryGetListExam()
    const exams = data?.data
    if(!exams) return <div className="text-center">Không có bài thi nào</div>

    return (
        <div className="mt-[20px]">
            <div className="flex items-center	px-5 justify-between">
                <Title text="Danh sách bài thi" />
                <Link href={routerConstant.teacher.exam.create}>
                    <CustomButton text="Tạo mới" />
                </Link>
            </div>
            {exams?.map((exam: ISchedule) => (
                <div key={exam.id}>
                    <TeacherExamItem
                        id={exam.id}
                        exam_name={exam.exam_name}
                        exam_start_time={exam.exam_start_time}
                    />
                </div>
            ))}
        </div>
    );
};

export default TeacherExamView;
