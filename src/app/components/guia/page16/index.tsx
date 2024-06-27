import Image from "next/image";

const investimento = [
  {
    online: 12,
    presencial: 2,
    desconto: 0.7,
  },
  {
    online: 6,
    presencial: 1,
    desconto: 0.8,
  },
  {
    online: 1,
    presencial: 0,
    desconto: 0,
  },
  {
    online: 0,
    presencial: 1,
    desconto: 0,
  },
];

export default function Page16() {
  return (
    <div className="bg-darkBlue bg-opacity-80 w-full h-full relative flex flex-col items-center justify-between py-20">
      <Image
        src="/assets/site/guia/logoRosa.png"
        alt="Imagem"
        width={400}
        height={400}
        className="m-0 absolute -left-44 -top-52"
      />

      <header className="flex items-center justify-between w-full z-30 text-white text-3xl">
        <h2 className=" font-bold bg-pink px-20 py-4">Investimento</h2>
        <div className="flex flex-col items-end font-bold px-20">
          <h2>data</h2>
          08/08/2023
        </div>
      </header>
      <table className="w-full h-full flex flex-col">
        <thead className="flex items-center justify-center bg-pink">
          <tr className="min-w-[25%]">
            <th></th>
          </tr>
          <tr className="min-w-[25%]">
            <th>Descrição do Produto </th>
          </tr>
          <tr className="min-w-[25%]">
            <th>Preço à vista (PIX ou dinheiro)</th>
          </tr>
          <tr className="min-w-[25%]">
            <th>Parcelado Cartão ou PIX agendado</th>
          </tr>
        </thead>
        <tbody>
          {investimento.map(({ online, presencial, desconto }, index) => (
            <tr
              key={index}
              className="flex items-center justify-center bg-white min-h-[25%]"
            >
              <td className="text-center min-w-[25%] min-h-fit"></td>
              <td className="text-center min-w-[25%] min-h-fit">
                {online && presencial
                  ? `${online}SS online + ${presencial}SS presencial`
                  : online && !presencial
                  ? `${online}SS online`
                  : `${presencial}SS presencial`}
              </td>
              <td className="text-center min-w-[25%] min-h-fit bg-darkBlue bg-opacity-50 flex flex-col items-center justify-center border-b-8 border-white">
                <tr>
                  {online && presencial
                    ? `R$${Math.round(
                        (online * 350 + presencial * 700) * desconto
                      )},00`
                    : online && !presencial
                    ? `R$${online * 350},00`
                    : `R$${presencial * 700},00`}
                </tr>
                {desconto ? <tr>Desconto de {100 - desconto * 100}%</tr> : ""}
                {desconto ? (
                  <tr>
                    R$
                    {Math.round(
                      ((online * 350 + presencial * 700) * desconto) /
                        (online + presencial)
                    )}
                    ,00 por sessão
                  </tr>
                ) : (
                  ""
                )}
              </td>
              <td className="text-center min-w-[25%] min-h-fit flex">
                {online && presencial
                  ? `10x de R$${Math.round(
                      (online * 350 + presencial * 700) / 10
                    )},00. TOTAL = R$${Math.round(
                      online * 350 + presencial * 700
                    )},00`
                  : online && !presencial
                  ? ``
                  : `2x de R$${(presencial * 700) / 2},00`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
