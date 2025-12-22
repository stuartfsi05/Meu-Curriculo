
import { Cpu } from 'lucide-react'
import Section from './Section'

export default function Certifications({ certifications }) {
  return (
    <Section title="Certificados" icon={Cpu}>
      <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-3">
        {certifications.map((cert, index) => {
          const hasProvider = cert.includes(':')
          const provider = hasProvider ? cert.split(':')[0] : ''
          const title = hasProvider
            ? cert.split(':').slice(1).join(':').trim()
            : cert

          return (
            <div
              key={index}
              className="bg-slate-50 pl-4 py-3 pr-3 rounded-r border-l-[3px] border-slate-300 break-inside-avoid flex flex-col justify-center"
            >
              {hasProvider && (
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                  {provider}
                </div>
              )}
              <div className="text-sm font-bold text-slate-700 leading-snug">
                {title}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
