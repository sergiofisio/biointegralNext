"use client";
import Navbar from "./navbar";
import Hamburger from "./hamburger";
import Image from "next/image";

const nav = [
  {
    name: "inicio",
    href: "#inicio",
  },
  {
    name: "quem somos",
    href: "#quem",
  },
  {
    name: "técnicas",
    href: "#tecnica",
  },
  {
    name: "onde estamos",
    href: "#onde",
  },
  {
    name: "contato",
    href: "#contato",
  },
];

export default function Header() {
  return (
    <header className="flex items-center justify-around h-40 w-full">
      <Image
        className="w-80 h-auto md:w-60 md:h-auto"
        src="/assets/site/LOGO.svg"
        alt="Logo"
        width={200}
        height={200}
      />
      <Hamburger nav={nav} />
      <nav className="hidden sm:block">
        <Navbar nav={nav} />
      </nav>
    </header>
  );
}
