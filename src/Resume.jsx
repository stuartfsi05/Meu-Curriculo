import React, { useState, useMemo, useEffect } from 'react';
import { Printer, RefreshCw, Cpu, Layers, LayoutTemplate, Bug } from 'lucide-react';
import { resumeData, resumeModes } from './data';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';

export default function Resume() {
    // Inicializa estado lendo do localStorage ou usa 'general' como default
    const [currentModeId, setCurrentModeId] = useState(() => {
        const savedMode = localStorage.getItem('resumeMode');
        return resumeModes[savedMode] ? savedMode : 'general';
    });

    const currentMode = resumeModes[currentModeId];

    // Persistência e Título da Página (Nome do Arquivo PDF)
    useEffect(() => {
        localStorage.setItem('resumeMode', currentModeId);

        const modeLabel = currentMode.label.replace(/[^a-zA-Z0-9]/g, '_'); // Sanitiza para nome de arquivo
        document.title = `Curriculo_Thiago_Precivalli_${modeLabel}`;
    }, [currentModeId, currentMode]);

    // Computa os dados baseados no modo selecionado
    const filteredData = useMemo(() => {
        const mode = resumeModes[currentModeId];

        // Clona, reordena e aplica "lente" aos projetos
        const orderedProjects = [...resumeData.projects]
            .sort((a, b) => {
                const indexA = mode.projectIds.indexOf(a.id);
                const indexB = mode.projectIds.indexOf(b.id);
                return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
            })
            .map(project => {
                // Tenta encontrar override para o modo atual
                const modeOverride = project.modes?.[currentModeId];
                if (modeOverride) {
                    return {
                        ...project,
                        description: modeOverride.description,
                        points: modeOverride.points
                    };
                }
                return project; // Retorna original se não houver override
            });

        // Reordena as Skills
        const orderedSkills = {};
        mode.skillKeys.forEach(key => {
            if (resumeData.skills[key]) {
                orderedSkills[key] = resumeData.skills[key];
            }
        });

        return {
            ...resumeData,
            header: {
                ...resumeData.header,
                role: mode.roleOverride || resumeData.header.role
            },
            summary: resumeData.summaries[mode.summaryKey],
            projects: orderedProjects,
            skills: orderedSkills
        };
    }, [currentModeId]);

    const handlePrint = () => {
        window.print();
    };

    // Ícones para os modos
    const getModeIcon = (id) => {
        switch (id) {
            case 'general': return <LayoutTemplate size={16} />;
            case 'fullstack': return <Layers size={16} />;
            case 'automation': return <Cpu size={16} />;
            case 'qa': return <Bug size={16} />;
            default: return <RefreshCw size={16} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white font-sans text-slate-800">

            {/* Controls Bar (Invisível na Impressão) */}
            <div className="max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden">

                {/* Mode Switcher */}
                <div className="flex bg-white p-1 rounded-lg shadow-sm border border-slate-200">
                    {Object.values(resumeModes).map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => setCurrentModeId(mode.id)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${currentModeId === mode.id
                                ? 'bg-slate-800 text-white shadow-sm'
                                : 'text-slate-600 hover:bg-slate-100'
                                }`}
                        >
                            {getModeIcon(mode.id)}
                            <span className="hidden sm:inline">{mode.label}</span>
                            <span className="sm:hidden">{mode.label.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>

                {/* Print Button */}
                <button onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm font-medium">
                    <Printer size={18} />
                    Salvar PDF ({currentMode.label})
                </button>
            </div>

            {/* Container Principal A4 */}
            <div className={`max-w-4xl mx-auto bg-white shadow-xl sm:rounded-lg overflow-hidden print:shadow-none print:w-full print:max-w-none transition-all duration-300 ease-in-out`}>

                <Header data={filteredData.header} />

                <div className="p-8 print:p-6 space-y-6">

                    <Summary text={filteredData.summary} />
                    <Skills data={filteredData.skills} />
                    <Publications publications={filteredData.publications} />
                    <Projects projects={filteredData.projects} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3">
                        <div className="md:col-span-2 print:col-span-2 space-y-6">
                            <Experience jobs={filteredData.experience} />
                        </div>

                        <div className="md:col-span-1 print:col-span-1 space-y-6">
                            <Education education={filteredData.education} />
                        </div>
                    </div>

                    <Certifications certifications={filteredData.certifications} />

                </div>
            </div>

            <div className="text-center mt-8 text-slate-400 text-sm print:hidden">
                <p>Modo Atual: <span className="font-semibold text-slate-600">{currentMode.label}</span></p>
                <p className="mt-1 text-xs">O PDF gerado corresponderá exatamente ao que você vê na tela.</p>
            </div>

            <style>
                {
                    ` @media print {
            @page {
              margin: 20mm 0;
              size: A4;
            }
            @page :first {
              margin-top: 0;
            }

            body {
              background: white;
            }

            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            .break-inside-avoid {
                break-inside: avoid !important;
                page-break-inside: avoid !important;
            }

            .break-after-avoid {
                break-after: avoid !important;
                page-break-after: avoid !important;
            }
          }
          `
                }
            </style>
        </div>
    );
}
