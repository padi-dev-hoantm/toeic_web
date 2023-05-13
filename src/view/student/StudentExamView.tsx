import { useQueryGetDetailExam } from "@/pages/api/exams";
import { HourglassOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Countdown from 'react-countdown';

const StudentExamView = () => {
    const router = useRouter();
    const { data, isFetchedAfterMount } = useQueryGetDetailExam(8)
    const detailExam = data?.data
    const startDate = new Date();
    const endDate = new Date(`${detailExam?.exam_end_time}`);
    const time = endDate.getTime() - startDate.getTime()

    return <>
        {
            isFetchedAfterMount && (
                <>
                    <div className="fixed right-0 bottom-0 text-2xl flex items-center bg-[#1890FF] text-white font-bold p-4 gap-2"> <HourglassOutlined /> <Countdown date={Date.now() + time} /></div>
                    <div className="mx-[50px] mt-[40px]">
                        <div className="text-center mb-[50px] box-shadow-item p-[30px]">
                            <p>Bài thi: {detailExam?.exam_name}</p>
                            <p>Mô tả bài thi: {detailExam?.exam_description}</p>
                        </div>
                        <div className="box-shadow-item p-[30px]">
                            {detailExam?.exam_questions?.map((question: any, questionIndex: number) => {
                                return (
                                    <div key={questionIndex}>
                                        <p className="text-lg font-bold">Câu {questionIndex + 1}: {question?.question_text}</p>
                                        {
                                            question.answers?.map((answer: any, answerIndex: number) =>
                                            (
                                                <div key={answerIndex}>
                                                    <input name="answer_id" type="radio" />
                                                    <span className="ml-[10px]">{answer.content}</span>
                                                </div>
                                            )
                                            )
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div></>
            )
        }
    </>;
};

export default StudentExamView;
