import { ExportToExcel } from "@/components/common/ExportToExcel";
import { useQueryGetResultExam } from "@/pages/api/examSubmit";
import { useRouter } from "next/router";

const TeacherScheduleExamResultView = () => {
    const router = useRouter();
    const examId = router?.query?.exam_id
    console.log(`examId`, examId)
    const fileName = "myfile";
    const { data: dataResult, isFetchedAfterMount } = useQueryGetResultExam(Number(examId));
    const dataExport = dataResult?.data?.map((result: any) => ({
        ID: result.id,
        Name: result?.user?.name,
        Code: result?.user?.code,
        Total: result?.total_score,
    }));
    console.log(`dataResult,`, dataResult)
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className=" text-2xl font-bold text-[#4F4F4F] mt-[20px]">Kết quả toàn bộ bài thi</h1>
                <ExportToExcel apiData={dataExport} fileName={fileName} />
            </div>

            {isFetchedAfterMount &&
                dataResult?.data?.map((result: any, index: number) => (
                    <p key={index}>
                        <p className="font-bold mt-[30px]"> Thí sinh: {result?.user?.name} - Mã số: {result?.user?.code} - Email: {result?.user?.email}</p>
                        <table className="w-full text-center  border border-gray-400 ">
                            <tr >
                                <th className="p-[20px] border-r-[2px]">Tổng điểm</th>
                                <th className="border-r-[2px]">Điểm phần đọc</th>
                                <th className="border-r-[2px]">Điểm phần nghe</th>
                                <th>Số lần chuyển tab</th>
                            </tr>
                            <tr className="border-t-[2px]">
                                <td className="p-[20px] border-r-[2px]">{result?.total_score}</td>
                                <td className="border-r-[2px]">{result?.reading_score}</td>
                                <td className="border-r-[2px]">{result?.listening_score}</td>
                                <td>{result?.tab_switch_count}</td>
                            </tr>
                        </table>
                    </p>
                ))
            }
        </div>
    );
};

export default TeacherScheduleExamResultView;