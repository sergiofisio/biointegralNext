import Card from "./card";
import biodecodage from "../../assets/site/tecnicas/biodecodage.svg";
import psych from "../../assets/site/tecnicas/psych-k.svg";
import micro from "../../assets/site/tecnicas/micro.svg";

const services = [
  {
    id: 1,
    nome: "Biodecodage",
    img: biodecodage,
    descricao: [
      {
        paragrafo:
          "A biodécodage é uma nova abordagem francesa para terapia e saúde com base no sentido biológico dos sintomas.",
      },
      {
        paragrafo:
          "Essa abordagem destaca a ligação entre cada doença e uma emoção chamada: ressentir biológico conflitual.",
      },
    ],
    modal: [
      {
        paragrafo:
          "A Biodecodage busca compreender as origens emocionais por trás de sintomas físicos ou doenças.",
      },
      {
        paragrafo:
          "Quando emoções são ignoradas, elas podem se manifestar fisicamente como sintomas ou doenças.",
      },
      {
        paragrafo:
          "A técnica utiliza a linguagem do corpo para identificar essas emoções reprimidas e promover bem-estar.",
      },
      {
        paragrafo:
          "Terapeutas ajudam o paciente a liberar essas emoções para alcançar equilíbrio físico e emocional.",
      },
      {
        paragrafo:
          "É uma abordagem holística que pode ser usada junto com tratamentos médicos convencionais.",
      },
    ],
  },
  {
    id: 2,
    nome: "Psych-K®",
    img: psych,
    descricao: [
      {
        paragrafo:
          "Técnica americana que identifica e transforma crenças limitantes no subconsciente.",
      },
      {
        paragrafo:
          "Acesso ao inconsciente por meio de posturas e testes cinesiológicos.",
      },
    ],
    modal: [
      {
        paragrafo:
          "O Psych-K® ajuda a reprogramar padrões negativos no subconsciente.",
      },
      {
        paragrafo:
          "Combina PNL, cinesiologia e psicologia para mudar crenças e pensamentos.",
      },
      {
        paragrafo:
          "Usa testes musculares para identificar crenças limitantes e substituí-las.",
      },
      {
        paragrafo:
          "Pode tratar ansiedade, traumas, crenças limitantes sobre dinheiro, saúde, sucesso etc.",
      },
      {
        paragrafo:
          "É considerada uma técnica segura, não invasiva e altamente transformadora.",
      },
    ],
  },
  {
    id: 3,
    nome: "Microfisioterapia / TME",
    img: micro,
    descricao: [
      {
        paragrafo:
          "Técnica francesa que restaura a vitalidade dos tecidos afetados por traumas ou emoções.",
      },
      {
        paragrafo:
          "Ajuda o corpo a limpar memórias negativas acumuladas nos tecidos.",
      },
    ],
    modal: [
      {
        paragrafo:
          "Identifica e trata traumas emocionais e físicos registrados nas células do corpo.",
      },
      {
        paragrafo:
          "Utiliza toques sutis para estimular a reação do organismo e liberar essas memórias.",
      },
      {
        paragrafo:
          "O terapeuta mapeia o corpo para encontrar bloqueios e ajudar na autorregulação.",
      },
      {
        paragrafo:
          "Indicado para problemas como dores, insônia, ansiedade, alergias e outros.",
      },
      {
        paragrafo:
          "É não invasiva, sem medicamentos, e promove equilíbrio físico e emocional.",
      },
    ],
  },
];

export default function Services({
  setShowModal,
}: {
  setShowModal: ({ type, info }: { type: string; info: any }) => void;
}) {
  return (
    <section
      id="tecnica"
      className="px-10 max-md:px-4 w-full flex flex-col items-center font-manroge gap-14 py-10"
    >
      <h1 className="text-6xl max-md:text-3xl font-bold text-center">
        Técnicas Que Utilizamos
      </h1>
      <p className="text-3xl max-md:text-xl text-gray text-center">
        Integramos diversas técnicas em cada sessão para maximizar os resultados
        com o menor número de atendimentos possível.
      </p>

      <div className="flex w-full h-[40rem] gap-8 justify-evenly items-start max-md:flex-nowrap max-md:overflow-x-auto max-md:pr-4">
        {services.map(({ id, nome, img, descricao, modal }) => (
          <div
            key={id}
            className="w-80 max-md:min-w-[85%] h-full border-t-4 border-t-blue border-solid shadow-black shadow-lg rounded-b-3xl flex flex-col items-center justify-between !px-5 !py-4"
          >
            <Card
              name={nome}
              img={img}
              description={descricao}
              modal={modal}
              setShowModal={setShowModal}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
