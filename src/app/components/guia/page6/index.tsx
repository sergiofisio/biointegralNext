import Image from "next/image";

export default function Page6() {
  return (
    <div className="bg-gradient-to-br from-white to-blue w-full h-full relative flex flex-col items-center justify-between p-20">
      <Image
        src="/assets/site/guia/tubarao.png"
        alt="Imagem"
        width={200}
        height={200}
        className="m-0 absolute right-8 bottom-0"
      />
      <Image
        src="/assets/site/guia/nemo.png"
        alt="Imagem"
        width={100}
        height={100}
        className="m-0 absolute left-8 bottom-80 -rotate-12"
      />
      <Image
        src="/assets/site/guia/polvo.png"
        alt="Imagem"
        width={100}
        height={100}
        className="m-0 absolute right-3 top-0 rotate-12"
      />
      <h2 className="text-4xl font-bold text-center text-blueDark">
        Compreendendo melhor nossa aventura
      </h2>
      <div className="text-3xl flex flex-col justify-around text-justify prose text-black h-full font-bold pb-8 stick z-10 md:text-xl">
        <p>
          Importante alertar que a cada mergulho podemos encontrar um tubarão
          (grande trauma) ou um peixinho (pequenos traumas) que devem ser
          reprogramados com o mesmo grau de importância para poder atingir nosso
          destino final.
        </p>
        <p>
          Assim, na medida que se aprofunda desenvolvemos habilidades de criar
          novos recursos para que todo o corpo possa se auto reparar
          simultaneamente a parte física e a emocional.
        </p>
      </div>
    </div>
  );
}
