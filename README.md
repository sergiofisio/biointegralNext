# Biointegral Saúde

Site institucional da clínica Biointegral Saúde — Next.js 15 + Tailwind CSS v4.

## Pré-requisitos

- **Node.js 24+** (recomendado via [nvm](https://github.com/nvm-sh/nvm))

```bash
nvm use   # lê .nvmrc automaticamente
```

## Stack

- **Next.js 15** (App Router, export estático)
- **Tailwind CSS v4**
- **TypeScript**
- Deploy: Hostinger (SFTP) + Vercel

## Desenvolvimento

```bash
yarn install
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
yarn build   # gera pasta out/ para deploy estático
```

## Estrutura

```
app/              → rotas e páginas
components/
  ui/             → primitivos (PageHeader, SectionHeader, etc.)
  sections/       → seções da home
  cards/          → TechniqueCard, ClinicCard, ProfessionalCard
  site/           → Nav, Footer, WhatsAppFloat
hooks/            → useContactForm, useMobileMenu, useWhatsApp
lib/              → site-data, seo, metadata, images
public/images/    → assets do site
```
