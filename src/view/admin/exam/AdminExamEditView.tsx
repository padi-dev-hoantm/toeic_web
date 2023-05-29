import React, { useEffect, useState } from "react";
import { ScheduleFakeData } from "@/untils/fakeData";
import { Label } from "@/components/common/Label";
import CustomButton from "@/components/common/Button";
import { useForm } from "react-hook-form";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { useQueryGetDetailExam, useQueryGetListExam } from "@/pages/api/exams";
import { useRouter } from "next/router";
import SelectInputCommon from "@/components/common/SelectInputCommon";

const AdminExamCreateView = () => {
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
  const { data } = useQueryGetListExam()
  const listExam = data?.data
  const optionsExam = listExam?.map((exam: any) =>
    Object.assign({ id: exam.id }, { value: exam.exam_name }),
  );

  const onSubmit = (value: any) => {
    console.log('ook', value)
  }

  return (
    <div className="pt-[30px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Label text='Tên kì thi:' />
        <InputCommon
          type='text'
          name='test_name'
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
          name='test_start_time'
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
        /> */}
        <Label text="Chọn bài thi:" />
        <SelectInputCommon
          control={control}
          name='exam_name'
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: 'day la bat buoc',
            },
          }}
          options={optionsExam}
          errors={errors}
        />
        <Label text="Chọn giảng viên:" />
        <SelectInputCommon
          control={control}
          name='teacher_name'
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: 'day la bat buoc',
            },
          }}
          options={optionsExam}
          errors={errors}
        />
        <div className="mt-[20px]">
          <CustomButton type="Submit" text="Tạo mới"/>
        </div>
      </form>
    </div>
  );
};

export default AdminExamCreateView;
