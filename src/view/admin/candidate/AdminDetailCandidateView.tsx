import CustomButton from "@/components/common/Button";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { UploadImage } from "@/components/common/UploadImage";
import { DATE_OF_BIRTH, PHONE } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useMutationUpdateUser, useQueryGetDetailUser } from "@/pages/api/auth.api";
import { FormUser } from "@/type/common.type";
import { UploadFile, UploadProps } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const AdminDetailCandidateView = () => {
  const router = useRouter();
  const [fileImage, setFileImage] = useState<UploadFile[]>([]);
  const teacherId = router?.query.candidate_id;
  const {
    formState: { errors },
    control,
    setValue,
    handleSubmit,
    setError
  } = useForm<FormUser>({
    mode: "onChange",
  });

  const { mutate } = useMutationUpdateUser()
  const { data } = useQueryGetDetailUser(Number(teacherId))
  const detailUser = data?.data
  useEffect(() => {
    setValue("name", detailUser?.name)
    setValue("date_of_birth", detailUser?.date_of_birth)
    setValue("phone_number", detailUser?.phone_number)
    setValue("address", detailUser?.address)
    setValue("code", detailUser?.code)
    if (!detailUser?.avatar) {
      setFileImage([]);
    } else {
      setFileImage([
        {
          uid: '1',
          name: '',
          status: 'done',
          url: detailUser?.avatar,
        },
      ]);
    }
  }, [detailUser])

  const handleChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setValue('avatar', newFileList?.[0]?.response?.data?.file);
    setFileImage(newFileList);
  };

  const onSubmit: SubmitHandler<FormUser> = (value) => {
    const { date_of_birth, ...rest } = value
    if (date_of_birth && !DATE_OF_BIRTH.test(date_of_birth)) {
      setError('date_of_birth', {
        type: 'custom',
        message: 'Ngày sinh phải đúng định dạng YYYY-MM-DD',
      });
      return
    }
    const newVal = Object.assign(rest, { date_of_birth: date_of_birth })
    mutate(newVal, {
      onSuccess: () => {
        router.push(routerConstant.admin.candidate.index)
      }
    })

  }

  return (
    <>
      <Label text="Cập nhập thông tin thí sinh:" />
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
          // rules={{
          //   required: {
          //     value: true,
          //     message: "Đây là bắt buộc",
          //   },
          //   minLength: {
          //     value: 6,
          //     message: "Mật khẩu phải lớn hơn 6 kí tự",
          //   },
          // }}
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
            <CustomButton type="submit" text="Cập nhật" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminDetailCandidateView;


