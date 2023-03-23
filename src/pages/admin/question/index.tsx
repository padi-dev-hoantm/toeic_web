import Button from "@/components/common/Button";
import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { REGEX_EMAIL } from "@/constant/constant";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { Input } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

const AdminQuestion = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("question");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log("data", data);
  };
  return (
    <LayoutAdmin title="List question">
      <p>AdminQuestion</p>
      <p>demo</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: { value: true, message: "Trường này là bắt buộc" },
            pattern: {
              value: REGEX_EMAIL,
              message: "Email chưa đúng định dạng",
            },
          }}
          render={({ field: { onChange, onBlur } }) => (
            <Input
              onBlur={onBlur} // notify when input is touched
              onChange={onChange} // send value to hook form
            />
          )}
        />
        <p className="text-[red]">{errors.email && errors.email.message}</p>
        <Button text="Submit"></Button>
      </form>
    </LayoutAdmin>
  );
};

export default AdminQuestion;
