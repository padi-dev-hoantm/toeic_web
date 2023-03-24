import {
    Control, RegisterOptions,
    UseFormGetValues,
    UseFormSetValue
  } from 'react-hook-form';
  
export interface IFormPropsCustomInput  {
    name: string;
    message?: string;
    control: Control<any, any>;
    rules?: RegisterOptions;
    handleOnChange?: () => void;
    label?: string;
    isRequired?: boolean;
}

export interface IFormLogin {
    email: string
    password: string
}

export interface ITeacher{
  id?: number;
  email: string;
  name: string;
  level: string;
}

export interface ISchedule{
  id?: number;
  created_at?: string;
  exam_name?: string;
  exam_start_time?: string;
  exam_end_time?: string;
}