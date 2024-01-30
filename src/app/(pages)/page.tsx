"use client";
import { useState } from "react";
import RootLayout from "../components/layout/root";
import Header from "../components/header";
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

  return (
    <RootLayout header={<Header />}>
      <main className="max-w-[100%] flex flex-col items-center overflow-y-hidden">
        <Apresentation />
        <KnowUs />
        <Services setShowModal={setShowModal} />
        <Maps />
        <Footer setShowModal={setShowModal} />
        <Voltar />
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
    </RootLayout>
  );
}
