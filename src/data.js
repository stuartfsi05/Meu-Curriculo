export const resumeData = {
  header: {
    name: 'THIAGO DIAS PRECIVALLI',
    role: 'Desenvolvedor de Software',
    location: 'Hortolândia, SP',
    phone: '(19) 98263-1179',
    email: 't.precivalli@gmail.com',
    linkedin: 'precivalli',
    linkedinUrl: 'linkedin.com/in/thiago-dias-precivalli',
    github: 'stuartfsi05',
    githubUrl: 'github.com/stuartfsi05',
    bookLabel: 'O Copiloto Inteligente (Livro)',
    bookUrl: 'https://sites.google.com/view/ocopilotointeligente/in%C3%ADcio',
  },
  summaries: {
    general: `Profissional em transição de carreira com sólida trajetória em otimização de processos logísticos e gestão operacional. Cursando Análise e Desenvolvimento de Sistemas, com portfólio prático focado em resolver problemas reais de negócio — da automação de auditoria médica (TISS Guard) à engenharia de motores de IA (Zenith). Autor do livro técnico 'O Copiloto Inteligente' (2025). Busco oportunidade de estágio ou posição júnior para aplicar visão sistêmica e capacidade analítica em desenvolvimento de software.`,

    fullstack: `Desenvolvedor Full Stack em formação com portfólio prático em React, TypeScript, Python e integração mobile (Capacitor). Transição de carreira com background em Logística, trazendo visão sistêmica e disciplina operacional para o desenvolvimento de software. Experiência aplicada em Clean Architecture, gestão de estado complexo, bancos SQL/NoSQL e APIs RESTful. Busco primeira oportunidade em desenvolvimento para aplicar fundamentos sólidos de engenharia de software.`,

    automation: `Profissional focado em Automação de Processos e integração de IA em fluxos operacionais. Background em otimização logística, agora aplicado à engenharia de agentes cognitivos e RPA. Autor do livro técnico 'O Copiloto Inteligente' (2025). Experiência prática com orquestração de LLMs, pipelines de automação (N8N/Make) e APIs assíncronas (FastAPI). Busco oportunidade de estágio ou posição júnior em automação e inteligência artificial.`,

    qa: `Analista de Qualidade de Software em formação, aplicando a mentalidade de precisão e conferência da Logística na identificação e prevenção de defeitos. Experiência prática em automação de testes (Cypress), testes de API (Postman) e escrita de cenários BDD (Gherkin). Familiaridade com rituais Ágeis, documentação técnica e rastreabilidade de evidências. Busco primeira oportunidade em QA para aplicar pensamento analítico e atenção a detalhes.`,
  },
  skills: {
    idiomas: ['Inglês Avançado (C1 — EF SET)'],
    qa_core: [
      'Testes Automatizados (Cypress)',
      'Testes de API (Postman)',
      'BDD / Gherkin',
      'Triagem de Bugs & Jira',
    ],
    ai_rpa: [
      'Google Gemini & LLMs',
      'RPA (N8N & Make)',
      'Engenharia de Prompt',
      'Automação de Processos',
    ],
    tech_core: [
      'Python (FastAPI)',
      'React / TypeScript',
      'Node.js',
      'Flutter / Dart (Mobile)',
      'JavaScript / HTML / CSS',
      'SQL & NoSQL (PostgreSQL)',
    ],
    ferramentas: [
      'Git / GitHub Flow',
      'REST APIs',
      'Supabase (BaaS)',
      'TailwindCSS',
      'Clean Architecture / SOLID',
      'Metodologias Ágeis (Scrum)',
    ],
  },
  projects: [
    {
      id: 'tiss',
      title: 'TISS Guard',
      tech: ['React (Vite)', 'TypeScript', 'Browser APIs', 'Cryptography'],
      date: 'Dez 2025',
      description:
        'Extensão de navegador para auditoria automática de faturamento médico (TISS/ANS).',
      points: [
        'Validação client-side de arquivos XML (50MB+) contra schemas XSD oficiais e 50+ regras de faturamento ANS, prevenindo glosas hospitalares na origem.',
        'Licenciamento offline com criptografia assimétrica (ECDSA P-256) e automação RPA por injeção de DOM em portais legados.',
      ],
      modes: {
        qa: {
          description:
            'Sistema de missão crítica para eliminação de risco financeiro em faturamento médico.',
          points: [
            'Motor de regras que valida XML contra schemas XSD oficiais e 50+ regras ANS em tempo real, interceptando uploads na origem.',
            'Rastreabilidade completa (Audit Trail) garantindo reprodutibilidade de cada validação para auditorias de conformidade.',
          ],
        },
        fullstack: {
          description:
            'Extensão de navegador com React atuando como middleware de interceptação em portais legados.',
          points: [
            'Parsing de XMLs de 50MB+ no navegador via Web Workers, zerando latência de servidor, com injeção de React Components em sites de terceiros.',
            'Criptografia assimétrica (ECDSA) no client para licenciamento offline e proteção de propriedade intelectual.',
          ],
        },
        automation: {
          description:
            'Sistema de automação para auditoria de faturamento médico com RPA e validação inteligente.',
          points: [
            'RPA via Content Script para automação de portais de faturamento médico, contornando limitações de APIs legadas.',
            'Motor de regras automatizado que valida 50+ regras ANS em arquivos XML de até 50MB sem intervenção humana.',
          ],
        },
      },
    },
    {
      id: 'zenith',
      title: 'Zenith Prompt Architect Engine',
      tech: [
        'Python 3.10+',
        'FastAPI',
        'Google Gemini 2.5',
        'Supabase (pgvector)',
      ],
      date: 'Jun 2025',
      description:
        'Motor cognitivo headless (API RESTful) com roteamento inteligente e RAG híbrido.',
      points: [
        'Roteador Cognitivo com seleção dinâmica de estratégias, Memória de Longo Prazo (banco relacional) e RAG híbrido (vetorial + lexical) via Supabase/pgvector.',
        'Quality Gate (LLM-as-a-Judge) que bloqueia respostas abaixo de 80% de precisão, arquitetura assíncrona (FastAPI) com princípios SOLID.',
      ],
      modes: {
        qa: {
          description:
            'Engine otimizada para consistência de respostas e redução de alucinações (AI-Safety).',
          points: [
            'LLM-as-a-Judge para retenção e regeneração automática de respostas avaliadas com baixa precisão na Cadeia de Pensamento.',
            'Avaliação de relevância do RAG híbrido com métricas vetoriais, garantindo respostas ancoradas em dados reais.',
          ],
        },
        fullstack: {
          description:
            'Backend assíncrono robusto demonstrando domínio de arquitetura e integração de serviços.',
          points: [
            'FastAPI com PostgreSQL/pgvector (Supabase) para conciliar dados relacionais e buscas vetoriais numa ferramenta unificada.',
            'Clean Architecture, SOLID e Injeção de Dependência para desacoplar a LLM (Gemini 2.5) do core de negócios.',
          ],
        },
        automation: {
          description:
            'Orquestração de agentes cognitivos com roteamento dinâmico e memória persistente.',
          points: [
            'Orquestração de agentes com roteamento dinâmico de estratégias e memória persistente para personalização contínua.',
            'Pipeline de RAG híbrido integrado ao Supabase para ancoragem factual e eliminação de alucinações.',
          ],
        },
      },
    },
    {
      id: 'custos-cybermod',
      title: 'Custos CyberMod',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Capacitor'],
      date: 'Jan 2026',
      description:
        'Sistema de gestão de custos e precificação dinâmica para impressão 3D.',
      points: [
        'Motor de precificação configurável com perfis de venda, custos variáveis dinâmicos e interface mobile-first com busca automática de CEP.',
        'Arquitetura Local-First (offline-ready) com integração nativa Android via Capacitor para gestão sem dependência de internet.',
      ],
      modes: {
        qa: {
          description:
            'Validação completa de fluxos críticos de precificação e usabilidade mobile.',
          points: [
            'Testes de precisão em cálculos de precificação (custos variáveis, lucro, materiais) com validação decimal rigorosa.',
            'Validação de responsividade mobile e builds cross-platform (Android APK e PWA).',
          ],
        },
        fullstack: {
          description:
            'Aplicação PWA/Mobile com integração nativa e lógica de negócios robusta.',
          points: [
            'Gestão de estado complexo com formulários aninhados e algoritmos de custeio baseados em geometria e material.',
            'Integração nativa via Capacitor para acesso a recursos do dispositivo e geração de build Android.',
          ],
        },
        automation: {
          description:
            'Sistema automatizado de precificação com cálculos dinâmicos e operação offline.',
          points: [
            'Motor de precificação que calcula automaticamente custos variáveis e margens baseado em perfis configuráveis.',
            'Arquitetura offline-first permitindo operação completa sem internet, com persistência local automática.',
          ],
        },
      },
    },
  ],
  experience: [
    {
      company: 'Portfólio Autoral',
      role: 'Desenvolvedor de Software (Autônomo)',
      date: 'Jan 2025 - Atual',
      location: 'Remoto',
      points: [
        'Arquitetura e desenvolvimento end-to-end de soluções de software: extensão de auditoria médica (TISS Guard), motor de IA cognitivo (Zenith) e sistema de gestão mobile (Custos CyberMod).',
        "Autor do livro técnico 'O Copiloto Inteligente' (2025), documentando frameworks para engenharia de agentes e automação estratégica com LLMs.",
      ],
    },
    {
      company: 'Snellog',
      role: 'Operador Logístico',
      date: 'Mai 2020 - Abr 2022',
      location: 'Hortolândia, SP',
      points: [
        'Otimização de fluxos de Supply Chain, aplicando análise sistêmica para redução de gargalos operacionais em centro de distribuição.',
        'Gestão auditável de inventário e pedidos com foco em integridade de dados e confiabilidade dos sistemas ERP.',
      ],
    },
    {
      company: 'inService Facility',
      role: 'Operador de Expedição',
      date: 'Jan 2018 - Mar 2020',
      location: 'Campinas, SP',
      points: [
        'Validação de entradas/saídas de estoque em sistema SAP WM, garantindo rastreabilidade end-to-end e padronização de processos operacionais.',
      ],
    },
  ],
  education: [
    {
      school: 'Faculdade Impacta Tecnologia',
      degree: 'Análise e Desenvolvimento de Sistemas',
      date: 'Fev 2025 - Jul 2027 (Previsão)',
      location: 'São Paulo (EAD)',
      details: ['Extensão Acadêmica: Nanodegree Full Stack Development.'],
    },
  ],
  certifications: [
    'FIAP Nano Course: Inteligência Artificial e Computacional (80h)',
    'FIAP Nano Course: Python (80h)',
    'Alura: Formação Programação & Desenvolvimento Web (Lógica, JavaScript, HTML5/CSS3) - 80h',
    'Alura & Google: Imersões em Agentes de IA, Gemini e Dados com Python (14h)',
  ],
}

export const resumeModes = {
  general: {
    id: 'general',
    label: 'Geral (Padrão)',
    summaryKey: 'general',
    projectIds: ['tiss', 'zenith', 'custos-cybermod'],
    skillKeys: ['idiomas', 'tech_core', 'ai_rpa', 'ferramentas'],
    roleOverride: null,
  },
  fullstack: {
    id: 'fullstack',
    label: 'Dev Full Stack',
    summaryKey: 'fullstack',
    projectIds: ['custos-cybermod', 'tiss', 'zenith'],
    skillKeys: ['idiomas', 'tech_core', 'ferramentas', 'ai_rpa'],
    roleOverride: 'Desenvolvedor Full Stack',
  },
  automation: {
    id: 'automation',
    label: 'Automação & IA',
    summaryKey: 'automation',
    projectIds: ['zenith', 'tiss', 'custos-cybermod'],
    skillKeys: ['idiomas', 'ai_rpa', 'tech_core', 'ferramentas'],
    roleOverride: 'Analista de Automação & IA',
  },
  qa: {
    id: 'qa',
    label: 'QA & Testes',
    summaryKey: 'qa',
    projectIds: ['tiss', 'custos-cybermod', 'zenith'],
    skillKeys: ['idiomas', 'qa_core', 'tech_core', 'ferramentas'],
    roleOverride: 'Analista de QA / Testes',
  },
  ats: {
    id: 'ats',
    label: 'ATS (Texto Puro)',
    summaryKey: 'general',
    projectIds: ['tiss', 'zenith', 'custos-cybermod'],
    skillKeys: ['idiomas', 'tech_core', 'ai_rpa', 'ferramentas'],
    roleOverride: null,
  },
}
