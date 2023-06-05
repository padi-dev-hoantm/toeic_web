import CustomButton from "@/components/common/Button";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { REGEX_EMAIL } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useMutationLogin } from "@/pages/api/auth.api";
import { IFormLogin } from "@/type/common.type";
import { addCookie } from "@/untils/addCookies";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

const LoginView = () => {
  const router = useRouter();
  const { mutate: mutateLogin } = useMutationLogin();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormLogin>({
    defaultValues: {},
    mode: "onChange",
  });
  const handleLogin: SubmitHandler<IFormLogin> = (value) => {
    mutateLogin(value, {
      onSuccess: (data) => {
        if (!data.data) {
          alert("Mật khẩu chưa chính xác");
        }
        else {
          addCookie(data.data);
          router.push(routerConstant.admin.dashboard);
        }
      },
    });
  };
  return (
      <div className="pt-[8%] flex justify-center ">
        <div className="box-shadow-item ">
          <Image
            src="/img/home-img.png"
            alt=""
            width={500}
            height={300}
            className="h-[100%]"
            objectFit="cover"
          />
        </div>
        <div className="w-[500px] box-shadow-item ">
          <form onSubmit={handleSubmit(handleLogin)} className="bg-[#fff] p-[50px]">
            <h1 className="text-center text-2xl font-bold text-[#4F4F4F]">HỆ THỐNG THI TOEIC CỦA UTC</h1>
            <Label text="Email:" />
            <InputCommon
              type="text"
              name="email"
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
              type="password"
              name="password"
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
            <div className="mt-[30px] flex justify-center">
              <CustomButton type="submit" text="Đăng nhập" />
            </div>
          </form>
        </div>
      </div>
  );
};

export default LoginView;
