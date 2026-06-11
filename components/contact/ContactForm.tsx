"use client";

import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE, CLINICS } from "@/lib/site-data";
import { useContactForm } from "@/hooks/use-contact-form";
import { PageHeader } from "@/components/ui/PageHeader";

export function ContactForm() {
  const { sent, handleSubmit } = useContactForm();

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
                Continue a conversa pelo WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-navy block mb-2">
                  Nome
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-zinc-300 py-2 outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-navy block mb-2">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-zinc-300 py-2 outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-navy block mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-300 py-2 outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white py-4 rounded-full font-medium hover:bg-navy-soft transition-colors"
              >
                Enviar mensagem
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
