import CustomButton from "@/components/common/Button";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { PHONE, REGEX_EMAIL } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useMutationUpdateUser, useQueryGetDetailUser } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const AdminTeacherDetailView = () => {
  const router = useRouter();
  const teacherId = router.query.teacher_id
  const {
    formState: { errors },
    control,
    handleSubmit,
    reset
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const { data } = useQueryGetDetailUser(Number(teacherId))
  const { mutate } = useMutationUpdateUser()
  const detailTeacher = data?.data

  useEffect(() => {
    reset(detailTeacher)
  }, [detailTeacher])

  const onSubmit: SubmitHandler<IRegister> = (value) => {
    const { CreatedAt, UpdatedAt, DeletedAt, ID, email, ...rest } = value
    const newVal = Object.assign(rest)
    mutate(newVal, {
      onSuccess: () => {
        router.push(routerConstant.admin.teacher.index)
      }
    })

  }

  return (
    <>
      <Label text="Thay đổi thông tin giảng viên:" />
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="">

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
          <Label text="Ngày tháng năm sinh:" />
          <DatePickerCommon
            name="date_of_birth"
            control={control}
            isRequired={true}
            showTime={false}
            rules={{
              required: {
                value: true,
                message: "Đây là bắt buộc",
              },
            }}
            errors={errors}
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
          <Label text="Địa chỉ" />
          <InputCommon
            type='text'
            name='address'
            control={control}
            errors={errors}
            isRequired={true}
          />
          <div className="mt-[20px] ">
            <CustomButton type="submit" text="Tạo mới" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminTeacherDetailView;
