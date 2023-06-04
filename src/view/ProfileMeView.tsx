import CustomButton from "@/components/common/Button";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { UploadImage } from "@/components/common/UploadImage";
import { DATE_OF_BIRTH, PHONE } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useMutationUpdateUser, useQueryGetDetailUser, useQueryGetMe } from "@/pages/api/auth.api";
import { FormUser, IRegister } from "@/type/common.type";
import { UploadFile, UploadProps } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ProfileMeView = () => {
    const router = useRouter();
    const [fileImage, setFileImage] = useState<UploadFile[]>([]);

    const { data: dataMe } = useQueryGetMe();
    const data = dataMe?.data;
    const {
        formState: { errors },
        control,
        handleSubmit,
        reset,
        setValue,
        setError
    } = useForm<IRegister>({
        mode: "onChange",
    });

    const { mutate } = useMutationUpdateUser()

    useEffect(() => {
        reset(data)
        setValue("date_of_birth", data?.date_of_birth?.split("T")[0])
        setValue("avatar", data?.avatar)
        if (data?.avatar) {
            setFileImage([
                {
                    uid: '1',
                    name: '',
                    status: 'done',
                    url: data?.avatar,
                },
            ]);
        } else {
            setFileImage([]);
        }
    }, [data])

    const onSubmit = (value: any) => {
        const { password, date_of_birth, CreatedAt, DeletedAt, ID, UpdatedAt, role, email, ...rest } = value
        if (!DATE_OF_BIRTH.test(date_of_birth)) {
            setError('date_of_birth', {
                type: 'custom',
                message: 'Ngày sinh phải đúng định dạng YYYY-MM-DD',
            });
            return
        }
        let newVal;
        if (!password) {
            newVal = Object.assign(rest, { date_of_birth: date_of_birth })
        }
        else {
            newVal = Object.assign(rest, { date_of_birth: date_of_birth } , {password: password})
        }

        mutate(newVal, {
            onSuccess: () => {
                router.push(routerConstant.admin.teacher.index)
            }
        })

    }
    const handleChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        console.log(123, newFileList)
        setValue('avatar', newFileList?.[0]?.response?.data?.file);
        setFileImage(newFileList);
    };
    return (
        <>
            <div className="mt-[20px]">
                <h1 className=" text-2xl font-bold text-[#4F4F4F]">Cập nhật thông tin cá nhân</h1>
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
                    <UploadImage
                        fileList={fileImage}
                        handleChangeImage={handleChangeImage}
                        fileName='avatar'
                        number={1}
                    />
                    <Label text="Ngày tháng năm sinh:" />
                    {/* <DatePickerCommon
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
                    /> */}
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
                    <Label text="Địa chỉ" />
                    <InputCommon
                        type='text'
                        name='address'
                        control={control}
                        errors={errors}
                        isRequired={true}
                    />
                    <Label text="Mật khẩu:" />
                    <InputCommon
                        type='text'
                        name='password'
                        control={control}
                        errors={errors}
                        isRequired={true}
                        rules={{
                            minLength: {
                                value: 6,
                                message: "Mật khẩu phải lớn hơn 6 kí tự",
                            },
                        }}
                    />
                    <div className="mt-[20px] ">
                        <CustomButton type="submit" text="Cập nhật" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileMeView;
