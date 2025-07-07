import Image from "next/image";

export default function HeaderForm() {
  return (
    <header className="flex items-center justify-around bg-white h-full w-full">
      <Image
        className="md:w-60 w-80 h-auto md:h-auto"
        src="/assets/site/LOGO.svg"
        alt="Logo"
        width={200}
        height={200}
        priority
      />
    </header>
  );
}
