import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    brandName: 'AP Dev',
    name: 'Anderson Pereira',
    role: {
      pt: 'Senior Mobile Engineer & AI Systems Architect',
      en: 'Senior Mobile Engineer & AI Systems Architect',
    },
    headline: {
      pt: 'Construindo experiências mobile de alto desempenho com IA integrada e arquiteturas escaláveis.',
      en: 'Building high-performance mobile experiences with integrated AI and scalable architectures.',
    },
    subheadline: {
      pt: 'Engenheiro de Software com +10 anos de experiência corporativa e atuação como Tech Lead. Especialista em Flutter, ecossistema Android nativo, React Native e publicação no ciclo completo da Google Play Store e Apple App Store — unindo arquitetura de software sólida a esteiras de Harness Engineering aceleradas por agentes de IA.',
      en: 'Software Engineer with 10+ years of enterprise experience and Tech Lead background. Specialist in Flutter, native Android ecosystem, React Native, and full-cycle release on Google Play & Apple App Store — uniting resilient software architecture with agent-accelerated Harness Engineering.',
    },
    status: {
      available: true,
      label: {
        pt: 'Disponível para projetos & consultorias de alto impacto',
        en: 'Available for high-impact challenges & advisory',
      },
    },
    socialLinks: {
      github: 'https://github.com/andershow09',
      linkedin: 'https://www.linkedin.com/in/anderson-s-pereira/',
      email: 'anderson.s.pereira008@gmail.com',
      playStore: 'https://play.google.com/store/apps/developer?id=Agro+Help+Labs',
    },
  },

  metrics: [
    {
      value: '+10',
      label: { pt: 'Anos de Engenharia', en: 'Years Experience' },
      detail: { pt: 'Mobile de alta performance, Web & Cloud', en: 'High-performance mobile, web & cloud' },
    },
    {
      value: 'App Stores',
      label: { pt: 'Google Play & App Store', en: 'Google Play & App Store' },
      detail: { pt: 'Ciclo completo de esteira e publicação oficial', en: 'Full release pipeline on official stores' },
    },
    {
      value: 'Harness Eng.',
      label: { pt: 'Engenharia com IA & Agentes', en: 'AI Harness Engineering' },
      detail: { pt: 'Skills, automação no SDLC e governança MCP', en: 'Custom skills, SDLC automation & MCP' },
    },
    {
      value: 'Tech Lead',
      label: { pt: 'Liderança & Arquitetura', en: 'Tech Lead & Architecture' },
      detail: { pt: '5 anos guiando sistemas críticos e equipes', en: '5 years steering critical systems & teams' },
    },
  ],

  capabilities: [
    {
      id: 'mobile',
      number: '01',
      icon: 'smartphone',
      accentColor: '#38BDF8',
      title: {
        pt: 'Mobile Architecture & Dual Store Release',
        en: 'Mobile Architecture & Dual Store Release',
      },
      description: {
        pt: 'Engenharia móvel avançada com Flutter, ecossistema Android nativo (Kotlin/Java) e React Native. Arquitetura MVVM, BLoC, Clean Code, esteiras de publicação na Google Play Store & Apple App Store e fluidez contínua a 60 FPS.',
        en: 'Advanced mobile engineering across Flutter, native Android (Kotlin/Java), and React Native. Clean MVVM, BLoC, dual-store release pipelines (Google Play & Apple App Store), and uncompromising 60 FPS performance.',
      },
      tags: ['Flutter', 'Dart', 'BLoC / Cubit', 'Android Nativo', 'React Native', 'Google Play & App Store', 'Offline First'],
    },
    {
      id: 'ai',
      number: '02',
      icon: 'brain',
      accentColor: '#5E6AD2',
      title: {
        pt: 'Harness Engineering & AI Systems',
        en: 'Harness Engineering & AI Systems',
      },
      description: {
        pt: 'Construção de Harness Engineering: agentes autônomos e Skills customizadas para análise, automação, padronização e aceleração do desenvolvimento de software. Orquestração com Model Context Protocol (MCP), gestão de contexto e RAG.',
        en: 'Harness Engineering: autonomous agents and custom Skills designed for static code analysis, SDLC automation, standardization, and delivery acceleration with Model Context Protocol (MCP) and context budgeting.',
      },
      tags: ['Harness Engineering', 'AI Agents', 'Custom Skills', 'MCP Protocol', 'Claude Code', 'Token Optimization', 'RAG'],
    },
    {
      id: 'web',
      number: '03',
      icon: 'globe',
      accentColor: '#10B981',
      title: {
        pt: 'Modern Web & Enterprise Observability',
        en: 'Modern Web & Enterprise Observability',
      },
      description: {
        pt: 'Aplicações web corporativas com Angular 22 Zoneless e React Micro Frontends. BFFs de alta escalabilidade com NestJS, C# / .NET, Node.js e observabilidade profunda com Datadog, Sentry, Firebase Crashlytics e Microsoft Clarity.',
        en: 'Enterprise web architectures with Angular 22 Zoneless and React Micro Frontends. High-throughput NestJS and .NET BFFs, with full-stack observability via Datadog, Sentry, Crashlytics, and Microsoft Clarity.',
      },
      tags: ['Angular 22', 'React MFE', 'NestJS', 'C# / .NET', 'Datadog', 'Sentry', 'Crashlytics', 'JFrog CI/CD'],
    },
  ],

  projects: [
    {
      id: 'thermocalc',
      category: '❄️ MOBILE UTILITY · SHOWCASE',
      categoryType: 'mobile',
      title: 'ThermoCalc — Cálculo de Cargas Térmicas (HVAC/R)',
      badge: {
        pt: 'Google Play Store · Publicado',
        en: 'Google Play Store · Live',
      },
      accentColor: '#38BDF8',
      bannerImage: 'assets/showcase/thermocalc/banner.jpeg',
      screenshots: [
        'assets/showcase/thermocalc/screen1.jpeg',
        'assets/showcase/thermocalc/screen2.jpeg',
        'assets/showcase/thermocalc/screen3.jpeg',
        'assets/showcase/thermocalc/screen4.jpeg',
        'assets/showcase/thermocalc/screen5.jpeg',
      ],
      summary: {
        pt: 'Aplicativo móvel utilitário para engenharia de climatização e refrigeração, idealizado e publicado de forma independente sob a chancela AP Developer na Google Play Store.',
        en: 'Independent utility mobile application for HVAC and thermal load engineering, developed and released under the AP Developer signature on Google Play Store.',
      },
      highlights: [
        {
          pt: 'Desafio: Engenheiros e técnicos de refrigeração necessitavam de cálculos térmicos precisos e dimensionamento instantâneo em campo, sem depender de pranchetas.',
          en: 'Challenge: Field technicians needed rapid, precise thermodynamic calculations on-site without relying on desktop spreadsheets.',
        },
        {
          pt: 'Solução Técnica: Algoritmo de cálculo psicrométrico e carga térmica em tempo real, suporte total a operação 100% offline e interface Mobile First intuitiva.',
          en: 'Technical Solution: Real-time psychrometric and thermal load calculation algorithm, complete 100% offline-first reliability, and clean mobile UX.',
        },
        {
          pt: 'Impacto: Aplicativo publicado na Google Play Store com avaliações de técnicos e engenheiros mecânicos em todo o Brasil.',
          en: 'Impact: Successfully published on Google Play Store with top reviews from HVAC engineers across Brazil.',
        },
      ],
      tags: ['Mobile', 'Android / Ionic', 'Google Play Store', 'HVAC / Climatização', 'Algoritmos', 'Offline-First'],
      liveUrl: 'https://play.google.com/store/apps/details?id=br.com.apdeveloper.thermocalc',
    },
    {
      id: 'gosafra-agrohelp',
      category: '🌾 AGTECH MOBILE · SHOWCASE',
      categoryType: 'mobile',
      title: 'GoSafra & Agrohelp Labs Ecosystem',
      badge: {
        pt: 'Google Play Store · Startup',
        en: 'Google Play Store · Startup',
      },
      accentColor: '#10B981',
      bannerImage: 'assets/showcase/gosafra/banner.png',
      screenshots: [
        'assets/showcase/gosafra/screen1.jpeg',
        'assets/showcase/gosafra/screen2.jpeg',
        'assets/showcase/gosafra/screen3.jpeg',
        'assets/showcase/gosafra/screen4.jpeg',
        'assets/showcase/gosafra/screen5.jpeg',
        'assets/showcase/gosafra/screen6.jpeg',
      ],
      summary: {
        pt: 'Co-fundação e idealização de ecossistema mobile e APIs para o agronegócio, conectando produtores rurais, operadores de máquinas agrícolas e prestadores de serviços de colheita com aplicativos ativos na Google Play Store.',
        en: 'Co-founding and engineering of an agtech mobile ecosystem and cloud APIs connecting farmers, harvester machine operators, and agricultural service providers with live production apps on Google Play.',
      },
      highlights: [
        {
          pt: 'Desafio: Conectar produtores rurais em regiões com conectividade intermitente e conciliar demandas de safra com precisão logística no campo.',
          en: 'Challenge: Connect agricultural operators across rural areas with intermittent connectivity while coordinating harvest logistics.',
        },
        {
          pt: 'Solução Técnica: Aplicativos móveis com sincronização offline resiliente, APIs dedicadas, geolocalização e conciliação de dados em background.',
          en: 'Technical Solution: Mobile applications with offline-first synchronization, dedicated cloud APIs, geolocation routing, and background reconciliation.',
        },
        {
          pt: 'Impacto: Fundação da startup, validação de mercado em hackathons e publicação de apps utilizados por produtores no campo.',
          en: 'Impact: Co-founded the startup, validated product-market fit at hackathons, and published active apps on Google Play Store.',
        },
      ],
      tags: ['Mobile Apps', 'Co-founder & CTO', 'Google Play Store', 'Agritech', 'APIs REST', 'Offline Sync'],
      liveUrl: 'https://play.google.com/store/apps/developer?id=Agro+Help+Labs',
    },
    {
      id: 'erp-mobile-modernization',
      category: '📱 MOBILE ENTERPRISE',
      categoryType: 'mobile',
      title: 'Modernização Mobile em Big Tech de ERP',
      badge: {
        pt: 'App Store & Google Play',
        en: 'App Store & Google Play',
      },
      accentColor: '#38BDF8',
      summary: {
        pt: 'Modernização arquitetural de aplicação corporativa de missão crítica, migrando código legado Android Nativo para Flutter, unificando a base de código e acelerando entregas nas lojas oficiais.',
        en: 'Architectural modernization of mission-critical enterprise software, migrating legacy Native Android to Flutter, unifying codebases, and accelerating store releases.',
      },
      highlights: [
        {
          pt: 'Desafio: Alto custo de manutenção de base de código legada e ciclo lento para lançar novas funcionalidades em múltiplos sistemas operacionais.',
          en: 'Challenge: High maintenance overhead of dual legacy codebases and delayed feature delivery cycles across mobile operating systems.',
        },
        {
          pt: 'Solução Técnica: Migração completa para Flutter com Clean Architecture, MVVM e BLoC, além de esteira de publicação para Apple App Store e Google Play Store.',
          en: 'Technical Solution: Full migration to Flutter with Clean Architecture, MVVM, and BLoC, with unified release pipelines for App Store and Play Store.',
        },
        {
          pt: 'Impacto: Base de código única e sustentável, estabilidade constante a 60 FPS e redução drástica no lead time de novas versões.',
          en: 'Impact: Unified sustainable codebase, rock-solid 60 FPS stability, and dramatic lead time reduction for enterprise feature rollout.',
        },
      ],
      tags: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Apple App Store', 'Google Play Store', 'Android Nativo'],
      caseStudyUrl: 'https://www.linkedin.com/in/anderson-s-pereira/',
    },
    {
      id: 'global-tax-mfe',
      category: '⚡ MFE & HARNESS ENGINEERING',
      categoryType: 'web',
      title: 'Plataforma Global & Harness Engineering',
      badge: {
        pt: 'Micro Frontends & IA',
        en: 'Micro Frontends & AI',
      },
      accentColor: '#5E6AD2',
      summary: {
        pt: 'Modernização de plataformas corporativas globais com Micro Frontends em React, BFFs em NestJS e aceleração técnica pioneira com Harness Engineering e agentes de IA.',
        en: 'Modernization of global enterprise platforms using React Micro Frontends, NestJS BFFs, and pioneering Harness Engineering with autonomous AI agents.',
      },
      highlights: [
        {
          pt: 'Desafio: Complexidade de escala corporativa global com esteiras lentas de refinamento e entrega de demandas técnicas.',
          en: 'Challenge: Global enterprise scale complexity with bottlenecks in technical refinement and distributed team delivery.',
        },
        {
          pt: 'Solução Técnica: Construção de Harness Engineering com agentes e skills customizadas para análise, automação e esteiras de build seguras com JFrog.',
          en: 'Technical Solution: Harness Engineering design with custom agents and skills for static analysis, automated task breakdown, and JFrog artifact pipelines.',
        },
        {
          pt: 'Impacto: Aceleração substancial no ciclo de desenvolvimento, observabilidade completa via Datadog e arquitetura federada de alta disponibilidade.',
          en: 'Impact: Substantial delivery cycle acceleration, Datadog full-stack observability, and highly resilient federated architecture.',
        },
      ],
      tags: ['React MFE', 'NestJS', 'Harness Engineering', 'AI Agents', 'Datadog', 'JFrog', 'React Native'],
      caseStudyUrl: 'https://www.linkedin.com/in/anderson-s-pereira/',
    },
    {
      id: 'inside-sistemas',
      category: '💼 TECH LEAD & ARCHITECTURE',
      categoryType: 'web',
      title: 'Inside Sistemas — Tech Leadership & Sistemas Críticos',
      badge: {
        pt: 'Tech Lead · 5 Anos',
        en: 'Tech Lead · 5 Years',
      },
      accentColor: '#10B981',
      summary: {
        pt: 'Atuação como Tech Lead na condução de decisões de arquitetura, orientação técnica de equipe e engenharia de sistemas corporativos de gestão com módulos críticos de logística, geolocalização e mobilidade.',
        en: 'Tech Lead driving architectural decisions, technical team mentorship, and enterprise management software engineering with critical logistics, geolocation, and mobile solutions.',
      },
      highlights: [
        {
          pt: 'Desafio: Conduzir a evolução técnica de sistemas corporativos legados e garantir estabilidade em fluxos logísticos e financeiros de alta exigência.',
          en: 'Challenge: Lead technical evolution of legacy enterprise systems while guaranteeing high reliability across logistics and financial operations.',
        },
        {
          pt: 'Solução Técnica: Liderança técnica com microsserviços, consumo e exposição de APIs, soluções móveis com sincronização offline e geolocalização.',
          en: 'Technical Solution: Tech leadership with API design, offline-first mobile sync, route optimization, and cross-platform mobile apps.',
        },
        {
          pt: 'Impacto: 5 anos de governança e evolução contínua, com observabilidade profissional utilizando Datadog, Sentry, Firebase Crashlytics e Microsoft Clarity.',
          en: 'Impact: 5 years of continuous technical governance and high uptime verified by Datadog, Sentry, Firebase Crashlytics, and Clarity.',
        },
      ],
      tags: ['Tech Lead', 'Angular', 'C# / .NET', 'Node.js', 'Flutter / Ionic', 'Sentry', 'Crashlytics', 'SQL Server'],
      caseStudyUrl: 'https://www.linkedin.com/in/anderson-s-pereira/',
    },
    {
      id: 'ai-agentic-lab',
      category: '🧠 AI SYSTEMS LAB',
      categoryType: 'ai',
      title: 'Agentic Workflows & MCP Orchestrator',
      badge: {
        pt: 'Especialização Full Cycle',
        en: 'Full Cycle AI Specialization',
      },
      accentColor: '#38BDF8',
      summary: {
        pt: 'Laboratório de engenharia aplicada de agentes autônomos, abordando orquestração paralela, gestão rigorosa de contexto em tokens e integração de ferramentas corporativas via Model Context Protocol (MCP).',
        en: 'Applied engineering lab for autonomous agents, covering parallel orchestration, strict token context management, and enterprise tool integration via Model Context Protocol (MCP).',
      },
      highlights: [
        {
          pt: 'Desafio: Tornar o comportamento de agentes generativos previsível, seguro e integrado a bases de código corporativas.',
          en: 'Challenge: Making generative agent workflows predictable, deterministic, and securely connected to enterprise codebases.',
        },
        {
          pt: 'Solução Técnica: Orquestração baseada em MCP, Skills modulares determinísticas, RAG vetorial e estratégias defensivas de fallback.',
          en: 'Technical Solution: MCP-based orchestration, deterministic modular skills, vector RAG, and defensive fallback strategies.',
        },
        {
          pt: 'Impacto: Automação determinística de tarefas de engenharia e pipelines confiáveis de apoio ao desenvolvimento de software.',
          en: 'Impact: Deterministic software engineering automation and reliable tool-augmented agent pipelines.',
        },
      ],
      tags: ['AI Agents', 'MCP Protocol', 'Claude Code', 'Token Optimization', 'RAG', 'Agentic Workflows'],
      githubUrl: 'https://github.com/andershow09',
    },
  ],

  testimonials: [],

  timeline: [
    {
      period: '2024 — Presente',
      role: {
        pt: 'Sistemas Distribuídos, MFE & Harness Engineering',
        en: 'Distributed Systems, MFE & Harness Engineering',
      },
      company: 'Multinacional do Setor Fiscal & Big Tech de ERP (via Outsera)',
      description: {
        pt: 'Desenvolvimento de Micro Frontends em React, BFFs em NestJS, migração mobile para Flutter e pioneirismo na construção de Harness Engineering com agentes de IA, JFrog e observabilidade Datadog.',
        en: 'React Micro Frontends, NestJS BFFs, Flutter mobile modernization, and pioneering Harness Engineering with autonomous AI agents, JFrog, and Datadog observability.',
      },
      tags: ['React MFE', 'Flutter', 'Harness Engineering', 'NestJS', 'Datadog', 'JFrog', 'App Store / Play Store'],
    },
    {
      period: '2019 — 2024',
      role: {
        pt: 'Tech Leadership & Sistemas Corporativos Críticos',
        en: 'Tech Leadership & Critical Enterprise Systems',
      },
      company: 'Inside Sistemas',
      description: {
        pt: 'Atuação como Tech Lead liderando decisões técnicas e mentoria de equipe. Arquitetura de APIs corporativas, módulos logísticos com geolocalização e roteirização, aplicações móveis offline-first e observabilidade ativa (Sentry, Crashlytics, Clarity).',
        en: 'Tech Lead heading architectural decisions and team mentorship. Enterprise API architecture, logistics routing, geolocation, offline-first mobile apps, and active observability (Sentry, Crashlytics, Clarity).',
      },
      tags: ['Tech Lead', 'Angular', 'C# / .NET', 'Flutter / Ionic', 'Sentry', 'Crashlytics', 'APIs'],
    },
    {
      period: '2015 — 2020',
      role: {
        pt: 'Engenharia Mobile & Fundação de Startup',
        en: 'Mobile Engineering & Startup Co-founder',
      },
      company: 'GoSafra / Agrohelp Labs & AmConsulting',
      description: {
        pt: 'Co-fundação e atuação como CTO da GoSafra, concebendo o ecossistema móvel agtech na Google Play Store. Desenvolvimento e publicação de soluções móveis nativas e híbridas com geolocalização, rotas e sincronização de dados.',
        en: 'Co-founding and CTO leadership at GoSafra, delivering the agtech mobile ecosystem on Google Play. Development and release of native and hybrid mobile solutions with geolocation and background sync.',
      },
      tags: ['Co-founder & CTO', 'Mobile Apps', 'Google Play', 'Android Nativo', 'Ionic', 'APIs REST'],
    },
  ],

  standards: [
    {
      id: 'clean-arch',
      icon: 'layers',
      title: {
        pt: 'Clean Architecture & SOLID',
        en: 'Clean Architecture & SOLID',
      },
      description: {
        pt: 'Isolamento estrito entre regras de negócio e detalhes de infraestrutura para longevidade e manutenibilidade.',
        en: 'Strict isolation of business rules from infrastructure details for longevity and testability.',
      },
    },
    {
      id: 'performance',
      icon: 'zap',
      title: {
        pt: '60fps UI & Core Web Vitals',
        en: '60fps UI & Core Web Vitals',
      },
      description: {
        pt: 'Renderização sem engasgos em mobile e web, arquitetura Zoneless e carregamento deferido com @defer.',
        en: 'Jank-free rendering across screens, Zoneless change detection, and deferrable views.',
      },
    },
    {
      id: 'testing',
      icon: 'shield',
      title: {
        pt: 'Pirâmide de Testes Automatizados',
        en: 'Automated Test Pyramid',
      },
      description: {
        pt: 'Testes unitários e de integração com Vitest e Playwright para entregas previsíveis e zero regressões.',
        en: 'Unit and integration tests with Vitest and Playwright ensuring predictable, zero-regression deployments.',
      },
    },
    {
      id: 'ai-sdlc',
      icon: 'code',
      title: {
        pt: 'Harness Engineering com IA',
        en: 'AI Harness Engineering',
      },
      description: {
        pt: 'Skills modulares, esteiras de código aceleradas por agentes e automação rigorosa no ciclo de software corporativo.',
        en: 'Modular skills, agent-accelerated delivery pipelines, and rigorous automated code review in enterprise SDLC.',
      },
    },
  ],
};
