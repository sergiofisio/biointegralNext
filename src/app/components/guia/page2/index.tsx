import Image from "next/image";

export default function Page2() {
  return (
    <div className="bg-white w-full h-full relative flex flex-col items-center justify-center p-20">
      <Image
        src="/assets/site/guia/bg2.png"
        alt="Logo"
        width={200}
        height={200}
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
      />
      <div className="w-full h-full flex flex-col items-center justify-between z-10 sticky">
        <h2 className="text-5xl font-bold text-center">Seja bem-vindo!</h2>
        <div className="text-2xl flex flex-col justify-evenly h-full text-justify prose text-black bg-white bg-opacity-50 px-4 shadow-white shadow-2xl rounded-2xl">
          <p>
            Estamos aqui pra te convidar para um mergulho profundo em busca de
            um tesouro.
          </p>
          <p>
            Nesta aventura você terá a oportunidade de descobrir mais sobre seu
            corpo, sua história, seus sentimentos e transformar tudo que
            desejar.
          </p>
          <p>
            Vale lembrar que somente você pode decidir mergulhar e nós estaremos
            aqui para orientar e te guiar por todo caminho.
          </p>
        </div>
      </div>
      <Image
        src="/assets/site/guia/tesouro.png"
        alt="tesouro"
        width={200}
        height={200}
        className=" absolute bottom-0 right-0 z-0 object-cover"
      />
    </div>
  );
}
