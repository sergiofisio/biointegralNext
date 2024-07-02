import { handleClick } from "@/app/functions/functions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Voltar({
  showBackButton,
}: {
  showBackButton: boolean;
}) {
  const router = useRouter();
  return (
    <Link
      onClick={(e) => handleClick(e, "#inicio", router)}
      href="#inicio"
      className={`fixed bottom-5 left-5 ${
        showBackButton ? "opacity-100" : "opacity-0"
      } transition-all duration-500 ease-in-out`}
    >
      <Image
        className="w-10 h-10 rounded-[100%]"
        src="/assets/site/voltar-1.svg"
        alt="Voltar"
        width={200}
        height={200}
      />
      <h2>Voltar</h2>
    </Link>
  );
}
