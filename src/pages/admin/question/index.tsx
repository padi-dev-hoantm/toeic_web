import { Controller, useFieldArray, useForm } from "react-hook-form";
import CustomButton from "@/components/common/Button";
import CustomButtonDelete from "@/components/common/ButtonDelete";
import DatePickerCommon from "@/components/common/DatePicker";
import InputCommon from "@/components/common/InputCommon";
import { Label } from "@/components/common/Label";
import Qill from "@/components/common/Qill";
import { useMutationCreateExam } from "@/pages/api/exams";
import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { useSetRecoilState } from "recoil";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { useEffect } from "react";


function App() {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("question");
  }, []);
  const { mutate } = useMutationCreateExam();

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "exam_questions",
  });
  const handleAudioUpload = (event: any, field: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const audioBase64 = reader.result;
        field.onChange(audioBase64);
      };
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        alert("Bạn đã tạo thành công")
      }
    })
  }
  return (
    <LayoutAdmin title="Schedule exam">
      <form onSubmit={handleSubmit(onSubmit)} className="ml-[50px]">
        <Label text="Nhập tên bài thi:" />
        <InputCommon
          type="text"
          name="exam_name"
          control={control}
          errors={errors}
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: "Đây là bắt buộc",
            },
          }}
        />
        <Label text="Nhập mô tả bài thi:" />
        <InputCommon
          type="text"
          name="exam_description"
          control={control}
          errors={errors}
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: "Đây là bắt buộc",
            },
          }}
        />
        <Label text="Nhập file nghe:" />
        <Controller
          name={`exam_audio`}
          control={control}
          render={({ field }) => (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleAudioUpload(e, field)}
              />
              {field.value && <img src={field.value} alt="Ảnh" />}
            </>
          )}
        />
        {/* <Label text="Thời gian bắt đầu bài thi:" />
      <DatePickerCommon
        name="exam_start_time"
        control={control}
        isRequired={true}
        rules={{
          required: {
            value: true,
            message: "Đây là bắt buộc",
          },
        }}
        errors={errors}
      />
      <Label text="Thời gian kết thúc bài thi:" />
      <DatePickerCommon
        name="exam_end_time"
        control={control}
        isRequired={true}
        rules={{
          required: {
            value: true,
            message: "Đây là bắt buộc",
          },
        }}
        errors={errors}
      /> */}
        <ul>
          {fields.map((item, index) => {
            return (
              <div key={index}>
                <Qill index={index} register={register} control={control} />
                <CustomButtonDelete
                  text="Delete"
                  type="button"
                  onClick={() => remove(index)}
                />
              </div>
            );
          })}
        </ul>
        <section className="mt-[20px]">
          <CustomButton
            text="Thêm câu hỏi mới"
            type="button"
            onClick={() => {
              append({});
            }}
          />
        </section>
        <section className="mb-[2px] text-center">
          <CustomButton type="submit" text="Tạo mới bài thi" />
        </section>
      </form>
    </LayoutAdmin>
  );
}

export default App;
