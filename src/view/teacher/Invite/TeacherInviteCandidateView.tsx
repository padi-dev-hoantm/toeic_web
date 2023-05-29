import CustomButton from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import SelectInputCommon from "@/components/common/SelectInputCommon";
import { useQueryGetListStudent } from "@/pages/api/auth.api";
import { useForm } from "react-hook-form";


const TeacherInviteCandidateView = () => {
    const { data } = useQueryGetListStudent()

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
    const optionCadidate = data?.data
    const selectCandidate = optionCadidate?.map((candidate: any, index: number) => {
        return {id : candidate.ID, value: candidate.name}
    })
    console.log(123, selectCandidate)
    return (
        <div className="mt-[20px]">
            <h1 className=" text-2xl font-bold text-[#4F4F4F]">Mời thí sinh làm bài thi</h1>

            <Label text="Chọn thí sinh:" />
            <SelectInputCommon
                control={control}
                name='exam_name'
                isRequired={true}
                rules={{
                    required: {
                        value: true,
                        message: 'day la bat buoc',
                    },
                }}
                options={selectCandidate}
                errors={errors}
            />
            <Label text="Chọn bài thi:" />
            <SelectInputCommon
                control={control}
                name='exam_name'
                isRequired={true}
                rules={{
                    required: {
                        value: true,
                        message: 'day la bat buoc',
                    },
                }}
                options={optionCadidate}
                errors={errors}
            />
            <div className="mt-[20px]">
                <CustomButton text="Mời thi" />
            </div>
        </div>
    );
};

export default TeacherInviteCandidateView;
