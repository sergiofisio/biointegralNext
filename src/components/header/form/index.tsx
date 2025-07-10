import logo from "../../../assets/site/LOGO.svg";

export default function HeaderForm() {
  return (
    <header className="flex items-center justify-around bg-white h-full w-full">
      <img src={logo} alt="Logo Biointegral Saúde" />
    </header>
  );
}
