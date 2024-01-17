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
      className={`${className} h-20 text-white font-poppins rounded-3xl text-2xl p-4 transition-all duration-500 ease-in-out border-2 border-solid md:text-xl`}
      onClick={onClick}
      disabled={disabled}
    >
      {text === "Voltar" && "⋘ "}
      {text}
      {text === "Próximo" && " ⋙"}
    </button>
  );
}
