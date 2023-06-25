import CustomButton from "@/components/common/Button";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { UploadImage } from "@/components/common/UploadImage";
import { DATE_OF_BIRTH, PHONE, REGEX_EMAIL } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useMutationRegister } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import { UploadFile, UploadProps } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const AdminTeacherCreateView = () => {
  const router = useRouter();
  const [fileImage, setFileImage] = useState<UploadFile[]>([
    {
      uid: '1',
      name: '',
      status: 'done',
      url:'https://kita.s3.ap-southeast-1.amazonaws.com/media%2F2023-05-28T12%3A49%3A17Z-128c787c8300765e2f11.jpg',
    },
  ]);
  const {
    formState: { errors },
    control,
    setValue,
    handleSubmit,
    setError
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const handleChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    console.log(123, newFileList)
    setValue('avatar', newFileList?.[0]?.response?.data?.file);
    setFileImage(newFileList);
  };
  const { mutate } = useMutationRegister()

  const onSubmit: SubmitHandler<IRegister> = (value) => {
    const { date_of_birth, ...rest } = value
    if (date_of_birth && !DATE_OF_BIRTH.test(date_of_birth)) {
      setError('date_of_birth', {
        type: 'custom',
        message: 'Ngày sinh phải đúng định dạng YYYY-MM-DD',
      });
      return
    }
    const role = { role: 3 }
    const newVal = Object.assign(role, rest, { date_of_birth: date_of_birth }, {avatar : 'https://kita.s3.ap-southeast-1.amazonaws.com/media%2F2023-05-28T12%3A49%3A17Z-128c787c8300765e2f11.jpg'})
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
          <Label text="Mã số:" />
          <InputCommon
            type='text'
            name='code'
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
          <Label text="Ảnh đại diện:" />
          <UploadImage
            fileList={fileImage}
            handleChangeImage={handleChangeImage}
            fileName='avatar'
            number={1}
          />
          <Label text="Ngày tháng năm sinh:" />
          <InputCommon
            type='text'
            name='date_of_birth'
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


