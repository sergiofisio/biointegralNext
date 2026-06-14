export const SITE = {
  name: "Biointegral Saúde",
  tagline: "Fisioterapia Integrativa",
  whatsappNumber: "5511999999999",
  whatsappUrl:
    "https://api.whatsapp.com/message/QONW6E37X27CJ1?autoload=1&app_absent=0",
  instagram: "https://instagram.com/biointegralsaude",
  facebook: "https://facebook.com/biointegralsaude",
  email: "contato@biointegralsaude.com.br",
};

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    handle: "@biointegralsaude",
    href: SITE.instagram,
  },
  {
    name: "Facebook",
    handle: "Biointegral Saúde",
    href: SITE.facebook,
  },
] as const;

export const CLINICS = [
  {
    slug: "livance-brigadeiro",
    name: "Livance Brigadeiro",
    city: "São Paulo",
    address: "Rua Cincinato Braga, 340 — 10º andar",
    neighborhood: "Bela Vista, São Paulo — SP",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Cincinato+Braga+340+S%C3%A3o+Paulo",
    embed:
      "https://www.google.com/maps?q=Rua+Cincinato+Braga+340+S%C3%A3o+Paulo&output=embed",
  },
  {
    slug: "livance-paulista",
    name: "Livance Paulista",
    city: "São Paulo",
    address: "Avenida Paulista, 2064 — 21º andar",
    neighborhood: "Bela Vista, São Paulo — SP",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Paulista+2064+S%C3%A3o+Paulo",
    embed:
      "https://www.google.com/maps?q=Avenida+Paulista+2064+S%C3%A3o+Paulo&output=embed",
  },
  {
    slug: "livance-santo-andre",
    name: "Livance Santo André",
    city: "ABC Paulista",
    address: "Avenida Portugal, 1265 — 3º andar",
    neighborhood: "Jardim, Santo André — SP",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Portugal+1265+Santo+Andr%C3%A9",
    embed:
      "https://www.google.com/maps?q=Avenida+Portugal+1265+Santo+Andr%C3%A9&output=embed",
  },
];

export const TECHNIQUES = [
  {
    slug: "microfisioterapia",
    name: "Microfisioterapia",
    short:
      "Identificação de cicatrizes traumáticas no corpo através do toque sutil.",
    long: "Desenvolvida na França, a Microfisioterapia é uma terapia manual sutil que ajuda o corpo a eliminar as cicatrizes deixadas por traumas físicos e emocionais. Através de toques precisos, a técnica estimula os mecanismos de autocorreção do corpo, liberando memórias celulares que afetam sua vitalidade e saúde.",
  },
  {
    slug: "psych-k",
    name: "PSYCH-K®",
    short:
      "Reprogramação de crenças limitantes em nível subconsciente de forma rápida.",
    long: "PSYCH-K® é uma poderosa técnica americana que reprograma sua mente, transformando crenças subconscientes que limitam seu potencial ou bem-estar. Utilizando testes cinesiológicos e posturas específicas, a técnica estabelece uma comunicação direta com o subconsciente para promover mudanças rápidas e duradouras.",
  },
  {
    slug: "biodecodage",
    name: "Biodécodage",
    short:
      "Compreensão do sentido biológico dos sintomas e sua origem emocional.",
    long: "Originária da França, a Biodécodage é uma abordagem terapêutica inovadora que investiga o sentido biológico por trás de cada sintoma, conectando o corpo e as emoções. A técnica revela como emoções não processadas, ou ressentires biológicos, podem se manifestar como doenças, oferecendo um novo caminho para a saúde e o autoconhecimento.",
  },
];

export const SYMPTOMS = [
  "Dores Crônicas",
  "Ansiedade e Estresse",
  "Traumas Emocionais",
  "Alergias",
  "Fobias",
  "Distúrbios do Sono",
  "Enxaquecas",
  "Depressão",
  "Fibromialgia",
];

export type IndicationIcon =
  | "heart"
  | "brain"
  | "sparkles"
  | "shield"
  | "users";

export const INDICATIONS: {
  icon: IndicationIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: "heart",
    title: "Dores Crônicas",
    desc: "Lombalgia, cervicalgia, enxaqueca e dores sem causa aparente.",
  },
  {
    icon: "brain",
    title: "Ansiedade e Pânico",
    desc: "Crises recorrentes, fobias e bloqueios emocionais.",
  },
  {
    icon: "sparkles",
    title: "Traumas Emocionais",
    desc: "Perdas, lutos, abusos e memórias dolorosas.",
  },
  {
    icon: "shield",
    title: "Alergias e Imunidade",
    desc: "Rinites, dermatites e quadros alérgicos persistentes.",
  },
  {
    icon: "users",
    title: "Relacionamentos",
    desc: "Padrões repetitivos em relações afetivas e profissionais.",
  },
  {
    icon: "heart",
    title: "Distúrbios do Sono",
    desc: "Insônia, pesadelos e dificuldade para relaxar.",
  },
];

export const TESTIMONIALS = [
  {
    initial: "M",
    name: "Mariana Silva, 34",
    location: "São Paulo · paciente desde 2022",
    quote:
      "A Biointegral mudou minha percepção sobre saúde. Pela primeira vez, senti que alguém olhou para a causa, não apenas para o sintoma. Em poucas sessões minha enxaqueca crônica simplesmente parou.",
  },
  {
    initial: "R",
    name: "Ricardo Menezes, 42",
    location: "Santo André",
    quote:
      "Cheguei com dores nas costas há anos. Em poucas sessões senti uma leveza que não experimentava desde a adolescência. A abordagem integrativa fez toda a diferença.",
  },
  {
    initial: "C",
    name: "Carla Tavares, 51",
    location: "São Paulo",
    quote:
      "O acolhimento da equipe e a combinação das técnicas me ajudaram a superar a ansiedade que carregava há muito tempo. Recomendo de coração.",
  },
];

export const PROFESSIONALS = [
  {
    name: "Dra. Fresia Jorge de Sá Bastos",
    crefito: "CREFITO-3 · 118.225-F",
    image: "draFresia" as const,
    bio: "Especialista em Microfisioterapia, Biodécodage e PSYCH-K®. Atua há mais de uma década integrando ciência fisioterapêutica e abordagens emocionais para tratar a raiz das queixas.",
    offset: false,
  },
  {
    name: "Dr. Sergio A. M. Bastos Jr.",
    crefito: "CREFITO-3 · 111.132-F",
    image: "drSergio" as const,
    bio: "Pioneiro no Brasil de diversas técnicas integrativas. Formado pelos próprios criadores das técnicas que pratica, é referência em Microfisioterapia e BIOdécodage no país.",
    offset: true,
  },
];

export const FAQS = [
  {
    q: "As técnicas são reconhecidas pela fisioterapia?",
    a: "Sim. Dr. Sergio e Dra. Fresia são fisioterapeutas registrados no CREFITO-3 (118.225-F e 111.132-F) e as técnicas aplicadas são complementares à prática fisioterapêutica, com formação reconhecida internacionalmente.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Integramos diversas técnicas em cada sessão para maximizar resultados com o menor número de atendimentos possível. A média varia de 3 a 6 sessões, dependendo da queixa e da resposta individual do paciente.",
  },
  {
    q: "O tratamento é invasivo ou dolorido?",
    a: "Não. Todas as técnicas (Microfisioterapia, PSYCH-K® e Biodécodage) são não invasivas, indolores e seguras. Não utilizam medicamentos nem agulhas.",
  },
  {
    q: "Posso fazer junto com outros tratamentos médicos?",
    a: "Sim. Nossas abordagens são complementares e não substituem tratamentos médicos. Recomendamos sempre manter o acompanhamento com seu médico de confiança.",
  },
  {
    q: "Atendem crianças e idosos?",
    a: "Sim. As técnicas são seguras para todas as idades, desde bebês até a terceira idade. Crianças costumam responder com muita rapidez.",
  },
  {
    q: "Como faço para agendar?",
    a: "Você pode agendar pelo WhatsApp clicando no botão flutuante, pelo formulário de contato, ou diretamente em uma das três unidades em São Paulo e Santo André.",
  },
];
