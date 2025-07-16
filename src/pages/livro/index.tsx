import logo from "../../assets/site/footer/LOGO-BRANCO.svg";
import livro from "../../assets/livro/capa.jpg.svg";
import CardLivro from "../../components/livro";
import ModalLivro from "../../components/modals/modalLivro";
import sergio from "../../assets/site/fotoQuemSomos/sergio.svg";
import fresia from "../../assets/site/fotoQuemSomos/fresia.svg";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import axios from "./../../services/hotmart";

const FAQ = [
  {
    id: crypto.randomUUID(),
    question: "Para quem é esse produto?",
    answer:
      "Para pessoas que desejam entender melhor suas emoções, aliviar dores físicas e emocionais e buscar equilíbrio e saúde integral através do autoconhecimento.",
  },
  {
    id: crypto.randomUUID(),
    question: "Como funciona o 'Prazo de Garantia'?",
    answer:
      "Você tem até 7 dias para solicitar reembolso integral após a compra, caso não se sinta satisfeito com o conteúdo.",
  },
  {
    id: crypto.randomUUID(),
    question: "Para quem é esse produto?",
    answer:
      "Para pessoas que desejam entender melhor suas emoções, aliviar dores físicas e emocionais e buscar equilíbrio e saúde integral através do autoconhecimento.",
  },
  {
    id: crypto.randomUUID(),
    question: "O que é e como funciona o Certificado de Conclusão digital?",
    answer:
      "Este produto é um livro e não oferece certificado. Mas você leva com ele um processo de transformação emocional para a vida inteira.",
  },
  {
    id: crypto.randomUUID(),
    question: "Como acessar o produto?",
    answer:
      "Você receberá o acesso por email. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital. Você também pode acessar o produto comprado nesta página:",
    steps: [
      {
        id: crypto.randomUUID(),
        step: "Faça login na Hotmart clicando em 'Entrar'",
      },
      {
        id: crypto.randomUUID(),
        step: "Acesse o menu lateral, clique em 'Minha conta'",
      },
      {
        id: crypto.randomUUID(),
        step: "Clique em 'Minhas compras' e lá estarão todos os produtos que você já comprou.",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    question: "Como faço para comprar?",
    answer:
      "Clique no botão “Compre seu livro” nesta página. O pagamento é seguro e o acesso é imediato após a confirmação. Em caso de dúvidas, você pode contar com a garantia de 7 dias.",
  },
];

export default function LivroPage() {
  const [infoLivro, setInfoLivro] = useState({
    id: "",
    nome: "",
    img: "",
    subtitulo: "",
    descricao: [
      {
        id: "",
        paragrafo: "",
      },
    ],
    preco: [
      {
        id: "",
        ebook: false,
        preco: 0,
      },
    ],
    links: [
      {
        id: "",
        nome: "",
        url: "",
      },
    ],
  });
  const [showModal, setShowModal] = useState(false);

  const [openFAQ, setOpenFAQ] = useState<string | null>(FAQ[0].id);

  const toggleFAQ = (id: string) => {
    if (openFAQ === id) return;

    setOpenFAQ((prev) => (prev === id ? null : id));
  };

  const livros = useMemo(
    () => [
      {
        id: crypto.randomUUID(),
        nome: "Emoções",
        subtitulo: "Uma perspectiva biológica do sentir",
        descricao: [
          {
            id: crypto.randomUUID(),
            paragrafo:
              "Aprenda a identificar os sinais do seu corpo, entender o que suas emoções querem te dizer e dar os primeiros passos rumo à cura integral.",
          },
          {
            id: crypto.randomUUID(),
            paragrafo:
              "Um guia completo com teoria, prática e exercícios para você viver com mais leveza, saúde e consciência.",
          },
        ],
        img: livro,
        preco: [
          {
            id: crypto.randomUUID(),
            ebook: true,
            preco: 29.9,
          },
          {
            id: crypto.randomUUID(),
            ebook: false,
            preco: 49.9,
          },
        ],
        links: [
          {
            id: crypto.randomUUID(),
            nome: "ebook",
            url: "https://pay.hotmart.com/N100589817J?off=...",
          },
          {
            id: crypto.randomUUID(),
            nome: "físico",
            url: "https://pay.hotmart.com/F100609004L?off=...",
          },
        ],
      },
    ],
    []
  );

  return (
    <main className="flex flex-col gap-6 items-center min-h-screen bg-black text-white">
      <img src={logo} alt="Logo" className="w-96 mb-4" />
      <section className="w-full flex flex-col justify-center items-center mx-auto p-6 bg-gray-900">
        <h1 className="text-3xl font-bold mb-6">Livros</h1>
        <div className="flex flex-wrap items-center justify-center-safe !p-4 gap-6">
          {livros.map((livro) => (
            <CardLivro
              setShowModal={setShowModal}
              setInfoLivro={setInfoLivro}
              key={livro.id}
              livro={livro}
            />
          ))}
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-bold">
          CONHEÇA MELHOR QUEM CRIOU O CONTEÚDO
        </h1>
        <div className="border-[#ffed55] border-b-2 border-solid w-1/6"></div>
        <div className="flex gap-6 w-1/2">
          <img src={sergio} className="rounded-[100%] w-60 h-60" />
          <div className="flex flex-col items-start gap-10">
            <h2 className="flex flex-col items-center text-5xl">
              <strong>Frésia J. Sá Bastos</strong>&
              <strong>Sérgio Bastos</strong>
            </h2>
            <p className="text-center">
              Fisioterapeutas com 18 anos de atuação clínica, especialistas em
              Microfisioterapia, Decodage Biologique e PSYCH-K. Apaixonados pela
              conexão corpo-mente, uniram experiência prática, conhecimento
              técnico e sensibilidade para criar um conteúdo transformador que
              já impactou milhares de vidas em atendimentos e agora chega ao
              público em forma de livro.
            </p>
          </div>
          <img src={fresia} className="rounded-[100%] w-60 h-60" />
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-6 p-10">
        <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>

        <div className="flex flex-col gap-4 w-full max-w-4xl text-white">
          {FAQ.map((faq) => {
            const isOpen = openFAQ === faq.id;

            return (
              <div
                key={faq.id}
                className="border-b border-gray-700 pb-4 cursor-pointer"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left text-xl font-bold cursor-pointer flex justify-between items-center hover:text-yellow-400 transition"
                >
                  {faq.question}
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl"
                  >
                    ⮟
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={faq.id}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: {
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        },
                        collapsed: {
                          opacity: 0,
                          height: 0,
                          y: -10,
                        },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col text-lg text-gray-300 !pl-2 !pr-4">
                        <p>{faq.answer}</p>
                        {faq.steps && (
                          <ul className="indent-2 list-disc list-inside ">
                            {faq.steps.map((step) => (
                              <li key={step.id}>{step.step}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <>
        {showModal && (
          <ModalLivro setShowModal={setShowModal} livro={infoLivro} />
        )}
      </>
    </main>
  );
}
