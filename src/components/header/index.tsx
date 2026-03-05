"use client";
import Navbar from "./navbar";
import Hamburger from "./hamburger";
import logo from "../../assets/site/LOGO.svg";

const nav = [
  {
    name: "início",
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
    <header
      id="inicio"
      className="flex items-center justify-between w-full h-24 !px-8 sm:px-12"
    >
      <img
        src={logo}
        alt="Logo Biointegral Saúde"
        className="h-16 w-auto sm:h-20"
      />
      <div className="flex items-center gap-4">
        <div className="sm:hidden">
          <Hamburger nav={nav} />
        </div>
        <nav className="hidden sm:block">
          <Navbar nav={nav} />
        </nav>
      </div>
    </header>
  );
}
