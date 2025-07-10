import type { local } from "../../interfaces/interface";
import Local from "./local";

const addresses = [
  {
    id: 1,
    city: "São Paulo",
    locals: [
      {
        coordinates: {
          lat: -23.567995,
          lng: -46.646394,
        },
        address: {
          local: "Livance Brigadeiro",
          street: "Rua Cincinato Braga",
          number: 340,
          complement: "10º andar",
        },
        maps: "https://maps.app.goo.gl/5QEzbMNBC7grGqqk7",
      },
      {
        coordinates: {
          lat: -23.55766,
          lng: -46.65902,
        },
        address: {
          local: "Livance Paulista",
          street: "Avenida Paulista",
          number: 2064,
          complement: "21º andar",
        },
        maps: "https://maps.app.goo.gl/duen5YixMeYYYr3W9",
      },
    ],
  },
  {
    id: 2,
    city: "ABC Paulista",
    locals: [
      {
        coordinates: {
          lat: -23.6626358,
          lng: -46.532915,
        },
        address: {
          local: "Livance Santo André",
          street: "Avenida Portugal",
          number: 1285,
          complement: "3º andar",
        },
        maps: "https://maps.app.goo.gl/pdyXBjejku4Ei6tL7",
      },
    ],
  },
];

export default function Maps() {
  return (
    <div
      id="onde"
      className="flex flex-col items-center font-main py-6 px-10 w-full gap-10"
    >
      <h1 className="max-md:text-3xl text-6xl font-bold text-center">
        Locais de atendimento
      </h1>
      <table className="max-md:flex-col flex items-center justify-center w-full gap-4">
        <tbody className="flex-col flex items-center justify-center gap-10 w-full ">
          {addresses.map(
            (local: { id: number; city: string; locals: local[] }) => {
              return (
                <Local key={local.id} city={local.city} locals={local.locals} />
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
