export type LocalLanding = {
  slug: "microfisioterapia-sao-paulo" | "microfisioterapia-santo-andre";
  path: string;
  city: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  clinics: ("livance-brigadeiro" | "livance-paulista" | "livance-santo-andre")[];
  intro: string[];
  whyHere: { heading: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const LOCAL_LANDINGS: LocalLanding[] = [
  {
    slug: "microfisioterapia-sao-paulo",
    path: "/microfisioterapia-sao-paulo",
    city: "São Paulo",
    title: "Microfisioterapia em São Paulo",
    h1: "Microfisioterapia em São Paulo",
    description:
      "Microfisioterapia na capital: atendimento na Av. Paulista e no Brigadeiro com Dr. Sergio e Dra. Fresia (CREFITO-3). Técnica francesa para dores e traumas.",
    keywords: [
      "microfisioterapia São Paulo",
      "microfisioterapia Paulista",
      "microfisioterapia Brigadeiro",
      "fisioterapia integrativa SP",
    ],
    clinics: ["livance-paulista", "livance-brigadeiro"],
    intro: [
      "A Biointegral Saúde aplica Microfisioterapia em São Paulo capital, nas unidades Livance Paulista (Avenida Paulista, 2064) e Livance Brigadeiro (Rua Cincinato Braga, 340). O atendimento é feito pelos fisioterapeutas Dr. Sergio A. M. Bastos Jr. e Dra. Fresia Jorge de Sá Bastos, registrados no CREFITO-3.",
      "A técnica, criada na França por Patrice Benini e Daniel Grosjean, usa toques sutis para identificar cicatrizes de traumas físicos e emocionais. É complementar à medicina convencional: não substitui diagnóstico médico nem medicamentos prescritos.",
    ],
    whyHere: [
      {
        heading: "Duas unidades no centro expandido",
        text: "Paulista e Bela Vista/Brigadeiro, com acesso por metrô e ônibus. Ideal para quem busca microfisioterapia na capital sem deslocar até o ABC.",
      },
      {
        heading: "Formação com os criadores da técnica",
        text: "Os profissionais da clínica formaram-se em Microfisioterapia diretamente com Grosjean e Benini, na França, e combinam a abordagem com PSYCH-K® e Biodécodage quando a avaliação indica.",
      },
      {
        heading: "Indicações frequentes em consultório",
        text: "Dores crônicas, enxaqueca, ansiedade, traumas emocionais, alergias persistentes e sintomas sem causa clara em exames — sempre com escuta clínica e encaminhamento médico quando necessário.",
      },
    ],
    faq: [
      {
        q: "Onde fazer microfisioterapia em São Paulo?",
        a: "Na Biointegral Saúde, nas unidades Livance Paulista e Livance Brigadeiro. Agende pelo WhatsApp ou pelo formulário de contato.",
      },
      {
        q: "A microfisioterapia substitui o médico?",
        a: "Não. É uma terapia manual complementar. Mantenha seu acompanhamento médico e leve exames relevantes à sessão.",
      },
    ],
  },
  {
    slug: "microfisioterapia-santo-andre",
    path: "/microfisioterapia-santo-andre",
    city: "Santo André",
    title: "Microfisioterapia em Santo André",
    h1: "Microfisioterapia em Santo André e ABC",
    description:
      "Microfisioterapia no ABC Paulista: unidade Livance Santo André (Av. Portugal, 1265) com Dr. Sergio e Dra. Fresia (CREFITO-3).",
    keywords: [
      "microfisioterapia Santo André",
      "microfisioterapia ABC",
      "fisioterapia integrativa Santo André",
      "microfisioterapia ABC Paulista",
    ],
    clinics: ["livance-santo-andre"],
    intro: [
      "Quem busca microfisioterapia em Santo André e no ABC Paulista pode se atender na unidade Livance Santo André, na Avenida Portugal, 1265 — 3º andar (bairro Jardim). A Biointegral Saúde atende ali com a mesma equipe da capital: Dr. Sergio e Dra. Fresia, fisioterapeutas CREFITO-3.",
      "A Microfisioterapia (TME) é uma técnica francesa de toque sutil voltada a registros corporais de traumas. No ABC, o fluxo clínico é o mesmo de São Paulo: avaliação, sessão não invasiva e, quando faz sentido, integração com PSYCH-K® e Biodécodage.",
    ],
    whyHere: [
      {
        heading: "Unidade no ABC, sem ir à capital",
        text: "Endereço na Av. Portugal, em Santo André, para pacientes de Santo André, São Bernardo, São Caetano e região.",
      },
      {
        heading: "Mesmos profissionais da clínica em SP",
        text: "Não é uma franquia genérica: o atendimento é da Biointegral Saúde, com formação internacional em Microfisioterapia, Décodage e PSYCH-K®.",
      },
      {
        heading: "Como agendar",
        text: "WhatsApp da clínica ou página de contato. Informe se prefere Santo André ou as unidades da Paulista e do Brigadeiro.",
      },
    ],
    faq: [
      {
        q: "Tem microfisioterapia em Santo André?",
        a: "Sim. A Biointegral Saúde atende na Livance Santo André, Av. Portugal, 1265. Também há unidades na capital, na Paulista e no Brigadeiro.",
      },
      {
        q: "Atende outras cidades do ABC?",
        a: "Sim. A unidade de Santo André recebe pacientes de todo o ABC. O deslocamento até São Paulo capital é opcional.",
      },
    ],
  },
];

export function getLocalLanding(slug: string) {
  return LOCAL_LANDINGS.find((l) => l.slug === slug);
}
