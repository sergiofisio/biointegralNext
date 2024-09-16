import { tailwindProperty } from "./../../functions/tailwind";
import { PulseLoader } from "react-spinners";
export default function Button({
  text,
  className,
  onClick,
  disabled,
}: {
  text: string;
  className?: string;
  onClick: (e: any) => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={`${className} text-white font-poppins rounded-3xl text-2xl transition-all duration-500 ease-in-out border-2  border-solid md:text-xl ${
        disabled
          ? "cursor-not-allowed bg-gray-500 border-gray-500"
          : `cursor-pointer bg-blue ${tailwindProperty("hover", [
              "text-blue",
              "bg-white",
            ])}`
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text === "Voltar" && !disabled && "⋘ "}
      {disabled ? <PulseLoader color="white" /> : text}
      {text === "Próximo" && !disabled && " ⋙"}
    </button>
  );
}
