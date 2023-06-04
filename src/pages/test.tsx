import CustomButton from "@/components/common/Button";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useMutationUpdateExam, useMutationUpdateQuestion, useQuerygetDetailByOwner } from "./api/exams";
import TextAreaCommon from "@/components/common/TextAreaCommon";
import { Label } from "@/components/common/Label";
import DatePickerCommon from "@/components/common/DatePicker";
import { ErrorMessage } from "@hookform/error-message";

const Test = () => {
    const { register, handleSubmit, control, reset, formState: { errors }, setValue
    } = useForm();
    const { register: register1, handleSubmit: handleSubmit1, control: control1, reset: reset1,
        formState: { errors: errors1 }, setValue: setValue1
    } = useForm();
    const { fields,
    } = useFieldArray({
        control,
        name: "exam_questions",
    });
    const handleAudioUpload = (e: any) => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.click();

        input.onchange = async () => {
            if (!input) return;
            if (!input.files) return;
            const file = input.files[0];
            const formData = new FormData();
            formData.append("files", file);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "http://14.225.192.48/api/exams/file", true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const response = xhr.responseText;
                    const linkAudio = JSON.parse(response).paths[0]
                    console.log(123, linkAudio)
                    setValue("listen_file", linkAudio)
                } else {
                    // setError("listen_file", {
                    //   type: "custom",
                    //   message: "Có lỗi đang xảy ra, vui lòng thử lại"
                    // })
                }
            };
            xhr.send(formData);
        };
    }; const { data, isFetchedAfterMount } = useQuerygetDetailByOwner(4)
    const { mutate: mutateUpdateQuestion } = useMutationUpdateQuestion()
    const { mutate: mutateUpdateExam } = useMutationUpdateExam()

    const examQuestion = data?.data.exam_questions

    useEffect(() => {
        reset({ exam_questions: examQuestion });
        reset1(data?.data)
    }, [data?.data])

    const TextEditor = dynamic(() => import("./../components/common/TextEditor"), {
        ssr: false,
    });
    const onSubmit = (index: number) => (value: any) => {
        const newAnswer: { is_correct: any; content: any; id: number }[] = [];
        value.exam_questions[index].answers.forEach(({ id, content, is_correct }: any) => {
            newAnswer.push({ is_correct: parseInt(is_correct), content, id: parseInt(id) });
        })

        const dataSubmit = {
            id: value.exam_questions[index].id,
            question_case: Number(value.exam_questions[index].question_case),
            question_text: value.exam_questions[index].question_text,
            answers: newAnswer
        }
        mutateUpdateQuestion(dataSubmit)
    }

    const handleSubmitOk = (value: any) => {
        console.log(`value`, value)

        const dataSubmit = {
            id: value.id,
            exam_name: value.exam_name,
            exam_description: value.exam_description,
            exam_start_time: value.exam_start_time,
            listen_file: value.listen_file,
            exam_end_time: value.exam_end_time
        }
        mutateUpdateExam(dataSubmit)
    }

    return (
        <div >
            <form onSubmit={handleSubmit1(handleSubmitOk)} >
                <div className="box-shadow-item p-[20px] mt-[20px]">
                    <Label text="Nhập tên bài thi:" />
                    <TextAreaCommon
                        name="exam_name"
                        control={control1}
                        rows={2}
                        isRequired={true}
                        rules={{
                            required: {
                                value: true,
                                message: "Đây là bắt buộc",
                            },
                        }}
                        showCount={true}
                        maxLength={800}
                        errors={errors1}
                    />
                    <Label text="Nhập tên bài thi:" />
                    <TextAreaCommon
                        name="exam_description"
                        control={control1}
                        rows={2}
                        isRequired={true}
                        rules={{
                            required: {
                                value: true,
                                message: "Đây là bắt buộc",
                            },
                        }}
                        showCount={true}
                        maxLength={800}
                        errors={errors1}
                    />
                    <Label text="Thời gian bắt đầu bài thi:" />
                    <DatePickerCommon
                        name="exam_start_time"
                        control={control1}
                        isRequired={true}
                        rules={{
                            required: {
                                value: true,
                                message: "Đây là bắt buộc",
                            },
                        }}
                        errors={errors1}
                    />
                    <div className="flex flex-col">
                        <Label text="Nhập file nghe:" />
                        <Controller
                            name={`listen_file`}
                            control={control1}

                            render={({ field }) => (
                                <>
                                    <input
                                        type="file"
                                        onChange={(e) => handleAudioUpload(e)}
                                    />
                                    {field.value}
                                </>
                            )}
                        />
                        <ErrorMessage
                            errors={errors1}
                            name="listen_file"
                            render={({ message }) => <span className='text-xs text-red-400 mt-1'>{message}</span>}
                        />
                    </div>
                </div>
                <section className="mt-[20px]">
                    <CustomButton type="submit" text="Cập nhật bài thi" />
                </section>
            </form>
            {
                fields.map((item: any, index: number) => (
                    <div key={item.id} className="mt-[50px] box-shadow-item p-[20px] pt-[10px]">
                        <form onSubmit={handleSubmit(onSubmit(index))}>
                            <p>Câu: {index + 1}</p>
                            <TextEditor
                                name={`exam_questions.${index}.question_text`}
                                control={control}
                                label="会場名"
                                isRequired={true}
                                placeholder="Autosize height based on content lines"
                            />
                            <div className="py-[10px] flex gap-[20px]">
                                <div>
                                    <input
                                        id="question_case_1"
                                        type="radio"
                                        value={1}
                                        {...register(`exam_questions.${index}.question_case`)}
                                        defaultChecked={item.question_case === 1}
                                    />
                                    <label htmlFor="question_case_1" className="pl-[5px]">Phần đọc</label>
                                </div>
                                <div>
                                    <input
                                        id="question_case_2"
                                        type="radio"
                                        value={2}
                                        {...register(`exam_questions.${index}.question_case`)}
                                        defaultChecked={item.question_case === 2}
                                    />
                                    <label htmlFor="question_case_2" className="pl-[5px]">Phần nghe</label>
                                </div>
                            </div>

                            {
                                item?.answers.map((answer: any, ansId: number) => (
                                    <div key={ansId} className="flex gap-3 mb-[20px]">
                                        <div className="flex items-center gap-[5px]">
                                            <input
                                                id="is_content_1"
                                                type="radio"
                                                value={1}
                                                {...register(`exam_questions.${index}.answers.${ansId}.is_correct`)}
                                                defaultChecked={answer.is_correct === 1}
                                            />
                                            <label htmlFor="is_content_1">Đúng</label>
                                        </div>
                                        <div className="flex items-center gap-[5px]">
                                            <input
                                                id="is_content_0"
                                                type="radio"
                                                value={0}
                                                {...register(`exam_questions.${index}.answers.${ansId}.is_correct`)}
                                                defaultChecked={answer.is_correct === 0}
                                            />
                                            <label htmlFor="is_content_0">Sai</label>
                                        </div>
                                        <input
                                            type="text"
                                            className="w-[600px] rounded-md border border-gray-400 h-[34px] pl-[5px]"
                                            {...register(`exam_questions.${index}.answers.${ansId}.content`)}
                                            defaultValue={answer.content}
                                        />
                                    </div>
                                ))
                            }
                            <section className="mt-[20px]">
                                <CustomButton type="submit" text="Cập nhật câu hỏi" />
                            </section>
                        </form>

                    </div>
                ))}
        </div>
    );
};

export default Test;
