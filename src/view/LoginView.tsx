import Button from "@/components/common/Button";
import CustomInput from "@/components/common/Input";
import { REGEX_EMAIL } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { IFormLogin } from "@/type/common.type";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginView = () => {
  const router = useRouter();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormLogin>({
    defaultValues: {},
    mode: "onChange",
  });
  const handleLogin: SubmitHandler<IFormLogin> = async (value) => {
    console.log("value", value);
    router.push(routerConstant.admin.index);
  };
  return (
    <div>
      <form onClick={handleSubmit(handleLogin)}>
        <CustomInput
          label="email"
          name="email"
          control={control}
          placeholder="email"
          rules={{
            required: { value: true, message: "Đây là bắt buộc" },
            pattern: {
              value: REGEX_EMAIL,
              message: "Email chưa đúng định dạng",
            },
          }}
          message={errors && errors.email && errors.email.message}
        />
        <CustomInput
          label="password"
          name="password"
          control={control}
          placeholder="password"
          rules={{
            required: { value: true, message: "Đây là bắt buộc" },
            minLength: {
              value: 6,
              message: "Mật khẩu phải lớn hơn 6 kí tự",
            },
          }}
          message={errors && errors.password && errors.password.message}
        />
        <Button type="submit" text="Login" />
      </form>
    </div>
  );
};

export default LoginView;
