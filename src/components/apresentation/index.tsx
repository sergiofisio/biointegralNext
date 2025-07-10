import { Link } from "react-router-dom";

export default function Apresentation() {
  return (
    <section
      className={`h-[50rem] flex bg-cover bg-no-repeat bg-right w-full bg-[url(/src/assets/site/capa.svg)]`}
    >
      <div className="!px-2 flex flex-col items-center h-full bg-gradient-to-r from-white from-75% w-2/4 justify-between font-main text-center max-md:w-full max-md:justify-around max-md:items-center max-md:bg-white max-md:bg-opacity-30 max-md:gap-0 max-md:p-0">
        <h1 className="text-8xl w-4/6  max-md:w-full max-md:text-3xl text-center">
          BIOINTEGRAL SAÚDE
        </h1>
        <h2 className="flex flex-col items-center text-6xl w-4/6 max-md:w-full max-md:text-3xl ">
          Pioneiros no Brasil de várias{" "}
          <span className="text-blue">técnicas</span> como{" "}
          <p>
            <strong className="text-blue font-semibold">
              MICROFISIOTERAPIA
            </strong>
            ,
          </p>
          <p>
            <strong className="text-blue font-semibold">PSYCH-K®</strong> e
          </p>
          <p>
            <strong className="text-blue font-semibold">BIODECODAGE</strong>
          </p>
        </h2>
        <Link
          to={
            "https://api.whatsapp.com/message/QONW6E37X27CJ1?autoload=1&app_absent=0"
          }
          target="_blank"
          className="flex items-center justify-center w-fit h-20 text-white font-special bg-blue rounded-3xl text-2xl !p-4 transition-all duration-500 ease-in-out border-2 border-solid border-blue hover:text-blue hover:bg-white"
        >
          {" "}
          Agende já sua consulta
        </Link>
      </div>
    </section>
  );
}
