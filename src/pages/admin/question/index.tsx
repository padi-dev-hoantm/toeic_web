import AccordionCommon from "@/components/common/AccordionCommon";
import CustomButton from "@/components/common/Button";
import FormQuestion from "@/components/common/FormQuestion";
import CustomInput from "@/components/common/Input";
import { Label } from "@/components/common/Label";
import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import { REGEX_EMAIL } from "@/constant/constant";
import { currentMenuItemState } from "@/recoil/side-bar.recoil";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import match from "autosuggest-highlight/match";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ISchedule } from "@/type/common.type";
import { ErrorMessage } from "@hookform/error-message";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AdminQuestion = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("question");
  }, []);

  const {
    formState: { errors },
    control,
    register,
    setValue,
    handleSubmit,
    clearErrors,
  } = useForm<ISchedule>({
    defaultValues: {},
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };
  const [quests, setQuests] = useState(1);

  const handleAddQuest = () => {
    setQuests(quests + 1);
    console.log("quest", quests);
  };

  const handleRemoveQuest = () => {
    setQuests(quests - 1);
  };

  const renderTD = () => {
    let div = [];

    for (let i = 1; i <= quests; i++) {
      div.push(
        <div key={i} className="mb-[20px]">
          <FormQuestion onClick={handleRemoveQuest} part={2} />
        </div>
      );
    }
    return div;
  };
  const handleChangeDatetime = (
    name: "exam_start_time",
    value: dayjs.Dayjs | null
  ) => {
    setValue(name, value?.format("YYYY-MM-DD HH:mm:ss") ?? "");
    if (value) {
      clearErrors(name);
    }
    console.log("date", name, value);
  };
  useEffect(() => {
    register("exam_start_time", {
      required: "Đây là bắt buộc",
    });
    register("exam_name", {
      required: "Đây là bắt buộc",
    });
  }, [register, setValue]);
  const handleChangeExams = (name: "exam_name", value: any) => {
    setValue(name, value);
  };
  return (
    <LayoutAdmin title="List question">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div className="mb-[20px]">
          {/* <AccordionCommon titleText="Cài đặt hiển thị">
            <div>
              <CustomInput
                label="Bài thi:"
                name="exam_name"
                control={control}
                errors={errors}
                rules={{
                  required: { value: true, message: "Đây là bắt buộc" },
                }}
                // message={
                //   errors && errors.exam_description && errors.exam_description.message
                // }
              />
              <p>Chọn ngày và giờ thi:</p>
              <Controller
                control={control}
                name="exam_start_time"
                render={() => (
                  <div
                    className={`rounded-md border ${
                      errors.exam_start_time
                        ? "border-red-400"
                        : "border-gray-400"
                    }`}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        className="w-full"
                        format="YYYY-MM-DD HH:mm:ss"
                      />
                    </LocalizationProvider>
                  </div>
                )}
              ></Controller>
            </div>
          </AccordionCommon> */}
        </div>
        {renderTD()}
        <div className="fixed bottom-0.5 right-5">
          <CustomButton text="Tạo câu hỏi mới" onClick={handleAddQuest} />
        </div>

        <div className="mt-5">
          <CustomButton type="submit" text="Submit"></CustomButton>
        </div>
      </form>
    </LayoutAdmin>
  );
};

export default AdminQuestion;
