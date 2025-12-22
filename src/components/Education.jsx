
import { BookOpen } from 'lucide-react'
import Section from './Section'

export default function Education({ education }) {
  return (
    <div className="space-y-8">
      <Section title="Educação" icon={BookOpen}>
        {education.map((edu, index) => (
          <div key={index} className="mb-6 last:mb-0 break-inside-avoid">
            <div className="mb-3">
              <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">
                {edu.degree}
              </h3>
              <div className="text-sm text-slate-600 font-semibold">
                {edu.school}
              </div>
              <div className="text-sm text-slate-500 italic mt-1">
                {edu.date}
              </div>
            </div>

            {edu.details && (
              <div className="space-y-2.5">
                {edu.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-slate-700 bg-slate-50 border-l-[3px] border-slate-300 pl-4 py-2 pr-2 rounded-r"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </Section>
    </div>
  )
}
