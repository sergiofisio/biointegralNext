import facebook from "../../assets/site/logo_social/fb.svg";
import instagram from "../../assets/site/logo_social/instagram.svg";
import logo from "../../assets/site/logo.svg";
import Button from "../button";

const socials = [
  {
    name: "Facebook",
    icon: facebook,
    url: "https://www.facebook.com/saudebiointegral/",
  },
  {
    name: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/biointegralsaude/",
  },
];

export default function Footer({ setShowModal }: { setShowModal: any }) {
  return (
    <footer id="contato" className="flex flex-col items-center w-full bg-white">
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
                  className="flex items-center justify-center w-40 h-40"
                  key={key}
                  href={social.url}
                >
                  <img
                    className="flex w-20 h-20"
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
