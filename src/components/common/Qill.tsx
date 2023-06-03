import dynamic from "next/dynamic";
import { useFieldArray, useForm } from "react-hook-form";
import CustomButton from "./Button";
import { Label } from "./Label";
import RadioCommon from "./RadioCommon";

const Qill = ({ index, control, register }: any) => {
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
      <Label text="Chọn phần" />
      <div className="flex gap-4">
        <RadioCommon
          name={`exam_questions.${index}.question_case`}
          control={control}
          label='リセールの可否'
          type='text'
          isRequired={true}
          listOption={[
            { value: 2, label: 'Phần nghe' },
            { value: 1, label: 'Phần đọc' },
          ]}
          errors={errors}
        />
        {/* <label>
          <input
            type="radio"
            value={2}
            {...register(`exam_questions.${index}.question_case`)}
          />
          {`exam_questions.${index}.question_case`}
          Phần nghe
        </label>

        <label>
          <input
            type="radio"
            value={1}
            {...register(`exam_questions.${index}.question_case`)}
          />
          Phần đọc
        </label> */}
      </div>
      <Label text="Thêm đáp án" />
      {fields1.map((item2, index2) => {
        return (
          <div
            key={item2.id}
            className="flex gap-[10px] mb-[20px] ml-[10px] h-[30px]"
          >
            <div className="flex gap-3">
              <RadioCommon
                name={`exam_questions.${index}.answers.${index2}.is_correct`}
                control={control}
                label='リセールの可否'
                type='text'
                isRequired={true}
                listOption={[
                  { value: 1, label: 'Đúng' },
                  { value: 0, label: 'Sai' },
                ]}
                errors={errors}
              />
              {/* <label>
                <input
                  type="radio"
                  value={1}
                  {...register(`exam_questions.${index}.answers.${index2}.is_correct`)}
                />
                Đúng
              </label>

              <label>
                <input
                  type="radio"
                  value={0}
                  {...register(`exam_questions.${index}.answers.${index2}.is_correct`)}
                />
                Sai
              </label> */}
            </div>
            <div>
              <input
                type="text"
                className="w-[600px] rounded-md border border-gray-400 h-[34px] pl-[5px]"
                {...register(
                  `exam_questions.${index}.answers.${index2}.content`,
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
