import { Controller } from "react-hook-form";
import LabelRequired from "./LabelRequired";
import { TextField } from "@mui/material";
// import { ErrorMessage } from "@hookform/error-message";

const CustomInput = ({
  control,
  name,
  rules,
  message,
  label,
  errors,
  isRequired = false,
  ...rest
}: any) => {
  return (
    <div className="flex flex-col mb-[20px]">
      <LabelRequired isRequired={isRequired} name={name} label={label} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <div
            className={`parent-text w-full rounded-md border ${
              message ? "border-red-400" : "border-gray-400"
            }`}
          >
            <TextField
              {...rest}
              className="w-full"
              bordered={false}
              value={value}
              onChange={onChange}
              id={name}
            />
          </div>
        )}
      />
      {/* <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-left text-red-400">{message}</p>
        )}
      /> */}
    </div>
  );
};
export default CustomInput;
