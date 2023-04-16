import React, { useState, useEffect } from "react";
import { ScheduleFakeData } from "@/untils/fakeData";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField, Autocomplete } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { Label } from "@/components/common/Label";
import CustomButton from "@/components/common/Button";
import CustomInput from "@/components/common/Input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ISchedule } from "@/type/common.type";
// import { ErrorMessage } from "@hookform/error-message";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const AdminExamCreateView = () => {
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
  const exam = ScheduleFakeData[0];
  const exams = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];

  const handleUpdate: SubmitHandler<ISchedule> = async (value) => {
    console.log("value", value);
  };

  useEffect(() => {
    register("exam_start_time", {
      required: "Đây là bắt buộc",
    });
    register("exam_name", {
      required: "Đây là bắt buộc",
    });
  }, [register, setValue]);

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

  const handleChangeExams = (name: "exam_name", value: any) => {
    setValue(name, value);
  };

  return (
    <form className="pt-[30px]" onSubmit={handleSubmit(handleUpdate)}>
      <CustomInput
        label="Bài thi:"
        name="exam_description"
        control={control}
        errors={errors}
        rules={{
          required: { value: true, message: "Đây là bắt buộc" },
        }}
        message={
          errors && errors.exam_description && errors.exam_description.message
        }
      />
      <Label text="Chọn ngày và giờ thi: " />
      <div>
        <Controller
          control={control}
          name="exam_start_time"
          render={() => (
            <div
              className={`rounded-md border ${
                errors.exam_start_time ? "border-red-400" : "border-gray-400"
              }`}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  onChange={(value: any) =>
                    handleChangeDatetime("exam_start_time", value)
                  }
                />
              </LocalizationProvider>
            </div>
          )}
        ></Controller>

        {/* <ErrorMessage
          errors={errors}
          name={"exam_start_time"}
          render={({ message }) => <p className="text-red-400">{message}</p>}
        /> */}
      </div>
      <Label text="Chọn bài thi:" />
      <Controller
        control={control}
        name="exam_name"
        render={() => (
          <div
            className={`rounded-md border ${
              errors.exam_start_time ? "border-red-400" : "border-gray-400"
            }`}
          >
            <Autocomplete
              className="autoComplete"
              sx={{ width: 300 }}
              options={exams}
              onChange={(value) => handleChangeExams("exam_name", value)}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} margin="normal" />
              )}
              renderOption={(props, option, { inputValue }) => {
                const matches = match(option.title, inputValue, {
                  insideWords: true,
                });
                const parts = parse(option.title, matches);

                return (
                  <li {...props}>
                    <div>
                      {parts.map((part, index) => (
                        <span
                          key={index}
                          style={{
                            fontWeight: part.highlight ? 700 : 400,
                          }}
                        >
                          {part.text}
                        </span>
                      ))}
                    </div>
                  </li>
                );
              }}
            />
          </div>
        )}
      ></Controller>
      {/* <ErrorMessage
        errors={errors}
        name={"exam_name"}
        render={({ message }) => <p className="text-red-400">{message}</p>}
      /> */}
      <div className="mt-[20px]">
        <CustomButton type="submit" text="Tạo mới"></CustomButton>
      </div>
    </form>
  );
};

export default AdminExamCreateView;
