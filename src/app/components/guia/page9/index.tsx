import Image from "next/image";

export default function Page9() {
  return (
    <div className="bg-gradient-to-br from-white to-gold w-full h-full relative flex flex-col items-center justify-between p-20">
      <Image
        src="/assets/site/guia/remedios.png"
        alt="Imagem"
        width={200}
        height={200}
        className="m-0 absolute -left-14 -top-10 rotate-45"
      />
      <Image
        src="/assets/site/guia/coracao.png"
        alt="Imagem"
        width={100}
        height={100}
        className="m-0 absolute right-4 bottom-64 -rotate-12"
      />
      <h2 className="text-4xl font-bold text-center text-blueDark sticky z-10">
        Ferramentas terapêuticas
      </h2>
      <div className="text-3xl flex flex-col justify-around text-justify prose text-black h-full font-bold pb-8 stick z-10 md:text-xl">
        <p>
          Todas as ferramentas usadas durante a terapia não são invasivas e são
          baseadas na escuta ativa e observação global:
        </p>
        <p>Algumas das técnicas utilizadas no acompanhamento são:</p>
      </div>
      <ul className="text-3xl w-full flex flex-col font-bold md:text-xl">
        <li className="list-disc">Relaxamento (Mindfullness, Heartmath,) </li>
        <li className="list-disc">Visualização</li>
        <li className="list-disc">Desenho inconsciente</li>
        <li className="list-disc">Metáforas terapêuticas</li>
        <li className="list-disc">Posturas/gestos repetidos</li>
        <li className="list-disc">
          Estímulos manuais (Microfisioterapia, Barras de Access)
        </li>
      </ul>
    </div>
  );
}
