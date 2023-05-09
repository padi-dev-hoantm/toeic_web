import { Input } from 'antd';
import { Controller } from 'react-hook-form';

const { TextArea } = Input;
Input.TextArea;
const TextAreaCommon = ({
  name,
  control,
  rules,
  message,
  label,
  isRequired = false,
  maxLength,
  errors,
  ...rest
}: any) => {
  const handleKeyDown = (e: any) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className='flex flex-col'>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <div
            className={`max-w-[400px] border rounded-md ${
              errors && errors[name] && errors[name].message ? 'border-red-400' : 'border-gray-400'
            }`}
          >
            <TextArea
              {...rest}
              onKeyDown={handleKeyDown}
              value={value}
              bordered={false}
              onChange={onChange}
              id={name}
              maxLength={maxLength}
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

export default TextAreaCommon;
