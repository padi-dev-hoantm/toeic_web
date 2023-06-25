import CustomButton from "@/components/common/Button";
import SelectInputCommon from "@/components/common/SelectInputCommon";
import { useQueryGetAllStudent } from "@/pages/api/auth.api";
import { useMutationAddTakersToExam, useMutationDeleteUserFromExam, useMutationInviteExam, useQueryGetListTakersAdded } from "@/pages/api/exams";
import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const TeacherExamInviteView = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const selectedTakerIdRef = useRef<number>(null);

    const router = useRouter()
    const examId = router.query.exam_id
    const { data: dataStudent } = useQueryGetAllStudent()
    const { data: dataListTakers, refetch } = useQueryGetListTakersAdded(Number(examId))
    const { mutate: mutateInvite } = useMutationAddTakersToExam()
    const { mutate: mutateDeleteUserInExam } = useMutationDeleteUserFromExam()
    const { mutate: mutateInviteExam } = useMutationInviteExam(Number(examId))

    const queryClient = useQueryClient();

    const listTakers = dataListTakers?.data

    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm({
        defaultValues: {},
        mode: "onChange",
    });

    const optionCadidate = dataStudent?.data
    const selectCandidate = optionCadidate?.map((candidate: any, index: number) => {
        return { value: candidate.ID, label: candidate.name }
    })


    const onSubmit = (value: any) => {
        const dataSubmit = {
            exam_id: Number(examId),
            user_ids: value.user_ids
        }
        mutateInvite(dataSubmit, {
            onSuccess: (response: any) => {
                console.log(`status`, response.status)
                if (response.status === "Thành công") {
                    alert("Thành công")
                    refetch().then()
                } else {
                    alert("Thí sinh đã được mời bài thi này, xin vui lòng thử lại")
                }
            }
        })
    }

    const showModal = (takerId: number) => {
        selectedTakerIdRef.current = takerId;
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const handleOk = () => {
        const takerId = selectedTakerIdRef.current;

        mutateDeleteUserInExam({
            exam_id: Number(examId),
            user_id: Number(takerId)
        }, {
            onSuccess: () => {
                queryClient.refetchQueries(['get-list-takers-added']).then();
                handleCancel()
            }
        })
    }

    const openModal = () => {
        setShow(true);
    };

    const handleClosed = () => {
        setShow(false);
    };

    const handleInvite = () => {
        mutateInviteExam()
        handleClosed()
    }

    return (
        <div className="mt-[20px]">
            <div className="flex items-center justify-between">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className=" text-2xl font-bold text-[#4F4F4F] py-[20px]">Mời thí sinh làm bài thi</h1>

                    <SelectInputCommon
                        control={control}
                        name='user_ids'
                        isRequired={true}
                        rules={{
                            required: {
                                value: true,
                                message: 'Đây là bắt buộc',
                            },
                        }}
                        mode='multiple'
                        options={selectCandidate}
                        optionFilterProp='label'
                        errors={errors}
                    />
                    <div className="mt-[20px]">
                        <CustomButton text="Chọn" type="submit" />
                    </div>

                </form>
                <Modal
                    title="Sau khi mời thi bạn sẽ không được xóa thí sinh nữa, bạn có chắc chắn muốn mời thi bây giờ không?"
                    open={show}
                    onOk={() => handleInvite()}
                    onCancel={handleClosed}
                >
                </Modal>
                <div className="mt-[20px]" onClick={() => openModal()}>
                    <CustomButton text="Mời thi" />
                </div>
            </div>
            <h1 className=" text-2xl font-bold mt-5 text-[#4F4F4F]">
                Danh sách thí sinh đã được mời
            </h1>
            {
                listTakers?.map((taker: any, index: number) => {
                    const takerId = taker.ID
                    return (
                        <div key={index} className="box-shadow-item my-[20px] flex items-center justify-between p-[20px]">
                            <div>
                                <p>Họ và tên: {taker.name}</p>
                                <p>Mã số: {taker.code}</p>
                                <p>Email: {taker.email}</p>

                            </div>
                            <Modal
                                key={index}
                                title="Bạn có chắc chắn xóa thí sinh khỏi bài thi này không?"
                                open={open}
                                onOk={() => handleOk()}
                                onCancel={handleCancel}
                            >
                            </Modal>
                            <button
                                onClick={() => showModal(takerId)}
                                className="bg-[red] text-white px-[10px] h-[30px]"
                            >
                                Xóa
                            </button>
                        </div>
                    )
                }
                )
            }

        </div>
    );
};

export default TeacherExamInviteView;
