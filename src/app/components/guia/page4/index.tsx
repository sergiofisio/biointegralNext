import Image from "next/image";

export default function Page4() {
  return (
    <div className="bg-gradient-to-br from-white to-pink w-full h-full relative flex flex-col items-center justify-between p-20">
      <Image
        src="/assets/site/guia/bussola.png"
        alt="Imagem"
        width={100}
        height={100}
        className="m-0 absolute right-0 bottom-60"
      />
      <Image
        src="/assets/site/guia/logoAzul.png"
        alt="Imagem"
        width={300}
        height={100}
        className="m-0 absolute right-center -bottom-48"
      />
      <h2 className="text-4xl font-bold text-center text-blueDark">
        Compreendendo melhor nossa aventura
      </h2>
      <div className="text-3xl flex flex-col justify-around text-justify prose text-black h-full font-bold z-10">
        <p>
          Antes de partir em viagem iremos escolher quais tesouros iremos
          procurar. Para isto, você irá responder um questionário (mais a frente
          falaremos sobre isto) e faremos uma anamnese (avaliação).
        </p>

        <p className="pr-8">
          Nesta viagem de busca o seu corpo e as emoções, serão o nosso GPS. E a
          cada etapa da nossa jornada iremos utilizar ferramentas (técnicas)
          mais adequadas para ir retirando os obstáculos até chegar ao objetivo.
        </p>
      </div>
    </div>
  );
}
