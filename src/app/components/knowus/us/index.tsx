import Image from "next/image";

export default function Us({
  image,
  name,
  register,
}: {
  image: string;
  name: string;
  register: string;
}) {
  return (
    <div className="h-full w-56 flex flex-col items-center gap-4">
      <Image
        className="md:w-32 md:h-32 w-56 h-56 border-4 border-blue border-solid rounded-[100%] shadow-blue shadow-2xl"
        src={image}
        alt={`foto ${name}`}
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <h2 className="w-full text-xl text-gray text-center">{register}</h2>
    </div>
  );
}
