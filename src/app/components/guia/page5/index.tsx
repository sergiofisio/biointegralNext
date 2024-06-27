import Image from "next/image";

export default function Page5() {
  return (
    <div className="bg-gradient-to-br from-white to-pink w-full h-full relative flex flex-col items-center justify-between p-20">
      <Image
        src="/assets/site/guia/anemona.png"
        alt="Imagem"
        width={100}
        height={100}
        className="m-0 absolute right-0 bottom-60"
      />

      <h2 className="text-4xl font-bold text-center text-blueDark">
        Compreendendo melhor nossa aventura
      </h2>
      <div className="text-3xl flex flex-col justify-around text-justify prose text-black h-full font-bold pb-8 z-10 md:text-xl">
        <p>
          A primeira etapa se inicia na parte rasa, onde iremos compreender a
          conexão do seu problema atual com as emoções, eventos e reações
          corporais;
        </p>

        <p className="pr-8">
          Seguindo o nosso mergulho na primeira profundidade vamos
          esvaziar/liberar tudo que estava represado no inconsciente, permitindo
          que se inicie o fluxo natural do pulsar da vida através do corpo.
        </p>
      </div>
      <div
        style={{ backgroundImage: 'url("/assets/site/guia/finalPag5.png")' }}
        className="absolute bottom-0 right-0 text-white bg-cover bg-center bg-no-repeat h-40 w-3/4 p-3 flex items-center justify-center text-center font-bold text-base px-8"
      >
        <p className="z-10 sticky">
          “Até você se tornar consciente, o inconsciente irá dirigir sua vida e
          você vai chamá-lo de destino.” Carl Jung, psiquiatra
        </p>
      </div>
    </div>
  );
}
