
import { Globe } from 'lucide-react'
import Section from './Section'

export default function Summary({ text }) {
  return (
    <Section title="Resumo Profissional" icon={Globe}>
      <p className="text-slate-700 leading-relaxed text-justify">{text}</p>
    </Section>
  )
}
