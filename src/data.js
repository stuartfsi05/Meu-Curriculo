export const resumeData = {
    header: {
        name: "THIAGO DIAS PRECIVALLI",
        role: "Desenvolvedor Full Stack | Automação & IA",
        location: "Hortolândia, SP",
        phone: "(19) 98263-1179",
        email: "t.precivalli@gmail.com",
        linkedin: "precivalli",
        linkedinUrl: "linkedin.com/in/thiago-dias-precivalli",
        github: "stuartfsi05",
        githubUrl: "github.com/stuartfsi05",
    },
    summaries: {
        general: `Desenvolvedor Full Stack focado em Arquitetura de Software e Engenharia de Agentes (IA/LLMs).
Transição de carreira estruturada após 4 anos em Logística (Otimização de Processos), aplicando lógica sistêmica no desenvolvimento de automações (RPA).
Autor do livro técnico 'O Copiloto Inteligente' (2025).
Projetos recentes incluem sistemas de auditoria médica (TISS), ferramentas para TTRPG (Clean Architecture) e orquestração de prompts.`,

        fullstack: `Desenvolvedor de Software (ADS) com portfólio prático em React, Python e Mobile (Flutter).
Foco obsessivo em Clean Architecture, Design Patterns e Código Limpo.
Transição de carreira vinda da Logística, trazendo forte capacidade de resolução de problemas e visão sistêmica para o desenvolvimento de software.
Experiência prática com gestão de estado complexo, bancos NoSQL e desenvolvimento orientado a componentes.`,

        automation: `Especialista em Automação de Processos e Inteligência Artificial.
Unindo 4 anos de experiência em Logística (Otimização de Fluxos) com Engenharia de Agentes e RPA (N8N/Make/Python).
Autor do livro 'O Copiloto Inteligente' (2025).
Foco em criar eficiência operacional e "Hyperautomation" através de soluções que integram LLMs, análise de dados e automação de tarefas repetitivas.`,

        qa: `Estudante de ADS buscando atuar em Qualidade de Software (QA/Testes).
Transição de carreira vinda da Logística, aplicando a mentalidade de "Conferência e Precisão" na identificação e triagem de bugs.
Conhecimento prático em Automação (Cypress/Python) e Testes de API (Postman).
Familiaridade com rituais Ágeis, escrita de cenários em Gherkin e documentação técnica de evidências.`
    },
    skills: {
        qa_core: ["Cypress (Básico)", "Testes de API (Postman)", "Gherkin / BDD", "Triagem de Bugs & Jira"],
        ai_rpa: ["Engenharia de Agentes", "Google Gemini & LLMs", "RPA (N8N & Make)", "Engenharia de Prompt"],
        tech_core: ["Python (Pandas & AI)", "React / TypeScript", "Flutter (Mobile)", "Arquitetura & Lógica"],
        ferramentas: ["VS Code / Cursor", "Windsurf IDE", "Git / GitHub Flow", "NoSQL (Hive) & SQL"]
    },
    publications: [
        {
            title: "O Copiloto Inteligente",
            subtitle: "Um Guia Prático para Transformar a IA em seu Aliado Estratégico",
            year: "2025",
            type: "Livro Técnico / Não-Ficção",
            description: "Obra definitiva sobre a aplicação tática de LLMs, propondo a transição do 'Modo Piloto Automático' para o 'Modo Copiloto Estratégico' no fluxo de trabalho corporativo.",
            points: [
                "Metodologia Proprietária: Desenvolvi a 'Matriz de Delegação Inteligente' para classificar tarefas por Complexidade vs. Impacto Estratégico.",
                "Engenharia de Prompt Avançada: Sistematizei técnicas como 'Persona Estratégica' e 'Estrutura Dirigida' para eliminar alucinações de IA.",
                "Gestão do Conhecimento: Criei o framework 'Segundo Cérebro com IA' para captura e recuperação semântica de informações organizacionais."
            ]
        }
    ],
    projects: [
        {
            id: "tiss",
            title: "TISS Guard",
            tech: ["React (Vite 5)", "TypeScript", "Chrome Extension (CRXJS)", "RPA"],
            date: "Dez 2025",
            description: "Sistema de auditoria médica e automação de faturamento que atua como camada de inteligência sobre portais de convênios.",
            points: [
                "Engenharia Reversa: Intercepta o evento de upload do navegador para validar arquivos XML TISS em milissegundos antes do envio.",
                "RPA (Robotic Process Automation): Implementei um 'Autômato' que assume o controle do DOM para preencher formulários complexos automaticamente.",
                "Segurança: Sistema de licenciamento criptográfico utilizando a biblioteca 'jose' (ECDSA P-256) com validação offline."
            ],
            modes: {
                qa: {
                    description: "Plataforma de validação de dados médicos focada na prevenção de glosas (tabelas de erros) antes do envio.",
                    points: [
                        "Testes Automatizados de Regra de Negócio: O sistema valida XMLs contra 50+ regras da ANS em tempo real, prevenindo erros humanos.",
                        "Garantia de Qualidade: Redução de 90% no retrabalho operacional ao interceptar falhas na origem (upload).",
                        "Trindade de Validação: Implementação de logs detalhados para cada transação enviada aos convênios."
                    ]
                },
                fullstack: {
                    description: "SaaS completo (Extension + Dashboard) construído com React, atuando como middleware no navegador.",
                    points: [
                        "Frontend Complexo: Manipulação direta do DOM alheio (Content Scripts) usando React Portals para injetar UI moderna em sistemas legados.",
                        "Performance: Parsing de arquivos XML de 10MB+ no client-side em <200ms usando Web Workers.",
                        "Build System: Configuração customizada do Vite para gerar múltiplos bundles (popup, background, content)."
                    ]
                }
            }
        },
        {
            id: "combat",
            title: "D&D Combat Tracker",
            tech: ["Flutter", "Riverpod", "Hive (NoSQL)", "Clean Architecture"],
            date: "Nov 2025",
            description: "Aplicativo Android de alta performance para mestres de RPG, focado em gerenciamento de estado complexo e UX.",
            points: [
                "Arquitetura: Adotei Clean Architecture com Riverpod para injeção de dependência e gerenciamento de estado reativo.",
                "Offline-First: Persistência de dados ultra-rápida com Hive (banco NoSQL key-value) garantindo zero latência.",
                "Lógica de Jogo: Implementei sistemas de 'HP Temporário' e condições de status com regras de negócio isoladas da UI."
            ],
            modes: {
                qa: {
                    description: "Aplicação Mobile complexa utilizada para estudo de cenários de teste de estado e persistência.",
                    points: [
                        "Cobertura de Casos de Borda: Tratamento de conflitos de iniciativa e persistência de dados em interrupções abruptas do app.",
                        "Testes de Usabilidade: Refinamento de UX baseado em feedback real de usuários (Mestres de RPG) para reduzir cliques.",
                        "Bug Prevention: Uso de tipagem estrita (Dart) e Imutabilidade para prevenir side-effects indesejados no estado."
                    ]
                },
                fullstack: {
                    description: "App Mobile robusto seguindo padrões de indústria (Clean Arch) e separação estrita de camadas.",
                    points: [
                        "State Management: Uso avançado de Riverpod (Notifier/AsyncNotifier) para gerenciar fluxos assíncronos complexos.",
                        "Arquitetura Limpa: Domain, Data e Presentation layers totalmente desacopladas.",
                        "NoSQL Performance: Modelagem de banco orientada a performance mobile com Hive."
                    ]
                }
            }
        },
        {
            id: "zenith",
            title: "Zenith Prompt Architect",
            tech: ["Python", "Google Gemini API", "Rich CLI", "Design Patterns"],
            date: "Jun 2025",
            description: "Motor de agente autônomo modular para orquestração de fluxos de trabalho de Inteligência Artificial Generativa.",
            points: [
                "Arquitetura: Uso de padrões de projeto avançados (Facade para o Orquestrador, Singleton para Config, Strategy para Análise).",
                "Pipeline de IaC: Implementei protocolos de 'Integridade Semântica' (SIC) e 'Constitutional AI' (The Judge) para auto-correção de outputs.",
                "Segurança de IP: Desenvolvi um protocolo de 'Secure Fallback' que degrada graciosamente para modo demo se os prompts proprietários não forem detectados."
            ],
            modes: {
                qa: {
                    description: "Framework Python para testes de output de LLMs e validação de prompts.",
                    points: [
                        "Automated Evaluation (LLM-as-a-Judge): Criação de agentes que testam e validam as respostas de outros agentes.",
                        "Cenários de Teste: Validação de outputs contra regras estritas (Constitutional AI) para garantir conformidade.",
                        "Logs e Auditoria: Sistema de trace detalhado para debugging de cadeias de pensamento (Chain of Thought)."
                    ]
                }
            }
        },
        {
            id: "runner",
            title: "Runner's Quest",
            tech: ["Python", "Pygame", "Matemática Vetorial"],
            date: "Abr 2025",
            description: "Jogo de plataforma 2D desenvolvido com foco acadêmico para aplicação prática de POO e física de jogos.",
            points: [
                "Engine de Física: Implementação manual de vetores de gravidade, colisão de sprites e inércia sem uso de frameworks de alto nível.",
                "Otimização: Técnicas de gerenciamento de memória e renderização de sprites para manter 60 FPS estáveis.",
                "Game Loop: Estruturação robusta de estados de jogo (Menu, Gameplay, Game Over) demonstrando domínio do ciclo de vida da aplicação."
            ],
            modes: {
                qa: {
                    description: "Laboratório de testes de física e colisão, ideal para prática de identificação de bugs visuais e lógicos.",
                    points: [
                        "Testes de Colusão (Hitbox): Ajuste fino de bounding boxes para garantir detecção precisa de impacto.",
                        "Edge Cases: Validação de comportamento do personagem em limites do mapa e interações de velocidade extrema.",
                        "Performance Testing: Monitoramento de FPS e uso de memória durante execução prolongada."
                    ]
                }
            }
        }
    ],
    experience: [
        {
            company: "Snellog",
            role: "Operador Logístico Especializado",
            date: "Mai 2020 - Abr 2022",
            location: "Hortolândia, SP",
            points: [
                "Otimização de processos críticos de Supply Chain, aplicando lógica de fluxo para garantir a integridade de recursos e materiais.",
                "Gestão sistêmica de pedidos e armazenamento, assegurando a consistência de dados e a eficiência operacional."
            ]
        },
        {
            company: "inService Facility",
            role: "Operador Logístico - Expedição",
            date: "Jan 2018 - Mar 2020",
            location: "Campinas, SP",
            points: [
                "Controle de acuracidade de estoque com validação digital, garantindo 100% de rastreabilidade de itens.",
                "Operação de sistemas ERP (SAP WM) focada na integridade da informação e padronização de processos de expedição."
            ]
        },
        {
            company: "ActionLine Telemarketing",
            role: "Operador de Telemarketing",
            date: "Dez 2014 - Abr 2017",
            location: "Campinas, SP",
            points: [
                "Desenvolvimento de comunicação persuasiva e resolução de problemas em tempo real no atendimento ao cliente.",
                "Trabalho focado em metas e divulgação ativa de produtos e serviços."
            ]
        }
    ],
    education: [
        {
            school: "Faculdade Impacta Tecnologia",
            degree: "Análise e Desenvolvimento de Sistemas",
            date: "Fev 2025 - Jul 2027 (Previsão)",
            location: "São Paulo (EAD)",
            details: [
                "Extensão Acadêmica: Nanodegree Full Stack Development (Foco prático complementar à graduação).",
                "Semestre 1 (Fundamentos): Lógica de Programação, Python, Modelagem de Banco de Dados e Soft Skills.",
                "Semestre 2 (Web & Eng): POO com Python, SQL, Engenharia de Software e Desenvolvimento Web (Flask/MVC/HTML/CSS)."
            ]
        }
    ],
    certifications: [
        "Inglês Avançado (C1/EF SET)",
        "Alura & Google: Imersões em Agentes de IA, Gemini e Dados com Python (14h)",
        "FIAP Nano Course: Inteligência Artificial e Computacional (80h)",
        "FIAP Nano Course: Python (80h)",
        "Alura: Formação Programação & Desenvolvimento Web (Lógica, JavaScript, HTML5/CSS3) - 80h",
        "Alura: Arquitetura de Computadores (Por trás de como seu código funciona) - 8h",
        "Alura: Pensamento Computacional: Fundamentos & Lógica (12h)",
        "Alura: Git e GitHub (Repositório, Commit e Versões) - 8h",
        "Alura: Python: Inteligência Artificial Aplicada (12h)",
        "Alura Flash Skills: Automação de Processos com N8N, Make e IA (5h)"
    ]
};

export const resumeModes = {
    general: {
        id: "general",
        label: "Geral (Padrão)",
        summaryKey: "general",
        projectIds: ["tiss", "combat", "zenith", "runner"],
        skillKeys: ["ai_rpa", "tech_core", "ferramentas"],
        roleOverride: null // Use default
    },
    fullstack: {
        id: "fullstack",
        label: "Dev Full Stack",
        summaryKey: "fullstack",
        projectIds: ["combat", "tiss", "runner", "zenith"],
        skillKeys: ["tech_core", "ferramentas", "ai_rpa"],
        roleOverride: "Desenvolvedor Full Stack Júnior"
    },
    automation: {
        id: "automation",
        label: "Automação & IA",
        summaryKey: "automation",
        projectIds: ["zenith", "tiss", "runner", "combat"],
        skillKeys: ["ai_rpa", "tech_core", "ferramentas"],
        roleOverride: "Analista de Automação & IA"
    },
    qa: {
        id: "qa",
        label: "QA & Testes",
        summaryKey: "qa",
        projectIds: ["tiss", "runner", "combat", "zenith"],
        skillKeys: ["qa_core", "tech_core", "ferramentas", "ai_rpa"],
        roleOverride: "Analista de QA / Testes (Júnior)"
    }
};
