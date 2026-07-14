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
      "Identificação de cicatrizes traumáticas no corpo através do toque sutil.",
    metaDescription:
      "Microfisioterapia em São Paulo e Santo André: técnica francesa de terapia manual sutil que trata cicatrizes de traumas físicos e emocionais. Atendimento com Dr. Sergio e Dra. Fresia (CREFITO-3).",
    keywords: [
      "microfisioterapia",
      "microfisioterapia São Paulo",
      "microfisioterapia Santo André",
      "terapia manual evolutiva",
      "TME",
      "fisioterapia integrativa SP",
    ],
    long: "Desenvolvida na França, a Microfisioterapia é uma terapia manual sutil que ajuda o corpo a eliminar as cicatrizes deixadas por traumas físicos e emocionais.",
    sections: [
      {
        heading: "O que é Microfisioterapia?",
        paragraphs: [
          "A Microfisioterapia (também conhecida como Terapia Manual Evolutiva — TME) é uma técnica de terapia manual criada na França, na década de 1980, por Patrice Benini e Daniel Grosjean. Parte da premissa de que o corpo guarda memórias de traumas físicos e emocionais nas células e tecidos.",
          "Essas “cicatrizes informacionais” podem permanecer silenciosas por anos e contribuir para dores crônicas, alterações imunológicas, problemas digestivos, distúrbios do sono e sintomas emocionais. O objetivo da técnica é identificar e liberar essas memórias, estimulando a capacidade natural de autorregulação do organismo.",
        ],
      },
      {
        heading: "Como funciona na sessão",
        paragraphs: [
          "O fisioterapeuta realiza um mapeamento sutil do corpo, com toques leves e específicos, buscando áreas de desequilíbrio ou bloqueio. Não há mobilizações forçadas, agulhas ou medicamentos.",
          "A partir desse mapeamento, toques precisos estimulam mecanismos de autocorreção. A sessão é não invasiva e geralmente confortável — inclusive para bebês, crianças e idosos.",
        ],
      },
      {
        heading: "Indicações frequentes",
        paragraphs: [
          "A Microfisioterapia é frequentemente buscada em casos de dores crônicas (lombalgia, cervicalgia, enxaqueca), fibromialgia, alergias e rinites persistentes, ansiedade, traumas emocionais, distúrbios do sono e sintomas que não encontram causa clara em exames convencionais.",
          "É uma abordagem complementar: não substitui avaliação médica ou tratamentos prescritos pelo médico de referência. Muitos pacientes a combinam com acompanhamento clínico convencional.",
        ],
      },
      {
        heading: "O que esperar e para quem é indicada",
        paragraphs: [
          "O número de sessões varia conforme a queixa e a resposta individual. Na Biointegral Saúde, integramos Microfisioterapia a outras técnicas quando faz sentido clinicamente, buscando resultados com o menor número possível de atendimentos.",
          "A técnica é segura para todas as idades. Crianças frequentemente respondem com rapidez. Adultos e idosos costumam relatar leveza corporal e mudança na qualidade dos sintomas ao longo do processo.",
        ],
      },
      {
        heading: "Relação com PSYCH-K® e Biodécodage",
        paragraphs: [
          "Na prática clínica integrativa, a Microfisioterapia atua sobretudo no “registro corporal” do trauma. O PSYCH-K® trabalha crenças limitantes no nível subconsciente, e a Biodécodage investiga o sentido biológico dos sintomas e das emoções associadas.",
          "Dr. Sergio e Dra. Fresia formaram-se diretamente com os criadores da Microfisioterapia na França e conjugam as três abordagens quando a história do paciente indica benefício.",
        ],
      },
      {
        heading: "Onde fazer Microfisioterapia em São Paulo e Santo André",
        paragraphs: [
          "A Biointegral Saúde atende Microfisioterapia nas unidades Livance Brigadeiro e Livance Paulista (São Paulo/capital) e Livance Santo André (ABC Paulista). Os profissionais são fisioterapeutas registrados no CREFITO-3, com trajetória desde 2008 em terapias integrativas.",
          "Para agendar, use o WhatsApp da clínica ou o formulário de contato no site. Leve exames e histórico médico relevantes — ajudam a contextualizar a sessão sem substituir o diálogo clínico.",
        ],
      },
    ],
  },
  {
    slug: "psych-k",
    name: "PSYCH-K®",
    short:
      "Reprogramação de crenças limitantes em nível subconsciente de forma rápida.",
    metaDescription:
      "PSYCH-K® em São Paulo e Santo André: reprogramação de crenças subconscientes com facilitadores certificados. Clínica Biointegral Saúde — Dr. Sergio e Dra. Fresia.",
    keywords: [
      "PSYCH-K",
      "PSYCH-K São Paulo",
      "reprogramação de crenças",
      "crenças limitantes",
      "fisioterapia integrativa",
    ],
    long: "PSYCH-K® é uma técnica que reprograma crenças subconscientes limitantes por meio de testes cinesiológicos e posturas específicas.",
    sections: [
      {
        heading: "O que é PSYCH-K®?",
        paragraphs: [
          "O PSYCH-K® é uma técnica terapêutica desenvolvida por Robert Williams nos anos 1980, nos Estados Unidos. Combina elementos de cinesiologia, comunicação com o subconsciente e princípios alinhados à PNL para transformar crenças que sustentam padrões de comportamento, ansiedade, automedicação emocional ou autossabotagem.",
          "A premissa é que grande parte das decisões e reações emocionais ocorre abaixo da consciência. Mudar só o “pensamento racional” muitas vezes não basta; o PSYCH-K® busca alinhar o subconsciente a crenças mais capacitantes.",
        ],
      },
      {
        heading: "Como funciona na sessão",
        paragraphs: [
          "Com testes musculares (balanço muscular) e posturas específicas, o facilitador e o paciente identificam crenças limitantes e as substituem por afirmações sustentáveis para o subconsciente.",
          "O processo é verbal e postural, sem aparelhos invasivos. Não envolve hipnose clássica nem medicamentos. A pessoa permanece consciente e participe ativa do processo.",
        ],
      },
      {
        heading: "Indicações frequentes",
        paragraphs: [
          "O PSYCH-K® é frequentemente utilizado em ansiedade, fobias, traumas emocionais, padrões repetitivos em relacionamentos, bloqueios relacionados a sucesso ou dinheiro, e crenças sobre saúde e autoimagem.",
          "Na Biointegral, quando a queixa tem forte componente de crença ou padrão emocional, o PSYCH-K® costuma ser combinado à Microfisioterapia e/ou Biodécodage.",
        ],
      },
      {
        heading: "Segurança e expectativas",
        paragraphs: [
          "Trata-se de técnica não invasiva e geralmente bem tolerada. Resultados variam: algumas pessoas relatam mudança perceptível já nas primeiras sessões; outras percebem o efeito de forma mais gradual no cotidiano.",
          "Dr. Sergio e Dra. Fresia são facilitadores certificados internacionalmente em PSYCH-K® e contextualizam a técnica dentro da prática fisioterapêutica integrativa.",
        ],
      },
      {
        heading: "Diferença em relação à Microfisioterapia e à Biodécodage",
        paragraphs: [
          "Enquanto a Microfisioterapia trabalha registros no corpo por toque sutil, o PSYCH-K® foca na reprogramação de crenças. A Biodécodage investiga o sentido biológico do sintoma e a emoção conflitante associada.",
          "As três se complementam: corpo, crença e sentido biológico do sintoma. A escolha e a sequência dependem da avaliação individual.",
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
      "Compreensão do sentido biológico dos sintomas e sua origem emocional.",
    metaDescription:
      "Biodécodage em São Paulo e Santo André: abordagem francesa que investiga o sentido biológico dos sintomas e emoções. Biointegral Saúde — formação com referências internacionais.",
    keywords: [
      "biodécodage",
      "biodecodage São Paulo",
      "décodage biologique",
      "sentido biológico dos sintomas",
      "fisioterapia emocional",
    ],
    long: "A Biodécodage investiga o sentido biológico dos sintomas, conectando corpo e emoções não processadas.",
    sections: [
      {
        heading: "O que é Biodécodage?",
        paragraphs: [
          "A Biodécodage é uma abordagem terapêutica de origem francesa que busca compreender as origens emocionais e mentais por trás de sintomas físicos. Parte da observação de que doenças e queixas recorrentes podem estar ligadas a um “ressentir biológico conflitual” — uma emoção ou situação não elaborada que o organismo “codifica” no corpo.",
          "O método ajuda a pessoa a reconhecer a linguagem do sintoma, identificar a emoção associada e abrir caminho para liberação e novos recursos internos — sempre como complemento, nunca como substituto do diagnóstico e tratamento médico.",
        ],
      },
      {
        heading: "Como funciona na prática",
        paragraphs: [
          "O terapeuta investiga a história do sintoma, contexto de surgimento e vivências emocionais relacionadas. O diálogo terapêutico e as ferramentas da biodécodage orientam a identificação do sentido biológico e caminhos de resolução simbólica e emocional.",
          "Na Biointegral Saúde, a Biodécodage dialoga com a Microfisioterapia (registro corporal) e com o PSYCH-K® (crenças), formando um atendimento integrativo sob coordenação de fisioterapeutas CREFITO-3.",
        ],
      },
      {
        heading: "Indicações e público",
        paragraphs: [
          "É procurada por quem apresenta sintomas recorrentes, crises emocionais ligadas a dores ou doenças, e desejo de compreender a relação corpo–emoção. Também apoia processos de autoconhecimento em paralelo a tratamentos convencionais.",
          "Pessoas de todas as idades podem se beneficiar, desde que haja espaço de escuta e adesão ao processo. Contraindicações relativas seguem o bom senso clínico e a indicação médica vigente.",
        ],
      },
      {
        heading: "Formação e autoridade clínica",
        paragraphs: [
          "Dr. Sergio e Dra. Fresia aprofundaram-se em Décodage Biologique com Emmanuel Corbeel (Bélgica) e em BIOdécodage Prática com Christian Flèche, criador do método. Essa formação direta fundamenta a aplicação responsável e ética da abordagem.",
        ],
      },
      {
        heading: "Biodécodage, Microfisioterapia e PSYCH-K®",
        paragraphs: [
          "A Biodécodage esclarece o “porquê biológico/emocional” do sintoma; a Microfisioterapia atua no tecido e na memória corporal; o PSYCH-K® atualiza crenças que mantêm o padrão. Juntas, oferecem um mapa mais completo da queixa.",
        ],
      },
      {
        heading: "Onde encontrar biodécodage em SP e ABC",
        paragraphs: [
          "Atendemos nas três unidades Livance parceiras: Brigadeiro e Paulista em São Paulo, e Santo André no ABC. Para indicação de microfisioterapia, PSYCH-K® ou biodécodage com profissionais nomeados e registrados, fale conosco pelo WhatsApp ou formulário de contato.",
        ],
      },
    ],
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

export type FaqEntry = {
  q: string;
  /** Texto plano para JSON-LD e leitores. */
  a: string;
  related?: { href: string; label: string }[];
};

export const FAQS: FaqEntry[] = [
  {
    q: "O que é microfisioterapia?",
    a: "Microfisioterapia é uma técnica francesa de terapia manual sutil que identifica e trata cicatrizes deixadas por traumas físicos e emocionais nos tecidos. Na Biointegral Saúde, é aplicada por fisioterapeutas CREFITO-3 em São Paulo e Santo André.",
    related: [
      { href: "/tecnicas/microfisioterapia/", label: "Página de Microfisioterapia" },
    ],
  },
  {
    q: "Onde fazer microfisioterapia em São Paulo?",
    a: "Você pode fazer microfisioterapia na Biointegral Saúde nas unidades Livance Paulista e Livance Brigadeiro, na capital, e também em Santo André (ABC). Agende pelo WhatsApp ou formulário de contato.",
    related: [
      { href: "/clinicas/", label: "Ver unidades" },
      { href: "/contato/", label: "Contato" },
    ],
  },
  {
    q: "Qual a diferença entre Microfisioterapia, PSYCH-K® e Biodécodage?",
    a: "A Microfisioterapia atua nos registros corporais do trauma por toque sutil. O PSYCH-K® reprograma crenças limitantes no subconsciente. A Biodécodage investiga o sentido biológico e emocional dos sintomas. Na Biointegral, as três podem ser integradas conforme a avaliação.",
    related: [
      { href: "/tecnicas/microfisioterapia/", label: "Microfisioterapia" },
      { href: "/tecnicas/psych-k/", label: "PSYCH-K®" },
      { href: "/tecnicas/biodecodage/", label: "Biodécodage" },
    ],
  },
  {
    q: "As técnicas são reconhecidas pela fisioterapia?",
    a: "Dr. Sergio e Dra. Fresia são fisioterapeutas registrados no CREFITO-3 (111.132-F e 118.225-F). As técnicas são complementares à prática fisioterapêutica, com formação internacional junto aos criadores e certificadoras das abordagens.",
    related: [{ href: "/quem-somos/", label: "Quem somos" }],
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Integramos técnicas em cada sessão para maximizar resultados com o menor número de atendimentos possível. A média varia de 3 a 6 sessões, dependendo da queixa e da resposta individual.",
  },
  {
    q: "Quanto tempo dura uma sessão?",
    a: "A duração depende do plano terapêutico e das técnicas utilizadas no encontro. Na triagem e no agendamento informamos a expectativa de tempo para o seu caso.",
  },
  {
    q: "O tratamento é invasivo ou dolorido?",
    a: "Não. Microfisioterapia, PSYCH-K® e Biodécodage são não invasivas, sem agulhas e sem medicamentos. A Microfisioterapia usa toques sutis; o PSYCH-K® e a Biodécodage trabalham com diálogo, posturas e escuta clínica.",
  },
  {
    q: "Posso fazer junto com outros tratamentos médicos?",
    a: "Sim. Nossas abordagens são complementares e não substituem tratamentos médicos. Mantenha o acompanhamento com seu médico de confiança e compartilhe seus exames quando relevante.",
  },
  {
    q: "Atendem crianças e idosos?",
    a: "Sim. As técnicas são seguras para todas as idades, desde bebês até a terceira idade. Crianças costumam responder com muita rapidez.",
  },
  {
    q: "Como faço para agendar?",
    a: "Agende pelo WhatsApp da clínica, pelo formulário de contato do site, ou em uma das unidades em São Paulo (Paulista e Brigadeiro) e Santo André.",
    related: [
      { href: "/contato/", label: "Formulário de contato" },
      { href: "/clinicas/", label: "Unidades" },
    ],
  },
];

/** Perguntas em destaque na home (teaser). */
export const FAQS_HOME = FAQS.slice(0, 3);
