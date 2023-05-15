import { Label } from "@/components/common/Label";
import { useQueryGetExamSubmit } from "@/pages/api/examSubmit";

const StudentResultExamView = () => {
    const { data, isFetchedAfterMount } = useQueryGetExamSubmit()
    console.log(123, data)
    const detailExam = data?.data[0]

    return <div>
        {
            isFetchedAfterMount && <div className="m-[80px]">
                <Label text="Kết quả bài thi:" />
                <table className="w-full text-center  border border-gray-400 ">
                    <tr >
                        <th className="p-[20px] border-r-[2px]">Điểm phần nghe</th>
                        <th className="border-r-[2px]">Điểm phần đọc</th>
                        <th>Tổng điểm</th>
                    </tr>
                    <tr className="border-t-[2px]">
                        <td className="p-[20px] border-r-[2px]">{detailExam?.listening_score}</td>
                        <td className="border-r-[2px]">{detailExam?.reading_score}</td>
                        <td>{detailExam?.total_score}</td>
                    </tr>
                </table>
            </div>
        }
    </div>;
};

export default StudentResultExamView;
