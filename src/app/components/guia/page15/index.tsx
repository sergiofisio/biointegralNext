import Image from "next/image";
import Link from "next/link";

export default function Page15() {
  return (
    <div className="bg-gradient-to-b from-white to-darkBlue w-full h-full relative flex flex-col items-center justify-center gap-4 p-20">
      <h2 className="text-4xl font-bold text-center text-blueDark z-30">
        ENTÃO BORA COMEÇAR?
      </h2>

      <div className="text-3xl flex flex-col justify-evenly text-justify prose text-black font-bold pb-8 h-full md:text-xl z-30">
        <p>
          Então será enviado a você separadamente um termo de responsabilidade,
          leia atentamente o documento que preparamos para selar o nosso acordo
          para que nosso relacionamento transcorra da melhor maneira possível.
        </p>
      </div>
      <h2 className="text-4xl font-bold text-center text-blueDark z-30">
        PRONTO!
      </h2>

      <div className="text-3xl flex flex-col justify-evenly text-justify prose text-black font-bold pb-8 h-full md:text-xl z-30">
        <p>
          Agora gostaríamos de te conhecer. Para isto criamos um roteiro com
          perguntas para que você nos conte seus problemas, sentimentos
          incômodos.
        </p>
        <p>
          Tome um tempo com atenção e carinho, estas respostas podem ajudar
          muito na eficiência do seu processo terapêutico.
        </p>
        <p>Então vamos lá click no link abaixo para que possa responder</p>
      </div>
      <h2 className="text-3xl font-bold text-center z-30">
        Para acessar o formulário{" "}
        <Link
          className="text-blueDark underline cursor-pointer md:text-xl"
          href="/formulario"
          target="_blank"
        >
          clique aqui
        </Link>
      </h2>
      <div className="w-full h-full bg-gray-400 flex flex-col items-center justify-center text-blueDark p-8 text-3xl font-bold rounded-2xl shadow-[1px_1px_20px_0_rgba(0,0,0)]">
        <h2 className="text-center">
          "O trabalho do terapeuta é acompanhar o paciente com fim de que este
          encontre seu próprio referente. Quando conseguimos isto provavelmente
          cumprimos o objetivo do processo terapêutico."
        </h2>
        <p>Gladys Tobar, médica Colombiana e biopsicoterapeuta</p>
      </div>
      <Image
        src="/assets/site/guia/logoBranco.png"
        alt="Logo"
        width={100}
        height={100}
        className="w-96 h-96 absolute opacity-40 rotate-12"
      ></Image>
    </div>
  );
}
