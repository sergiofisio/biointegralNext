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
