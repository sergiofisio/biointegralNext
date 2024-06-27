import Image from "next/image";

export default function Psage3() {
  return (
    <div className="bg-gradient-to-br from-gold to-white w-full h-full relative flex flex-col items-center justify-between p-20">
      <Image
        src="/assets/site/guia/oculos.png"
        alt="Logo"
        width={200}
        height={200}
        className="w-1/5 -z-1 object-cover absolute top-52 right-4 rotate-45"
      />

      <h2 className="text-4xl font-bold text-center">
        Motivos para escolher entrar nesta aventura
      </h2>
      <div className="flex items-center justify-center stick z-10 h-full">
        <ul className="text-3xl w-full flex flex-col">
          <li className="list-disc">
            Encontrar a causa dos sintomas que te incomodam
          </li>
          <li className="list-disc">Aumentar o conhecimento sobre si mesmo.</li>
          <li className="list-disc">
            Desenvolver habilidade de encontrar novas soluções para si mesmo.
          </li>
          <li className="list-disc">
            Reprogramar os sentimentos e e percepções do que foi vivido no
            passado
          </li>
          <li className="list-disc">
            Desencavar e mudar crenças escondidas lá no fundo do seu ser.
          </li>
        </ul>
      </div>
      <div className="w-3/4 h-1/6 flex items-center justify-center absolute bottom-2 right-0">
        <Image
          src="/assets/site/guia/finalRosa.png"
          alt="Logo"
          width={200}
          height={200}
          className="w-full h-full z-0 object-cover relative"
        />
        <h2 className="text-xl font-bold text-center z-10 absolute px-4 text-white">
          "Parte da cura é o desejo de ser curado" Sêneca, filosofo estóico do
          século
        </h2>
      </div>
    </div>
  );
}
