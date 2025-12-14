import React from 'react';
import { BookMarked } from 'lucide-react';
import Section from './Section';

export default function Publications({ publications }) {
    return (
        <Section title="Publicações & Autoria" icon={BookMarked}>
            <div className="space-y-6">
                {publications.map((pub, index) => (
                    <div key={index}
                        className="bg-slate-50 pl-4 py-3 pr-3 rounded-r border-l-[3px] border-slate-300 break-inside-avoid">
                        <div className="flex flex-col md:flex-row print:flex-row justify-between md:items-baseline print:items-baseline mb-2">
                            <h3 className="text-lg font-bold text-slate-800">{pub.title}</h3>
                            <span className="text-sm text-slate-500 font-medium">{pub.type} • {pub.year}</span>
                        </div>
                        <p className="text-slate-700 italic font-medium mb-2">{pub.subtitle}</p>
                        <p className="text-sm text-slate-700 mb-2 text-justify">{pub.description}</p>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-0.5 ml-1">
                            {pub.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
