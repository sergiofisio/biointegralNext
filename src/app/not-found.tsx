import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <p>Erro 404</p>
        <h2>Pagina não encontrada</h2>

        <Link
          className="border-2 border-blue border-sold hover:bg-white hover:text-blue transition-all duration-300 ease-in-out text-white font-bold py-2 px-4 bg-blue rounded-3xl"
          href="/"
        >
          Voltar para home
        </Link>
      </div>
    </div>
  );
}
