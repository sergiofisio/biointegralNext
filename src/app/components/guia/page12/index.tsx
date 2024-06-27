import Image from "next/image";

export default function Page12() {
  return (
    <div className="bg-gradient-to-br from-white to-pink w-full h-full relative flex flex-col items-center justify-between p-20">
      <h2 className="text-4xl font-bold text-center text-blueDark">
        Orientações para as sessões
      </h2>
      <ol
        start={4}
        className="text-3xl flex flex-col justify-evenly text-justify text-black h-full font-bold pb-8 stick z-10 md:text-xl"
      >
        <li className="list-decimal">
          Em caso de doença já diagnosticada é necessário que traga os
          resultados de exames já realizados e/ou relatório médico que possuir
        </li>
        <li className="list-decimal">
          Para sessões PRESENCIAIS:
          <ul style={{ listStyleType: "none" }}>
            <li style={{ paddingLeft: "1em", textIndent: "-3rem" }}>
              <span style={{ paddingRight: "10px" }}>➔</span>Importante que
              chegar de 10 a 15 minutos de antecedência.
            </li>
            <li style={{ paddingLeft: "1em", textIndent: "-3rem" }}>
              <span style={{ paddingRight: "10px" }}>➔</span>Use a roupa que
              desejar, somente evite saias e vestidos se possível.
            </li>
          </ul>
        </li>
      </ol>
      <div
        style={{ backgroundImage: "url(/assets/site/guia/finalAzul.png)" }}
        className="bg-cover bg-top w-full h-56 -z-1 absolute bottom-0 flex items-end justify-center text-center text-white font-bold py-12 px-8 shadow-2xl shadow-black"
      >
        <p className="flex flex-col items-center justify-center ">
          "Cada emoção tem um propósito, basta mergulhar nela, experimentá-la,
          vivê-la e descobrir a mensagem. Não fique ancorado nisso, deixe ir e
          confie" <span>Autor desconhecido</span>
        </p>
      </div>
    </div>
  );
}
