import { Input } from "antd";
import { Controller } from "react-hook-form";
import LabelRequired from "./LabelRequired";
import { IFormPropsCustomInput } from "@/type/common.type";

const CustomInput = ({
  control,
  name,
  rules,
  message,
  label,
  isRequired = false,
  ...rest
}: IFormPropsCustomInput) => {
  return (
    <div className="flex flex-col">
      <LabelRequired isRequired={isRequired} name={name} label={label} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <div
            className={`w-full rounded-md border ${
              message ? "border-red-400" : "border-gray-400"
            }`}
          >
            <Input
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
      {message ? (
        <span className="text-xs text-red-400 mt-1">{message}</span>
      ) : null}
    </div>
  );
};
export default CustomInput;
