import { Input } from 'antd';
import { Controller } from 'react-hook-form';

const InputCommon = ({
  control,
  name,
  rules,
  type,
  isRequired = false,
  errors,
  ...rest
}: any) => {
  return (
    <div className='flex flex-col mb-[20px]'>
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
            <Input
              {...rest}
              className='w-full hidden-spin-button'
              bordered={false}
              value={value}
              onChange={onChange}
              id={name}
              type={type}
            />
          </div>
        )}
      />
      {errors && errors[name] && errors[name].message && (
        <span className='text-xs text-red-400 mt-1'>{errors[name].message}</span>
      )}
    </div>
  );
};
export default InputCommon;
