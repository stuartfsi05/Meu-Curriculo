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
    summary: `Desenvolvedor Full Stack focado em Arquitetura de Software e Engenharia de Agentes (IA/LLMs).
Transição de carreira estruturada após 4 anos em Logística (Otimização de Processos), aplicando lógica sistêmica no desenvolvimento de automações (RPA).
Autor do livro técnico 'O Copiloto Inteligente' (2025).
Projetos recentes incluem sistemas de auditoria médica (TISS), ferramentas para TTRPG (Clean Architecture) e orquestração de prompts.`,
    skills: {
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
            title: "TISS Guard",
            tech: ["React (Vite 5)", "TypeScript", "Chrome Extension (CRXJS)", "RPA"],
            date: "Dez 2025",
            description: "Sistema de auditoria médica e automação de faturamento que atua como camada de inteligência sobre portais de convênios.",
            points: [
                "Engenharia Reversa: Intercepta o evento de upload do navegador para validar arquivos XML TISS em milissegundos antes do envio.",
                "RPA (Robotic Process Automation): Implementei um 'Autômato' que assume o controle do DOM para preencher formulários complexos automaticamente.",
                "Segurança: Sistema de licenciamento criptográfico utilizando a biblioteca 'jose' (ECDSA P-256) com validação offline."
            ]
        },
        {
            title: "D&D Combat Tracker",
            tech: ["Flutter", "Riverpod", "Hive (NoSQL)", "Clean Architecture"],
            date: "Nov 2025",
            description: "Aplicativo Android de alta performance para mestres de RPG, focado em gerenciamento de estado complexo e UX.",
            points: [
                "Arquitetura: Adotei Clean Architecture com Riverpod para injeção de dependência e gerenciamento de estado reativo.",
                "Offline-First: Persistência de dados ultra-rápida com Hive (banco NoSQL key-value) garantindo zero latência.",
                "Lógica de Jogo: Implementei sistemas de 'HP Temporário' e condições de status com regras de negócio isoladas da UI."
            ]
        },
        {
            title: "Zenith Prompt Architect",
            tech: ["Python", "Google Gemini API", "Rich CLI", "Design Patterns"],
            date: "Jun 2025",
            description: "Motor de agente autônomo modular para orquestração de fluxos de trabalho de Inteligência Artificial Generativa.",
            points: [
                "Arquitetura: Uso de padrões de projeto avançados (Facade para o Orquestrador, Singleton para Config, Strategy para Análise).",
                "Pipeline de IaC: Implementei protocolos de 'Integridade Semântica' (SIC) e 'Constitutional AI' (The Judge) para auto-correção de outputs.",
                "Segurança de IP: Desenvolvi um protocolo de 'Secure Fallback' que degrada graciosamente para modo demo se os prompts proprietários não forem detectados."
            ]
        },
        {
            title: "Runner's Quest",
            tech: ["Python", "Pygame", "Matemática Vetorial"],
            date: "Abr 2025",
            description: "Jogo de plataforma 2D desenvolvido com foco acadêmico para aplicação prática de POO e física de jogos.",
            points: [
                "Engine de Física: Implementação manual de vetores de gravidade, colisão de sprites e inércia sem uso de frameworks de alto nível.",
                "Otimização: Técnicas de gerenciamento de memória e renderização de sprites para manter 60 FPS estáveis.",
                "Game Loop: Estruturação robusta de estados de jogo (Menu, Gameplay, Game Over) demonstrando domínio do ciclo de vida da aplicação."
            ]
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
