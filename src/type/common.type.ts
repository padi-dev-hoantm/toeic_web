import { InputProps } from 'antd';
import {
    Control, RegisterOptions,
    UseFormGetValues,
    UseFormSetValue
  } from 'react-hook-form';
  
export interface IFormPropsCustomInput extends InputProps {
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