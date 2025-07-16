import type { livro } from "../../interfaces/interface";
import Button from "../button";

export default function CardLivro({
  setShowModal,
  setInfoLivro,
  livro,
}: {
  setShowModal: any;
  setInfoLivro: any;
  livro: livro;
}) {
  function handleClick() {
    setInfoLivro(livro);
    setShowModal(true);
  }
  return (
    <div className="flex flex-col items-center justify-center !p-4 text-black rounded-lg shadow-lg bg-white gap-3">
      <img
        src={livro.img}
        alt={livro.nome}
        className="w-48 h-64 object-cover mb-4 rounded shadow-[1px_1px_40px_1px] shadown-gray-900"
      />
      <h2 className="text-xl font-bold text-black">{livro.nome}</h2>
      <h3 className="text-md ">{livro.subtitulo}</h3>
      <Button
        text="Comprar"
        className="bg-blue !px-4 !py-2 select-none"
        onClick={() => handleClick()}
      />
    </div>
  );
}
