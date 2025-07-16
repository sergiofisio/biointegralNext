import { Route, Routes, useLocation } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/page";
import Satisfacao from "./pages/satisfacao/page";
import HeaderForm from "./components/header/form";
import Header from "./components/header";
import LivroPage from "./pages/livro";

export default function App() {
  const location = useLocation();
  // const hostname = window.location.hostname;

  // Se estiver no subdomínio "livro", mostra uma página separada
  // if (hostname.startsWith("livro.")) {
  //   return <LivroPage />;
  // }
  return (
    <>
      {location.pathname !== "/" ? <HeaderForm /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/satisfacao" element={<Satisfacao />} />
        <Route path="/livros" element={<LivroPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}
