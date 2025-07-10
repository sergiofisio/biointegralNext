import type React from "react";

export interface InputProps {
  className?: string;
  disabled?: boolean;
  question: FormField;
  set?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  props?:
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export interface FormField {
  question: string;
  value: string;
  type?: string;
  options?: string[];
  error: boolean;
  required: boolean;
  mask?: string;
}

export interface SatisfacaoFormState {
  name: FormField;
  email: FormField;
  terapist: FormField;
  grade: FormField;
  comment: FormField;
  testmonial: FormField;
}

export interface local {
  coordinates: {
    lat: number;
    lng: number;
  };
  address: {
    local: string;
    street: string;
    number: number;
    complement?: string;
  };
  maps: string;
}
