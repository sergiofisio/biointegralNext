"use client";
import { useState, useEffect } from "react";
import Apresentation from "../components/apresentation";
import KnowUs from "../components/knowus";
import Services from "../components/services";
import Maps from "../components/maps";
import Footer from "../components/footer";
import ModalFooter from "../components/modals/modalFooter";
import ModalService from "../components/modals/modalCards";
import Voltar from "../components/voltar";

export default function Home() {
  const [showModal, setShowModal] = useState({
    type: "",
    info: { name: "", img: "", modal: [] },
  });
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define a altura em que o botão deve aparecer
      const showAfterHeight = 500;
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > showAfterHeight) {
        setShowBackButton(true);
      } else {
        setShowBackButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="max-w-[100%] flex flex-col items-center overflow-y-hidden gap-10">
        <Apresentation />
        <KnowUs />
        <Services setShowModal={setShowModal} />
        <Maps />
        <Footer setShowModal={setShowModal} />
        <Voltar showBackButton={showBackButton} />
      </main>
      {showModal.type === "contato" && (
        <ModalFooter setShowModal={setShowModal} />
      )}
      {showModal.type === "servico" && (
        <ModalService
          name={showModal.info.name}
          img={showModal.info.img}
          paragraphs={showModal.info.modal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
