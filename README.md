# AP Dev Web — Portfolio Landing Page

Landing Page corporativa e portfólio oficial da **AP Dev** (Anderson Pereira — Senior Mobile Engineer & AI Systems Architect).

Construído com **Angular 22+ Zoneless**, **Angular Signals**, **Tailwind CSS v4** e hospedado na **Cloudflare Pages**.

---

## 🚀 Arquitetura & Tecnologias

- **Framework:** Angular 22+ (Bootstrap 100% Standalone com detecção de mudanças estável `provideZonelessChangeDetection()`).
- **Estado Reativo:** Angular Signals (`signal`, `computed`) para reatividade fina sem sobrecarga de runtime.
- **Single Source of Truth (Data-Driven):** Toda a informação da página reside em `src/app/core/data/portfolio.data.ts`. Edite este arquivo para adicionar projetos, alterar métricas ou atualizar depoimentos sem mexer em HTML/CSS.
- **Performance:** `@defer (on viewport)` em seções pesadas abaixo da dobra para Core Web Vitals com nota máxima.
- **Estilização:** Tailwind CSS v4 com os Design Tokens do Pen.dev (Dark Mode, bordas 1px e Linear Glows).
- **Animações (inspiradas no rmndev.com.br):**
  - **FolderTabProjectCard:** Cards no estilo pasta de arquivo com abas conectadas e elevação suave.
  - **RotatedTestimonialCard:** Cards de recomendação levemente inclinados com visual de fita adesiva que desentortam no hover.
  - **GithubHeatmapSection:** Mapa de calor de contribuições conectado à API do GitHub (`@andershow09`).
  - **Interactive AI Terminal:** Simulação com streaming em tempo real de execução de agente de IA e protocolo MCP.
- **Internacionalização (i18n):** Bilíngue reativo (Português / Inglês) alternado com 1 clique no Header.

---

## 🛠️ Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor local de desenvolvimento (http://localhost:4200)
npm start

# Executar suíte de testes automatizados com Vitest
npm test

# Gerar build de produção otimizado
npm run build
```

---

## ☁️ Deploy Contínuo no Cloudflare Pages

1. Conecte o repositório no dashboard da **Cloudflare Pages**.
2. Configure as opções de Build:
   - **Framework preset:** `Angular`
   - **Root directory:** `ap-dev-web` (se o repo estiver na raiz do workspace)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/ap-dev-web/browser`
   - **Node.js Version:** `22` (adicione a variável de ambiente `NODE_VERSION: 22`)
3. A cada `git push`, o deploy é disparado automaticamente com CDN global e SSL gratuito.
