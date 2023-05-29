import { Controller } from 'react-hook-form';
import React from 'react';

const RadioCommon = ({
  control,
  name,
  rules,
  label,
  isRequired = false,
  listOption,
  errors,
  ...rest
}: any) => {
  return (
    <div className='flex flex-col'>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <div className='flex gap-[16px]'>
            {listOption.length &&
              listOption.map((option: any, key: number) => (
                <div className='flex items-center gap-[8px]' key={key}>
                  <input
                    {...rest}
                    className='w-[18px] h-[18px] cursor-pointer'
                    type='radio'
                    id={JSON.stringify(option)}
                    value={option.value}
                    onChange={onChange}
                    checked={value === option.value}
                  />
                  <label
                    htmlFor={JSON.stringify(option)}
                    className='text-black/[0.85] text-sm leading-[22px] cursor-pointer'
                  >
                    {option.label}
                  </label>
                </div>
              ))}
          </div>
        )}
      />
      {errors && errors[name] && errors[name].message && (
        <span className='text-xs text-red-400 mt-1'>{errors[name].message}</span>
      )}
    </div>
  );
};
export default RadioCommon;
