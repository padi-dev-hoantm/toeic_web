import CustomButton from "@/components/common/Button";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { PHONE, REGEX_EMAIL } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useMutationRegister } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

const AdminTeacherCreateView = () => {
  const router = useRouter();

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const { mutate } = useMutationRegister()

  const onSubmit: SubmitHandler<IRegister> = (value) => {
    const { date_of_birth, ...rest } = value
    if (!date_of_birth) return
    const date = `${new Date(date_of_birth).getFullYear() + '-' + new Date(date_of_birth).getMonth() + '-' + new Date(date_of_birth).getDate()}`
    console.log(111, date)
    const role = { role: 3 }
    const newVal = Object.assign(role, rest, { date_of_birth: date })
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

export default AdminTeacherCreateView;


