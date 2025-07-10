import ContactForm from "../../form/contact";

export default function ModalFooter({
  setShowModal,
}: {
  setShowModal: ({ type, info }: { type: string; info: any }) => void;
}) {
  return (
    <div className="fixed top-0 right-0 z-10 flex items-center justify-center w-full h-full bg-opacity-50 bg-blue">
      <div className="relative flex flex-col items-center justify-center w-3/5 gap-4 px-4 pt-5 pb-4 bg-white h-5/6 rounded-3xl md:w-11/12 md:h-fit">
        <h2 className="text-3xl font-bold">Fale Conosco</h2>
        <h2
          className="text-2xl absolute right-2 top-2 text-white bg-blue rounded-[100%] w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() =>
            setShowModal({ type: "", info: { name: "", img: "", modal: [] } })
          }
        >
          X
        </h2>
        <ContactForm setShowModal={setShowModal} />
      </div>
    </div>
  );
}
