import { InputProps } from "@/app/interfaces/interface";
import InputMask from "react-input-mask";

export default function Input({
  className,
  question,
  disabled,
  set,
  onFocus,
}: InputProps) {
  return (
    <div className={className}>
      <label className="uppercase">{question.question}</label>
      {question.type !== "textarea" ? (
        <InputMask
          mask={question.mask || ""}
          placeholder={question.mask || question.question}
          name="question"
          className={`border-2 border-solid rounded-3xl px-3 h-10 w-full ${
            question.error ? "border-red-500" : "border-black"
          } ${disabled && "bg-gray-500 bg-opacity-20 cursor-not-allowed"}`}
          type={question.type}
          onChange={set}
          value={question.value}
          disabled={disabled || false}
          onFocus={onFocus}
        />
      ) : (
        <textarea
          name="question"
          className={`border-2 border-solid border-black rounded-3xl h-40 p-3 w-full ${
            question.error ? "border-red-500" : "border-black"
          }`}
          onChange={set}
          value={question.value}
          onFocus={onFocus}
        />
      )}
    </div>
  );
}
