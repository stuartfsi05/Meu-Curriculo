import React from 'react';
import { Terminal } from 'lucide-react';
import Section from './Section';

export default function Projects({ projects }) {
    return (
        <Section title="Projetos de Desenvolvimento" icon={Terminal}>
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <div key={index} className="break-inside-avoid">
                        <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-lg font-bold text-slate-800">{project.title}</h3>
                            <span className="text-sm text-slate-500 font-medium">{project.date}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.map((t, i) => (
                                <span key={i}
                                    className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200 font-semibold">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <p className="text-slate-700 italic mb-2">{project.description}</p>
                        <div className="bg-slate-50 rounded-r border-l-[3px] border-slate-300 py-3 pl-4 pr-3">
                            <ul className="list-disc list-outside text-sm text-slate-700 space-y-1.5 ml-4 marker:text-slate-400">
                                {project.points.map((point, idx) => (
                                    <li key={idx} className="text-left leading-snug">{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
