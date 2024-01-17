import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Hamburger({
  nav,
}: {
  nav: { name: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sm:hidden relative w-10 h-10">
        <Image
          src="/assets/site/nav/hamburguer.svg"
          alt="Menu"
          layout="fill"
          objectFit="contain"
          onClick={() => setOpen(true)}
        />
      </div>
      <nav
        className={`absolute top-0 right-0 bg-blue w-full h-full flex flex-col items-center gap-5 p-5 ${
          open ? "flex" : "hidden"
        }`}
      >
        <button
          className="text-white w-10 h-10 border-white border-2 border-solid rounded-[100%] absolute top-2 right-2"
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </button>
        <ul className="text-3xl text-white w-full h-full flex flex-col items-center justify-evenly">
          {nav.map((item, key) => (
            <li
              key={key}
              className="border-2 border-solid border-white w-full text-center rounded-3xl"
            >
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
