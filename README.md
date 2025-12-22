# O Currículo Inteligente (Dynamic Resume Engine)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

> *"Um currículo não deve ser estático. Ele deve contar a história certa para a audiência certa."*

Este projeto não é apenas um PDF digital; é uma **Engenharia de Apresentação Profissional**. Construído com a mentalidade de um Engenheiro de Software, ele transforma dados brutos em narrativas adaptáveis.

## 🧠 O Conceito: Lentes Contextuais ("Resume Modes")

A principal inovação deste projeto é o sistema de **Lentes**. Em vez de manter múltiplos arquivos `.docx` desatualizados, este sistema utiliza uma *Single Source of Truth* (`data.js`) capaz de se metamorfosear.

Ao alternar os modos (botões no topo), o currículo se reescreve em tempo real:

-   **Lente Geral:** Visão balanceada de Arquiteto/Engenheiro.
-   **Lente Full Stack:** Aprofunda-se em *Arquitetura, Criptografia, Design Patterns e Performance*.
-   **Lente QA:** Reescreve os mesmos projetos focando em *Prevenção de Bugs, Regras de Negócio e Cobertura de Testes*.
-   **Lente Automação:** Destaca a *Orquestração e Eficiência Operacional*.

Não é apenas um filtro; é uma **re-contextualização semântica** das mesmas experiências.

## 🛠️ Excelência Técnica (Under the Hood)

A qualidade do código reflete a qualidade do profissional. Este projeto segue rigorosos padrões de indústria:

-   **Clean Architecture (Dados vs UI):** Separação estrita entre a lógica de apresentação e os dados do currículo.
-   **Code Quality (PEP-8 Style):** Configuração draconiana de **ESLint (v9 Flat Config)** e **Prettier** para garantir zero warning e formatação consistente.
-   **Print-Perfect CSS:** Algoritmos de estilização (`break-inside-avoid`, layouts diferenciados para `@media print`) garantem que a versão PDF gerada pelo navegador seja tipograficamente perfeita, sem cortes de texto entre páginas A4.
-   **Performance:** Build otimizado via Vite, sem imports desnecessários (`React` in scope) e assets leves.

## 🚀 Como Executar

Para ver a mágica acontecer localmente:

```bash
# Clone o repositório
git clone https://github.com/stuartfsi05/Meu-Curriculo.git

# Instale as dependências (Rápido e limpo)
npm install

# Inicie o motor
npm run dev
```

## ✅ Verificação de Qualidade

Para garantir que o código continua "impecável":

```bash
# Verifique a saúde do código (Linting)
npm run lint

# Padronize a formatação
npm run format
```

---
_Engineered by **Thiago Dias Precivalli**_
