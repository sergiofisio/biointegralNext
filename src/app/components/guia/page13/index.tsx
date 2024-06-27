import Image from "next/image";

export default function Page13() {
  return (
    <div className="bg-gradient-to-br from-white to-pink w-full h-full relative flex flex-col items-center justify-between p-20">
      <h2 className="text-4xl font-bold text-center text-blueDark">
        Orientações para as sessões
      </h2>
      <ol
        start={6}
        className="text-3xl flex flex-col justify-evenly text-justify text-black h-full font-bold pb-8 stick z-10 md:text-xl"
      >
        <li className="list-decimal">Para sessões da modalidade ON-LINE:</li>
        Para sessões PRESENCIAIS:
        <ul style={{ listStyleType: "none" }}>
          <li style={{ paddingLeft: "1em", textIndent: "-3rem" }}>
            <span style={{ paddingRight: "10px" }}>➔</span>Esteja em um ambiente
            sem ruídos e livre de interrupções por parte de outras pessoas ou
            outros dispositivos, como celulares;
          </li>
          <li style={{ paddingLeft: "1em", textIndent: "-3rem" }}>
            <span style={{ paddingRight: "10px" }}>➔</span>Tenha disponível
            papel em branco do tamanho ofício (A4), além de canetas e/ou lápis
            de cor que serão utilizados em algumas dinâmicas e protocolos que
            integrarão o seu processo terapêutico.
          </li>
        </ul>
      </ol>
      <Image
        src="/assets/site/guia/wifi.png"
        alt="Logo"
        width={100}
        height={100}
        className="w-40 h-40 absolute bottom-10 right-10"
      ></Image>
    </div>
  );
}
