import { Label } from "@/components/common/Label";
import { useQueryGetMe } from "@/pages/api/auth.api";
import { useQueryGetExamSubmit } from "@/pages/api/examSubmit";

const StudentResultExamView = () => {
    const { data, isFetchedAfterMount } = useQueryGetExamSubmit()
    const { data: dataMe } = useQueryGetMe();
    const resultLength = data?.data.length
    const detailExam = data?.data[resultLength - 1]
    return <div>
        {
            isFetchedAfterMount && <div className="m-[80px]">
                <Label text="Kết quả bài thi:" />
                <div>
                    <p>Tên: {dataMe?.data?.name}</p>
                    <p>Mã số: {dataMe?.data?.code}</p>
                </div>
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
