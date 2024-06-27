import Image from "next/image";

export default function Page11() {
  return (
    <div className="bg-gradient-to-br from-white to-gold w-full h-full relative flex flex-col items-center justify-between p-20">
      <Image
        src="/assets/site/guia/borboleta.png"
        alt="Imagem"
        width={200}
        height={200}
        className="m-0 absolute right-8 bottom-0"
      />
      <Image
        src="/assets/site/guia/logoLaranja.png"
        alt="Imagem"
        width={250}
        height={250}
        className="m-0 absolute -right-24 -top-24 rotate-12"
      />
      <h2 className="text-4xl font-bold text-center text-blueDark">
        Orientações para as sessões
      </h2>
      <ol className="text-3xl flex flex-col justify-evenly text-justify text-black h-full font-bold pb-8 stick z-10 md:text-xl">
        <li className="list-decimal">
          Desejar e estar na busca da mudança com comprometimento consigo.
        </li>
        <li className="list-decimal">
          Responder a ficha de avaliação com atenção, tranquilidade e
          principalmente honestidade
        </li>
        <li className="list-decimal">
          Eleger, com nossa orientação e apoio, os objetivos iniciais e quais
          técnicas serão mais adequadas para cada etapa do seu mergulho
          terapêutico.
        </li>
      </ol>
    </div>
  );
}
