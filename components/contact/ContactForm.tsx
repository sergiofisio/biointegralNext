"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SITE, CLINICS } from "@/lib/site-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const message = data.get("message");
    const text = `Olá! Meu nome é ${name}.\n\n${message}`;
    window.open(
      `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSent(true);
  }

  return (
    <div className="bg-canvas">
      <section className="px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-4 block">
          Contato
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-navy leading-[0.95] text-balance mb-6">
          Estamos prontos para ouvir você.
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl">
          Envie sua mensagem pelo formulário abaixo ou fale diretamente pelo
          WhatsApp.
        </p>
      </section>

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
