import { Label } from "@/components/common/Label";
import { useQueryGetExamSubmit } from "@/pages/api/examSubmit";
import { useRouter } from "next/router";
import { useEffect } from "react";

const StudentAllExamView = () => {
    const { data, isFetchedAfterMount } = useQueryGetExamSubmit()
    const detailExam = data?.data
    const router = useRouter()


    return <div className="m-[80px]">
        {isFetchedAfterMount && detailExam.map((exam: any, index: number) => (
            <div key={index}>
                <Label text={`Kết quả bài thi lần thứ: ${index + 1}`} />
                <table className="w-full text-center  border border-gray-400 ">
                    <tr >
                        <th className="p-[20px] border-r-[2px]">Điểm phần nghe</th>
                        <th className="border-r-[2px]">Điểm phần đọc</th>
                        <th>Tổng điểm</th>
                    </tr>
                    <tr className="border-t-[2px]">
                        <td className="p-[20px] border-r-[2px]">{exam?.listening_score}</td>
                        <td className="border-r-[2px]">{exam?.reading_score}</td>
                        <td>{exam?.total_score}</td>
                    </tr>
                </table>
            </div>
        ))}
    </div>

};

export default StudentAllExamView;
