import Button from "@/components/common/Button";
import CustomInput from "@/components/common/Input";
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
            required: { value: true, message: "This field is required" },
          }}
          message={errors && errors.email && errors.email.message}
        />
        <CustomInput
          label="password"
          name="password"
          control={control}
          placeholder="password"
          rules={{
            required: { value: true, message: "This field is required" },
          }}
          message={errors && errors.password && errors.password.message}
        />
        <Button type="submit" text="Login" />
      </form>
    </div>
  );
};

export default LoginView;
