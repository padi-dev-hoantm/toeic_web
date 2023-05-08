import CustomButton from '@/components/common/Button';
import DatePickerCommon from '@/components/common/DatePicker';
import InputCommon from '@/components/common/InputCommon';
import { Label } from '@/components/common/Label';
import { useMutationCreateExam } from '@/pages/api/exams';
import { Form, Input, Button, Radio } from 'antd';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

const ExamForm = () => {
  const { mutate: mutateCreateExam } = useMutationCreateExam()
  const { control, handleSubmit, formState: { errors }, register } = useForm();
  const {
    fields: fields1,
    append: appen1,
    remove: remove1,
  } = useFieldArray({
    control,
    name: "exam_questions"
  });
  const {
    fields: fields2,
    append: appen2,
    remove: remove2,
  } = useFieldArray({
    control,
    name: "exam_questions"
  });

  const onSubmit = (data: any) => {
    const { exam_questions, ...rest } = data
    let isCorrect;
    exam_questions?.forEach(function (question: any) {
      question.answers?.forEach(function (answer: any) {
        console.log(123, answer.is_correct === 'on' ? 1 : 0)
      });
    });

    const newRest = { exam_questions, rest }
    mutateCreateExam(newRest, {
      onSuccess: () => {
        alert("ok")
      },
    });
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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='ml-[50px]'>
        <Label text="Tên bài thi:" />
        <InputCommon
          type='text'
          placeholder='exam name'
          name='exam_name'
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

        <Label text="Mô tả bài thi:" />
        <InputCommon
          type='text'
          placeholder='exam description'
          name='exam_description'
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
        <Label text="Thời gian bắt đầu bài thi:" />
        {/* <DatePickerCommon
          name='exam_start_time'
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
        <Label text="Thời gian kết thúc bài thi:" />
        <DatePickerCommon
          name='exam_end_time'
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
        {fields1.map((item, index) => {
          return (
            <div key={item.id}>
              <p>Câu hỏi</p>
              <InputCommon
                type='text'
                placeholder='exam description'
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
              <Controller
                name={`exam_questions.${index}.link`}
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, field)}
                    />
                    {field.value && <img src={field.value} alt="Ảnh" />}
                  </>
                )}
              />
              <InputCommon
                type='text'
                placeholder='exam description'
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
              <CustomButton
                type="button"
                onClick={() => {
                  appen2({});
                }}
                text="append answer"
              />
              {fields2.map((answer, answerIndex) => {
                return (
                  <div key={answer.id} className='flex'>
                    <p>Đúng Sai</p>
                    <input type="radio" {...register(`exam_questions.${index}.answers[${answerIndex}].is_correct`)} />
                    <p>res:</p>
                    <InputCommon
                      type='text'
                      placeholder='exam description'
                      name={`exam_questions.${index}.answers[${answerIndex}].content`}
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
                  </div>
                )
              })}

              <div className='mt-[10px] mb-[20px]'>
                <CustomButton text="remove" type="button" onClick={() => remove1(index)} />
              </div>
            </div>
          );
        })}
        <div className='mt-[20px]'>
          <CustomButton
            type="button"
            onClick={() => {
              appen1({});
            }}
            text="append"
          />
        </div>
        <div className='mt-[20px]'>
          <CustomButton type="submit" text="Tạo mới" />
        </div>
      </form>
    </>
  );
};

export default ExamForm;
