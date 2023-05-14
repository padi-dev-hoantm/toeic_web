import { useQueryGetDetailExam } from "@/pages/api/exams";
import { HourglassOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Countdown from 'react-countdown';
import ReactAudioPlayer from 'react-audio-player';
import { useForm } from "react-hook-form";
import CustomButton from "@/components/common/Button";

const StudentExamView = () => {
    const {
        formState: { errors },
        control,
        handleSubmit,
        register,
        reset
    } = useForm();
    const { data, isFetchedAfterMount } = useQueryGetDetailExam(8)
    const detailExam = data?.data
    const startDate = new Date();
    const endDate = new Date(`${detailExam?.exam_end_time}`);
    const time = endDate.getTime() - startDate.getTime()
    
    const onSubmit = (value: any) =>{
        console.log("value", value)
    }

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
                                        {
                                            question.answers?.map((answer: any, answerIndex: number) =>
                                            (
                                                <div key={answerIndex}>
                                                    id answer: {answer.id}
                                                    <input {...register("answer_id")} type="radio" />
                                                    <span className="ml-[10px]">{answer.content}</span>
                                                </div>
                                            )
                                            )
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="mt-[20px] text-center ">
                        <CustomButton type="Submit" text="Nộp bài thi"/>
                    </div>
                </form>
            )
        }
    </>;
};

export default StudentExamView;
