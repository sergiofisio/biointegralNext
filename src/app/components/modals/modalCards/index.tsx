import Image from "next/image";

export default function ModalService({
  name,
  img,
  paragraphs,
  setShowModal,
}: {
  name: string;
  img: string;
  paragraphs: string[];
  setShowModal: ({ type, info }: { type: string; info: any }) => void;
}) {
  console.log({ name, img, paragraphs });

  return (
    <div className="fixed right-0 top-0 z-10 overflow-y-auto w-full h-full flex items-center justify-center bg-blue bg-opacity-50">
      <div className="bg-white w-[50%] h-[95%] rounded-3xl text-left overflow-hidden shadow-xl transform transition-all relative flex flex-col items-center">
        <button
          type="button"
          onClick={() =>
            setShowModal({ type: "", info: { name: "", img: "", modal: [] } })
          }
          className="w-11 h-11 text-3xl justify-center rounded-[100%] border border-transparent shadow-sm p-1 bg-blue font-medium text-white hover:bg-white hover:text-blue transition-all duration-500 ease-in-out absolute right-2 top-2 "
        >
          X
        </button>
        <div className="bg-white px-4 pt-5 w-11/12 h-[90%] pb-4 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <Image
              src={img}
              alt={`Logo de ${name}`}
              className="md:w-32 w-56 h-auto"
              width={200}
              height={200}
            />
            <h3 className="flex text-7xl font-medium text-gray-900 text-center uppercase h-full">
              {name}
            </h3>
          </div>
          <div className="overflow-y-auto h-4/6 flex flex-col gap-3 p-4">
            {paragraphs.map((paragraph: any, key: number) => {
              return (
                <p key={key} className="text-xl text-justify">
                  {paragraph.paragrafo}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
