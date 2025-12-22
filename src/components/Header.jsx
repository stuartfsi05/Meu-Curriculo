
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react'

export default function Header({ data }) {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 print:p-6 print:mb-4">
      <div className="flex flex-col md:flex-row print:flex-row justify-between items-start md:items-center print:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight uppercase">
            {data.name}
          </h1>
          <p className="text-slate-300 text-lg mt-2 font-medium">{data.role}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin size={16} /> {data.location}
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} /> {data.phone}
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> {data.email}
          </div>

          <div className="flex flex-col gap-1 mt-1">
            <a
              href={`https://${data.linkedinUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
            >
              <Linkedin
                size={16}
                className="text-white group-hover:scale-110 transition-transform"
              />
              <span className="font-semibold text-xs sm:text-sm">
                {data.linkedinUrl || data.linkedin}
              </span>
            </a>
            <a
              href={`https://${data.githubUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
            >
              <Github
                size={16}
                className="text-white group-hover:scale-110 transition-transform"
              />
              <span className="font-semibold text-xs sm:text-sm">
                {data.githubUrl || data.github}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
