"use client";

import Link from "next/link";

export default function Apresentation() {
  return (
    <main className="h-[50rem] flex md:items-center bg-cover bg-no-repeat bg-right w-full bg-[url('/assets/site/capa.svg')] sm:flex-col md:justify-around md:bg-none md:h-96">
      <div className="flex flex-col items-start h-full bg-gradient-to-r from-white gap-20 w-3/4 justify-center pl-10 md:w-full md:justify-around md:items-center md:bg-white md:bg-opacity-30 md:gap-0">
        <h2 className="text-6xl font-manrope md:w-full md:text-4xl md:text-center">
          Pioneiros no Brasil de várias{" "}
          <span className="text-blue">técnicas</span> como MICROFISIOTERAPIA,
          PSYCH-K® e BIODECODAGE
        </h2>
        <Link
          href={
            "https://api.whatsapp.com/message/QONW6E37X27CJ1?autoload=1&app_absent=0"
          }
          target="_blank"
          className="w-fit h-20 text-white font-poppins bg-blue rounded-3xl text-2xl p-4 transition-all duration-500 ease-in-out border-2 border-solid hover:text-blue hover:bg-white"
        >
          {" "}
          Agende já sua consulta
        </Link>
      </div>
    </main>
  );
}
