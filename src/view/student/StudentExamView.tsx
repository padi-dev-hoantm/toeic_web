import { useQueryGetDetailExam } from "@/pages/api/exams";
import { HourglassOutlined } from "@ant-design/icons";
import { Router, useRouter } from "next/router";
import Countdown from 'react-countdown';
import ReactAudioPlayer from 'react-audio-player';
import { useForm } from "react-hook-form";
import CustomButton from "@/components/common/Button";
import { useEffect, useState } from "react";
import { useMutationSubmitExam } from "@/pages/api/examSubmit";
import { routerConstant } from "@/constant/routerConstant";

const StudentExamView = () => {
    const {
        formState: { errors },
        control,
        handleSubmit,
        register,
    } = useForm();
    const router = useRouter()
    const examId = 8
    const { data, isFetchedAfterMount } = useQueryGetDetailExam(examId)
    const { mutate } = useMutationSubmitExam()
    const detailExam = data?.data
    const startDate = new Date();
    const endDate = new Date(`${detailExam?.exam_end_time}`);
    const time = endDate.getTime() - startDate.getTime()
    const [tabSwitchCount, setTabSwitchCount] = useState(0)

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                setTabSwitchCount(tabSwitchCount + 1)
            } else {
                console.log('Tab is inactive');
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const onSubmit = (data: any) => {
        const submissionResults = Object.entries(data).map(([name, value]) => ({
            question_id: Number(name.replace('answer_', '')),
            answer_id: Number(value),
        }));

        const dataSubmit = {
            exam_id: examId,
            tab_switch_count: tabSwitchCount,
            submission_results: submissionResults
        }
        console.log(dataSubmit);
        mutate(dataSubmit, {
            onSuccess: () => {
                alert('Bạn đã nộp bài thành công!')
                router.push(routerConstant.student.exam.result)
            }
        })
    };


    return <>
        {
            isFetchedAfterMount && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="fixed right-0 bottom-0 text-2xl flex items-center bg-[#1890FF] text-white font-bold p-4 gap-2">
                        <HourglassOutlined />
                        <Countdown date={Date.now() + time} />
                        {
                            detailExam?.listen_file &&
                            <ReactAudioPlayer
                                src={`${detailExam?.listen_file}`}
                                autoPlay={true}
                                controls={true}
                            />
                        }
                    </div>
                    <div className="mx-[50px] mt-[40px]">

                        <div className="text-center mb-[50px] box-shadow-item p-[30px]">
                            <p>Bài thi: {detailExam?.exam_name}</p>
                            <p>Mô tả bài thi: {detailExam?.exam_description}</p>
                        </div>
                        <div className="box-shadow-item p-[30px]">
                            {detailExam?.exam_questions?.map((question: any, questionIndex: number) => {
                                return (
                                    <div key={questionIndex}>
                                        id question: {question.id}
                                        <p className="text-lg font-bold">Câu {questionIndex + 1}: {question?.question_text}</p>
                                        {question.answers?.map((answer: any, answerIndex: number) => (
                                            <div key={answerIndex}>
                                                id answer: {answer.id}
                                                <input {...register(`answer_${question.id}`)} type="radio" value={answer.id} />
                                                <span className="ml-[10px]">{answer.content}</span>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="mt-[20px] text-center ">
                        <CustomButton type="Submit" text="Nộp bài thi" />
                    </div>
                </form>
            )
        }
    </>;
};

export default StudentExamView;
