import React from "react";

export default function InputSelect({
  key,
  className,
  question,
  set,
  onFocus,
}: {
  key?: number;
  className: string;
  question: any;
  set?: React.Dispatch<React.SetStateAction<any>>;
  onFocus?: (e: any) => void;
}) {
  console.log(question);

  return (
    <div key={key} className={className}>
      <label className="uppercase w-full">{question.question}</label>
      <select
        name="question"
        id="question"
        required={question.required}
        className={`${
          question.error ? "border-red-500" : "border-black"
        } flex border-black border-2 border-solid rounded-3xl max-h-full h-full w-full px-3`}
        onChange={set}
        onFocus={onFocus}
      >
        {question.options.map((option: any, key: number) => {
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
