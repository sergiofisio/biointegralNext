import Card from "./card";
import biodecodage from "../../assets/site/tecnicas/biodecodage.svg";
import psych from "../../assets/site/tecnicas/psych-k.svg";
import micro from "../../assets/site/tecnicas/micro.svg";
import type { ModalState } from "../../interfaces/interface";

const services = [
  {
    id: 1,
    nome: "Biodecodage",
    img: biodecodage,
    descricao: [
      {
        paragrafo:
          "Originária da França, a Biodecodage é uma abordagem terapêutica inovadora que investiga o sentido biológico por trás de cada sintoma, conectando o corpo e as emoções.",
      },
      {
        paragrafo:
          "A técnica revela como emoções não processadas, ou 'ressentires biológicos', podem se manifestar como doenças, oferecendo um novo caminho para a saúde e o autoconhecimento.",
      },
    ],
    modal: [
      {
        paragrafo:
          "Você já se perguntou por que um sintoma persiste, mesmo com tratamentos convencionais? A Biodecodage oferece uma nova perspectiva ao traduzir a linguagem do seu corpo. Ela parte de uma premissa fundamental: todo sintoma é um programa de sobrevivência biológica, uma solução que o corpo encontrou para se adaptar a um conflito emocional intenso, vivido de forma inesperada e em solidão.",
      },
      {
        paragrafo:
          "<strong>Como funciona na prática?</strong> A sessão é uma conversa terapêutica investigativa e acolhedora. O terapeuta não dá respostas, mas faz as perguntas certas para que você mesmo encontre a origem do seu sintoma em sua própria história. Utilizamos ferramentas como os ciclos biológicos memorizados para identificar o momento exato do 'bioconflito', o instante em que o programa foi ativado.",
      },
      {
        paragrafo:
          "Ao trazer essa emoção oculta à consciência, algo mágico acontece: você compreende a lógica por trás do sintoma. Não se trata de reviver a dor, mas de observá-la sob uma nova luz, compreendendo por que seu corpo reagiu daquela maneira. Essa tomada de consciência permite que o cérebro 'desative' a programação de emergência, liberando o corpo para iniciar seu processo natural de autocura.",
      },
      {
        paragrafo:
          "<strong>Exemplos de conexões biológicas:</strong> Embora cada caso seja único, a biologia responde com lógicas precisas. Problemas de pele podem estar ligados a conflitos de separação. Questões respiratórias podem se relacionar a medos profundos. Dores nos joelhos podem simbolizar uma desvalorização ligada à submissão ('ter que se ajoelhar'). Identificar essa ligação é o primeiro passo para a libertação.",
      },
      {
        paragrafo:
          "<strong>Para quem é a Biodecodage?</strong> É para quem busca ir além do alívio temporário. Para quem deseja entender a causa raiz de suas condições físicas (crônicas, agudas ou alérgicas), resolver bloqueios emocionais que se manifestam no corpo e assumir um papel ativo e consciente em sua jornada de saúde. É um caminho de autoconhecimento que transforma sua relação com seu corpo e sua história.",
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
          "Psych-K® é uma poderosa técnica americana que reprograma sua mente, transformando crenças subconscientes que limitam seu potencial e bem-estar.",
      },
      {
        paragrafo:
          "Utilizando testes cinesiológicos e posturas específicas, a técnica estabelece uma comunicação direta com o subconsciente para promover mudanças rápidas e duradouras.",
      },
    ],
    modal: [
      {
        paragrafo:
          "Você já sentiu que, por mais que se esforce, existe uma força invisível que te puxa de volta para os mesmos padrões? Essa força são suas crenças subconscientes. O Psych-K® é um método revolucionário que te entrega as chaves para reescrever esse 'software' mental, alinhando suas crenças com seus desejos mais profundos.",
      },
      {
        paragrafo:
          "<strong>Como a mágica acontece?</strong> A sessão é um processo colaborativo e dinâmico. Usamos um teste muscular (cinesiologia) como uma ponte de diálogo com a mente subconsciente, identificando com clareza quais crenças estão te apoiando e quais estão te limitando. É um biofeedback simples e preciso, sem adivinhação.",
      },
      {
        paragrafo:
          "Uma vez identificada a crença limitante, aplicamos um 'Processo de Equilíbrio'. Através de posturas corporais específicas, criamos um 'Estado de Cérebro Integrado', onde os dois hemisférios cerebrais trabalham em sincronia. Este é um estado de superaprendizagem, que permite instalar novas crenças de apoio de forma rápida e permanente, geralmente em poucos minutos.",
      },
      {
        paragrafo:
          "<strong>O que posso transformar com o Psych-K®?</strong> As possibilidades são infinitas. Você pode transformar o medo de falar em público em confiança, a crença de 'não sou bom o suficiente' em autoestima inabalável, a mentalidade de escassez financeira em prosperidade, ou liberar o peso emocional de traumas e medos do passado para viver plenamente no presente.",
      },
      {
        paragrafo:
          "<strong>Para quem é o Psych-K®?</strong> É para a pessoa que está cansada de apenas 'falar' sobre seus problemas e deseja uma ferramenta para MUDAR de verdade. Para quem busca resultados rápidos, eficazes e duradouros. É ideal para superar bloqueios, quebrar padrões de autossabotagem e liberar todo o seu potencial para criar a vida que você realmente merece.",
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
          "Desenvolvida na França, a Microfisioterapia é uma terapia manual sutil que ajuda o corpo a eliminar as 'cicatrizes' deixadas por traumas físicos e emocionais.",
      },
      {
        paragrafo:
          "Através de toques precisos, a técnica estimula os mecanismos de autocorreção do corpo, liberando memórias celulares que afetam sua vitalidade e saúde.",
      },
    ],
    modal: [
      {
        paragrafo:
          "Imagine que seu corpo é uma biblioteca viva, registrando cada experiência em seus tecidos. Quedas, perdas, frustrações e até toxinas podem deixar 'cicatrizes' celulares que, mesmo após anos, continuam a perturbar o equilíbrio do seu organismo, manifestando-se como dores, fadiga ou doenças. A Microfisioterapia é a arte de encontrar e ajudar seu corpo a apagar esses registros.",
      },
      {
        paragrafo:
          "<strong>Como a sessão acontece?</strong> Você permanece confortavelmente deitado e vestido. O terapeuta, com toques extremamente leves e precisos (micropalpações), percorre seu corpo seguindo mapas específicos derivados da embriologia. As mãos do profissional atuam como sensores, identificando áreas onde o ritmo vital do tecido foi perdido ou está bloqueado.",
      },
      {
        paragrafo:
          "Quando uma 'cicatriz' é encontrada, o terapeuta realiza um toque específico que 'apresenta' essa memória ao corpo. Esse estímulo funciona como um 'reset', ativando a inteligência inata do seu organismo. O corpo reconhece o agressor original e inicia seu próprio processo de eliminação e reparo. O terapeuta é um facilitador; a cura vem da sabedoria do seu próprio corpo.",
      },
      {
        paragrafo:
          "<strong>Qual a origem dessas 'cicatrizes'?</strong> Elas podem vir de diversas fontes: traumas físicos (acidentes, cirurgias), perdas emocionais (luto, separações), sentimentos de abandono ou humilhação, intoxicações (medicamentos, ambiente) ou frustrações que 'não conseguimos digerir'. A Microfisioterapia ajuda a liberar o impacto que esses eventos ainda causam na sua saúde hoje.",
      },
      {
        paragrafo:
          "<strong>Para quem é a Microfisioterapia?</strong> É para quem sofre com dores crônicas, fibromialgia, enxaquecas, distúrbios do sono, ansiedade e alergias. É extremamente eficaz em condições autoimunes e infecções recorrentes. Também é uma ferramenta poderosa para a prevenção, ajudando o corpo a se manter limpo e resiliente, promovendo um profundo bem-estar e restaurando sua energia vital.",
      },
    ],
  },
];

export default function Services({
  setShowModal,
}: {
  setShowModal: (state: ModalState) => void;
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
