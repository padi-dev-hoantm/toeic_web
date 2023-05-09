import { Controller, useFieldArray, useForm } from "react-hook-form";
import CustomButton from "./Button";
import CustomButtonDelete from "./ButtonDelete";
import InputCommon from "./InputCommon";
import { Label } from "./Label";
import { UploadImage } from "./UploadImage";
import { useState } from "react";
import { UploadFile } from 'antd/lib/upload';
import { UploadProps } from 'antd';

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
    setValue,
    setError,
    clearErrors
  } = useForm();
  const [fileImage, setFileImage] = useState<UploadFile[]>([]);
  
  const handleChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setValue('image', newFileList?.[0]?.response?.data?.image);
    if (newFileList?.[0]?.response?.data?.image) {
      clearErrors('image');
    }
    setFileImage(newFileList);
    if (newFileList[0]?.status === 'error') {
      setError('image', {
        type: 'custom',
        message: 'Hình ảnh là bắt buộc',
      });
    }
  };
  const handleImageUpload = (event: any, field: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBase64 = reader.result;
        field.onChange(imageBase64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioUpload = (event: any, field: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const audioBase64 = reader.result;
        field.onChange(audioBase64);
      };
      reader.readAsDataURL(file);
    }
  };
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
      <UploadImage
        fileList={fileImage}
        handleChangeImage={handleChangeImage}
        fileName='image'
        number={1}
        errorMessage={errors && errors.image && errors.image.message}
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
