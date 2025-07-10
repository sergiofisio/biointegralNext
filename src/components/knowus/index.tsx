import Us from "./us";
import sergio from "../../assets/site/fotoQuemSomos/sergio.svg";
import fresia from "../../assets/site/fotoQuemSomos/fresia.svg";

export default function KnowUs() {
  return (
    <div
      id="quem"
      className="max-md:justify-around max-md:items-center max-md:bg-none h-[50rem] items-center p-4 flex flex-col w-full !px-14"
    >
      <h1 className="max-md:text-3xl text-6xl flex justify-around text-center font-bold">
        Conheça o Dr. Sergio e a Dra. Fresia
      </h1>
      <div className="max-md:hidden text-4xl text-gray font-normal flex flex-col leading-[2.8rem] gap-8 justify-around bg-none h-96">
        <p>
          Fisioterapeutas formados pelas Faculdades Integradas Pitágoras de
          Montes Claros/MG, aperfeiçoaram-se em Terapia Manual e se
          especializaram em Microfisioterapia, curso realizado com os próprios
          criadores da técnica os Fisioterapeutas Daniel Grosjean e Patrice
          Benini. Além disso, fizeram especialização em Décodage Biologique com
          Emmanuel Corbeel, da Bélgica.
        </p>
        <p>
          Nos últimos anos temos nos dedicado aos estudos da BIOdécodage
          Prática, método também Francês, com o criador Christian Flèche.
        </p>
      </div>
      <div className="max-md:flex-col flex items-center justify-evenly w-full">
        <Us
          image={sergio}
          name="Dra. Fresia Jorge de Sá Bastos"
          register="Crefito 3 - 118.225-F"
        />
        <Us
          image={fresia}
          name="Dr. Sergio Augusto Moreira Bastos Jr."
          register="Crefito 3 - 111.132-F"
        />
      </div>
    </div>
  );
}
