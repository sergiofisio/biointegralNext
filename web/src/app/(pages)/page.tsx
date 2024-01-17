"use client";
import { useState } from "react";
import RootLayout from "../components/layout/root";
import Header from "../components/header";
import Apresentation from "../components/apresentation";
import KnowUs from "../components/knowus";
import Services from "../components/services";
import Maps from "../components/maps";
import Footer from "../components/footer";

export default function Home() {
  const [showModal, setShowModal] = useState<{ modal: string; info?: any }>({
    modal: "",
    info: "",
  });
  return (
    <RootLayout header={<Header />}>
      <main className="max-w-[100%] flex flex-col items-center overflow-y-hidden">
        <Apresentation />
        <KnowUs />
        <Services setShowModal={(modal) => setShowModal({ modal, info: "" })} />
        <Maps />
        <Footer setShowModal={(modal) => setShowModal({ modal, info: "" })} />
      </main>
    </RootLayout>
  );
}
