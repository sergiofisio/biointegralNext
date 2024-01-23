import Local from "./local";

const locals = [
  {
    city: "São Paulo",
    coordinates: {
      lat: -23.567995,
      lng: -46.646394,
    },
    address: {
      local: "Livance",
      street: "Rua Cincinato Braga",
      number: 340,
      complement: "10º andar",
    },
  },
  {
    city: "São Bernardo do Campo",
    coordinates: {
      lat: -23.691863,
      lng: -46.549258,
    },
    address: {
      local: "Espaço Damaru",
      street: "Rua José Versolato",
      number: 111,
      complement: "bloco B - sala 3414",
    },
  },
];

export default function Maps() {
  return (
    <div
      id="onde"
      className="flex flex-col items-center font-manroge py-6 px-10 w-full"
    >
      <h1 className="md:text-3xl text-6xl font-bold text-center">
        Locais de atendimento
      </h1>
      <div className="md:flex-col flex items-center justify-center w-full">
        {locals.map(({ city, coordinates, address }, key) => {
          return (
            <div
              key={key}
              className="md:first:border-b-2 first:border-r-2 border-r-blue border-dotted px-4 border-opacity-20 flex"
            >
              <Local
                city={city}
                lat={coordinates.lat}
                lng={coordinates.lng}
                local={address.local}
                street={address.street}
                number={address.number}
                complement={address.complement}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
