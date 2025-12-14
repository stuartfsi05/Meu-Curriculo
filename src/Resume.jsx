import React from 'react';
import { Printer } from 'lucide-react';
import { resumeData } from './data';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';

export default function Resume() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white font-sans text-slate-800">

            {/* Botão de Impressão (Invisível no PDF) */}
            <div className="max-w-4xl mx-auto mb-6 flex justify-end print:hidden">
                <button onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-700 transition-colors shadow-sm">
                    <Printer size={18} />
                    Salvar como PDF
                </button>
            </div>

            {/* Container Principal A4 */}
            <div className="max-w-4xl mx-auto bg-white shadow-xl sm:rounded-lg overflow-hidden print:shadow-none print:w-full print:max-w-none">

                <Header data={resumeData.header} />

                <div className="p-8 print:p-6 space-y-6">

                    <Summary text={resumeData.summary} />
                    <Skills data={resumeData.skills} />
                    <Publications publications={resumeData.publications} />
                    <Projects projects={resumeData.projects} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3">
                        <div className="md:col-span-2 print:col-span-2 space-y-6">
                            <Experience jobs={resumeData.experience} />
                        </div>

                        <div className="md:col-span-1 print:col-span-1 space-y-6">
                            <Education education={resumeData.education} />
                        </div>
                    </div>

                    <Certifications certifications={resumeData.certifications} />

                </div>
            </div>

            <div className="text-center mt-8 text-slate-400 text-sm print:hidden">
                <p>Desenvolvido em React & Tailwind CSS</p>
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