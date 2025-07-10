import { useMask } from "@react-input/mask";
import React, { useRef, useEffect } from "react";

interface InputContactProps {
  label: string;
  type: "text" | "textarea" | "email" | "number";
  placeholder?: string;
  mask?: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: boolean;
  onFocus: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const maskRef = useMask({
    mask: mask ?? "",
    replacement: { 9: /\d/ },
  });

  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== value) {
      inputRef.current.value = value;
    }
  }, [value]);

  return (
    <div className="flex flex-col w-full h-fit">
      <label className="uppercase text-2xl mb-1">{label}</label>

      {type === "textarea" ? (
        <textarea
          name={label}
          className={`border-2 border-solid ${
            error ? "border-red-500" : "border-black"
          } rounded-3xl h-40 !p-3 w-full`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
        />
      ) : mask ? (
        <input
          ref={maskRef}
          defaultValue={value}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={mask}
          className={`border-2 border-solid ${
            error ? "border-red-500" : "border-black"
          } rounded-3xl !px-3 h-10 w-full`}
          type="text"
        />
      ) : (
        <input
          ref={inputRef}
          type="text"
          className={`border-2 border-solid ${
            error ? "border-red-500" : "border-black"
          } rounded-3xl !px-3 h-10 w-full`}
          placeholder={mask ?? placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
      )}
    </div>
  );
}
