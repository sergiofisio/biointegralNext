"use client";
import Navbar from "./navbar";
import Hamburger from "./hamburger";

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
      <div className="w-80 h-20 relative md:w-60">
        <img src="/assets/site/LOGO.svg" alt="Logo" />
      </div>
      <Hamburger nav={nav} />
      <nav className="hidden sm:block">
        <Navbar nav={nav} />
      </nav>
    </header>
  );
}
