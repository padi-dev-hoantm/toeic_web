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
export interface IFormLogin {
  email: string
  password: string
}
export interface IRegister{
  ID?: number;
  email: string;
  name: string;
  password?: string;
  date_of_birth?: string;
  phone_number?: string;
  address?: string;
  role?: number;
  CreatedAt? : string;
  DeletedAt? : string;
  UpdatedAt? : string;
  code?: string;
  avatar?: string;
}

export interface ParamsListUser{
  code?: string;
  offset?: number;
  limit?: number;
}

export interface FormUser{
  ID?: number;
  email: string;
  name: string;
  password: string;
  date_of_birth: string;
  phone_number: string;
  address: string;
  role?: number;
  CreatedAt? : string;
  DeletedAt? : string;
  UpdatedAt? : string;
  code: string;
  avatar: string;
}

export interface ISchedule{
  id?: number;
  created_at?: string;
  exam_name?: string;
  exam_description?: string;
  exam_start_time?: string;
  exam_end_time?: string;
}

export interface IExam{
  exam_name: string;
  exam_description: string;
  exam_start_time: string;
  exam_end_time: string;
  exam_questions: string[];

}

export interface IExamInvite{
  exam_id: number;
  user_ids: string[];
}

export interface DeleteParams{
  exam_id: number;
  user_id: number;
}

