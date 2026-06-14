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
yarn build         # Vercel (com API de contato via MailerSend)
yarn build:static  # Hostinger — gera pasta out/
```

### Contato (MailerSend)

Configure no **Vercel** (Environment Variables):

| Variável | Descrição |
|----------|-----------|
| `MAILERSEND_API_KEY` | Token da API no painel MailerSend |
| `MAILERSEND_FROM_EMAIL` | Remetente verificado no MailerSend |
| `MAILERSEND_FROM_NAME` | Nome exibido (ex.: Biointegral Saúde) |
| `MAILERSEND_TO_EMAIL` | Caixa que recebe os formulários |
| `CONTACT_CORS_ORIGIN` | Origens do site estático (Hostinger), separadas por vírgula |

No **GitHub** (environment `production`):

| Config | Nome | Descrição |
|--------|------|-----------|
| Variable | `CONTACT_API_URL` | URL da API na Vercel, ex.: `https://www.biointegralsaude.com.br/api/contact` |
| Secret | `FTP_HOST` | Host SFTP da Hostinger |
| Secret | `FTP_USERNAME` | Usuário SFTP |
| Secret | `FTP_PASSWORD` | Senha FTP/SSH |

Os secrets legados `VITE_EMAILJS_*` não são mais usados neste projeto.

Copie `.env.example` para `.env` local para testar o formulário em desenvolvimento.

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
