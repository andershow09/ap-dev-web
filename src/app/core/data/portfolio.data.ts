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
      pt: 'Sou Engenheiro de Software com +10 anos de experiência corporativa, unindo engenharia Flutter, ecossistema Android nativo e orquestração de agentes de IA a arquiteturas cloud resilientes — atuando em projetos para líderes de ERP, multinacionais de tecnologia e startups do agronegócio.',
      en: 'Software Engineer with 10+ years of enterprise experience, uniting Flutter engineering, native Android ecosystem, and autonomous AI agents with resilient cloud architectures — building software for market-leading ERPs, global tech multinationals, and agtech startups.',
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
      detail: { pt: 'Arquitetura de software e sistemas corporativos', en: 'Software architecture & enterprise delivery' },
    },
    {
      value: 'Enterprise',
      label: { pt: 'ERP & Tecnologia Fiscal', en: 'ERP & Global Tech' },
      detail: { pt: 'Migrações críticas, Micro Frontends e BFFs', en: 'Critical system migrations & Micro Frontends' },
    },
    {
      value: 'Full Cycle',
      label: { pt: 'Arquitetura de Agentes & IA', en: 'AI Systems & Agentic Workflows' },
      detail: { pt: 'Gestão de contexto, MCP e engenharia com LLMs', en: 'Context management, MCP & LLM pipelines' },
    },
    {
      value: 'CTO & Founder',
      label: { pt: 'GoSafra / Agrohelp Labs', en: 'GoSafra / Agrohelp Labs' },
      detail: { pt: 'Apps publicados e ativos na Google Play Store', en: 'Published production apps on Google Play Store' },
    },
  ],

  capabilities: [
    {
      id: 'mobile',
      number: '01',
      icon: 'smartphone',
      accentColor: '#38BDF8',
      title: {
        pt: 'Mobile Architecture',
        en: 'Mobile Architecture',
      },
      description: {
        pt: 'Engenharia móvel avançada com Flutter e ecossistema Android nativo. Arquitetura MVVM, BLoC, Clean Code e foco intransigente em performance contínua a 60fps.',
        en: 'Advanced mobile engineering with Flutter and native Android. Clean MVVM, BLoC, and uncompromising 60fps performance for enterprise apps.',
      },
      tags: ['Flutter', 'Dart', 'BLoC / Cubit', 'Android (Kotlin/Java)', 'Clean Architecture', 'Offline First'],
    },
    {
      id: 'ai',
      number: '02',
      icon: 'brain',
      accentColor: '#5E6AD2',
      title: {
        pt: 'AI Systems & Architecture',
        en: 'AI Systems & Architecture',
      },
      description: {
        pt: 'Orquestração de agentes autônomos, workflows DAG, gerenciamento de contexto, protocolo MCP (Model Context Protocol), RAG e aceleração do ciclo de engenharia com Claude Code.',
        en: 'Autonomous multi-agent orchestration, DAG workflows, context management, MCP protocols, RAG, and AI-accelerated SDLC with Claude Code.',
      },
      tags: ['AI Agents', 'MCP Protocol', 'Context Management', 'RAG / VectorDB', 'Claude Code', 'Full Cycle AI'],
    },
    {
      id: 'web',
      number: '03',
      icon: 'globe',
      accentColor: '#38BDF8',
      title: {
        pt: 'Modern Web & Full Stack',
        en: 'Modern Web & Full Stack',
      },
      description: {
        pt: 'Aplicações web modernas com Angular 22 Zoneless e React. Arquitetura de Micro Frontends federados, BFFs de alta escalabilidade com NestJS e observabilidade com Datadog.',
        en: 'Modern web applications with Angular 22 Zoneless and React. Federated Micro Frontends, high-throughput NestJS BFFs, and Datadog observability.',
      },
      tags: ['Angular 22', 'React', 'Micro Frontends', 'NestJS', 'Datadog', 'CI/CD & JFrog'],
    },
  ],

  projects: [
    {
      id: 'gosafra-agrohelp',
      category: '🌾 AGTECH MOBILE · SHOWCASE',
      categoryType: 'mobile',
      title: 'GoSafra & Agrohelp Labs Ecosystem',
      badge: {
        pt: 'Google Play Store · Ativo',
        en: 'Google Play Store · Live',
      },
      accentColor: '#10B981',
      summary: {
        pt: 'Idealização, arquitetura e desenvolvimento completo do ecossistema mobile e APIs de apoio para o agronegócio, com aplicativos publicados e ativos na Google Play Store.',
        en: 'Full architecture and engineering of the mobile agtech ecosystem and cloud APIs, with active production apps published on Google Play.',
      },
      highlights: [
        {
          pt: 'Aplicativos ativos em produção na Google Play Store com alta avaliação dos produtores.',
          en: 'Active production apps on Google Play Store with top reviews from agribusiness operators.',
        },
        {
          pt: 'APIs resilientes com suporte a sincronização offline para operação no campo.',
          en: 'Resilient APIs with offline-first synchronization for rural field operations.',
        },
      ],
      tags: ['Mobile', 'Flutter / Ionic', 'APIs REST', 'Google Play Store', 'Agritech', 'Offline Sync'],
      liveUrl: 'https://play.google.com/store/apps/developer?id=Agro+Help+Labs',
    },
    {
      id: 'erp-mobile-modernization',
      category: '📱 MOBILE ENTERPRISE',
      categoryType: 'mobile',
      title: 'Modernização Mobile em Big Tech de ERP',
      badge: {
        pt: 'Solução Corporativa',
        en: 'Enterprise Solution',
      },
      accentColor: '#38BDF8',
      summary: {
        pt: 'Migração completa de aplicação legada Android Nativo para Flutter em líder de ERP e software de gestão do Brasil, unificando a base de código e elevando manutenibilidade.',
        en: 'Complete migration of legacy Native Android app to Flutter at a leading Brazilian ERP & enterprise software provider, establishing clean maintainability.',
      },
      highlights: [
        {
          pt: 'Arquitetura modular com BLoC, MVVM e estrita separação em Clean Architecture.',
          en: 'Modular architecture with BLoC, MVVM, and strict Clean Architecture separation.',
        },
        {
          pt: 'Redução expressiva no tempo de entrega de novas features e estabilidade 60fps constante.',
          en: 'Significant reduction in feature cycle delivery time and continuous 60fps stability.',
        },
      ],
      tags: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'Android Native'],
      caseStudyUrl: 'https://www.linkedin.com/in/anderson-s-pereira/',
    },
    {
      id: 'global-tax-mfe',
      category: '⚡ MFE & AI PIPELINE',
      categoryType: 'web',
      title: 'Plataforma Global em Multinacional Fiscal & Contábil',
      badge: {
        pt: 'Micro Frontends & IA',
        en: 'Micro Frontends & AI',
      },
      accentColor: '#5E6AD2',
      summary: {
        pt: 'Modernização de plataformas corporativas com Micro Frontends em React, BFFs em NestJS e aceleração técnica do ciclo de entrega apoiada por agentes de IA e Claude Code.',
        en: 'Modernization of global enterprise platforms using React Micro Frontends, NestJS BFFs, and AI-accelerated delivery with custom agents and Claude Code.',
      },
      highlights: [
        {
          pt: 'Refinamento e quebra de demandas técnicas aceleradas por skills e agentes de IA.',
          en: 'Technical task refinement and delivery accelerated by custom agentic skills.',
        },
        {
          pt: 'Observabilidade completa com Datadog e esteiras confiáveis de build via JFrog.',
          en: 'Full-stack observability with Datadog and reliable artifact management with JFrog.',
        },
      ],
      tags: ['React', 'NestJS', 'Micro Frontends', 'AI Agents', 'Datadog', 'CI/CD'],
      caseStudyUrl: 'https://www.linkedin.com/in/anderson-s-pereira/',
    },
    {
      id: 'inside-sistemas',
      category: '💼 ENTERPRISE FULL STACK',
      categoryType: 'web',
      title: 'Inside Sistemas — Gestão Empresarial, Web & Mobile',
      badge: {
        pt: 'Full Stack & Mobile',
        en: 'Full Stack & Mobile',
      },
      accentColor: '#38BDF8',
      summary: {
        pt: 'Desenvolvimento e evolução de sistemas de gestão empresarial com frontend corporativo em Angular, backend em C# / Node.js e aplicativos móveis em Flutter e Ionic.',
        en: 'Development and continuous evolution of enterprise ERP systems with Angular frontend, C# / Node.js backend, and Flutter / Ionic mobile applications.',
      },
      highlights: [
        {
          pt: 'Construção de módulos corporativos de alta criticidade e fluxos financeiros.',
          en: 'Delivery of mission-critical corporate modules and financial workflows.',
        },
        {
          pt: 'Validação de escopo junto a clientes e governança ágil de entregas contínuas.',
          en: 'Scope validation with enterprise stakeholders and agile delivery governance.',
        },
      ],
      tags: ['Angular', 'C#', 'Node.js', 'Flutter', 'Ionic', 'SQL Server'],
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
        pt: 'Implementação de arquiteturas de agentes autônomos com paralelismo, gestão de contexto em janelas de tokens e integração de ferramentas via Model Context Protocol.',
        en: 'Implementation of autonomous agent architectures with parallelism, token context management, and Model Context Protocol (MCP) integrations.',
      },
      highlights: [
        {
          pt: 'Orquestração de workflows complexos com fallback, validação semântica e RAG vetorial.',
          en: 'Complex workflow orchestration with fallback, semantic validation, and vector RAG.',
        },
        {
          pt: 'Protocolo MCP padronizado para conexão segura entre LLMs e ferramentas corporativas.',
          en: 'Standardized MCP protocol for secure connection between LLMs and enterprise tools.',
        },
      ],
      tags: ['AI Agents', 'MCP', 'Tool Calling', 'Vector RAG', 'Python', 'FastAPI'],
      githubUrl: 'https://github.com/andershow09',
    },
  ],

  testimonials: [],

  timeline: [
    {
      period: '2026 — Presente',
      role: {
        pt: 'Desenvolvedor Full Stack & AI Engineering',
        en: 'Full Stack & AI Engineer',
      },
      company: 'Multinacional do Setor Fiscal, Jurídico e Contábil',
      description: {
        pt: 'Desenvolvimento em Micro Frontends com React, BFFs com NestJS, observabilidade Datadog e aceleração contínua de demandas com agentes de IA e Claude Code.',
        en: 'React Micro Frontends, NestJS BFFs, Datadog observability, and AI-accelerated delivery with autonomous agents.',
      },
      tags: ['React MFE', 'NestJS', 'Claude Code', 'Datadog', 'JFrog'],
    },
    {
      period: '2024 — 2026',
      role: {
        pt: 'Senior Mobile Engineer',
        en: 'Senior Mobile Engineer',
      },
      company: 'Big Tech Líder em Software de Gestão e ERP no Brasil',
      description: {
        pt: 'Desenvolvimento mobile avançado com Flutter e Dart. Migração de projeto Android nativo legado para Flutter com BLoC e Clean Architecture.',
        en: 'Advanced mobile development with Flutter & Dart. Migration of legacy native Android project to Flutter with BLoC and Clean Architecture.',
      },
      tags: ['Flutter', 'Dart', 'BLoC', 'Android Nativo', 'Clean Code'],
    },
    {
      period: '2019 — 2024',
      role: {
        pt: 'Analista e Desenvolvedor Full Stack',
        en: 'Full Stack & Mobile Engineer',
      },
      company: 'Inside Sistemas',
      description: {
        pt: 'Atuação full stack: frontend corporativo com Angular, backend com C# e Node.js, e aplicativos móveis com Flutter e Ionic. Validação de requisitos e liderança técnica.',
        en: 'Full stack development: enterprise web with Angular, backend in C# and Node.js, and mobile apps with Flutter/Ionic.',
      },
      tags: ['Angular', 'C#', 'Node.js', 'Flutter', 'Ionic', 'SQL Server'],
    },
    {
      period: '2017 — 2020',
      role: {
        pt: 'Co-founder, Software Developer, CTO',
        en: 'Co-founder & CTO',
      },
      company: 'Agrohelp Labs / GoSafra',
      description: {
        pt: 'Idealização, desenvolvimento e publicação de aplicativos móveis para o agronegócio na Google Play Store. Construção de APIs e planejamento estratégico.',
        en: 'Conception, development, and launch of agribusiness mobile apps on Google Play Store with dedicated cloud APIs.',
      },
      tags: ['Mobile Apps', 'Ionic', 'APIs REST', 'Google Play', 'Startup'],
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
        pt: 'Engenharia Aumentada por IA',
        en: 'AI-Augmented Engineering',
      },
      description: {
        pt: 'Skills customizadas, esteiras de código aceleradas por agentes e automação rigorosa no ciclo de software.',
        en: 'Custom skills, agent-accelerated delivery pipelines, and rigorous automated code review.',
      },
    },
  ],
};
