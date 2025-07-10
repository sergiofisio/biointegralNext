import type { local } from "../../../interfaces/interface";

export default function Local({
  city,
  locals,
}: {
  city: string;
  locals: local[];
}) {
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  return (
    <tr className="max-md:justify-around max-md:items-center max-md:bg-none w-full items-center flex flex-col justify-evenly font-manroge py-4 gap-6">
      <h2 className="text-3xl font-bold text-center">{city}</h2>
      <div className="max-md:flex-col text-3xl flex flex-wrap items-center justify-center w-full gap-10">
        {locals.map(({ coordinates, address, maps }, key) => {
          return (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h2>{address.local}</h2>
              <div className="flex items-center justify-center gap-4">
                <iframe
                  className="max-md:w-80 max-md:h-80 w-96 h-96 rounded-3xl shadow-blue shadow-sm"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBjHw9J59KysKkh8EpHdSxRTQ6u3wv-ZKc&q&q=${coordinates.lat},${coordinates.lng}`}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>

                <div className="flex flex-col items-center text-xl text-center">
                  <h2>
                    {address.street}, {address.number}, {address.complement}
                  </h2>
                  <a
                    className="border-2 border-blue bg-blue rounded-4xl !px-4 !py-2 w-3/4 text-white hover:bg-white hover:text-blue transition-all duration-500"
                    href={maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Google Maps - ${address.local}`}
                  >
                    Mostrar no Google Maps
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </tr>
  );
}
