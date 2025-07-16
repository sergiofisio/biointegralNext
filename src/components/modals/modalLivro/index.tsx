import type { livro } from "../../../interfaces/interface";

export default function ModalLivro({
  setShowModal,
  livro,
}: {
  setShowModal: any;
  livro: livro;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bgModal z-50">
      <div className="relative flex items-center bg-white rounded-lg shadow-lg p-6 max-w-10/12 min-h-10/12 text-black select-none">
        <button
          className="absolute flex items-center justify-center top-2 right-2 text-3xl w-10 h-10 cursor-pointer text-black font-extrabold hover:scale-110 rounded-4xl border-2 border-black transition-all duration-500 ease-in-out hover:bg-black hover:text-white"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <img src={livro.img} alt={livro.nome} />
        <div className="flex flex-col items-center justify-between gap-10 !p-4 h-[-webkit-fill-available] w-full text-black">
          <h2 className="text-2xl mb-2 flex flex-col items-center gap-4 font-special">
            <strong className="font-bold text-6xl ">{livro.nome} </strong>
            {livro.subtitulo}
          </h2>
          <div className="flex flex-col gap-4 w-10/12 h-full">
            {livro.descricao.map((desc: any) => {
              return (
                <p key={desc.id} className="text-xl font-secondary indent-10">
                  {desc.paragrafo}
                </p>
              );
            })}
          </div>
          <h2 className="text-5xl font-bold text-center !px-10">
            Compre seu livro e comece agora sua jornada de transformação.
          </h2>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-6xl text-center">Preços</h2>
            <div className="flex flex-col gap-2">
              {livro.preco.map((preco: any) => {
                return (
                  <p
                    key={preco.id}
                    className="flex gap-4 text-3xl font-bold text-center"
                  >
                    {preco.ebook ? "E-book" : "Livro Físico"}:{" "}
                    <span className="text-blue">
                      {preco.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex gap-4">
            {livro.links.map((link: any) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue text-white rounded-4xl border-2 border-blue !px-20 !py-3 hover:bg-white hover:text-blue transition-all duration-500 ease-in-out text-2xl font-bold"
              >
                {link.nome.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
