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
        addCookie(data.data);
        alert("Bạn đã đăng nhập thành công");
        router.push(routerConstant.admin.dashboard);
      },
      onError: () => {
        alert("Đang xảy ra lỗi, vui lòng thử lại sau");
      },
    });
  };
  return (
    <div className="px-[30%] mt-[15%] ">
      <form onClick={handleSubmit(handleLogin)} className="">
        <Label text="Email:" />
        <InputCommon
          type="text"
          placeholder="email@gmail.com"
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
        <div className="mt-[20px] ">
          <CustomButton type="submit" text="Đăng nhập" />
        </div>
      </form>
    </div>
  );
};

export default LoginView;
