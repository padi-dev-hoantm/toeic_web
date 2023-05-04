import React, { useEffect, useState } from "react";
import { ScheduleFakeData } from "@/untils/fakeData";
import { Label } from "@/components/common/Label";
import CustomButton from "@/components/common/Button";
import { useForm } from "react-hook-form";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { useQueryGetDetailExam } from "@/pages/api/exams";
import { useRouter } from "next/router";

const AdminExamEditView = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
    reset
  } = useForm({
    defaultValues: {},
    mode: "onChange",
  });

  const router = useRouter()
  const id = router.query.id

  const { data } = useQueryGetDetailExam(Number(id))
  console.log(data)
  const exam = ScheduleFakeData[0];

  useEffect(() => {
    if (!data) return;
    if (!data.data) return;

    const { ...rest } = data.data;
    console.log('rest', rest)

    reset(rest);

  }, [data, reset]);

  const onSubmit = (value: any) => {
    console.log('ok', value)
  }

  return (
    <div className="pt-[30px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label text={`Bài thi: ${exam.exam_name}`} />
        <InputCommon
          type='text'
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
        <Label text="Chọn ngày và giờ thi: " />
        <DatePickerCommon
          name='exam_start_time'
          control={control}
          isRequired={true}
          label='Chọn ngày và giờ thi:'
          rules={{
            required: {
              value: true,
              message: "day la bat buoc",
            },
          }}
          errors={errors}
        />
        <Label text="Chọn bài thi:" />

        <div className="mt-[20px]">
          <CustomButton text="Cập nhật"></CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AdminExamEditView;
