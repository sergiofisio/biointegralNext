export const SITE = {
  name: "Biointegral Saúde",
  tagline: "Fisioterapia Integrativa",
  /** Número E.164 sem "+" — alinhado ao link oficial wa.me / api.whatsapp.com */
  whatsappNumber: "5511991489063",
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

export type TechniqueSection = {
  heading: string;
  paragraphs: string[];
};

export type Technique = {
  slug: "microfisioterapia" | "psych-k" | "biodecodage";
  name: string;
  short: string;
  /** Meta description mais densa que `short`. */
  metaDescription: string;
  keywords: string[];
  long: string;
  sections: TechniqueSection[];
};

export const TECHNIQUES: Technique[] = [
  {
    slug: "microfisioterapia",
    name: "Microfisioterapia",
    short:
      "Abordagem manual de origem francesa com toques suaves. Antes de começar, conversamos sobre sua queixa e explicamos a sessão.",
    metaDescription:
      "Microfisioterapia em São Paulo e Santo André: abordagem manual de origem francesa com toques suaves. Atendimento com Dra. Fresia e Dr. Sergio, fisioterapeutas registrados no CREFITO-3.",
    keywords: [
      "microfisioterapia",
      "microfisioterapia São Paulo",
      "microfisioterapia Santo André",
      "terapia manual evolutiva",
      "TME",
      "fisioterapia integrativa SP",
    ],
    long: "A microfisioterapia é uma abordagem manual de origem francesa que utiliza toques suaves. Antes de começar, conversamos sobre sua queixa e explicamos como será a sessão.",
    sections: [
      {
        heading: "O que é Microfisioterapia?",
        paragraphs: [
          "A microfisioterapia é uma abordagem manual de origem francesa que utiliza toques suaves. Antes de começar, conversamos sobre sua queixa e explicamos como será a sessão.",
          "Também conhecida como Terapia Manual Evolutiva (TME), foi criada na França, na década de 1980, por Patrice Benini e Daniel Grosjean.",
        ],
      },
      {
        heading: "Como funciona na sessão",
        paragraphs: [
          "A sessão começa com uma conversa sobre o que trouxe você até aqui, como isso afeta sua rotina e quais cuidados você já recebe. Em seguida, o fisioterapeuta explica o que vai acontecer.",
          "Durante a aplicação, o fisioterapeuta realiza toques leves em diferentes regiões do corpo. Não há mobilizações forçadas, agulhas ou medicamentos. Se sentir qualquer desconforto, avise o profissional a qualquer momento.",
        ],
      },
      {
        heading: "Para quem procura",
        paragraphs: [
          "Muitas pessoas chegam com queixas que afetam o dia a dia. Na primeira conversa, entendemos o seu caso e explicamos o que a abordagem pode oferecer e quais são os seus limites.",
          "É uma abordagem complementar: não substitui avaliação médica ou tratamentos prescritos pelo médico de referência. Mantenha o acompanhamento com os profissionais de saúde que cuidam de você.",
        ],
      },
      {
        heading: "O que esperar",
        paragraphs: [
          "Após a avaliação, conversamos sobre a proposta de acompanhamento e quando reavaliar sua evolução. A experiência durante e depois da sessão varia de pessoa para pessoa.",
          "Para atendimento de crianças, entre em contato com a equipe para conversar sobre o motivo da procura e esclarecer como o responsável participa.",
        ],
      },
      {
        heading: "Relação com PSYCH-K® e Biodécodage",
        paragraphs: [
          "As três abordagens têm propostas diferentes. A Microfisioterapia é manual, com toques suaves. Na Biodécodage, conversamos sobre como você vive o adoecimento e o significado que essa experiência tem para você. No PSYCH-K®, você escolhe uma situação ou crença que deseja explorar e participa de exercícios explicados pelo facilitador.",
          "Dr. Sergio e Dra. Fresia formaram-se em Microfisioterapia com Daniel Grosjean e Patrice Benini, criadores do método, na França. Quando faz sentido para o seu caso, conversamos com você sobre combinar abordagens.",
        ],
      },
      {
        heading: "Onde fazer Microfisioterapia em São Paulo e Santo André",
        paragraphs: [
          "A Biointegral Saúde atende Microfisioterapia nas unidades Livance Brigadeiro e Livance Paulista (São Paulo/capital) e Livance Santo André (ABC Paulista). Os profissionais são fisioterapeutas registrados no CREFITO-3, com trajetória desde 2008 em terapias integrativas.",
          "Para agendar, use o WhatsApp da clínica ou o formulário de contato no site. Se tiver exames e informações sobre os cuidados que já recebe, leve-os: ajudam a contextualizar a conversa, sem substituir a avaliação médica.",
        ],
      },
    ],
  },
  {
    slug: "psych-k",
    name: "PSYCH-K®",
    short:
      "Você escolhe uma situação ou crença que deseja explorar e participa de exercícios explicados pelo facilitador.",
    metaDescription:
      "PSYCH-K® em São Paulo e Santo André: você escolhe uma situação ou crença para explorar e participa de exercícios explicados pelo facilitador. Biointegral Saúde — Dra. Fresia e Dr. Sergio.",
    keywords: [
      "PSYCH-K",
      "PSYCH-K São Paulo",
      "PSYCH-K Santo André",
      "facilitador PSYCH-K",
      "fisioterapia integrativa",
    ],
    long: "Você escolhe uma situação ou crença que deseja explorar. O facilitador explica os exercícios da abordagem e vocês conversam sobre o que você percebeu durante a experiência.",
    sections: [
      {
        heading: "O que é PSYCH-K®?",
        paragraphs: [
          "O PSYCH-K® é uma abordagem desenvolvida por Robert Williams nos anos 1980, nos Estados Unidos.",
          "Você escolhe uma situação ou crença que deseja explorar. O facilitador explica os exercícios da abordagem e vocês conversam sobre o que você percebeu durante a experiência.",
        ],
      },
      {
        heading: "Como funciona na sessão",
        paragraphs: [
          "Antes de cada exercício, o facilitador explica o que vai acontecer. Alguns exercícios envolvem posturas e um teste muscular, que ele demonstra antes. Você pode tirar dúvidas ou interromper quando quiser.",
          "Ao final, vocês conversam sobre o que você percebeu. O processo é verbal e postural, sem aparelhos invasivos, hipnose clássica ou medicamentos. Você permanece consciente e participa ativamente do processo.",
        ],
      },
      {
        heading: "Para quem procura",
        paragraphs: [
          "O tema da sessão é escolhido por você. Algumas pessoas trazem situações do dia a dia, como relacionamentos, trabalho ou a forma como se veem.",
          "O PSYCH-K® não substitui acompanhamento psicológico, psiquiátrico ou médico. Se você está em tratamento, mantenha o acompanhamento com os profissionais que cuidam de você.",
        ],
      },
      {
        heading: "O que esperar",
        paragraphs: [
          "Cada pessoa vive a experiência de um jeito. Após a avaliação, conversamos sobre a proposta de acompanhamento e quando reavaliar sua evolução.",
          "Dr. Sergio e Dra. Fresia são facilitadores certificados internacionalmente em PSYCH-K® e são fisioterapeutas registrados no CREFITO-3.",
        ],
      },
      {
        heading: "Diferença em relação à Microfisioterapia e à Biodécodage",
        paragraphs: [
          "A Microfisioterapia é uma abordagem manual, com toques suaves. Na Biodécodage, a conversa gira em torno de como você vive o adoecimento e do significado que essa experiência tem para você. No PSYCH-K®, você escolhe um tema e participa de exercícios explicados pelo facilitador.",
          "A escolha e a combinação das abordagens são conversadas com você após a avaliação.",
        ],
      },
      {
        heading: "Onde fazer PSYCH-K® na Grande São Paulo",
        paragraphs: [
          "Atendemos PSYCH-K® em São Paulo (Livance Paulista e Brigadeiro) e em Santo André (Livance Santo André). Agende pelo WhatsApp ou pela página de contato do site biointegralsaude.com.br.",
        ],
      },
    ],
  },
  {
    slug: "biodecodage",
    name: "Biodécodage",
    short:
      "Uma conversa sobre como você vive o adoecimento e o significado dessa experiência para você. A reflexão é pessoal e não determina a causa de uma doença.",
    metaDescription:
      "Biodécodage em São Paulo e Santo André: conversa sobre como você vive o adoecimento e o significado dessa experiência. Reflexão pessoal, complementar ao acompanhamento médico. Biointegral Saúde.",
    keywords: [
      "biodécodage",
      "biodecodage São Paulo",
      "biodécodage Santo André",
      "décodage biologique",
      "Christian Flèche",
    ],
    long: "Na sessão de Biodécodage, conversamos sobre como você vive o adoecimento, quais sentimentos surgem e que significado essa experiência tem para você. Essa reflexão é pessoal e não determina a causa de uma doença.",
    sections: [
      {
        heading: "O que é Biodécodage?",
        paragraphs: [
          "A Biodécodage é uma abordagem de origem francesa. Na sessão de Biodécodage, conversamos sobre como você vive o adoecimento, quais sentimentos surgem e que significado essa experiência tem para você.",
          "Essa reflexão é pessoal e não determina a causa de uma doença. A Biodécodage é um complemento e não substitui o diagnóstico nem o tratamento médico.",
        ],
      },
      {
        heading: "Como funciona na prática",
        paragraphs: [
          "Você conta sua história: quando a queixa começou, o que estava acontecendo na sua vida e como se sente em relação a ela. O terapeuta faz perguntas e ajuda você a olhar para essa experiência e para os significados que ela tem para você.",
          "Na Biointegral Saúde, a Biodécodage pode ser combinada à Microfisioterapia e ao PSYCH-K®, sempre com fisioterapeutas registrados no CREFITO-3.",
        ],
      },
      {
        heading: "Para quem procura",
        paragraphs: [
          "É procurada por pessoas que querem refletir sobre o que sentem e vivem durante um adoecimento, em paralelo aos cuidados que já recebem.",
          "O processo depende de espaço de escuta e da sua disposição para conversar. Mantenha o acompanhamento médico indicado para o seu caso.",
        ],
      },
      {
        heading: "Formação dos profissionais",
        paragraphs: [
          "Dr. Sergio e Dra. Fresia aprofundaram-se em Décodage Biologique com Emmanuel Corbeel (Bélgica) e em BIOdécodage Prática com Christian Flèche, criador do método.",
        ],
      },
      {
        heading: "Biodécodage, Microfisioterapia e PSYCH-K®",
        paragraphs: [
          "Na Biodécodage, o foco é a conversa sobre a sua experiência. A Microfisioterapia é uma abordagem manual com toques suaves. No PSYCH-K®, você escolhe um tema e participa de exercícios explicados pelo facilitador. A combinação é conversada com você após a avaliação.",
        ],
      },
      {
        heading: "Onde encontrar biodécodage em SP e ABC",
        paragraphs: [
          "Atendemos nas três unidades Livance parceiras: Brigadeiro e Paulista em São Paulo, e Santo André no ABC. Para conversar sobre microfisioterapia, PSYCH-K® ou biodécodage com profissionais nomeados e registrados, fale conosco pelo WhatsApp ou formulário de contato.",
        ],
      },
    ],
  },
];

export type IndicationIcon =
  | "heart"
  | "brain"
  | "sparkles"
  | "shield"
  | "users";

export const FIRST_CONVERSATION_STEPS: {
  icon: IndicationIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: "heart",
    title: "O que trouxe você até aqui",
    desc: "Você pode contar o que está sentindo, quando percebeu a mudança e como ela afeta seu dia a dia.",
  },
  {
    icon: "shield",
    title: "Seus cuidados atuais",
    desc: "Conversamos sobre avaliações e acompanhamentos que você já faz e sobre o que espera deste atendimento.",
  },
  {
    icon: "users",
    title: "Próximos passos",
    desc: "Explicamos como funciona a nossa abordagem, esclarecemos suas dúvidas e conversamos sobre a possibilidade de acompanhamento.",
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
    bio: "Fisioterapeuta formada pelas Faculdades Integradas Pitágoras de Montes Claros/MG, com aperfeiçoamento em Terapia Manual. Formou-se em Microfisioterapia com Daniel Grosjean e Patrice Benini, na França, e em Décodage Biologique com Emmanuel Corbeel, na Bélgica. Estuda BIOdécodage Prática com Christian Flèche e é facilitadora certificada em PSYCH-K®. Atua há mais de uma década com essas abordagens.",
    offset: false,
  },
  {
    name: "Dr. Sergio A. M. Bastos Jr.",
    crefito: "CREFITO-3 · 111.132-F",
    image: "drSergio" as const,
    bio: "Fisioterapeuta formado pelas Faculdades Integradas Pitágoras de Montes Claros/MG, com aperfeiçoamento em Terapia Manual. Formou-se em Microfisioterapia com Daniel Grosjean e Patrice Benini, criadores do método, na França, e em Décodage Biologique com Emmanuel Corbeel, na Bélgica. Estuda BIOdécodage Prática com Christian Flèche e é facilitador certificado em PSYCH-K®.",
    offset: true,
  },
];

/** Mude para true quando a Dra. Fresia concluir a pós em Emagrecimento e Nutrição Clínica Avançada. */
export const CURSO_NUTRICAO_CONCLUIDO = false;

export type Course = {
  slug: string;
  title: string;
  hours: number;
  summary: string;
  /** Como a formação enriquece o atendimento — texto para o paciente. */
  benefits: string[];
  relatedTechniques: Technique["slug"][];
  published: boolean;
};

const ALL_FRESIA_COURSES: Course[] = [
  {
    slug: "psicologia-analitica-junguiana",
    title: "Psicologia Analítica Junguiana",
    hours: 720,
    summary:
      "Pós-graduação dedicada à psicologia de Carl Gustav Jung: inconsciente pessoal e coletivo, arquétipos, símbolos, sonhos e o processo de individuação.",
    benefits: [
      "Escuta atenta da história de cada pessoa, incluindo símbolos, sonhos e imagens que ela traz para a conversa.",
      "Repertório para conversar sobre padrões que se repetem em relações e em momentos de crise.",
      "Recursos de escuta para acolher momentos difíceis, como o luto, dentro de um processo de autoconhecimento.",
    ],
    relatedTechniques: ["biodecodage", "psych-k"],
    published: true,
  },
  {
    slug: "neurociencias-e-comportamento",
    title: "Neurociências e Comportamento",
    hours: 800,
    summary:
      "Pós-graduação sobre a relação entre cérebro, emoções e comportamento: neuroplasticidade, neurotransmissores, funções cognitivas, desenvolvimento infantil, TEA, TDAH e mindfulness.",
    benefits: [
      "Conhecimento sobre a relação entre cérebro, emoções e comportamento para explicar o atendimento com clareza.",
      "Atenção ao desenvolvimento infantil no acolhimento de crianças e famílias, em diálogo com os profissionais que as acompanham.",
      "Noções de mindfulness que podem ser compartilhadas como apoio ao dia a dia.",
    ],
    relatedTechniques: ["psych-k", "microfisioterapia"],
    published: true,
  },
  {
    slug: "emagrecimento-e-nutricao-clinica-avancada",
    title: "Emagrecimento e Nutrição Clínica Avançada",
    hours: 720,
    summary:
      "Pós-graduação sobre obesidade e emagrecimento como processo integral: metabolismo, comportamento alimentar, psiconutrição, saúde mental e terapias contemporâneas.",
    benefits: [
      "Compreensão da relação entre emoções, compulsão alimentar e dificuldade de emagrecer.",
      "Acolhimento integrativo de quem busca perder peso, inclusive durante o uso de terapias como os agonistas de GLP-1.",
      "Trabalho em parceria com médico e nutricionista, que seguem responsáveis pela prescrição de dieta e medicamentos.",
    ],
    relatedTechniques: ["biodecodage", "psych-k"],
    published: CURSO_NUTRICAO_CONCLUIDO,
  },
];

export const FRESIA_COURSES = ALL_FRESIA_COURSES.filter((c) => c.published);

export type FaqEntry = {
  q: string;
  /** Texto plano para JSON-LD e leitores. */
  a: string;
  related?: { href: string; label: string }[];
};

export const FAQS: FaqEntry[] = [
  {
    q: "O que é microfisioterapia?",
    a: "A microfisioterapia é uma abordagem manual de origem francesa que utiliza toques suaves. Antes de começar, conversamos sobre sua queixa e explicamos como será a sessão. Na Biointegral Saúde, é aplicada por fisioterapeutas registrados no CREFITO-3 em São Paulo e Santo André.",
    related: [
      { href: "/tecnicas/microfisioterapia/", label: "Página de Microfisioterapia" },
    ],
  },
  {
    q: "Qual a diferença entre Microfisioterapia, PSYCH-K® e Biodécodage?",
    a: "A Microfisioterapia é uma abordagem manual com toques suaves. Na Biodécodage, conversamos sobre como você vive o adoecimento e o significado dessa experiência para você; essa reflexão é pessoal e não determina a causa de uma doença. No PSYCH-K®, você escolhe uma situação ou crença que deseja explorar, e o facilitador explica os exercícios e conversa com você sobre o que percebeu. Após a avaliação, conversamos sobre quais abordagens fazem sentido para o seu caso.",
    related: [
      { href: "/tecnicas/microfisioterapia/", label: "Microfisioterapia" },
      { href: "/tecnicas/psych-k/", label: "PSYCH-K®" },
      { href: "/tecnicas/biodecodage/", label: "Biodécodage" },
    ],
  },
  {
    q: "Quem realiza os atendimentos?",
    a: "Os atendimentos são realizados pelos fisioterapeutas Dra. Fresia Jorge de Sá Bastos (CREFITO-3 118.225-F) e Dr. Sergio A. M. Bastos Jr. (CREFITO-3 111.132-F). O registro no CREFITO-3 se refere à profissão de fisioterapeuta. A formação de cada um em Microfisioterapia, Biodécodage e PSYCH-K® foi feita em cursos específicos de cada método e está descrita na página Quem somos.",
    related: [{ href: "/quem-somos/", label: "Quem somos" }],
  },
  {
    q: "Onde fazer microfisioterapia em São Paulo?",
    a: "Você pode fazer microfisioterapia na Biointegral Saúde nas unidades Livance Paulista e Livance Brigadeiro, na capital, e também em Santo André (ABC). Agende pelo WhatsApp ou formulário de contato.",
    related: [
      { href: "/clinicas/", label: "Ver unidades" },
      { href: "/microfisioterapia-sao-paulo/", label: "Microfisioterapia em São Paulo" },
      { href: "/microfisioterapia-santo-andre/", label: "Microfisioterapia em Santo André" },
      { href: "/contato/", label: "Contato" },
    ],
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Após a avaliação, conversamos sobre a proposta de acompanhamento e quando reavaliar sua evolução.",
  },
  {
    q: "Quanto tempo dura uma sessão?",
    a: "A duração depende do plano terapêutico e das técnicas utilizadas no encontro. Na triagem e no agendamento informamos a expectativa de tempo para o seu caso.",
  },
  {
    q: "O tratamento é invasivo ou dolorido?",
    a: "Nenhuma das três abordagens usa agulhas ou medicamentos. Na Microfisioterapia, o fisioterapeuta usa toques suaves. Na Biodécodage, a sessão é uma conversa. No PSYCH-K®, o facilitador explica os exercícios, que podem incluir posturas e um teste muscular. Cada pessoa percebe a sessão de um jeito: se sentir qualquer desconforto, avise o profissional para que a sessão seja ajustada ou interrompida.",
  },
  {
    q: "Posso fazer junto com outros tratamentos médicos?",
    a: "Sim. Nossas abordagens são complementares e não substituem tratamentos médicos. Mantenha o acompanhamento com seu médico de confiança e compartilhe seus exames quando relevante.",
  },
  {
    q: "Atendem crianças e idosos?",
    a: "Atendemos pessoas de diferentes idades, de bebês à terceira idade. Para atendimento de crianças, entre em contato com a equipe para conversar sobre o motivo da procura e esclarecer como o responsável participa.",
  },
  {
    q: "Como faço para agendar?",
    a: "Agende pelo WhatsApp da clínica uma pré-avaliação gratuita: uma conversa online de 20 a 30 minutos, sem compromisso de iniciar o acompanhamento. Você também pode usar o formulário de contato do site ou procurar uma das unidades em São Paulo (Paulista e Brigadeiro) e Santo André.",
    related: [
      { href: "/contato/", label: "Formulário de contato" },
      { href: "/clinicas/", label: "Unidades" },
    ],
  },
];

/** Perguntas em destaque na home (teaser). */
export const FAQS_HOME = FAQS.slice(0, 3);
