// import { Route, Routes, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/page";
import Satisfacao from "./pages/satisfacao/page";
// import HeaderForm from "./components/header/form";
// import Header from "./components/header";

export default function App() {
  // const location = useLocation();
  return (
    <>
      {/* {location.pathname !== "/" ? <HeaderForm /> : <Header />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/satisfacao" element={<Satisfacao />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}
