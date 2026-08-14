# auth.md

Agent registration for **Biointegral Saúde** (`https://www.biointegralsaude.com.br`).

This origin is a public marketing site. There is no patient portal and no privileged API. Agents may use public pages, `/llms.txt`, the API catalog, and WebMCP tools in the browser.

## Audience

AI agents that need clinic facts (locations, techniques, contact) or that want to be listed as an integration contact.

## Registration

1. Email `contato@biointegralsaude.com.br` with subject `Agent registration`.
2. Include agent name, operator organization, contact email, and intended use.
3. Optional: open WhatsApp via the official clinic link on `/contato/`.

Provisioning endpoint (human review): https://www.biointegralsaude.com.br/agent/register/

## Methods

- **anonymous** — public read of site resources; no credential.
- **verified_email** — operator email on file after human review.

## Credentials

Public resources do not require a bearer token. If a credential is issued after review, send it as `Authorization: Bearer <token>` on documented API URLs.

## Related discovery

- Protected resource metadata: `/.well-known/oauth-protected-resource`
- Authorization server metadata: `/.well-known/oauth-authorization-server`
- OpenID configuration: `/.well-known/openid-configuration`
- API catalog: `/.well-known/api-catalog`
