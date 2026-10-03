# MEMORY.md - Memória Arquitetural e Decisões Técnicas

Este documento registra decisões arquiteturais, diretrizes e padrões de engenharia adotados no projeto **ap-dev-web** e no repositório de engenharia.

---

## 1. Diretriz: Separação de Templates e Organização de Componentes (Angular Style Guide)

- **Data da Decisão:** Outubro/2026
- **Contexto:** Componentes Angular 22 estavam concentrando toda a marcação HTML complexa (100 a 180+ linhas) diretamente como strings inline dentro de `template: \`...\`` nos arquivos `.component.ts`, e os arquivos de componentes estavam todos soltos no mesmo nível de diretório sem subpastas.
- **Princípio Violado:** Single Responsibility Principle (SRP) e Clean Code, além de contrariar a recomendação oficial do Angular Style Guide.
- **Decisão Arquitetural & Guardrail:**
  1. **Regra de 3 Linhas para Templates:**
     - Qualquer componente com mais de **3 linhas de HTML** deve obrigatoriamente extrair a marcação para um arquivo dedicado `.component.html` e referenciá-lo via `templateUrl: './[name].component.html'`.
     - Templates inline são permitidos exclusivamente para micro-templates com até 3 linhas de extensão.
  2. **Regra para Estilos:**
     - Estilos de componente superiores a 5-10 linhas devem ser extraídos para `.component.css` via `styleUrl`.
  3. **Organização por Subpastas Dedicadas:**
     - É estritamente proibido deixar múltiplos componentes soltos em uma mesma pasta.
     - Cada componente deve possuir sua pasta própria em kebab-case (ex: `header/`, `hero/`, `glow-button/`).
     - A pasta do componente agrupa de forma coesa seus artefatos:
       - `[name].component.ts` (lógica reativa, signals, inputs, outputs)
       - `[name].component.html` (estrutura visual, novo control flow `@if`/`@for`/`@defer`)
       - `[name].component.css` (estilos escopados)
       - `[name].component.spec.ts` (testes unitários isolados)
  4. **Camadas Arquiteturais:**
     - `core/`: Serviços globais, providers, models e data sets.
     - `features/[feature-name]/components/[component-name]/`: Componentes específicos de cada feature de negócio.
     - `shared/components/[component-name]/`: Componentes utilitários de UI reutilizáveis transversalmente.



---

## 2. Guardrails de Testes e Zoneless

- **Test Runner:** Vitest v5 integrado ao Angular 22 (`ng test`).
- **Arquitetura Reativa:** 100% Zoneless (`provideZonelessChangeDetection`), Signals nativos (`signal`, `computed`, `input`, `output`) e sem uso de `zone.js`.
- **Mocks de Teste:** `IntersectionObserver` mockado defensivamente para execução de testes em ambiente jsdom/Vitest.

---

## 3. Hospedagem e Domínio Customizado (Cloudflare Workers & ap.is-a.dev)

- **Data da Decisão:** Outubro/2026
- **Ambiente de Produção Primário:** Cloudflare Workers (latest Cloudflare Pages) com SPA routing nativo (`wrangler.jsonc`) e headers de segurança (`_headers`).
  - URL Ativa: `https://ap-dev.ap-dev-web.workers.dev`
- **Ambiente de Contingência / CI/CD:** GitHub Pages via GitHub Actions (`deploy-pages.yml`) disparado a cada push em `main`.
- **Domínio Oficial Gratuito:** `ap.is-a.dev` (Pull Request oficial [#54862](https://github.com/is-a-dev/register/pull/54862)).
  - Configuração: Registro CNAME no repositório `is-a-dev/register` com arquivo `public/CNAME`.
  - Motivo: Domínio ultra-curto (2 caracteres), gratuito para sempre, SSL automático e identidade de marca direta com "AP Dev / Anderson Pereira".
