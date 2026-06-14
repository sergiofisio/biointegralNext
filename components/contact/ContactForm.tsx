"use client";

import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE, CLINICS } from "@/lib/site-data";
import { useContactForm } from "@/hooks/use-contact-form";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhoneField } from "@/components/contact/PhoneField";
import { FieldError } from "@/components/contact/FieldError";
import { cn } from "@/lib/utils";

const fieldClass = (hasError: boolean) =>
  cn(
    "w-full bg-transparent border-b py-2 outline-none transition-colors",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-zinc-300 focus:border-gold",
  );

export function ContactForm() {
  const { sent, loading, errors, clearFieldError, handleSubmit } = useContactForm();

  return (
    <div className="bg-canvas">
      <PageHeader
        label="Contato"
        title="Estamos prontos para ouvir você."
        description="Envie sua mensagem pelo formulário abaixo ou fale diretamente pelo WhatsApp."
        showBackLink
      />

      <section className="px-6 pb-24 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 bg-white rounded-3xl ring-1 ring-black/5 p-10">
          {sent ? (
            <div className="text-center py-12">
              <h2 className="font-display text-3xl text-navy mb-4">
                Mensagem enviada!
              </h2>
              <p className="text-zinc-600">
                Recebemos sua mensagem e responderemos em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errors.form && (
                <div
                  className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800"
                  role="alert"
                >
                  <p className="font-medium">Não foi possível enviar</p>
                  <p className="mt-1">{errors.form}</p>
                  <a
                    href={SITE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 font-medium underline underline-offset-2"
                  >
                    Falar pelo WhatsApp
                  </a>
                </div>
              )}

              <div>
                <label
                  htmlFor="contact-nome"
                  className="text-xs font-semibold uppercase tracking-widest text-navy block mb-2"
                >
                  Nome
                </label>
                <input
                  id="contact-nome"
                  name="nome"
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={errors.nome ? "contact-nome-error" : undefined}
                  onChange={() => clearFieldError("nome")}
                  className={fieldClass(Boolean(errors.nome))}
                />
                <FieldError id="contact-nome-error" message={errors.nome} />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold uppercase tracking-widest text-navy block mb-2"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  onChange={() => clearFieldError("email")}
                  className={fieldClass(Boolean(errors.email))}
                />
                <FieldError id="contact-email-error" message={errors.email} />
              </div>

              <PhoneField
                error={errors.telefone}
                onClearError={() => clearFieldError("telefone")}
              />

              <div>
                <label
                  htmlFor="contact-mensagem"
                  className="text-xs font-semibold uppercase tracking-widest text-navy block mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-mensagem"
                  name="mensagem"
                  rows={4}
                  aria-invalid={Boolean(errors.mensagem)}
                  aria-describedby={
                    errors.mensagem ? "contact-mensagem-error" : undefined
                  }
                  onChange={() => clearFieldError("mensagem")}
                  className={cn(fieldClass(Boolean(errors.mensagem)), "resize-none")}
                />
                <FieldError id="contact-mensagem-error" message={errors.mensagem} />
              </div>

              <input type="hidden" name="reply_to" defaultValue="" />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-navy text-white py-4 rounded-full font-medium hover:bg-navy-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          )}
        </div>
        <div className="lg:col-span-2 space-y-6">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 rounded-3xl bg-gold text-navy hover:bg-gold-soft transition-colors"
          >
            <MessageCircle className="size-6 mb-3" />
            <div className="font-display text-2xl mb-1">WhatsApp</div>
            <div className="text-sm opacity-80">Resposta rápida</div>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="block p-8 rounded-3xl bg-white ring-1 ring-black/5"
          >
            <Mail className="size-6 mb-3 text-gold" />
            <div className="font-display text-2xl text-navy mb-1">E-mail</div>
            <div className="text-sm text-zinc-500">{SITE.email}</div>
          </a>
          <div className="p-8 rounded-3xl bg-white ring-1 ring-black/5">
            <MapPin className="size-6 mb-3 text-gold" />
            <div className="font-display text-2xl text-navy mb-3">
              Nossas unidades
            </div>
            <ul className="space-y-2 text-sm text-zinc-600">
              {CLINICS.map((c) => (
                <li key={c.slug}>
                  <strong className="text-navy">{c.name}</strong>
                  <div className="text-xs">{c.address}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
