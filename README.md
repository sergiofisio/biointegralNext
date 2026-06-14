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
yarn build         # Next.js (SSR)
yarn build:static  # Hostinger — gera pasta out/
```

### Contato (EmailJS)

O formulário envia e-mail direto do navegador via [EmailJS](https://www.emailjs.com/). Copie `.env.example` para `.env` e preencha:

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço no painel EmailJS |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID do template de contato |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Public Key da conta EmailJS |

O template **contato home site** usa: `{{nome}}`, `{{email}}`, `{{telefone}}`, `{{mensagem}}` e `{{reply_to}}`.

No **GitHub** (environment `production`), configure as **Variables**:

| Variable | Valor (exemplo) |
|----------|-----------------|
| `EMAILJS_SERVICE_ID` | `service_2mocdp6` |
| `EMAILJS_TEMPLATE_ID` | `4wi09hd` |
| `EMAILJS_PUBLIC_KEY` | sua Public Key do EmailJS |

Sem essas variáveis, o build de produção **falha** — o formulário não funciona no site estático porque as credenciais são embutidas no build.

Secrets de deploy FTP:

| Secret | Descrição |
|--------|-----------|
| `FTP_HOST` | **IP do servidor** (hPanel → FTP Accounts), ex.: `185.245.180.163` |
| `FTP_USERNAME` | Usuário FTP |
| `FTP_PASSWORD` | Senha FTP |

Variable opcional (environment production):

| Variable | Descrição |
|----------|-----------|
| `SFTP_REMOTE_PATH` | Pasta remota para SFTP (padrão: `domains/biointegralsaude.com.br/public_html`) |

O deploy tenta, em ordem: **FTP (21)** → **FTPS (21)** → **FTPS legacy (21)** → **SFTP (65002)**.

### Deploy falhou com timeout?

1. Confirme que `FTP_HOST` é o **IP** do hPanel, sem `ftp://` — não use o domínio
2. Verifique usuário/senha no hPanel → **FTP Accounts**
3. Ative **SSH/SFTP** em hPanel → **Advanced → SSH Access** (porta **65002**)
4. Veja o passo **Testar conectividade** no log do GitHub Actions (portas 21 e 65002)
5. Se o SFTP usar caminho diferente, configure `SFTP_REMOTE_PATH` nas Variables do environment production
6. Deploy manual temporário: `yarn build:static` + enviar pasta `out/` via FileZilla

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
