// InputProps.ts
import { Dispatch, SetStateAction } from "react";

export interface InputProps {
  className: string;
  disabled?: boolean;
  question: any;
  set?: Dispatch<SetStateAction<any>>;
  props?: any;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
}

export interface FormField {
  question: string;
  value: string;
  type?: string;
  options?: string[];
  error: boolean;
  required: boolean;
}

export interface SatisfacaoFormState {
  name: FormField;
  email: FormField;
  terapist: FormField;
  grade: FormField;
  comment: FormField;
  testmonial: FormField;
}
