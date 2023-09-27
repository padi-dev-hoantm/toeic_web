import { Controller, useFieldArray, useForm } from "react-hook-form";
import CustomButton from "@/components/common/Button";
import CustomButtonDelete from "@/components/common/ButtonDelete";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import Qill from "@/components/common/Qill";
import { useMutationCreateExam } from "@/pages/api/exams";
import TextAreaCommon from "@/components/common/TextAreaCommon";
import { ErrorMessage } from '@hookform/error-message';
import { useRouter } from "next/router";
import { routerConstant } from "@/constant/routerConstant";
import dayjs from "dayjs";
import { useQueryClient } from "@tanstack/react-query";
import ChatBox from "@/pages/chatbox";

const CreateQuestionView = () => {
  const { mutate } = useMutationCreateExam();
  const router = useRouter();

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    setError
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "exam_questions",
  });
  const queryClient = useQueryClient();

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
      xhr.open("POST", "/api/exams/file", true);
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
  };

  const onSubmit = (value: any) => {
    const rest: { question_case: any; question_text: any; answers: { is_correct: any; content: any; }[]; }[] = [];
    value.exam_questions.forEach(({ question_case, answers, question_text }: any) => {
      const newAnswer: { is_correct: any; content: any; }[] = [];
      answers.forEach(({ is_correct, content }: any) => {
        newAnswer.push({ is_correct: parseInt(is_correct), content });
      });
      rest.push({ question_case: Number(question_case), question_text: question_text, answers: newAnswer });
    });

    const dataSubmit = {
      exam_name: value.exam_name,
      exam_description: value.exam_description,
      exam_start_time: value.exam_start_time,
      exam_end_time: value.exam_end_time,
      listen_file: value.listen_file,
      exam_questions: rest,
    }
    console.log("dataSubmit", dataSubmit)
    mutate(dataSubmit, {
      onSuccess: (data) => {
        if (!data.data) {
          alert("Có lỗi đang xảy ra, mời bạn kiểm tra lại");
        }
        else {
          queryClient.refetchQueries(['get-list-exam']).then();
          router.push(routerConstant.admin.exam.index);
        }
      }
    });
  };
  return (
    <div>
      <ChatBox />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box-shadow-item p-[20px] mt-[20px]">
          <Label text="Nhập tên bài thi:" />
          <TextAreaCommon
            name="exam_name"
            control={control}
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
            errors={errors}
          />
          <Label text="Nhập mô tả bài thi:" />
          <TextAreaCommon
            name="exam_description"
            control={control}
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
            errors={errors}
          />
          <Label text="Thời gian bắt đầu bài thi:" />
          <DatePickerCommon
            name="exam_start_time"
            control={control}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: "Đây là bắt buộc",
              },
            }}
            errors={errors}
          />
          {/* <Label text="Thời gian kết thúc bài thi:" />
        <DatePickerCommon
          name="exam_end_time"
          control={control}
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: "Đây là bắt buộc",
            },
          }}
          errors={errors}
        /> */}
          <div className="flex flex-col">
            <Label text="Nhập file nghe:" />
            <Controller
              name={`listen_file`}
              control={control}

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
              errors={errors}
              name="listen_file"
              render={({ message }) => <span className='text-xs text-red-400 mt-1'>{message}</span>}
            />
          </div>
        </div>
        <div>
          {fields.map((item, index) => {
            return (
              <div key={item.id}>
                <Qill index={index} register={register} control={control} />
                <CustomButtonDelete
                  text="Xóa câu hỏi"
                  type="button"
                  onClick={() => remove(index)}
                />
              </div>
            );
          })}
        </div>
        <section className="mt-[20px]">
          <CustomButton
            text="Thêm câu hỏi mới"
            type="button"
            onClick={() => {
              append({});
            }}
          />
        </section>
        <section className="mt-[20px]">
          <CustomButton type="submit" text="Tạo mới bài thi" />
        </section>
      </form>
    </div>
  );
};

export default CreateQuestionView;
