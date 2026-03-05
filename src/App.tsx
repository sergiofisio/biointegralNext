import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/page";
import HeaderForm from "./components/header/form";
import Header from "./components/header";

const Satisfacao = lazy(() => import("./pages/satisfacao/page"));
const LivroPage = lazy(() => import("./pages/livro"));

export default function App() {
  const location = useLocation();
  // const hostname = window.location.hostname;

  return (
    <>
      {location.pathname !== "/" ? <HeaderForm /> : <Header />}
      <Suspense fallback={<div className="w-full py-10 text-center">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/satisfacao" element={<Satisfacao />} />
          <Route path="/livros" element={<LivroPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </>
  );
}
