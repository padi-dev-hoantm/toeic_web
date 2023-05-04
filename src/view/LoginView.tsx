import CustomButton from "@/components/common/Button";
import CustomInput from "@/components/common/Input";
import { REGEX_EMAIL } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { IFormLogin } from "@/type/common.type";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutationLogin } from "@/pages/api/auth.api";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { addCookie } from "@/untils/addCookies";

const LoginView = () => {
  const router = useRouter();
  const { mutate: mutateLogin } = useMutationLogin()
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormLogin>({
    defaultValues: {},
    mode: "onChange",
  });
  const handleLogin: SubmitHandler<IFormLogin> =  (value) => {
     mutateLogin(value, {
      onSuccess: (data) => {
        addCookie(data.data)
        router.push(routerConstant.admin.dashboard)
      }
    })
  };
  return (
    <div className="px-[30%] mt-[15%] ">
      <form onClick={handleSubmit(handleLogin)} className="">
        <Label text="Email:" />
        <InputCommon
          type='text'
          placeholder='email@gmail.com'
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
        <Label text="Mật khẩu:" />
        <InputCommon
          type='password'
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
          <CustomButton type="submit" text="Đăng nhập" />
        </div>
      </form>
    </div>
  );
};

export default LoginView;
