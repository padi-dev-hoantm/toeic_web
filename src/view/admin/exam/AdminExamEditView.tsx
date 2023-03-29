import React, { useState } from "react";
import { ScheduleFakeData } from "@/untils/fakeData";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField, Autocomplete } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { Label } from "@/components/common/Label";
import CustomButton from "@/components/common/Button";

const AdminExamEditView = () => {
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
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  console.log("time", time);
  console.log("date", date);

  return (
    <div className="pt-[30px]">
      <Label text={`Bài thi: ${exam.exam_name}`} />
      <Label text="Chọn ngày và giờ thi: " />
      <div className="flex flex-wrap gap-[20px]">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={date} onChange={(newValue) => setDate(newValue)} />
          <TimePicker value={time} onChange={(newValue) => setTime(newValue)} />
        </LocalizationProvider>
      </div>
      <Label text="Chọn bài thi:" />
      <Autocomplete
        className="autoComplete"
        sx={{ width: 300 }}
        options={exams}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} margin="normal" />}
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
      <div className="mt-[20px]">
        <CustomButton text="Cập nhật"></CustomButton>
      </div>
    </div>
  );
};

export default AdminExamEditView;
