import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { Controller } from "react-hook-form";

const Qill = ({
  control,
  name,
  rules,
  type,
  isRequired = false,
  errors,
  ...rest
}: any) => {
  const { quill, quillRef } = useQuill();
 return (
    <div >
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <div
            className={`max-w-[400px] rounded-md border ${errors && errors[name] && errors[name].message ? 'border-red-400' : 'border-gray-400'
              }`}
          >
            <div ref={quillRef} />
          </div>
        )}
      />
      {errors && errors[name] && errors[name].message && (
        <span className='text-xs text-red-400 mt-1'>{errors[name].message}</span>
      )}
    </div>
  );
};
export default Qill;

