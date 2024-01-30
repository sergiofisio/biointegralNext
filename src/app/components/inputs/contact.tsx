import InputMask from "react-input-mask";
import { Dispatch, SetStateAction } from "react";

interface InputContactProps {
  label: string;
  type: string;
  placeholder: string;
  mask?: string;
  value: string;
  onChange: Dispatch<any>;
  error: boolean;
  onFocus: (e: any) => void;
}

export default function InputContact({
  label,
  type,
  placeholder,
  mask,
  value,
  onChange,
  error,
  onFocus,
}: InputContactProps) {
  return (
    <div className="flex flex-col w-full h-fit">
      <label className="uppercase text-2xl">{label}</label>
      {type !== "textarea" ? (
        <InputMask
          mask={mask || ""}
          placeholder={mask || placeholder}
          name={label}
          className={`border-2 border-solid ${
            error ? "border-red-500" : "border-black"
          } rounded-3xl px-3 h-10 w-full`}
          type={type}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
        />
      ) : (
        <textarea
          name={label}
          className={`border-2 border-solid ${
            error ? "border-red-500" : "border-black"
          } rounded-3xl h-40 p-3 w-full`}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
        />
      )}
    </div>
  );
}
