import { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerIcon from "../../../assets/site/nav/hamburguer.svg";
import { handleClick } from "../../../functions/functions";

export default function Hamburger({
  nav,
}: {
  nav: { name: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menu de navegação"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center justify-center w-10 h-10"
      >
        <img src={hamburgerIcon} alt="Ícone de menu" className="w-8 h-8" />
      </button>
      <nav
        className={`absolute top-0 right-0 z-20 bg-blue w-screen h-screen flex flex-col items-center gap-5 p-5 ${
          open ? "flex" : "hidden"
        }`}
        aria-label="Navegação principal mobile"
      >
        <button
          type="button"
          className="text-white w-10 h-10 border-white border-2 border-solid rounded-full absolute top-2 right-2"
          onClick={() => {
            setOpen(false);
          }}
          aria-label="Fechar menu"
        >
          X
        </button>
        <ul className="text-3xl text-white w-full h-full flex flex-col items-center justify-evenly">
          {nav.map((item, key) => (
            <li
              key={key}
              className="border-2 border-solid border-white w-full text-center rounded-3xl"
            >
              <Link
                key={item.name}
                to={item.href}
                onClick={e => {
                  handleClick(e, item.href);
                  setOpen(false);
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
