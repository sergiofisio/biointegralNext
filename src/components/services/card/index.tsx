import Button from "../../button";

export default function Card({
  name,
  img,
  description,
  modal,
  setShowModal,
}: {
  name: string;
  img: string;
  description: { paragrafo: string }[];
  modal: { paragrafo: string }[];
  setShowModal: ({ type, info }: { type: string; info: any }) => void;
}) {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <img
          src={img}
          alt={`Ícone representando a técnica ${name}`}
          loading="lazy"
          className="w-20 h-20 object-contain"
        />
      </div>

      <div className="flex flex-col justify-evenly gap-4 h-full mt-4">
        <h2 className="text-xl font-bold text-center uppercase h-20">{name}</h2>
        <div className="flex flex-col gap-2 w-full h-full">
          {description.map(({ paragrafo }, key) => (
            <p key={key} className="text-base text-center">
              {paragrafo}
            </p>
          ))}
        </div>
      </div>

      <Button
        text="Saiba mais"
        className="mt-6 px-4 py-2 rounded-3xl bg-blue text-white hover:text-blue hover:bg-white border-blue transition-all duration-300"
        onClick={() =>
          setShowModal({
            type: "servico",
            info: { name, img, modal },
          })
        }
      />
    </>
  );
}
