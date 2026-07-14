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

Os IDs são obtidos no painel do [EmailJS](https://www.emailjs.com/).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `yarn dev` | Servidor de desenvolvimento |
| `yarn dev:clean` | Limpa cache `.next` e inicia o dev server |
| `yarn build` | Build padrão do Next.js |
| `yarn build:static` | Build estático para produção (gera `out/`) |
| `yarn start` | Servidor de produção (após `yarn build`) |
| `yarn lint` | ESLint |

## Deploy

O deploy é automatizado pelo workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) a cada push na branch `main`:

1. Instala dependências com `yarn install --frozen-lockfile`
2. Valida variáveis do EmailJS
3. Executa `yarn build:static`
4. Publica a pasta `out/` no servidor via FTP ou SFTP

### Configuração no GitHub

No environment **production**, configure:

**Secrets** (credenciais de acesso ao servidor):

| Secret | Descrição |
|--------|-----------|
| `FTP_HOST` | Host ou IP do servidor |
| `FTP_USERNAME` | Usuário FTP/SFTP |
| `FTP_PASSWORD` | Senha FTP/SFTP |

**Variables** (configuração do build):

| Variable | Descrição |
|----------|-----------|
| `EMAILJS_SERVICE_ID` ou `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço EmailJS |
| `EMAILJS_PUBLIC_KEY` ou `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Chave pública EmailJS |
| `EMAILJS_CONTATO_TEMPLATE_ID` ou `NEXT_PUBLIC_EMAILJS_CONTATO_TEMPLATE_ID` | Template do formulário de contato |
| `EMAILJS_SATISFACTION_TEMPLATE_ID` ou `NEXT_PUBLIC_EMAILJS_SATISFACTION_TEMPLATE_ID` | Template da pesquisa de satisfação |
| `SFTP_REMOTE_PATH` | *(opcional)* Caminho remoto para upload SFTP |

O build de produção **falha** se as variáveis do EmailJS não estiverem configuradas.

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
  site/               → Nav, Footer, WhatsApp, redes sociais
hooks/                → formulários e interações do cliente
lib/                  → dados do site, SEO e metadados
public/images/        → imagens e assets estáticos
scripts/              → utilitários de build (ex.: version.json)
```

## Segurança e dependências

- Use **apenas Yarn** (`yarn install`) — o projeto não utiliza `package-lock.json`
- Alertas de dependências são monitorados via [Dependabot](.github/dependabot.yml)
- Nunca commite arquivos `.env` com credenciais reais

## Licença

Projeto privado — uso restrito à Biointegral Saúde.
