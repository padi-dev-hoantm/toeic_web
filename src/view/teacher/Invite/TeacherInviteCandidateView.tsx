import CustomButton from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import SelectInputCommon from "@/components/common/SelectInputCommon";
import { useQueryGetListStudent } from "@/pages/api/auth.api";
import { useMutationAddTakersToExam, useQueryGetListExam } from "@/pages/api/exams";
import { useForm } from "react-hook-form";


const TeacherInviteCandidateView = () => {
    const { data: dataStudent } = useQueryGetListStudent()
    const { data: dataExam } = useQueryGetListExam()
    const { mutate: mutateInvite } = useMutationAddTakersToExam()

    const {
        formState: { errors },
        control,
        handleSubmit,
        register,
        reset
    } = useForm({
        defaultValues: {},
        mode: "onChange",
    });

    const optionCadidate = dataStudent?.data
    const selectCandidate = optionCadidate?.map((candidate: any, index: number) => {
        return {  value: candidate.ID, label: candidate.name  }
    })

    const optionExam = dataExam?.data
    const selectExam = optionExam?.map((exam: any, index: number) => {
        return { value: exam.id, label: exam.exam_name}
    })
    const onSubmit = (value: any) => {
        mutateInvite(value, {
            onSuccess: () => {
                
            }
        })
    }

    return (
        <div className="mt-[20px]">
            <h1 className=" text-2xl font-bold text-[#4F4F4F]">Mời thí sinh làm bài thi</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Label text="Chọn thí sinh:" />
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
                <Label text="Chọn bài thi:" />
                <SelectInputCommon
                    control={control}
                    name='exam_id'
                    isRequired={true}
                    rules={{
                        required: {
                            value: true,
                            message: 'Đây là bắt buộc',
                        },
                    }}
                    options={selectExam}
                    errors={errors}
                />
                <div className="mt-[20px]">
                    <CustomButton text="Mời thi" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default TeacherInviteCandidateView;
