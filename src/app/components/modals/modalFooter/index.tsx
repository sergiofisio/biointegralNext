export default function ModalFooter({
  setShowModal,
}: {
  setShowModal: ({ type, info }: { type: string; info: any }) => void;
}) {
  return (
    <div className="fixed right-0 top-0 z-10 w-full h-full flex items-center justify-center bg-blue bg-opacity-50">
      <div className="bg-white px-4 pt-5 w-1/3 h-4/6 pb-4 rounded-3xl relative flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Fale Conosco</h2>
        <h2
          className="text-xl absolute right-2 top-2 text-white bg-blue rounded-[100%] w-5 h-5 flex items-center justify-center cursor-pointer"
          onClick={() =>
            setShowModal({ type: "", info: { name: "", img: "", modal: [] } })
          }
        >
          X
        </h2>
        <h2>MODAL FOOTER</h2>
      </div>
    </div>
  );
}
