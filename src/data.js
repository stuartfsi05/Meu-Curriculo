export const resumeData = {
  header: {
    name: 'THIAGO DIAS PRECIVALLI',
    role: 'Arquiteto de Soluções de IA',
    location: 'Hortolândia, SP',
    phone: '(19) 98263-1179',
    email: 't.precivalli@gmail.com',
    linkedin: 'precivalli',
    linkedinUrl: 'linkedin.com/in/thiago-dias-precivalli',
    github: 'stuartfsi05',
    githubUrl: 'github.com/stuartfsi05',
  },
  summaries: {
    general: `Arquiteto de Soluções focado em Engenharia de Agentes e Sistemas Cognitivos Enterprise.
Especialista em orquestrar a convergência entre Lógica Operacional (background em Logística) e Inteligência Artificial Sistêmica.
Autor do livro técnico 'O Copiloto Inteligente' (2025), definindo novos padrões para automação estratégica.
Experiência comprovada em projetar extensões de navegador (TISS Guard), aplicações mobile com gestão de estado complexa e frameworks de orquestração de LLMs com Clean Architecture.`,

    fullstack: `Engenheiro de Software Full Stack com portfólio prático em React, Python e Mobile (Flutter).
Foco obsessivo em Clean Architecture, Design Patterns e Código Limpo.
Transição de carreira vinda da Logística, trazendo forte capacidade de resolução de problemas e visão sistêmica para o desenvolvimento de software.
Experiência prática com gestão de estado complexo, bancos NoSQL e desenvolvimento orientado a componentes.`,

    automation: `Especialista em Engenharia de Agentes e Orquestração de Processos Inteligentes.
Combinando visão sistêmica de fluxos operacionais (Logística) com automação cognitiva (N8N/Make/Python).
Autor do livro 'O Copiloto Inteligente' (2025).
Foco em "Intelligent Process Automation" (IPA), desenvolvendo agentes autônomos que integram LLMs para tomada de decisão em pipelines de missão crítica.`,

    qa: `Analista de Qualidade de Software (QA) com foco em Automação e Estratégia de Testes.
Transição de carreira vinda da Logística, aplicando a mentalidade de "Conferência e Precisão" na identificação e triagem de bugs.
Conhecimento prático em Automação (Cypress/Python) e Testes de API (Postman).
Familiaridade com rituais Ágeis, escrita de cenários em Gherkin e documentação técnica de evidências.`,
  },
  skills: {
    qa_core: [
      'Cypress (Básico)',
      'Testes de API (Postman)',
      'Gherkin / BDD',
      'Triagem de Bugs & Jira',
    ],
    ai_rpa: [
      'Engenharia de Agentes',
      'Google Gemini & LLMs',
      'RPA (N8N & Make)',
      'Engenharia de Prompt',
    ],
    tech_core: [
      'Python (Pandas & AI)',
      'React / TypeScript',
      'Flutter (Mobile)',
      'Arquitetura & Lógica',
    ],
    ferramentas: [
      'VS Code / Cursor',
      'Windsurf IDE',
      'Git / GitHub Flow',
      'NoSQL (Hive) & SQL',
    ],
  },
  publications: [
    {
      title: 'O Copiloto Inteligente',
      subtitle:
        'Um Guia Prático para Transformar a IA em seu Aliado Estratégico',
      year: '2025',
      type: 'Livro Técnico / Não-Ficção',
      description:
        "Obra definitiva sobre a aplicação tática de LLMs, propondo a transição do 'Modo Piloto Automático' para o 'Modo Copiloto Estratégico' no fluxo de trabalho corporativo.",
      points: [
        "Metodologia Proprietária: Desenvolvi a 'Matriz de Delegação Inteligente' para classificar tarefas por Complexidade vs. Impacto Estratégico.",
        "Engenharia de Prompt Avançada: Sistematizei técnicas como 'Persona Estratégica' e 'Estrutura Dirigida' para eliminar alucinações de IA.",
        "Gestão do Conhecimento: Criei o framework 'Segundo Cérebro com IA' para captura e recuperação semântica de informações organizacionais.",
      ],
    },
  ],
  projects: [
    {
      id: 'tiss',
      title: 'TISS Guard',
      tech: ['React (Vite 5)', 'TypeScript', 'Browser APIs', 'Cryptography'],
      date: 'Dez 2025',
      description:
        'Extensão de Navegador e SaaS para Auditoria Médica com Automação RPA.',
      points: [
        'Client-Side Interception Layer: Arquitetura de interceptação de eventos de upload no navegador para validação prévia de payloads XML (10MB+) sem latência de rede.',
        "RPA via DOM Injection: Implementação de 'Autômato Injetado' (Content Script) para manipulação segura de DOM em portais legados, contornando limitações de API.",
        "Secure Offline Validation: Sistema de licenciamento 'Zero-Knowledge' utilizando criptografia assimétrica (ECDSA P-256) e biblioteca 'jose' para validação local.",
      ],
      modes: {
        qa: {
          description:
            'Sistema de missão crítica desenvolvido para eliminar o risco financeiro de glosas hospitalares (rejeições de pagamento).',
          points: [
            'Validação de Regra de Negócio ANS: Implementação de moteur de regras que valida arquivos XML contra schemas XSD oficiais e 50+ regras de faturamento em tempo real.',
            'Quality Gate na Origem: A arquitetura intercepta o upload (Client-Side) prevenindo que dados incorretos cheguem ao servidor, reduzindo o ciclo de retrabalho em 90%.',
            'Confiabilidade e Logs: Sistema de rastreabilidade completa (Audit Trail) garantindo que cada validação seja reproduzível para auditorias de conformidade.',
          ],
        },
        fullstack: {
          description:
            'Complexa extensão de navegador (Browser Extension/React) atuando como middleware de interceptação em sistemas legados.',
          points: [
            'Client-Side Architecture: Execução de validações pesadas (parsing de XMLs de 50MB+) diretamente no navegador via Web Workers, zerando a latência de servidor.',
            'DOM Injection & React Portals: Técnica avançada de injeção de React Components dentro de sites de terceiros (Legacy Portals), criando uma UI moderna sobreposta.',
            'Security Engineering: Implementação de criptografia assimétrica (ECDSA) no client para licenciamento offline e proteção de propriedade intelectual.',
          ],
        },
      },
    },
    {
      id: 'combat',
      title: 'D&D Combat Tracker',
      tech: ['Flutter', 'Riverpod', 'Hive (NoSQL)', 'Clean Architecture'],
      date: 'Nov 2025',
      description:
        'Aplicação Mobile (Android) de Alta Performance para Gestão de TTRPG.',
      points: [
        'Strict Clean Architecture: Separação rigorosa de responsabilidades (Domain, Data, Presentation) garantindo testabilidade e escalabilidade do core business.',
        'Reactive State Orchestration: Implementação avançada de Riverpod para gerenciamento de estados efêmeros e persistentes com atomicidade garantida.',
        "Optimized Persistence Layer: Modelagem de dados NoSQL (Hive) focada em operações 'Zero-Latency' e serialização binária para dispositivos móveis.",
      ],
      modes: {
        qa: {
          description:
            'Estudo de caso avançado em Engenharia de Testes Mobile, focado em estabilidade de estado e persistência.',
          points: [
            'Teste de Resiliência de Dados: Validação rigorosa do comportamento do app sob condições de stress (fechamento forçado, bateria fraca) garantindo atomicidade do banco NoSQL.',
            'Prevenção de Regressão: Arquitetura desacoplada facilitando testes unitários isolados de regras de combate (Dano, Iniciativa, Turnos).',
            'UX Confidence: Implementação de feedback visual imediato e tratamento de erros gracioso para garantir experiência fluida ao usuário final.',
          ],
        },
        fullstack: {
          description:
            'Engenharia Mobile de alto desempenho demonstrando domínio de Arquitetura Limpa e Gestão de Estado.',
          points: [
            'Strict Clean Architecture: Separação canônica de camadas (Domain, Data, Presentation) garantindo um código testável, manutenível e agnóstico de framework.',
            'Reactive State Management: Orquestração complexa de fluxos de dados com Riverpod, eliminando "prop drilling" e garantindo reatividade granular na UI.',
            'Local-First Performance: Otimização extrema de banco de dados embarcado (Hive/NoSQL) para operações de leitura/escrita em <1ms em dispositivos móveis.',
          ],
        },
      },
    },
    {
      id: 'zenith',
      title: 'Zenith Prompt Architect',
      tech: ['Python', 'Gemini API', 'Design Patterns', 'Constitutional AI'],
      date: 'Jun 2025',
      description:
        'Framework CLI em Python para Orquestração Modular de Agentes de IA.',
      points: [
        'Multi-Agent Orchestrator: Arquitetura baseada em Facade Pattern para coordenar pipelines complexos de raciocínio (Analysis -> Validation -> Execution).',
        "Automated Governance & Guardrails: Implementação de módulo 'The Judge' para auto-correção e 'Semantic Integrity Constraints' (SIC) para garantir alinhamento do output.",
        "Enterprise Resilience: Protocolo 'Secure Fallback' implementando Circuit Breaker para proteção de Propriedade Intelectual (IP) e disponibilidade contínua.",
      ],
      modes: {
        qa: {
          description:
            'Framework para validação determinística de sistemas de IA generativa (LLMs) e garantia de conformidade.',
          points: [
            'LLM-as-a-Judge: Implementação de agentes auditores que avaliam semanticamente as respostas geradas, garantindo precisão técnica e segurança.',
            'Testes de Alinhamento (Guardrails): Verificação automatizada contra injeção de prompts e desvios de persona ("hallucinations").',
            'Rastreabilidade Cognitiva: Sistema de logs estruturados que permite auditar a "Cadeia de Pensamento" (Chain-of-Thought) da IA passo a passo.',
          ],
        },
        fullstack: {
          description:
            'Arquitetura de Backend modular para orquestração de Agentes Inteligentes, focada em extensibilidade.',
          points: [
            'Design Patterns: Uso intensivo de padrões GoF (Facade, Strategy, Factory) para criar um núcleo de processamento agnóstico ao modelo de LLM subjacente.',
            'CLI & Tooling Architecture: Desenvolvimento de interface de linha de comando robusta com gestão de configuração e injeção de dependência.',
            'API Integration Resilience: Implementação de padrões de resiliência (Retry, Backoff, Circuit Breaker) para lidar com instabilidades de APIs de terceiros.',
          ],
        },
      },
    },
    {
      id: 'runner',
      title: "Runner's Quest",
      tech: ['Python', 'Pygame', 'Vector Math', 'ECS Concepts'],
      date: 'Abr 2025',
      description:
        'Jogo de Plataforma 2D desenvolvido com Engine Física Proprietária.',
      points: [
        "Physics Simulation Engine: Implementação 'from-scratch' de vetores de física newtoniana (Inércia, Gravidade, Atrito) e detecção de colisão AABB.",
        'Render Loop Optimization: Arquitetura de Game Loop com gerenciamento estrito de ciclo de memória e delta-time para estabilidade de frame-rate.',
        'State Machine Architecture: Gerenciamento robusto de estados da aplicação demonstrando controle total sobre o ciclo de vida do software.',
      ],
      modes: {
        qa: {
          description:
            'Sandbox para testes de física e colisão, focado na detecção de anomalias visuais e lógicas em tempo real.',
          points: [
            'Validação de Física (Hitbox): Testes visuais de "Bounding Box" para garantir que a detecção de colisão seja pixel-perfect e justa para o jogador.',
            'Testes de Performance (Stress): Análise de vazamento de memória e estabilidade de FPS sob carga de renderização intensa.',
            'Edge Case Discovery: Simulação de condições extremas (velocidade máxima, limites do mapa) para identificar comportamentos indefinidos ("glitches").',
          ],
        },
        fullstack: {
          description:
            'Demonstração de competência em Algoritmos e Complexidade através da construção de uma engine física do zero.',
          points: [
            'Game Loop Architecture: Implementação manual do ciclo de atualização "Update-Render" com controle de Delta Time para consistência em diferentes hardwares.',
            'ECS (Entity Component System): Aplicação de conceitos de composição sobre herança para gerenciamento eficiente de entidades do jogo.',
            'Vetores e Matemática Aplicada: Uso de álgebra linear para simular movimento, gravidade e colisão sem frameworks prontos.',
          ],
        },
      },
    },
  ],
  experience: [
    {
      company: 'Freelance',
      role: 'Arquiteto de Soluções de IA',
      date: 'Jan 2023 - Atual',
      location: 'Remoto',
      points: [
        "Liderança Técnica & Autoria: Autor de 'O Copiloto Inteligente' (2025), definindo frameworks para Engenharia de Agentes e implementação de LLMs em ambientes corporativos.",
        'Desenvolvimento de Soluções de Automação: Arquitetura e delivery de extensões de auditoria médica (TISS Guard) e motores de orquestração de IA (Zenith), focados em segurança e automação.',
        'Engenharia Mobile Avançada: Desenvolvimento de aplicações mobile reativas (D&D Combat Tracker) utilizando Clean Architecture e persistência NoSQL distribuída.',
      ],
    },
    {
      company: 'Snellog',
      role: 'Operador Logístico Especializado',
      date: 'Mai 2020 - Abr 2022',
      location: 'Hortolândia, SP',
      points: [
        'Engenharia de Processos: Otimização de fluxos críticos de Supply Chain, aplicando análise sistêmica para redução de gargalos operacionais.',
        'Data Integrity: Gestão auditável de inventário e pedidos, assegurando consistência dados-físico e confiabilidade de ERPs.',
      ],
    },
    {
      company: 'inService Facility',
      role: 'Operador Logístico - Expedição',
      date: 'Jan 2018 - Mar 2020',
      location: 'Campinas, SP',
      points: [
        'Controle de Qualidade Sistêmico: Validação digital de inputs/outputs de estoque, garantindo rastreabilidade end-to-end.',
        'Padronização Operacional: Execução rigorosa de fluxos em SAP WM, focada na integridade da informação e celeridade de processos.',
      ],
    },
    {
      company: 'ActionLine Telemarketing',
      role: 'Operador de Telemarketing',
      date: 'Dez 2014 - Abr 2017',
      location: 'Campinas, SP',
      points: [
        'Desenvolvimento de comunicação persuasiva e resolução de problemas em tempo real no atendimento ao cliente.',
        'Trabalho focado em metas e divulgação ativa de produtos e serviços.',
      ],
    },
  ],
  education: [
    {
      school: 'Faculdade Impacta Tecnologia',
      degree: 'Análise e Desenvolvimento de Sistemas',
      date: 'Fev 2025 - Jul 2027 (Previsão)',
      location: 'São Paulo (EAD)',
      details: [
        'Extensão Acadêmica: Nanodegree Full Stack Development (Foco prático complementar à graduação).',
        'Semestre 1 (Fundamentos): Lógica de Programação, Python, Modelagem de Banco de Dados e Soft Skills.',
        'Semestre 2 (Web & Eng): POO com Python, SQL, Engenharia de Software e Desenvolvimento Web (Flask/MVC/HTML/CSS).',
      ],
    },
  ],
  certifications: [
    'Inglês Avançado (C1/EF SET)',
    'Alura & Google: Imersões em Agentes de IA, Gemini e Dados com Python (14h)',
    'FIAP Nano Course: Inteligência Artificial e Computacional (80h)',
    'FIAP Nano Course: Python (80h)',
    'Alura: Formação Programação & Desenvolvimento Web (Lógica, JavaScript, HTML5/CSS3) - 80h',
    'Alura: Arquitetura de Computadores (Por trás de como seu código funciona) - 8h',
    'Alura: Pensamento Computacional: Fundamentos & Lógica (12h)',
    'Alura: Git e GitHub (Repositório, Commit e Versões) - 8h',
    'Alura: Python: Inteligência Artificial Aplicada (12h)',
    'Alura Flash Skills: Automação de Processos com N8N, Make e IA (5h)',
  ],
}

export const resumeModes = {
  general: {
    id: 'general',
    label: 'Geral (Padrão)',
    summaryKey: 'general',
    projectIds: ['tiss', 'combat', 'zenith', 'runner'],
    skillKeys: ['ai_rpa', 'tech_core', 'ferramentas'],
    roleOverride: null, // Use default
  },
  fullstack: {
    id: 'fullstack',
    label: 'Dev Full Stack',
    summaryKey: 'fullstack',
    projectIds: ['combat', 'tiss', 'runner', 'zenith'],
    skillKeys: ['tech_core', 'ferramentas', 'ai_rpa'],
    roleOverride: 'Desenvolvedor Full Stack',
  },
  automation: {
    id: 'automation',
    label: 'Automação & IA',
    summaryKey: 'automation',
    projectIds: ['zenith', 'tiss', 'runner', 'combat'],
    skillKeys: ['ai_rpa', 'tech_core', 'ferramentas'],
    roleOverride: 'Analista de Automação & IA',
  },
  qa: {
    id: 'qa',
    label: 'QA & Testes',
    summaryKey: 'qa',
    projectIds: ['tiss', 'runner', 'combat', 'zenith'],
    skillKeys: ['qa_core', 'tech_core', 'ferramentas', 'ai_rpa'],
    roleOverride: 'Analista de QA / Testes',
  },
}
