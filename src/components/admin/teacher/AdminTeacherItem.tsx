import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";
import { IRegister } from "@/type/common.type";
import { Button, Modal } from "antd";
import CustomButtonDelete from "@/components/common/ButtonDelete";
import { useMutationDeleteUser } from "@/pages/api/auth.api";
import { useQueryClient } from "@tanstack/react-query";

export const AdminTeacherItem = ({ ID, name, email, avatar, code }: IRegister) => {
  const [open, setOpen] = useState(false);
  const { mutate: mutateDeleteUser } = useMutationDeleteUser()
  const queryClient = useQueryClient();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    mutateDeleteUser(Number(ID), {
      onSuccess: () => {
        queryClient.refetchQueries(['get-teacher']).then();
        handleCancel()
      }
    })
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="flex p-5 items-center my-[30px]  rounded-md	box-shadow-item justify-between">
      <Modal
        title="Bạn có chắc chắn xóa giảng viên này không?"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      </Modal>
      <div className="flex items-center">
        {
          avatar !== undefined && <Image
            src={avatar ? avatar : "/img/home-img.png"}
            width={100}
            height={100}
            className="rounded-full h-[100px]"
            alt=""
            objectFit="contain"
          />
        }

        <p className="flex flex-col pl-2.5 ">
          <span className="flex gap-2"><span>Giảng viên: </span>{name}</span>
          <span className="flex gap-2"><span>Email: </span>{email}</span>
          <span className="flex gap-2"><span>Mã số: </span>{code}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <CustomButtonDelete onClick={showModal} text="Xóa" />
        <Link href={routerConstant.admin.teacher.detail(Number(ID))}>
          <CustomButton text="Chi tiết" />
        </Link>
      </div>
    </div>
  );
};
