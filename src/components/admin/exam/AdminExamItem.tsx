import { ISchedule } from "@/type/common.type";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/common/Button";
import { routerConstant } from "@/constant/routerConstant";
import { formatDateTime } from "@/untils/handleDateTime";
import CustomButtonDelete from "@/components/common/ButtonDelete";
import { useQueryClient } from "@tanstack/react-query";
import { useMutationDeleteExam } from "@/pages/api/exams";
import { Modal } from "antd";

export const AdminExamItem = ({
  id,
  exam_name,
  exam_start_time,
}: ISchedule) => {
  const [open, setOpen] = useState(false);
  const {mutate: mutateDeleteUser} = useMutationDeleteExam()
  const queryClient = useQueryClient();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    mutateDeleteUser(Number(id), {
      onSuccess: () => {
        queryClient.refetchQueries(['get-list-exam']).then();
        handleCancel()
      }
    })
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="p-5 items-center my-[30px] box-shadow-item rounded-md	flex justify-between">
      <Modal
        title="Bạn có chắc chắn xóa bài thi này không?"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      </Modal>
      <div className="mr-[30%] ">
        <p>Bài thi: {exam_name}</p>
        <p>Bài thi bắt đầu lúc: {formatDateTime(exam_start_time)}</p>
      </div>
      <div className="flex gap-2">
        <CustomButtonDelete onClick={showModal} text="Xóa" />
        <Link href={routerConstant.admin.exam.detail(Number(id))}>
          <CustomButton text="Chi tiết" />
        </Link>
      </div>
    </div>
  );
};
