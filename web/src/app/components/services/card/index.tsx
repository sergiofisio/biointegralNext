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
  setShowModal: (modal: string, info: any) => void;
  modal: any;
}) {
  return (
    <>
      <img className="md:w-40 w-56" src={img} alt="" />
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
        className="px-4 py-2 rounded-3xl"
        onClick={() => setShowModal("card", modal)}
      />
    </>
  );
}
