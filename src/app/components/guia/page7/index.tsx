import Image from "next/image";

export default function Page7() {
  return (
    <div className="bg-gradient-to-br from-white to-blue w-full h-full relative flex flex-col items-center p-20">
      <Image
        src="/assets/site/guia/mergulhador.png"
        alt="Imagem"
        width={150}
        height={150}
        className="m-0 absolute left-0 -bottom-5"
      />
      <h2 className="text-4xl font-bold text-center text-blueDark">
        Revisando o processo
      </h2>
      <div className="text-3xl flex flex-col justify-evenly text-justify prose text-black font-bold pb-8 h-full md:text-xl">
        <p>
          O objetivo do processo terapêutico é te ajudar a encontrar os
          conflitos biológicos causadores dos problemas (sintomas,
          comportamentos, crenças limitantes) e, assim te acompanhar a
          transferir o problema que estava armazenado, libertando dos fardos.
        </p>
        <p>
          Uma vez que se evacua os conflitos do passado, o sintoma deixa de ter
          uma razão de ser.
        </p>
      </div>
    </div>
  );
}
