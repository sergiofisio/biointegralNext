"use client";

import { useState } from "react";
import { CLINICS, PROFESSIONALS } from "@/lib/site-data";
import { useSatisfactionForm } from "@/hooks/use-satisfaction-form";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhoneField } from "@/components/contact/PhoneField";
import { FieldError } from "@/components/contact/FieldError";
import { StarRating } from "@/components/satisfaction/StarRating";
import { cn } from "@/lib/utils";

const fieldClass = (hasError: boolean) =>
  cn(
    "w-full bg-transparent border-b py-2 outline-none transition-colors",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-zinc-300 focus:border-gold",
  );

const selectClass = (hasError: boolean) =>
  cn(
    "w-full bg-transparent border-b py-2 outline-none transition-colors appearance-none",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-zinc-300 focus:border-gold",
  );

const textareaClass = (hasError: boolean) =>
  cn(
    "w-full resize-y rounded-xl border px-4 py-3 outline-none transition-colors",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-zinc-200 focus:border-gold",
  );

export function SatisfactionForm() {
  const { sent, loading, errors, clearFieldError, handleSubmit } =
    useSatisfactionForm();
  const [nota, setNota] = useState(0);

  return (
    <div className="bg-canvas min-h-[70vh]">
      <PageHeader
        label="Pesquisa de satisfação"
        title="Sua opinião faz diferença."
        description="Conte como foi sua experiência conosco. Suas respostas nos ajudam a melhorar o atendimento e, se autorizar, seu depoimento pode inspirar outras pessoas."
      />

      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl ring-1 ring-black/5 p-8 md:p-10">
          {sent ? (
            <div className="text-center py-12">
              <h2 className="font-display text-3xl text-navy mb-4">
                Obrigado pelo seu feedback!
              </h2>
              <p className="text-zinc-600 max-w-md mx-auto">
                Recebemos sua pesquisa e depoimento com carinho. A equipe
                Biointegral agradece por compartilhar sua experiência.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {errors.form && (
                <div
                  className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800"
                  role="alert"
                >
                  <p className="font-medium">Não foi possível enviar</p>
                  <p className="mt-1">{errors.form}</p>
                </div>
              )}

              <input type="hidden" name="reply_to" value="" />
              <input type="hidden" name="nota_label" value="" />
              <input type="hidden" name="autoriza_publicacao_label" value="" />
              <input type="hidden" name="ponto_positivo_envio" value="" />
              <input type="hidden" name="sugestao_melhoria_envio" value="" />
              <input type="hidden" name="evolucao_sintomas_envio" value="" />
              <input type="hidden" name="recomendaria_envio" value="" />
              <input type="hidden" name="comentarios_melhoria_envio" value="" />

              <fieldset className="space-y-6">
                <legend className="font-display text-xl text-navy mb-2">
                  Sobre você
                </legend>

                <div>
                  <label htmlFor="nome" className="block text-sm text-zinc-600 mb-1">
                    Nome completo *
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    disabled={loading}
                    aria-invalid={Boolean(errors.nome)}
                    aria-describedby={errors.nome ? "nome-error" : undefined}
                    onChange={() => clearFieldError("nome")}
                    className={fieldClass(Boolean(errors.nome))}
                  />
                  <FieldError id="nome-error" message={errors.nome} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-zinc-600 mb-1"
                    >
                      E-mail <span className="text-zinc-400">(opcional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      disabled={loading}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      onChange={() => clearFieldError("email")}
                      className={fieldClass(Boolean(errors.email))}
                    />
                    <FieldError id="email-error" message={errors.email} />
                  </div>

                  <div>
                    <PhoneField
                      required={false}
                      disabled={loading}
                      error={errors.telefone}
                      onClearError={() => clearFieldError("telefone")}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="font-display text-xl text-navy mb-2">
                  Sobre o atendimento
                </legend>

                <div>
                  <label
                    htmlFor="unidade"
                    className="block text-sm text-zinc-600 mb-1"
                  >
                    Unidade em que foi atendido(a) *
                  </label>
                  <select
                    id="unidade"
                    name="unidade"
                    defaultValue=""
                    disabled={loading}
                    aria-invalid={Boolean(errors.unidade)}
                    aria-describedby={errors.unidade ? "unidade-error" : undefined}
                    onChange={() => clearFieldError("unidade")}
                    className={selectClass(Boolean(errors.unidade))}
                  >
                    <option value="" disabled>
                      Selecione a unidade
                    </option>
                    {CLINICS.map((clinic) => (
                      <option key={clinic.slug} value={clinic.name}>
                        {clinic.name} — {clinic.neighborhood}
                      </option>
                    ))}
                  </select>
                  <FieldError id="unidade-error" message={errors.unidade} />
                </div>

                <div>
                  <label
                    htmlFor="profissional"
                    className="block text-sm text-zinc-600 mb-1"
                  >
                    Profissional que o(a) atendeu *
                  </label>
                  <select
                    id="profissional"
                    name="profissional"
                    defaultValue=""
                    disabled={loading}
                    aria-invalid={Boolean(errors.profissional)}
                    aria-describedby={
                      errors.profissional ? "profissional-error" : undefined
                    }
                    onChange={() => clearFieldError("profissional")}
                    className={selectClass(Boolean(errors.profissional))}
                  >
                    <option value="" disabled>
                      Selecione o profissional
                    </option>
                    {PROFESSIONALS.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Ambos / Equipe">Ambos / Equipe</option>
                    <option value="Prefiro não informar">
                      Prefiro não informar
                    </option>
                  </select>
                  <FieldError
                    id="profissional-error"
                    message={errors.profissional}
                  />
                </div>

                <div>
                  <span className="block text-sm text-zinc-600 mb-2">
                    Como você avalia sua experiência? *
                  </span>
                  <StarRating
                    name="nota"
                    value={nota}
                    disabled={loading}
                    hasError={Boolean(errors.nota)}
                    onChange={(value) => {
                      setNota(value);
                      clearFieldError("nota");
                    }}
                  />
                  <FieldError id="nota-error" message={errors.nota} />
                </div>
              </fieldset>

              <fieldset className="space-y-6">
                <legend className="font-display text-xl text-navy mb-2">
                  Seu depoimento
                </legend>

                <div>
                  <label
                    htmlFor="depoimento"
                    className="block text-sm text-zinc-600 mb-1"
                  >
                    Conte em suas palavras como foi sua experiência *
                  </label>
                  <textarea
                    id="depoimento"
                    name="depoimento"
                    rows={5}
                    disabled={loading}
                    placeholder="Ex.: Como cheguei, o que senti durante o tratamento e os resultados que obtive..."
                    aria-invalid={Boolean(errors.depoimento)}
                    aria-describedby={
                      errors.depoimento ? "depoimento-error" : undefined
                    }
                    onChange={() => clearFieldError("depoimento")}
                    className={cn(
                      "w-full resize-y rounded-xl border px-4 py-3 outline-none transition-colors",
                      errors.depoimento
                        ? "border-red-400 focus:border-red-500"
                        : "border-zinc-200 focus:border-gold",
                    )}
                  />
                  <FieldError id="depoimento-error" message={errors.depoimento} />
                </div>

                <div>
                  <span
                    id="autoriza-label"
                    className="block text-sm text-zinc-600 mb-3"
                  >
                    Autoriza a publicação deste depoimento no site? *
                  </span>
                  <div
                    className="space-y-3"
                    role="radiogroup"
                    aria-labelledby="autoriza-label"
                    aria-invalid={Boolean(errors.autoriza_publicacao)}
                    aria-describedby={
                      errors.autoriza_publicacao ? "autoriza-error" : undefined
                    }
                  >
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="autoriza_publicacao"
                        value="sim"
                        disabled={loading}
                        onChange={() => clearFieldError("autoriza_publicacao")}
                        className="mt-1 accent-gold"
                      />
                      <span className="text-sm text-zinc-700">
                        Sim, autorizo publicar meu depoimento (podemos usar apenas
                        seu primeiro nome e cidade).
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="autoriza_publicacao"
                        value="nao"
                        disabled={loading}
                        onChange={() => clearFieldError("autoriza_publicacao")}
                        className="mt-1 accent-gold"
                      />
                      <span className="text-sm text-zinc-700">
                        Não, prefiro que fique apenas para uso interno da clínica.
                      </span>
                    </label>
                  </div>
                  <FieldError
                    id="autoriza-error"
                    message={errors.autoriza_publicacao}
                  />
                </div>
              </fieldset>

              <fieldset className="space-y-6 rounded-2xl bg-zinc-50/80 ring-1 ring-zinc-100 p-6 md:p-8">
                <div>
                  <legend className="font-display text-xl text-navy">
                    Ajude-nos a melhorar
                  </legend>
                  <p className="mt-2 text-sm text-zinc-500">
                    Estas perguntas são opcionais, mas suas respostas nos ajudam
                    a aprimorar o tratamento e o atendimento.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="ponto_positivo"
                    className="block text-sm text-zinc-600 mb-1"
                  >
                    O que você mais valorizou no tratamento?{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <textarea
                    id="ponto_positivo"
                    name="ponto_positivo"
                    rows={3}
                    disabled={loading}
                    placeholder="Ex.: Acolhimento, clareza nas explicações, resultado nas dores..."
                    aria-invalid={Boolean(errors.ponto_positivo)}
                    aria-describedby={
                      errors.ponto_positivo ? "ponto_positivo-error" : undefined
                    }
                    onChange={() => clearFieldError("ponto_positivo")}
                    className={textareaClass(Boolean(errors.ponto_positivo))}
                  />
                  <FieldError
                    id="ponto_positivo-error"
                    message={errors.ponto_positivo}
                  />
                </div>

                <div>
                  <label
                    htmlFor="sugestao_melhoria"
                    className="block text-sm text-zinc-600 mb-1"
                  >
                    O que poderíamos melhorar no atendimento ou no tratamento?{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <textarea
                    id="sugestao_melhoria"
                    name="sugestao_melhoria"
                    rows={3}
                    disabled={loading}
                    placeholder="Ex.: Horários, tempo de sessão, orientações entre consultas, ambiente..."
                    aria-invalid={Boolean(errors.sugestao_melhoria)}
                    aria-describedby={
                      errors.sugestao_melhoria ? "sugestao_melhoria-error" : undefined
                    }
                    onChange={() => clearFieldError("sugestao_melhoria")}
                    className={textareaClass(Boolean(errors.sugestao_melhoria))}
                  />
                  <FieldError
                    id="sugestao_melhoria-error"
                    message={errors.sugestao_melhoria}
                  />
                </div>

                <div>
                  <label
                    htmlFor="evolucao_sintomas"
                    className="block text-sm text-zinc-600 mb-1"
                  >
                    Como você avalia a evolução dos seus sintomas?{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <select
                    id="evolucao_sintomas"
                    name="evolucao_sintomas"
                    defaultValue=""
                    disabled={loading}
                    onChange={() => clearFieldError("evolucao_sintomas")}
                    className={selectClass(false)}
                  >
                    <option value="">Prefiro não responder</option>
                    <option value="significativa">Melhora significativa</option>
                    <option value="moderada">Melhora moderada</option>
                    <option value="pouca">Pouca ou nenhuma melhora ainda</option>
                    <option value="cedo">Ainda é cedo para avaliar</option>
                  </select>
                </div>

                <div>
                  <span className="block text-sm text-zinc-600 mb-3">
                    Você recomendaria a Biointegral para alguém próximo?{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </span>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { value: "sim", label: "Sim, recomendaria" },
                      { value: "talvez", label: "Talvez" },
                      { value: "nao", label: "Não recomendaria" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer text-sm text-zinc-700"
                      >
                        <input
                          type="radio"
                          name="recomendaria"
                          value={option.value}
                          disabled={loading}
                          onChange={() => clearFieldError("recomendaria")}
                          className="accent-gold"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="comentarios_melhoria"
                    className="block text-sm text-zinc-600 mb-1"
                  >
                    Algum comentário sobre horários, comunicação, ambiente ou
                    técnicas utilizadas?{" "}
                    <span className="text-zinc-400">(opcional)</span>
                  </label>
                  <textarea
                    id="comentarios_melhoria"
                    name="comentarios_melhoria"
                    rows={3}
                    disabled={loading}
                    placeholder="Compartilhe qualquer detalhe que possa nos ajudar..."
                    aria-invalid={Boolean(errors.comentarios_melhoria)}
                    aria-describedby={
                      errors.comentarios_melhoria
                        ? "comentarios_melhoria-error"
                        : undefined
                    }
                    onChange={() => clearFieldError("comentarios_melhoria")}
                    className={textareaClass(Boolean(errors.comentarios_melhoria))}
                  />
                  <FieldError
                    id="comentarios_melhoria-error"
                    message={errors.comentarios_melhoria}
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3.5 rounded-full bg-navy text-white font-medium hover:bg-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar pesquisa"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
