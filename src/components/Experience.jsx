import React from 'react';
import { Briefcase } from 'lucide-react';
import Section from './Section';

export default function Experience({ jobs }) {
    return (
        <Section title="Experiência Profissional" icon={Briefcase}>
            <div className="space-y-4">
                {jobs.map((job, index) => (
                    <div key={index} className="break-inside-avoid mb-6 last:mb-0">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1 sm:gap-4 mb-2">
                            <div>
                                <h3 className="font-bold text-slate-800 text-lg leading-tight">{job.role}</h3>
                                <div className="text-sm font-semibold text-slate-600 mt-0.5">
                                    {job.company} — {job.location}
                                </div>
                            </div>
                            <span className="text-sm text-slate-500 whitespace-nowrap italic flex-shrink-0">{job.date}</span>
                        </div>

                        <div className="bg-slate-50 rounded-r border-l-[3px] border-slate-300 py-3 pl-4 pr-3">
                            <ul className="list-disc list-outside text-sm text-slate-700 space-y-1.5 ml-4 marker:text-slate-400">
                                {job.points.map((point, idx) => (
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
