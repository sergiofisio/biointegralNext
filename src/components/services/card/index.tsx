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
  description: any;
  modal: any;
  setShowModal: ({ type, info }: { type: string; info: any }) => void;
}) {
  return (
    <>
      <div className="md:w-40 w-56 relative">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col justify-evenly gap-4 h-full">
        <h2 className="text-xl font-bold text-center uppercase h-20">{name}</h2>
        <div className="flex flex-col gap-4 w-full h-full">
          {description.map(
            ({ paragrafo }: { paragrafo: string }, key: number) => {
              return (
                <p key={key} className="text-base text-center">
                  {paragrafo}
                </p>
              );
            }
          )}
        </div>
      </div>
      <Button
        text="Saiba mais"
        className="max-md:min-w-[80%] !px-4 !py-2 rounded-3xl bg-blue hover:text-blue hover:bg-white border-blue"
        onClick={() => {
          setShowModal({
            type: "servico",
            info: { name, img, modal },
          });
        }}
      />
    </>
  );
}
