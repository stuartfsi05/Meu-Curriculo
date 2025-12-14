import React from 'react';
import { Code2 } from 'lucide-react';
import Section from './Section';

function SkillGroup({ title, skills }) {
    return (
        <div className="bg-slate-50 pl-4 py-3 pr-3 rounded-r border-l-[3px] border-slate-300 break-inside-avoid">
            <h3 className="font-bold text-slate-700 text-base mb-2">{title}</h3>
            <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, idx) => (
                    <span key={idx}
                        className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200 font-semibold">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Skills({ data }) {
    return (
        <Section title="Competências" icon={Code2}>
            <div className="space-y-3">
                <SkillGroup title="Engenharia de Agentes & RPA" skills={data.ai_rpa} />
                <SkillGroup title="Tech Core & Fundamentos" skills={data.tech_core} />
                <SkillGroup title="Ferramentas & Ambiente" skills={data.ferramentas} />
            </div>
        </Section>
    );
}
