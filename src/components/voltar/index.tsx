import { Link } from "react-router-dom";
import voltarIcon from "../../assets/site/voltar-1.svg";
import { handleClick } from "../../functions/functions";

export default function Voltar({
  showBackButton,
}: {
  showBackButton: boolean;
}) {
  return (
    <Link
      onClick={(e) => handleClick(e, "#inicio")}
      to="#inicio"
      className={`fixed bottom-5 left-5 ${
        showBackButton ? "opacity-100" : "opacity-0"
      } transition-all duration-500 ease-in-out`}
    >
      <img src={voltarIcon} alt="Voltar" className="h-10 w-10" />
      <h2>Voltar</h2>
    </Link>
  );
}
