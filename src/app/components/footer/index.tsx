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
        className="h-auto w-80 md:w-60 md:h-auto"
        src="/assets/site/LOGO.svg"
        alt="Logo"
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center w-full h-full gap-10 px-10 py-6 text-center text-white bg-blue">
        <h2 className="text-6xl">Dúvidas?</h2>
        <h2 className="text-3xl">
          Tire suas dúvidas com nossos especialistas. Agende sua consulta em uma
          de nossas unidades ou envie sua mensagem pelo formulário abaixo.
        </h2>
        <Button
          className="border-white w-52 h-20 md:h-fit"
          text="Contato"
          onClick={() => setShowModal({ type: "contato" })}
        />

        <div className="flex justify-center w-full">
          <div className="flex items-center justify-center w-full h-fit">
            {socials.map((social, key) => {
              return (
                <a
                  className="flex items-center justify-center w-40 h-auto"
                  key={key}
                  href={social.url}
                >
                  <Image
                    className="flex w-20 h-20"
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
