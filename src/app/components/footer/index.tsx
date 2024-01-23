import Button from "../button";
import Image from "next/image";

const socials = [
  {
    name: "Facebook",
    icon: "/assets/site/logo_social/fb.svg",
    url: "https://www.facebook.com/saudebiointegral/",
  },
  {
    name: "Instagram",
    icon: "/assets/site/logo_social/instagram.svg",
    url: "https://www.instagram.com/biointegralsaude/",
  },
];

export default function Footer({ setShowModal }: { setShowModal: any }) {
  return (
    <footer id="contato" className="flex flex-col items-start w-full bg-white">
      <Image
        className="w-80 h-auto md:w-60 md:h-auto"
        src="/assets/site/LOGO.svg"
        alt="Logo"
        width={200}
        height={200}
      />
      <div className="w-full bg-blue h-full text-white text-center py-6 px-10 gap-10 flex flex-col items-center">
        <h2 className="text-6xl">Dúvidas?</h2>
        <h2 className="text-3xl">
          Tire suas dúvidas com nossos especialistas. Agende sua consulta em uma
          de nossas unidades ou envie sua mensagem pelo formulário abaixo.
        </h2>
        <Button
          className="w-52 h-20 text-white font-poppins bg-blue rounded-3xl text-2xl p-4 transition-all duration-500 ease-in-out border-2 border-solid hover:text-blue hover:bg-white"
          text="Contato"
          onClick={() => setShowModal({ type: "contato" })}
        />

        <div className="flex w-full justify-center">
          <div className="w-20 h-20 flex items-center gap-4">
            {socials.map((social, key) => {
              return (
                <a key={key} href={social.url}>
                  <Image
                    className="h-16 mx-10"
                    width={200}
                    height={200}
                    src={social.icon}
                    alt={`logo ${social.name}`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
