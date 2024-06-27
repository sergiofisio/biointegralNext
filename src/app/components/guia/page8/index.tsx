import Image from "next/image";

export default function Page8() {
  return (
    <div className="bg-gradient-to-br from-gold to-white w-full h-full relative flex flex-col items-center justify-around">
      <Image
        src="/assets/site/guia/logoAzul.png"
        alt="Imagem"
        width={200}
        height={200}
        className="m-0 absolute -left-20 -top-24"
      />
      <h2 className="text-4xl font-bold text-center text-blueDark">
        Revisando o processo
      </h2>
      <div className="text-3xl flex flex-col justify-around text-justify prose text-black font-bold pb-8 stick z-10 md:text-xl p-20">
        <p>
          Então para alcançar a liberação do conflito, durante a terapia
          buscamos a a forma de reagir diante desse momento para desativar a
          tensão que atravessava o corpo. Essa escuta biológica é realizada por
          meio do uso de ferramentas de acompanhamento integrativo
        </p>
      </div>
      <div
        className=" bg-cover bg-center bg-no-repeat h-80 w-full flex flex-col items-center justify-center font-bold px-4"
        style={{ backgroundImage: 'url("/assets/site/guia/papiro.png")' }}
      >
        <p>
          "Não estamos aqui para ajudar os outros, mas para ouvir suas histórias
          e acompanhá-los a encontrar o caminho da paz."
        </p>
        <p>Christian Flèche, fundador da Biodecodage</p>
      </div>
    </div>
  );
}
