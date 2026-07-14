# Biointegral Saúde

Site institucional da clínica **Biointegral Saúde**, desenvolvido com Next.js e exportado como site estático para hospedagem em produção.

Apresenta os serviços de fisioterapia integrativa — Microfisioterapia, PSYCH-K® e Biodécodage —, as unidades de atendimento em São Paulo e ABC, informações sobre os profissionais e canais de contato.

**Site em produção:** [biointegralsaude.com.br](https://biointegralsaude.com.br)

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home com hero, técnicas, depoimentos, clínicas e FAQ |
| `/quem-somos` | Sobre a clínica e os profissionais |
| `/clinicas` | Unidades e endereços |
| `/contato` | Formulário de contato |
| `/faq` | Perguntas frequentes |
| `/tecnicas/[slug]` | Páginas das técnicas (microfisioterapia, psych-k, biodecodage) |
| `/satisfacao` | Pesquisa de satisfação (página não indexada) |
| `/llms.txt` | Resumo factual para agentes de IA / citação |

## SEO e descoberta

Após o deploy, no [Google Search Console](https://search.google.com/search-console):

1. Cadastre a propriedade `https://www.biointegralsaude.com.br/`
2. Envie o sitemap `https://www.biointegralsaude.com.br/sitemap.xml`
3. Peça inspeção/indexação das URLs-pilar: home, `/tecnicas/microfisioterapia/`, `/faq/`, `/clinicas/`, `/quem-somos/`

O arquivo `/llms.txt` resume a clínica, profissionais, unidades e URLs canônicas para crawlers e assistentes de IA.

## Stack

- **Next.js 15** — App Router, export estático (`out/`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **EmailJS** — envio de formulários no cliente (contato e satisfação)
- **Yarn** — gerenciador de dependências
- **GitHub Actions** — build e deploy automático via FTP/SFTP

## Pré-requisitos

- **Node.js 24+** (ver `.nvmrc`)

```bash
nvm use
```

## Desenvolvimento local

```bash
yarn install
cp .env.example .env   # preencha as variáveis do EmailJS
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

As credenciais do EmailJS ficam em `.env` (não versionado). Consulte [`.env.example`](.env.example) para a lista completa de variáveis necessárias.

| Variável | Uso |
|----------|-----|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Serviço EmailJS |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Chave pública EmailJS (Account → General) |
| `NEXT_PUBLIC_EMAILJS_CONTATO_TEMPLATE_ID` | Template do formulário `/contato` |
| `NEXT_PUBLIC_EMAILJS_SATISFACTION_TEMPLATE_ID` | Template da pesquisa `/satisfacao` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Fallback legado para contato (se CONTATO não existir) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Site key do Cloudflare Turnstile (anti-bot) |

Os IDs são obtidos no painel do [EmailJS](https://www.emailjs.com/). O Turnstile em [dash.cloudflare.com](https://dash.cloudflare.com) → Turnstile.

## Scripts

| Comando | Descrição |
|---------|-----------|
| `yarn dev` | Servidor de desenvolvimento |
| `yarn dev:clean` | Limpa cache `.next` e inicia o dev server |
| `yarn build` | Build padrão do Next.js |
| `yarn build:static` | Build estático para produção (gera `out/` + `version.json`) |
| `yarn start` | Servidor de produção (após `yarn build`) |
| `yarn lint` | ESLint |

Cada `build:static` gera um `NEXT_PUBLIC_BUILD_ID` (no CI = `github.sha`). O cliente compara com `/version.json` e, se o deploy for novo, limpa caches e força reload automático (`SiteVersionGuard`).

## Deploy

O deploy é automatizado pelo workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) a cada push na branch `main`:

1. Instala dependências com `yarn install --frozen-lockfile`
2. Valida variáveis do EmailJS
3. Executa `yarn build:static`
4. Publica a pasta `out/` no servidor — **SFTP primeiro**, depois FTP/FTPS como fallback

### Configuração no GitHub

No environment **production**, configure:

**Secrets** (nunca use Environment variables para isto):

| Secret | Descrição |
|--------|-----------|
| `FTP_HOST` | IP do servidor (**sem** `ftp://`) |
| `FTP_USERNAME` | Usuário FTP/SFTP |
| `FTP_PASSWORD` | Senha FTP/SFTP |
| `SFTP_KNOWN_HOSTS` | *(opcional)* Linha `known_hosts` do servidor para verificar o host no SFTP |

**Variables** (configuração embutida no build estático):

| Variable | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço EmailJS |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Chave pública EmailJS |
| `NEXT_PUBLIC_EMAILJS_CONTATO_TEMPLATE_ID` | Template do formulário de contato |
| `NEXT_PUBLIC_EMAILJS_SATISFACTION_TEMPLATE_ID` | Template da pesquisa de satisfação |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Site key Turnstile (recomendado) |
| `SFTP_REMOTE_PATH` | *(opcional)* Caminho remoto SFTP |

O build de produção **falha** se as variáveis do EmailJS não estiverem configuradas.

### Checklist Hostinger / EmailJS

1. hPanel → **Advanced → SSH Access** → ativar SFTP (porta **65002**)
2. EmailJS → restringir domínio a `www.biointegralsaude.com.br` (+ `localhost` em teste)
3. Se a senha FTP já apareceu em Variables ou prints, **troque no hPanel** e atualize o secret

### Deploy manual

```bash
yarn build:static
# Envie o conteúdo da pasta out/ para o diretório público do servidor
```

## Estrutura do projeto

```
app/                  → rotas e páginas (App Router)
components/
  ui/                 → componentes reutilizáveis
  sections/           → seções da home
  cards/              → cards de técnicas, clínicas e profissionais
  forms/              → honeypot e Turnstile
  site/               → Nav, Footer, WhatsApp, redes sociais
hooks/                → formulários e interações do cliente
lib/                  → dados do site, SEO, form-guard, EmailJS
public/               → assets + .htaccess (headers de segurança)
scripts/              → utilitários de build (ex.: version.json)
```

## Segurança e dependências

- Headers HTTP (HSTS, CSP, nosniff, frame, referrer) em [`public/.htaccess`](public/.htaccess)
- Formulários: honeypot + cooldown (60s) + Cloudflare Turnstile (quando a site key existir)
- Deploy: secrets FTP apenas; SFTP preferencial; Dependabot para `npm` e `github-actions`
- Use **apenas Yarn** (`yarn install`) — o projeto ignora `package-lock.json`
- Nunca versione `.env` com credenciais reais

## Licença

Projeto privado — uso restrito à Biointegral Saúde.
