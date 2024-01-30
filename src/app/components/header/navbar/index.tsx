import { handleClick } from "@/app/functions/functions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({
  nav,
}: {
  nav: { name: string; href: string }[];
}) {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-around w-[59rem]">
      {nav.map((item, key) => (
        <div key={key}>
          <Link
            className="transition-all duration-500 ease-in-out hover:font-bold uppercase text-2xl"
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, router)}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
