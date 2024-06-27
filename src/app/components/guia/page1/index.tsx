import Image from "next/image";
export default function Page1() {
  return (
    <div className="bg-darkBlue w-full min-w-full h-full relative flex items-center justify-center p-20">
      <Image
        src="/assets/site/guia/bg.png"
        alt="Logo"
        width={200}
        height={200}
        className="w-full h-full absolute top-0 left-0 -z-1 object-cover "
        priority
      />

      <div className=" bg-white flex items-center justify-center h-1/3 min-w-1/3 ">
        <div className="max-w-[95%] min-h-[95%] border-darkBlue border-4 border-solid flex items-center justify-center bg-white">
          <div className="w-[90%] h-[90%] border-darkBlue border-2 border-solid flex flex-col items-center justify-evenly text-darkBlue">
            <h2 className="text-4xl text-center font-bold">
              GUIA PARA O PROCESSO TERAPÊUTICO
            </h2>
            <h2 className="font-bold">_______________________________</h2>
            <h2 className="text-3xl text-center italic font-bold">
              Biointegral Saúde
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
