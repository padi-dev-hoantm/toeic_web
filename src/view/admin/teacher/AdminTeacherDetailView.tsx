import CustomButton from "@/components/common/Button";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import { PHONE, REGEX_EMAIL } from "@/constant/constant";
import { routerConstant } from "@/constant/routerConstant";
import { useMutationUpdateUser, useQueryGetDetailUser } from "@/pages/api/auth.api";
import { IRegister } from "@/type/common.type";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const AdminTeacherDetailView = () => {
  const router = useRouter();
  const teacherId = router.query.teacher_id
  const {
    formState: { errors },
    control,
    handleSubmit,
    reset
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const { data } = useQueryGetDetailUser(Number(teacherId))
  const { mutate } = useMutationUpdateUser()
  const detailTeacher = data?.data

  useEffect(() => {
    reset(detailTeacher)
  }, [detailTeacher])

  const onSubmit: SubmitHandler<IRegister> = (value) => {
    const { CreatedAt, UpdatedAt, DeletedAt, ID, email, ...rest } = value
    const newVal = Object.assign(rest)
    mutate(newVal, {
      onSuccess: () => {
        router.push(routerConstant.admin.teacher.index)
      }
    })

  }

  return (
    <>
      <Label text="Chi tiết thông tin giảng viên:" />
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="">

          <Label text="Họ và tên:" />
          <p className="ml-[20px]">- {detailTeacher?.name}</p>
          <Label text="Ngày tháng năm sinh:" />

          <p className="ml-[20px]"> - {detailTeacher?.date_of_birth?.split("T")[0]}</p>

          <Label text="Số điện thoại:" />
          <p className="ml-[20px]">- {detailTeacher?.phone_number}</p>

          <Label text="Địa chỉ" />
          <p className="ml-[20px]">- {detailTeacher?.address}</p>

        </form>
      </div>
    </>
  );
};

export default AdminTeacherDetailView;
