import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { Controller } from 'react-hook-form';

const DatePickerCommon = ({
  control,
  name,
  rules,
  defaultValue,
  errors,
  dateDisableBefore = dayjs(new Date()),
  showTime= true
}: any) => {
  return (
    <div className='flex flex-col'>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange } }) => (
          <div
            className={`max-w-[400px] rounded-md border ${errors && errors[name] && errors[name].message ? 'border-red-400' : 'border-gray-400'
              }`}
          >
            <DatePicker
              defaultValue={defaultValue}
              onChange={onChange}
              bordered={false}
              showTime={showTime}
              className='w-full'
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

export default DatePickerCommon;
