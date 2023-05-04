import React from "react";
import Image from "next/image";
import CustomButton from "@/components/common/Button";
import { useRouter } from "next/router";
import { routerConstant } from "@/constant/routerConstant";
import InputCommon from "@/components/common/InputCommon";
import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "@/components/common/Label";
import { PHONE, REGEX_EMAIL } from "@/constant/constant";
import RadioCommon from "@/components/common/RadioCommon";
import { useMutationRegister } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";

const AdminDashboardView = () => {
  const router = useRouter();

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const {mutate} = useMutationRegister()

  const onSubmit: SubmitHandler<IRegister> = (value)=> {
    const {...rest } = value
    const role = { role: 1 }
    const newVal = Object.assign(role, rest)
    mutate(newVal, {
      onSuccess: () => {
        router.push(routerConstant.admin.teacher.index)
      }
    })

  }

  return (
    <>
      <Label text="Mời nhập thông tin giảng viên:" />
      <div className="">
        <form onClick={handleSubmit(onSubmit)} className="">

          <Label text="Họ và tên:" />
          <InputCommon
            type='text'
            name='name'
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
          <Label text="Email:" />
          <InputCommon
            type='text'
            name='email'
            control={control}
            errors={errors}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: "Đây là bắt buộc",
              },
              pattern: {
                value: REGEX_EMAIL,
                message: "Email chưa đúng định dạng",
              },
            }}
          />
          <Label text="Ngày tháng năm sinh:" />
          <InputCommon
            type='text'
            name='date_of_birth'
            placeholder='2006-01-02'
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
          <Label text="Số điện thoại:" />
          <InputCommon
            type='text'
            name='phone_number'
            control={control}
            errors={errors}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: "Đây là bắt buộc",
              },
              pattern: {
                value: PHONE,
                message: "Đây là bắt buộc",
              },
            }}
          />
          <Label text="Mật khẩu:" />
          <InputCommon
            type='text'
            name='password'
            control={control}
            errors={errors}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: "Đây là bắt buộc",
              },
              minLength: {
                value: 6,
                message: "Mật khẩu phải lớn hơn 6 kí tự",
              },
            }}
          />
          <div className="mt-[20px] ">
            <CustomButton type="submit" text="Tạo mới" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminDashboardView;
