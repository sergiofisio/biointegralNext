import { PulseLoader } from "react-spinners";
import { tailwindProperty } from "../../functions/tailwind";
export default function Button({
  text,
  type: string,
  className,
  onClick,
  disabled,
}: {
  text: string;
  type?: "submit" | "button" | "reset";
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
      type={string || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {text === "Voltar" && !disabled && "⋘ "}
      {disabled ? <PulseLoader color="white" /> : text}
      {text === "Próximo" && !disabled && " ⋙"}
    </button>
  );
}
