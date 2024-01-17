import Image from "next/image";

export default function HeaderForm() {
  return (
    <header className="flex items-center justify-around bg-white h-full w-full">
      <div className="md:w-60 w-80 h-20 relative">
        <Image
          src="/assets/site/LOGO.svg"
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </header>
  );
}
