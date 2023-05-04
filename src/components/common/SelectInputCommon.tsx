import { Select } from 'antd';
import { Controller } from 'react-hook-form';

const SelectInputCommon = ({
  control,
  name,
  rules,
  label,
  isRequired = false,
  children,
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
          <div
            className={`max-w-[400px] rounded-md border ${
              errors && errors[name] && errors[name].message ? 'border-red-400' : 'border-gray-400'
            }`}
          >
            <Select
              {...rest}
              className='w-full'
              bordered={false}
              value={value ? value : undefined}
              onChange={onChange}
            >
              {children}
            </Select>
          </div>
        )}
      />
      {errors && errors[name] && errors[name].message && (
        <span className='text-xs text-red-400 mt-1'>{errors[name].message}</span>
      )}
    </div>
  );
};

export default SelectInputCommon;
