(function () {
  var tools = [
    {
      name: "get_clinic_overview",
      description:
        "Returns Biointegral Saude clinic overview and canonical URL.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async function () {
        return {
          name: "Biointegral Saude",
          url: "https://www.biointegralsaude.com.br/",
          summary:
            "Integrative physiotherapy in Sao Paulo and Santo Andre. Microfisioterapia, PSYCH-K and Biodecodage.",
        };
      },
    },
    {
      name: "list_clinics",
      description: "Lists Biointegral Saude clinic addresses.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async function () {
        return {
          clinics: [
            {
              name: "Livance Brigadeiro",
              address:
                "Rua Cincinato Braga, 340 — 10 andar, Bela Vista, Sao Paulo — SP",
            },
            {
              name: "Livance Paulista",
              address: "Avenida Paulista, 2064 — 21 andar, Sao Paulo — SP",
            },
            {
              name: "Livance Santo Andre",
              address:
                "Avenida Portugal, 1265 — 3 andar, Jardim, Santo Andre — SP",
            },
          ],
        };
      },
    },
    {
      name: "get_contact",
      description: "Returns public contact channels (email and WhatsApp).",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async function () {
        return {
          email: "contato@biointegralsaude.com.br",
          whatsapp:
            "https://api.whatsapp.com/message/QONW6E37X27CJ1?autoload=1&app_absent=0",
        };
      },
    },
  ];

  function publish() {
    var mc = navigator.modelContext;
    if (!mc) return false;
    if (typeof mc.provideContext === "function") {
      mc.provideContext({ tools: tools });
    }
    if (typeof mc.registerTool === "function") {
      for (var i = 0; i < tools.length; i++) mc.registerTool(tools[i]);
    }
    return typeof mc.provideContext === "function" || typeof mc.registerTool === "function";
  }

  if (publish()) return;
  var n = 0;
  var timer = setInterval(function () {
    n += 1;
    if (publish() || n > 40) clearInterval(timer);
  }, 100);
})();
