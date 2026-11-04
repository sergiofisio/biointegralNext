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
  modules: CourseModule[];
  published: boolean;
};

export type CourseModule = {
  title: string;
  topics: string[];
};

const ALL_FRESIA_COURSES: Course[] = [
  {
    slug: "psicologia-analitica-junguiana",
    title: "Psicologia Analítica Junguiana",
    hours: 720,
    summary:
      "Pós-graduação dedicada à psicologia de Carl Gustav Jung: inconsciente pessoal e coletivo, arquétipos, símbolos, sonhos e o processo de individuação.",
    benefits: [
      "Escuta mais profunda da história do paciente, reconhecendo símbolos, sonhos e imagens que acompanham o sintoma.",
      "Compreensão de padrões inconscientes — como sombra e complexos — que se repetem em relações, crises e queixas físicas.",
      "Recursos para conduzir ansiedade, luto e traumas dentro de um processo de autoconhecimento e transformação.",
    ],
    relatedTechniques: ["biodecodage", "psych-k"],
    modules: [
      {
        title: "Princípios da Psicologia Analítica de Jung",
        topics: [
          "Aspectos biográficos de Jung: origem, época e meio social na formação da sua teoria",
          "Inconsciente coletivo e pessoal",
          "A construção das estruturas básicas da psique e sua dinâmica: Arquétipos, Complexos, Persona e Sombra",
          "Anima, Animus e Self",
        ],
      },
      {
        title: "Conceitos Fundamentais da Psicologia Analítica",
        topics: [
          "Processo de Individuação",
          "A Metanoia e Individuação",
          "Função Transcendente",
          "Os Livros Negros e o Livro Vermelho de Jung",
        ],
      },
      {
        title: "Linguagem Simbólica",
        topics: [
          "O Símbolo, o uso de mitos como ferramenta da Psicologia Analítica",
          "Mitologias: Africana, Indígena, Egípcia e Grega/Romana na Psicologia Analítica",
          "Contos de fada como instrumento clínico na Psicologia Analítica",
          "Alquimia e suas chaves na Psicologia Analítica",
        ],
      },
      {
        title: "Psicopatologia e Psicologia Analítica",
        topics: [
          "Desenvolvimento da Personalidade à luz da Psicologia Analítica",
          "Transferência e Contratransferência na Psicologia Analítica",
          "Tipos Psicológicos na Psicologia Analítica",
          "Psicopatologias e Mitologemas em Jung",
        ],
      },
      {
        title: "Técnicas Junguianas I",
        topics: [
          "Estudo da linguagem simbólica em Jung",
          "A Interpretação dos Sonhos na concepção de Jung",
          "Imaginação Ativa nos princípios junguianos",
          "Recursos terapêuticos como desenho, pintura e modelagem",
        ],
      },
      {
        title: "Técnicas Junguianas II",
        topics: [
          "Arte e Jung: recursos artísticos na prática clínica",
          "O uso de mandalas e seu simbolismo na prática clínica",
          "Integração Psicofísica: o encontro do trabalho de Sandor e Jung",
          "Terapia Sandplay (Caixa de Areia)",
        ],
      },
      {
        title: "Imagem e Símbolo",
        topics: [
          "História da Arte e a leitura simbólica",
          "Cinema como expressão de imagens e a leitura junguiana",
          "Sonhos na infância, na adolescência, na metanoia e na clínica",
          "Terapia Familiar e a Visão Sistêmica de Jung",
        ],
      },
      {
        title: "Intervenções Terapêuticas pela Psicologia Analítica",
        topics: [
          "A família e o casal na Psicologia Analítica",
          "Práticas de Terapia de Casal e de Grupo na Psicologia Analítica",
          "Práticas de Terapia Familiar e a Visão Sistêmica de Jung",
          "Aspectos clínicos da Análise Junguiana",
        ],
      },
      {
        title: "Cultura, Sociedade e Psicologia Analítica",
        topics: [
          "A Psicologia Analítica e os desafios da contemporaneidade",
          "Arquétipos culturais e coletivos sociais",
          "Jung e a religiosidade: espiritualidade, ritos e experiências numinosas",
          "Psicologia Analítica, gênero e diversidade",
        ],
      },
      {
        title: "Psicologia Analítica e Saúde Mental",
        topics: [
          "Contribuições da Psicologia Analítica na prevenção e promoção da saúde mental",
          "Ansiedade, depressão e trauma sob a ótica junguiana",
          "Processos de resiliência e transformação psíquica",
          "Psicoterapia breve e intervenções integrativas com base junguiana",
        ],
      },
      {
        title: "Psicologia Analítica e Criatividade",
        topics: [
          "A criatividade como expressão do inconsciente",
          "Jung, arte e processos criativos",
          "Escrita, música e dramatização como instrumentos terapêuticos",
          "Imaginação ativa aplicada à criatividade e ao autoconhecimento",
        ],
      },
      {
        title: "Psicologia Analítica e Contemporaneidade",
        topics: [
          "Arquétipos no mundo digital e nas mídias sociais",
          "Psicologia Analítica e diversidade cultural",
          "Psicologia Analítica aplicada a grupos, organizações e comunidades",
          "Tendências contemporâneas da prática junguiana",
        ],
      },
    ],
    published: true,
  },
  {
    slug: "neurociencias-e-comportamento",
    title: "Neurociências e Comportamento",
    hours: 800,
    summary:
      "Pós-graduação sobre a relação entre cérebro, emoções e comportamento: neuroplasticidade, neurotransmissores, funções cognitivas, desenvolvimento infantil, TEA, TDAH e mindfulness.",
    benefits: [
      "Base científica para explicar como emoções, crenças e experiências se registram no cérebro e no corpo.",
      "Olhar atento ao desenvolvimento infantil e a condições como TEA e TDAH no acolhimento de crianças e famílias.",
      "Estratégias de regulação do estresse e da ansiedade apoiadas em neuroplasticidade e mindfulness.",
    ],
    relatedTechniques: ["psych-k", "microfisioterapia"],
    modules: [
      {
        title: "Introdução à Neurociência I",
        topics: [
          "Fundamentos de Neuroanatomia Funcional",
          "Fisiologia do Sistema Sensorial, Neurossensorial e Funções Hemisféricas",
          "Funções Corticais e Subcorticais",
          "Definição e classificação dos neurotransmissores",
        ],
      },
      {
        title: "Introdução à Neurociência II",
        topics: [
          "Catecolaminas: Dopamina, Noradrenalina, Adrenalina e Serotonina",
          "Sistema endocanabinoide e Sistema GABAérgico",
          "Sistema Glutamatérgico",
          "Neuropeptídios e hormônios dos sistemas nervosos central e periférico",
        ],
      },
      {
        title: "Desenvolvimento Cerebral I",
        topics: [
          "Neuroplasticidade Cerebral",
          "Desenvolvimento Infantil e Plasticidade Cerebral",
          "Desenvolvimento Neuropsicomotor",
          "Fatores ambientais que influenciam a plasticidade do SNC",
        ],
      },
      {
        title: "Desenvolvimento Cerebral II",
        topics: [
          "Desenvolvimento Cerebral e processos de aprendizagem",
          "Os princípios do Desenvolvimento Cognitivo",
          "Consciência, memória, instinto, razão e emoção",
          "O papel da linguagem no desenvolvimento e na aprendizagem",
        ],
      },
      {
        title: "Funções Cognitivas e Emocionais",
        topics: [
          "Funções Psicológicas Básicas: Memória e Cognição",
          "Funções cognitivas, conativas e executivas na aprendizagem",
          "Emoções: relação com o funcionamento cerebral e processos de aprendizagem",
          "Transtornos e condições que influenciam o funcionamento cognitivo",
        ],
      },
      {
        title: "Contextualização e Critérios Diagnósticos do Autismo",
        topics: [
          "História do Autismo e sua definição",
          "Sinais do TEA na infância",
          "Critérios diagnósticos do TEA",
          "A importância da família e o diagnóstico",
        ],
      },
      {
        title: "Desenvolvimento Humano e Desafios em Indivíduos com TEA",
        topics: [
          "Avaliação neuropsicológica no TEA",
          "Ausência de habilidades x excessos de comportamentos disruptivos e inadequados",
          "Alterações sensoriais x birras",
          "Estereotipias, comportamentos repetitivos e rigidez",
        ],
      },
      {
        title: "Epidemiologia do Transtorno de Déficit de Atenção/Hiperatividade",
        topics: [
          "Aspectos Neurobiológicos do TDAH",
          "Identificação e Avaliação do TDAH: DSM-5 e CID-11",
          "Sintomatologia do TDAH na primeira e segunda infância",
          "Sintomatologia do TDAH em adolescentes",
        ],
      },
      {
        title: "Transtornos Globais do Desenvolvimento (TGD), Altas Habilidades e Superdotação",
        topics: [
          "Definição e visão social de TGD, Altas Habilidades e Superdotação",
          "Características específicas da Educação Especial e a relação com o TGD",
          "Inclusão escolar de alunos com TGD, Altas Habilidades e Superdotação",
          "A formação e o acompanhamento da tríade escola, família e sociedade no processo de ensino-aprendizagem",
        ],
      },
      {
        title: "Neuroalfabetização na Educação I",
        topics: [
          "Teorias de Alfabetização e estímulo de áreas neurológicas fundamentais: leitura, escrita e compreensão leitora",
          "Funcionamento Executivo, Atenção e Memória no processo de aprendizagem",
          "Funções Executivas e o aprendizado da leitura e escrita",
          "Habilidade de decodificar para ler e recodificar para escrever",
        ],
      },
      {
        title: "Neuroalfabetização na Educação II",
        topics: [
          "Constituição do léxico ortográfico",
          "Consciência fonológica e domínio do princípio alfabético",
          "Audição e construção da linguagem e do léxico gramatical",
          "Ordem de apresentação das letras e rotas de leitura",
        ],
      },
      {
        title: "Neuropsicomotricidade",
        topics: [
          "Definição e diferenças entre psicomotricidade e neuropsicomotricidade",
          "Bases teóricas da psicomotricidade: corpo, movimento e integração sensorial",
          "A neuropsicomotricidade: abordagem neurobiológica do movimento e comportamento",
          "Inter-relação entre aspectos cognitivos, emocionais e motores",
        ],
      },
      {
        title: "Conceitos e Funções da Psicologia e o Comportamento",
        topics: [
          "O surgimento do estudo do comportamento",
          "Panorama do comportamento no campo psicológico: conceitos e tendências",
          "A psicologia do comportamento desviante",
          "Personalidade e comportamento",
        ],
      },
      {
        title: "Psicologia e Neuroaprendizagem",
        topics: [
          "Relação entre dificuldade de aprendizagem e as inteligências",
          "Métodos de avaliação da inteligência",
          "As inteligências múltiplas aplicadas à educação infantil",
          "Neurociência e linguagem",
        ],
      },
      {
        title: "Psicologia Positiva e Mindfulness",
        topics: [
          "Introdução à Psicologia Positiva e seus princípios fundamentais",
          "Psicologia Positiva, Mindfulness e PNL",
          "Princípios e práticas de mindfulness",
          "Impacto do mindfulness na redução do estresse e promoção do bem-estar",
        ],
      },
    ],
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
    modules: [
      {
        title: "Fundamentos da Nutrição Clínica",
        topics: [
          "Alimentação e nutrição",
          "Implicações clínicas relacionadas à nutrição: doenças por carência ou excesso de nutrientes e doenças metabólicas",
          "Avaliação do consumo alimentar",
          "Avaliação antropométrica",
        ],
      },
      {
        title: "Composição Corporal e Diagnóstico Nutricional",
        topics: [
          "Avaliação da composição corporal localizada e total do corpo humano",
          "IMC, bioimpedância e cineantropometria",
          "Biomarcadores da desnutrição: albumina, transferrina, índice de creatinina, balanço nitrogenado",
          "Biomarcadores do metabolismo lipídico: triglicerídeos, colesterol, lipoproteínas",
        ],
      },
      {
        title: "Metabolismo e Marcadores Clínicos",
        topics: [
          "Biomarcadores do metabolismo da glicose: glicemia, hemoglobina glicada, insulina",
          "Obesidade e desordens alimentares",
          "Alimentação especial e estratégias de controle da obesidade",
          "Tratamento de diabetes, distúrbios tireoidianos, dislipidemias e associação com dietas",
        ],
      },
      {
        title: "Transtornos Alimentares e Conduta Nutricional",
        topics: [
          "Nutrição em transtornos alimentares",
          "Avaliação e conduta nutricional em caso de transtornos alimentares",
          "Nutrição e saúde mental: alimentação saudável e adoção de novos hábitos",
          "Protocolos clínicos de acompanhamento nutricional em transtornos alimentares",
        ],
      },
      {
        title: "Psiconutrição e Comportamento Alimentar",
        topics: [
          "Comportamento alimentar e psiconutrição na obesidade e emagrecimento",
          "Compulsão alimentar e resistência ao emagrecimento",
          "Estratégias motivacionais e adesão terapêutica",
          "Abordagens contemporâneas em reeducação alimentar",
        ],
      },
      {
        title: "Estratégias Nutricionais Avançadas no Emagrecimento",
        topics: [
          "Dietas terapêuticas e emagrecimento baseado em evidências",
          "Prescrição nutricional individualizada na obesidade",
          "Preservação de massa magra durante perda ponderal",
          "Intervenções nutricionais de longo prazo e manutenção do peso",
        ],
      },
      {
        title: "Farmacologia Aplicada à Nutrição Clínica",
        topics: [
          "Introdução à farmacologia da obesidade",
          "Medicamentos utilizados no controle do peso: panorama atual",
          "Interações fármaco-nutriente e efeitos metabólicos",
          "Papel do nutricionista no acompanhamento de pacientes medicados",
        ],
      },
      {
        title: "Canetas Emagrecedoras: GLP-1 e Novas Terapias",
        topics: [
          "Mecanismos de ação dos agonistas de GLP-1",
          "Principais canetas emagrecedoras e diferenças clínicas",
          "Evidências científicas e resultados em obesidade e diabetes",
          "Monitorização nutricional durante o uso de canetas",
        ],
      },
      {
        title: "Protocolos Nutricionais Integrados ao GLP-1",
        topics: [
          "Ajustes alimentares em pacientes com supressão de apetite",
          "Estratégias para evitar deficiências nutricionais",
          "Suporte proteico e preservação muscular",
          "Estudos de caso clínicos e condutas práticas",
        ],
      },
      {
        title: "Riscos, Limites e Uso Responsável",
        topics: [
          "Efeitos adversos e complicações mais comuns",
          "Automedicação, uso estético e riscos sociais",
          "Contraindicações e grupos vulneráveis",
          "Educação do paciente e orientação multiprofissional",
        ],
      },
      {
        title: "Cirurgia Bariátrica e Intervenções Clínicas",
        topics: [
          "A cirurgia bariátrica e principais intervenções",
          "Resoluções e legislações a respeito da cirurgia bariátrica",
          "Manejo nutricional e suplementação do paciente bariátrico no primeiro ano de cirurgia",
          "Análise de exames laboratoriais no paciente bariátrico",
        ],
      },
      {
        title: "Prática Clínica Avançada em Emagrecimento",
        topics: [
          "Construção de protocolos completos de atendimento em obesidade",
          "Integração nutrição + farmacoterapia + saúde mental",
          "Casos complexos: obesidade refratária e reganho de peso",
          "Ética e responsabilidade profissional no emagrecimento moderno",
        ],
      },
    ],
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
      { href: "/microfisioterapia-sao-paulo/", label: "Microfisioterapia em São Paulo" },
      { href: "/microfisioterapia-santo-andre/", label: "Microfisioterapia em Santo André" },
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
