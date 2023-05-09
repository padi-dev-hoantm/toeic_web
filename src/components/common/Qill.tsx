import { useFieldArray, useForm } from "react-hook-form";
import CustomButton from "./Button";
import CustomButtonDelete from "./ButtonDelete";
import InputCommon from "./InputCommon";
import { Label } from "./Label";

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
  return (
    <div className="mt-[50px] box-shadow-item pl-[20px] pt-[10px]">
      <Label text={`Câu: ${index + 1}`} />
      <Label text="Nhập câu hỏi" />
      <InputCommon
        type="text"
        name={`exam_questions.${index}.question_text`}
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
      {fields1.map((item2, index2) => {
        return (
          <div key={index2} className="flex gap-[10px] mb-[20px] ml-[10px]">
            <input
              className="border border-t-2 border-blue-900"
              {...register(
                `exam_questions.${index}.answers.${index2}.is_correct`
              )}
            />

            <input
              className="border border-t-2 border-blue-900"
              {...register(
                `exam_questions.${index}.answers.${index2}.content`,
                {
                  required: true,
                }
              )}
            />
            <CustomButtonDelete
              text="Delete"
              type="button"
              onClick={() => remove1(index)}
            />
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
