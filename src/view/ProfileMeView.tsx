import CustomButton from "@/components/common/Button";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { PHONE } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useMutationUpdateUser, useQueryGetDetailUser, useQueryGetMe } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ProfileMeView = () => {
    const router = useRouter();
    const { data: dataMe } = useQueryGetMe();
    const data = dataMe?.data;
    const {
        formState: { errors },
        control,
        handleSubmit,
        reset
    } = useForm<IRegister>({
        mode: "onChange",
    });

    const { mutate } = useMutationUpdateUser()

    useEffect(() => {
        reset(data)
    }, [data])

    const onSubmit: SubmitHandler<IRegister> = (value) => {
        const { date_of_birth, ...rest } = value
        if (!date_of_birth) return
        let dateMonth = String(new Date(date_of_birth).getMonth())
        if (dateMonth.length < 2) {
            dateMonth = '0' + new Date(date_of_birth).getMonth()
        }
        const date = `${new Date(date_of_birth).getFullYear() + '-' + dateMonth + '-' + new Date(date_of_birth).getDate()}`
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
            <Label text="Cập nhật thông tin cá nhân:" />
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

export default ProfileMeView;
