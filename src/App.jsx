import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, ExternalLink, Download, Code2, 
  Database, Wrench, Layout, Sparkles, Moon, Sun, ArrowUp,
  GraduationCap, Briefcase, Globe, ChevronRight, CheckCircle2,
  MapPin, Menu, X
} from 'lucide-react';

// Custom SVG Component for GitHub Icon
const Github = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom SVG Component for Instagram Icon
const Instagram = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1c1d1f] text-[#e1e2e5] font-sans antialiased selection:bg-[#f3ad38] selection:text-black">
      
      {/* Top Floating Bar / Header */}
      <header className="fixed top-5 inset-x-0 max-w-7xl mx-auto z-50 px-4 flex items-center justify-between gap-3">
        
        {/* Profile Pill */}
        <div className="flex items-center gap-3 bg-[#121315]/90 border border-[#2c2d30] px-3 py-2 rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="w-10 h-10 rounded-xl bg-[#f3ad38] text-black font-extrabold flex items-center justify-center text-sm tracking-wider">
            SF
          </div>
          <div className="hidden sm:block pr-2">
            <h1 className="text-xs font-bold tracking-wider text-white uppercase">FASRAOUI SARA</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">DEVELOPER</p>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden lg:flex items-center bg-[#121315]/90 border border-[#2c2d30] p-1.5 rounded-2xl shadow-2xl backdrop-blur-md gap-1 text-xs uppercase tracking-wider font-semibold text-slate-400">
          {[
            { id: 'about', label: 'ABOUT' },
            { id: 'skills', label: 'SKILLS' },
            { id: 'projects', label: 'WORK' },
            { id: 'education', label: 'EDUCATION' },
            { id: 'experience', label: 'EXPERIENCE' },
            { id: 'contact', label: 'CONTACT' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-[#f3ad38] text-black font-bold shadow-md' 
                  : 'hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Tools & Socials */}
        <div className="flex items-center gap-2">
          {/* Social Icons Bar */}
          <div className="hidden md:flex items-center gap-3 bg-[#121315]/90 border border-[#2c2d30] px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-md text-slate-300">
            <a href="https://github.com/sarafasra" target="_blank" rel="noreferrer" className="hover:text-[#f3ad38] transition-colors"><Github /></a>
            <a href="mailto:sarafasraoui75@gmail.com" className="hover:text-[#f3ad38] transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="tel:+212639118333" className="hover:text-[#f3ad38] transition-colors"><Phone className="w-4 h-4" /></a>
          </div>

          {/* Let's Talk CTA */}
          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-2 bg-[#121315]/90 border border-[#2c2d30] hover:border-[#f3ad38] px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white hover:text-[#f3ad38] transition-all shadow-2xl backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f3ad38]" /> LET'S TALK
          </a>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 bg-[#f3ad38] text-black rounded-2xl font-bold shadow-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#121315]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 text-lg font-bold uppercase tracking-widest lg:hidden">
          {['about', 'skills', 'projects', 'education', 'experience', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f3ad38] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pt-36 pb-20 space-y-28">
        
        {/* Hero Section */}
        <section id="about" className="space-y-8 pt-6">
          
          {/* Status Badge & Location */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-slate-400">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102a20] text-[#22c55e] border border-[#1b4332]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
              OPEN TO NEW OPPORTUNITIES
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#f3ad38]" /> MOROCCO | UTC+1
            </span>
          </div>

        {/* Headline Typography Style */}
<h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal leading-[1.1] tracking-tight max-w-5xl">
  Building modern <br />
  web solutions <span className="text-slate-400 font-sans italic font-light">with</span> <br />
  <span className="text-[#f3ad38] italic font-serif">precision & purpose.</span>
</h1>

{/* Subheading */}
<p className="text-slate-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
  Hi, I'm <strong className="text-white font-semibold">Fasraoui Sara</strong> — Full-Stack Developer passionate about transforming complex backend architectures and sleek interfaces into high-performing web applications.
</p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-2xl bg-[#f3ad38] text-black font-bold text-sm tracking-wider uppercase hover:bg-[#e09c28] transition-all shadow-lg"
            >
              Get In Touch
            </a>
           <a 
  href="/cv.pdf" 
  download="Fasraoui_Sara_CV.pdf"
  className="px-8 py-3.5 rounded-2xl bg-[#121315] border border-[#2c2d30] hover:border-[#f3ad38] text-white font-medium text-sm tracking-wider uppercase transition-all flex items-center gap-2"
>
  <Download className="w-4 h-4 text-[#f3ad38]" /> Resume
</a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-[#2c2d30] pb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono text-[#f3ad38] uppercase tracking-widest">// SKILLS & TECHNOLOGIES</h2>
            <span className="text-xs text-slate-500 font-mono">01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#121315] border border-[#2c2d30] p-6 rounded-3xl space-y-4">
              <Layout className="w-6 h-6 text-[#f3ad38]" />
              <h3 className="font-bold text-lg text-white">Frontend</h3>
              <p className="text-xs text-slate-400">HTML5, CSS3, JavaScript ES6+, React, Tailwind CSS</p>
            </div>

            <div className="bg-[#121315] border border-[#2c2d30] p-6 rounded-3xl space-y-4">
              <Code2 className="w-6 h-6 text-[#f3ad38]" />
              <h3 className="font-bold text-lg text-white">Backend</h3>
              <p className="text-xs text-slate-400">PHP 8, Laravel Framework, MVC Architecture, REST APIs</p>
            </div>

            <div className="bg-[#121315] border border-[#2c2d30] p-6 rounded-3xl space-y-4">
              <Database className="w-6 h-6 text-[#f3ad38]" />
              <h3 className="font-bold text-lg text-white">Databases & Tools</h3>
              <p className="text-xs text-slate-400">MySQL, MongoDB, Git, GitHub, VS Code, Figma, XAMPP</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="border-b border-[#2c2d30] pb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono text-[#f3ad38] uppercase tracking-widest">// FEATURED WORK</h2>
            <span className="text-xs text-slate-500 font-mono">02</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="bg-[#121315] border border-[#2c2d30] hover:border-[#f3ad38]/50 transition-all p-8 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#f3ad38] bg-[#f3ad38]/10 px-2.5 py-1 rounded-lg">PHP / MySQL</span>
                  <a href="https://github.com/sarafasra/School-Managementsq" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><Github /></a>
                </div>
                <h3 className="text-2xl font-bold text-white">School Management</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Conception d'une plateforme de gestion scolaire avec une base de données relationnelle normalisée et modélisation ERD.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span>PHP</span> • <span>MySQL</span> • <span>GitHub</span> • <span>Lucidchart</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#121315] border border-[#2c2d30] hover:border-[#f3ad38]/50 transition-all p-8 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#f3ad38] bg-[#f3ad38]/10 px-2.5 py-1 rounded-lg">React App</span>
                  <a href="https://github.com/sarafasra/ArenaSync-" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><Github /></a>
                </div>
                <h3 className="text-2xl font-bold text-white">ArenaSync</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Application React de gestion de tournois sportifs avec génération dynamique des composants, filtrage des sports et affichage des statuts.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span>React</span> • <span>Tailwind CSS</span> • <span>JavaScript</span>
              </div>
            </div>

          </div>
        </section>

        {/* Education & Experience */}
        <section id="education" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div className="space-y-6">
            <div className="border-b border-[#2c2d30] pb-4 flex items-center justify-between">
              <h2 className="text-xs font-mono text-[#f3ad38] uppercase tracking-widest">// EDUCATION</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-[#121315] border border-[#2c2d30] p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-[#f3ad38]">2026</span>
                <h3 className="font-bold text-white">Formation Développement Full Stack</h3>
                <p className="text-xs text-slate-400">École Numérique Ahmed El Hansali</p>
              </div>
              <div className="bg-[#121315] border border-[#2c2d30] p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-[#f3ad38]">2023 - 2025</span>
                <h3 className="font-bold text-white">Technicien Spécialisé Développement Digital (Option Full Stack)</h3>
                <p className="text-xs text-slate-400">ISTA Oued Zem</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-6" id="experience">
            <div className="border-b border-[#2c2d30] pb-4 flex items-center justify-between">
              <h2 className="text-xs font-mono text-[#f3ad38] uppercase tracking-widest">// LANGUAGES</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#121315] border border-[#2c2d30] p-5 rounded-2xl text-center space-y-1">
                <span className="text-xl">🇲🇦</span>
                <h4 className="text-sm font-bold text-white">Arabe</h4>
                <p className="text-xs text-slate-500 font-mono">Natif</p>
              </div>
              <div className="bg-[#121315] border border-[#2c2d30] p-5 rounded-2xl text-center space-y-1">
                <span className="text-xl">🇫🇷</span>
                <h4 className="text-sm font-bold text-white">Français</h4>
                <p className="text-xs text-slate-500 font-mono">Intermédiaire</p>
              </div>
              <div className="bg-[#121315] border border-[#2c2d30] p-5 rounded-2xl text-center space-y-1">
                <span className="text-xl">🇬🇧</span>
                <h4 className="text-sm font-bold text-white">Anglais</h4>
                <p className="text-xs text-slate-500 font-mono">Intermédiaire</p>
              </div>
            </div>
          </div>

        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-[#121315] border border-[#2c2d30] p-8 md:p-12 rounded-3xl text-center space-y-6">
          <h2 className="text-3xl font-serif text-white">Let's work together.</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Got a project in mind or an job opportunity? Feel free to reach out directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href="mailto:sarafasraoui75@gmail.com" 
              className="px-6 py-3 rounded-xl bg-[#f3ad38] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> sarafasraoui75@gmail.com
            </a>
            <a 
              href="tel:+212639118333" 
              className="px-6 py-3 rounded-xl bg-[#1c1d1f] border border-[#2c2d30] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#f3ad38]" /> +212 639118333
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#2c2d30] py-8 text-center text-xs text-slate-500 font-mono">
        © 2026 FASRAOUI SARA — BUILT WITH REACT & TAILWIND CSS
      </footer>

    </div>
  );
}