import { useLocation } from "react-router-dom";
import logo from "../../../assets/site/LOGO.svg";

export default function HeaderForm() {
  const location = useLocation();
  console.log({ location });

  return (
    <>
      {location.pathname === "/livros" ? (
        ""
      ) : (
        <header className="flex items-center justify-around bg-white h-full w-full">
          <img src={logo} alt="Logo Biointegral Saúde" />
        </header>
      )}
    </>
  );
}
