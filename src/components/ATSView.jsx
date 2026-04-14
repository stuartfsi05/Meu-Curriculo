const SKILL_TITLES = {
  idiomas: 'Idiomas',
  qa_core: 'QA & Testes',
  ai_rpa: 'IA & Automação',
  tech_core: 'Desenvolvimento',
  ferramentas: 'Ferramentas & Metodologias',
}

/**
 * ATSView — Renderização ATS-friendly do currículo.
 *
 * Sem ícones SVG, sem badges/chips, sem gradientes, sem grid.
 * Coluna única, texto puro, headings canônicos para regex de ATS.
 * Projetado para máxima taxa de ingestão por Gupy, Workday, Greenhouse e Lever.
 */
export default function ATSView({ data }) {
  return (
    <div className="p-8 print:p-6 bg-white text-black font-sans text-sm leading-normal">
      {/* ===== HEADER — Texto puro, centralizado, sem gradiente ===== */}
      <div className="text-center mb-5 pb-3 border-b-2 border-black">
        <h1 className="text-2xl font-bold uppercase tracking-wide">
          {data.header.name}
        </h1>
        <p className="text-base font-medium mt-1">{data.header.role}</p>
        <p className="mt-2">
          {data.header.location} &bull; {data.header.phone} &bull;{' '}
          {data.header.email}
        </p>
        <p>
          {data.header.linkedinUrl} &bull; {data.header.githubUrl}
          {data.header.bookUrl && ` • ${data.header.bookLabel || 'O Copiloto Inteligente'}`}
        </p>
      </div>

      {/* ===== RESUMO PROFISSIONAL ===== */}
      <section className="mb-4">
        <h2 className="font-bold uppercase tracking-wider border-b-2 border-black pb-1 mb-2">
          Resumo Profissional
        </h2>
        <p className="leading-relaxed">{data.summary}</p>
      </section>

      {/* ===== HABILIDADES TÉCNICAS — Lista inline, sem badges ===== */}
      <section className="mb-4">
        <h2 className="font-bold uppercase tracking-wider border-b-2 border-black pb-1 mb-2">
          Habilidades Técnicas
        </h2>
        {Object.entries(data.skills).map(([key, skills]) =>
          skills ? (
            <p key={key} className="mb-1">
              <span className="font-bold">{SKILL_TITLES[key] || key}: </span>
              {skills.join(', ')}
            </p>
          ) : null
        )}
      </section>

      {/* ===== PROJETOS DE DESENVOLVIMENTO ===== */}
      <section className="mb-4">
        <h2 className="font-bold uppercase tracking-wider border-b-2 border-black pb-1 mb-2">
          Projetos de Desenvolvimento
        </h2>
        {data.projects.map((project, idx) => (
          <div key={idx} className="mb-3 break-inside-avoid">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">{project.title}</h3>
              <span>{project.date}</span>
            </div>
            <p className="italic text-gray-700">
              Tecnologias: {project.tech.join(', ')}
            </p>
            <ul className="list-disc ml-5 mt-1 space-y-0.5">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ===== EXPERIÊNCIA PROFISSIONAL ===== */}
      <section className="mb-4">
        <h2 className="font-bold uppercase tracking-wider border-b-2 border-black pb-1 mb-2">
          Experiência Profissional
        </h2>
        {data.experience.map((job, idx) => (
          <div key={idx} className="mb-3 break-inside-avoid">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">{job.role}</h3>
              <span>{job.date}</span>
            </div>
            <p>
              {job.company} — {job.location}
            </p>
            <ul className="list-disc ml-5 mt-1 space-y-0.5">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ===== EDUCAÇÃO ===== */}
      <section className="mb-4">
        <h2 className="font-bold uppercase tracking-wider border-b-2 border-black pb-1 mb-2">
          Educação
        </h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-2 break-inside-avoid">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">{edu.degree}</h3>
              <span>{edu.date}</span>
            </div>
            <p>
              {edu.school} — {edu.location}
            </p>
            {edu.details?.map((detail, i) => (
              <p key={i} className="ml-4">
                • {detail}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* ===== CERTIFICADOS ===== */}
      <section>
        <h2 className="font-bold uppercase tracking-wider border-b-2 border-black pb-1 mb-2">
          Certificados
        </h2>
        <ul className="list-disc ml-5 space-y-0.5">
          {data.certifications.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
