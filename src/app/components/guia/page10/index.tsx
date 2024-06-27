import Image from "next/image";

export default function Page10() {
  return (
    <div className="bg-gradient-to-br from-white to-gold w-full h-full relative flex flex-col items-center justify-between p-20">
      <Image
        src="/assets/site/guia/ervas.png"
        alt="Imagem"
        width={100}
        height={100}
        className="m-0 absolute left-0 bottom-0"
      />
      <h2 className="text-4xl font-bold text-center text-blueDark">
        Ferramentas terapêuticas
      </h2>
      <ul className="text-3xl w-full flex flex-col font-bold h-4/5 gap-4 md:text-xl">
        <li className="list-disc">
          Alguns elementos da programação neurolinguística (PNL)
        </li>
        <li className="list-disc">hipnose Eriksoniana </li>
        <li className="list-disc">Alguns elementos constelações familiares </li>
        <li className="list-disc">
          Psicogenealogia (transgeracional, projeto sentido)
        </li>
        <li className="list-disc">Ciclos celulares biológicos memorizados </li>
        <li className="list-disc">
          Florais de Bach e Fitoterapia Para saber mais sobre alguma
        </li>
      </ul>
    </div>
  );
}
