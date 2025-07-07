export default function Local({
  city,
  lat,
  lng,
  local,
  street,
  number,
  complement,
}: {
  city: string;
  lat: number;
  lng: number;
  local: string;
  street: string;
  number: number;
  complement?: string;
}) {
  return (
    <div className="md:justify-around md:items-center md:bg-none w-full items-center flex flex-col justify-evenly font-manroge py-4 gap-6">
      <h2 className="text-3xl font-bold text-center">{city}</h2>
      <div className="md:flex-col text-3xl flex w-full gap-4">
        <iframe
          className="md:w-80 md:h-80 w-96 h-96 rounded-3xl shadow-blue shadow-sm"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBjHw9J59KysKkh8EpHdSxRTQ6u3wv-ZKc&q=${lat},${lng}`}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
        <div className="text-xl text-center">
          <h2>{local}</h2>
          <h2>
            {street}, {number}, {complement}
          </h2>
        </div>
      </div>
    </div>
  );
}
