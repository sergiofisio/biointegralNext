"use client";
import Navbar from "./navbar";
import Hamburger from "./hamburger";
import logo from "../../assets/site/LOGO.svg";

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
  const isMobile = window.innerWidth < 640; // Check if the screen width is less than 640px

  return (
    <header
      id="inicio"
      className="flex items-center justify-around h-40 w-full"
    >
      <img src={logo} alt="Logo Biointegral Saúde" className="h-20" />
      {isMobile ? <Hamburger nav={nav} /> : ""}
      <nav className="hidden sm:block">
        <Navbar nav={nav} />
      </nav>
    </header>
  );
}
