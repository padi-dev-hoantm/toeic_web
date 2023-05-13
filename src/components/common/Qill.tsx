import dynamic from "next/dynamic";
import { useFieldArray, useForm } from "react-hook-form";
import CustomButton from "./Button";
import InputCommon from "./InputCommon";
import { Label } from "./Label";
import SelectInputCommon from "./SelectInputCommon";

const Qill = ({ index, control, register, type }: any) => {
  const {
    fields: fields1,
    append: append1,
    remove: remove1,
  } = useFieldArray({
    control,
    name: `exam_questions.${index}.answers`,
  });

  const {
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm();
  const TextEditor = dynamic(() => import("./TextEditor"), {
    ssr: false,
  });

  return (
    <div className="mt-[50px] box-shadow-item pl-[20px] pt-[10px]">
      <Label text={`Câu: ${index + 1}`} />
      <Label text="Nhập câu hỏi" />
      <TextEditor
        name={`exam_questions.${index}.question_text`}
        control={control}
        label="会場名"
        isRequired={true}
        placeholder="Autosize height based on content lines"
        rules={{
          required: {
            value: true,
            message: "Đây là bắt buộc",
          },
        }}
        errors={errors}
      />
      <Label text="Part:" />
      <InputCommon
        type="text"
        name={`exam_questions.${index}.question_case`}
        control={control}
        errors={errors}
        isRequired={true}
        rules={{
          required: {
            value: true,
            message: "Đây là bắt buộc",
          },
        }}
      />
      <p className="text-red-600">* 1 là đáp án đúng - 0 là đáp án sai</p>
      {fields1.map((item2, index2) => {
        return (
          <div
            key={index2}
            className="flex gap-[10px] mb-[20px] ml-[10px] h-[30px]"
          >
            <div className="w-[42px]">
              <SelectInputCommon
                control={control}
                name={`exam_questions.${index}.answers.${index2}.is_correct`}
                isRequired={true}
                rules={{
                  required: {
                    value: true,
                    message: "day la bat buoc",
                  },
                }}
                defaultValue={0}
                options={[
                  { value: 0, label: 0 },
                  { value: 1, label: 1 },
                ]}
                errors={errors}
              />
            </div>
            <div>
              <input
                type="text"
                className="w-[600px] rounded-md border border-gray-400 h-[34px] pl-[5px]"
                {...register(
                  `exam_questions.${index}.answers.${index2}.content`,
                  { require: true }
                )}
              />
            </div>
            <button
              onClick={() => remove1(index)}
              className="bg-[red] text-white px-[10px]"
            >
              Xóa
            </button>
          </div>
        );
      })}
      <section className="mt-[20px] mb-[20px]">
        <CustomButton
          text="Thêm câu trả lời"
          type="button"
          onClick={() => {
            append1({});
          }}
        />
      </section>
    </div>
  );
};

export default Qill;
