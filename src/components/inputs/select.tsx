import React from "react";
import type { FormField } from "../../interfaces/interface";

export default function InputSelect({
  className,
  question,
  set,
  onFocus,
}: {
  className: string;
  question: FormField;
  set?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className={className}>
      <label className="uppercase w-fit">{question.question}</label>
      <select
        name="question"
        id="question"
        required={question.required}
        className={`${
          question.error ? "border-red-500" : "border-black"
        } flex border-black border-2 border-solid rounded-3xl max-h-full h-full w-fit px-3 max-md:h-16`}
        onChange={set}
        onFocus={onFocus}
        value={question.value}
      >
        {question.options?.map((option: any, key: number) => {
          return (
            <option className="text-black" key={key} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
