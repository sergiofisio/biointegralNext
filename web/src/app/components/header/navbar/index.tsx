import Link from "next/link";

export default function Navbar({
  nav,
}: {
  nav: { name: string; href: string }[];
}) {
  return (
    <nav className="flex items-center justify-around w-[59rem]">
      {nav.map((item, key) => (
        <div key={key}>
          <Link
            className="transition-all duration-500 ease-in-out hover:font-bold uppercase text-2xl"
            key={item.name}
            href={item.href}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
