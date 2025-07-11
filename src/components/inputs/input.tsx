// src/components/Input.tsx (or wherever this component resides)

import { IMaskInput } from "react-imask";
import type { InputProps } from "../../interfaces/interface";

export default function Input({
  className,
  question,
  disabled,
  set,
  onFocus,
  onBlur,
}: InputProps) {
  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;

    if (set) {
      set(e);
    }
  };

  return (
    <div className={className}>
      <label className="uppercase">{question.question}</label>
      {question.type !== "textarea" ? (
        <IMaskInput // Changed from InputMask to IMaskInput
          mask={question.mask || ""}
          placeholder={
            question.mask ? question.mask.replace(/9/g, "_") : question.question
          }
          name="question"
          className={`border-2 border-solid rounded-3xl !px-3 h-10 w-full ${
            question.error ? "border-red-500" : "border-black"
          } ${disabled && "bg-gray-500 bg-opacity-20 cursor-not-allowed"}`}
          type={question.type}
          value={question.value}
          disabled={disabled || false}
          onAccept={(value: string) => {
            if (set) {
              const syntheticEvent = {
                target: {
                  name: "question",
                  value: value,
                },
              } as React.ChangeEvent<HTMLInputElement>;
              set(syntheticEvent);
            }
          }}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
            if (onFocus) {
              onFocus(e);
            }
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            if (onBlur) {
              onBlur(e);
            }
          }}
        />
      ) : (
        <textarea
          name="question"
          className={`border-2 border-solid rounded-3xl resize-y h-fit overflow-hidden !p-3 w-full ${
            question.error ? "border-red-500" : "border-black"
          } ${disabled && "bg-gray-500 bg-opacity-20 cursor-not-allowed"}`}
          onChange={autoResize}
          value={question.value}
          onFocus={onFocus}
          disabled={disabled || false}
        />
      )}
    </div>
  );
}
