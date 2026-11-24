import React, { useState } from 'react';
import { 
  Mail, Phone, Download, Code2, 
  Database, Layout, Sparkles,
  MapPin, Menu, X
} from 'lucide-react';

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

const projects = [
  {
    title: 'Gestion des Recrutements',
    badge: 'PHP',
    href: 'https://github.com/sarafasra/Gestion-des-Recrutements-',
    description:
      'Application web de gestion des candidatures et du processus de recrutement avec suivi des profils et organisation des entretiens.',
    stack: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'BeautyLink',
    badge: 'JAVASCRIPT',
    href: 'https://github.com/sarafasra/-BeautyLink-',
    description:
      'Plateforme de réservation de services de beauté facilitant la mise en relation entre clientes et professionnelles ainsi que la gestion des rendez-vous.',
    stack: ['JavaScript', 'React', 'Laravel', 'Tailwind CSS'],
  },
  {
    title: 'Plateforme ENAA',
    badge: 'BLADE',
    href: 'https://github.com/sarafasra/Plateforme.ENAA',
    description:
      'Plateforme web dédiée au suivi pédagogique, aux ressources et à la gestion académique des apprenants.',
    stack: ['Laravel Blade', 'PHP', 'MySQL', 'CSS3'],
  },
  {
    title: 'ENAA Leave',
    badge: 'BLADE',
    href: 'https://github.com/sarafasra/ENAA-Leave',
    description:
      'Système de gestion des demandes de congés et d’absences avec validation, suivi des statuts et historique.',
    stack: ['Laravel Blade', 'PHP', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'BDE EVENT',
    badge: 'BLADE',
    href: 'https://github.com/sarafasra/BDE-EVENT',
    description:
      'Application de gestion et de promotion des événements organisés par le Bureau des Élèves avec suivi des participations.',
    stack: ['Laravel Blade', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'BDE Events',
    badge: 'BLADE',
    href: 'https://github.com/sarafasra/BDE-Events',
    description:
      'Module complémentaire dédié à l’organisation des activités étudiantes, publications d’annonces et gestion des programmes.',
    stack: ['Laravel Blade', 'PHP', 'MySQL'],
  },
  {
    title: 'Linkup',
    badge: 'BLADE',
    href: 'https://github.com/sarafasra/Linkup',
    description:
      'Plateforme collaborative et sociale conçue pour connecter les utilisateurs, partager du contenu et interagir facilement.',
    stack: ['Laravel Blade', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Linkup Partie 2',
    badge: 'WEB APP',
    href: 'https://github.com/sarafasra/linkup-partie2-',
    description:
      'Deuxième itération et amélioration des fonctionnalités de la plateforme Linkup avec interface affinée et meilleure expérience utilisateur.',
    stack: ['PHP', 'JavaScript', 'MySQL', 'CSS3'],
  },
  {
    title: 'PharmaFEFO Part 2',
    badge: 'HACK / WEB',
    href: 'https://github.com/sarafasra/PharmaFEFO-Part-2-',
    description:
      'Extension et évolution du système de gestion pharmaceutique FEFO (First Expired, First Out) pour optimiser le contrôle des lots et dates d’expiration.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'REST API'],
  },
  {
    title: 'PharmaFEFO',
    badge: 'PHP',
    href: 'https://github.com/sarafasra/PharmaFEFO',
    description:
      'Application de gestion de stock pharmaceutique basée sur la méthode FEFO avec suivi des péremptions et architecture structurée.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'MVC'],
  },
  {
    title: 'PeerSync',
    badge: 'COLLABORATION',
    href: 'https://github.com/sarafasra/PeerSync-',
    description:
      'Outil collaboratif pensé pour synchroniser le travail entre pairs, organiser les tâches et fluidifier le suivi de projet.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
  },
  {
    title: 'LibCore',
    badge: 'PHP',
    href: 'https://github.com/sarafasra/LibCore',
    description:
      'Bibliothèque et base de composants réutilisables en PHP pour structurer et accélérer le développement d’applications web.',
    stack: ['PHP', 'OOP', 'MySQL', 'Git'],
  },
  {
    title: 'Système d’Authentification',
    badge: 'PHP',
    href: 'https://github.com/sarafasra/Syst-me-d-Authentification',
    description:
      'Module complet d’inscription, connexion et gestion de sessions sécurisées avec contrôle d’accès utilisateur.',
    stack: ['PHP', 'MySQL', 'Sessions', 'HTML5'],
  },
  {
    title: 'School Management',
    badge: 'DATABASE & WEB',
    href: 'https://github.com/sarafasra/School-Managementsq',
    description:
      'Conception d’une plateforme de gestion scolaire avec base de données relationnelle structurée, gestion des classes, élèves et suivi.',
    stack: ['PHP', 'MySQL', 'ERD', 'SQL'],
  },
  {
    title: 'EduSyncbd',
    badge: 'DATABASE & WEB',
    href: 'https://github.com/sarafasra/EduSyncbd',
    description:
      'Projet orienté modélisation et gestion de base de données éducative pour centraliser et organiser les informations académiques.',
    stack: ['SQL', 'MySQL', 'Database Design'],
  },
  {
    title: 'GameVault',
    badge: 'CSS',
    href: 'https://github.com/sarafasra/GameVault',
    description:
      'Interface visuelle dédiée à l’univers du jeu vidéo avec mise en page soignée, cartes de présentation et animations CSS.',
    stack: ['CSS3', 'HTML5', 'UI Design'],
  },
  {
    title: 'Productivité Modulaire',
    badge: 'HTML',
    href: 'https://github.com/sarafasra/-Productivit-Modulaire',
    description:
      'Interface modulaire axée sur l’organisation personnelle et la productivité quotidienne avec blocs fonctionnels clairs.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Blog Voyage',
    badge: 'HTML',
    href: 'https://github.com/sarafasra/bloge-voyage',
    description:
      'Site éditorial et blog dédié aux récits de voyage, destinations et découvertes avec mise en page responsive.',
    stack: ['HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Projet Touristique',
    badge: 'HTML',
    href: 'https://github.com/sarafasra/projet-touristique',
    description:
      'Vitrine web touristique présentant des circuits, lieux d’intérêt et expériences de découverte.',
    stack: ['HTML5', 'CSS3', 'UI Layout'],
  },
  {
    title: 'Parking Intelligent',
    badge: 'HTML',
    href: 'https://github.com/sarafasra/Parking_Intelligent',
    description:
      'Interface de présentation d’un système de gestion et d’orientation de stationnement intelligent.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Météo',
    badge: 'HTML',
    href: 'https://github.com/sarafasra/meteo',
    description:
      'Application météo claire et intuitive permettant de consulter les conditions météorologiques et prévisions.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'API'],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffffff] via-[#fdf4ff] to-[#fdf2f8] text-[#1e1b2e] font-sans antialiased selection:bg-[#d946ef] selection:text-white">
      
      {/* Top Floating Bar / Header */}
      <header className="fixed top-5 inset-x-0 max-w-7xl mx-auto z-50 px-4 flex items-center justify-between gap-3">
        
        {/* Profile Pill */}
        <div className="flex items-center gap-3 bg-white/85 border border-[#f3e8ff] px-3 py-2 rounded-2xl shadow-lg shadow-purple-500/5 backdrop-blur-md">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ec4899] to-[#8b5cf6] text-white font-extrabold flex items-center justify-center text-sm tracking-wider shadow-md shadow-pink-500/25">
            SF
          </div>
          <div className="hidden sm:block pr-2">
            <h1 className="text-xs font-bold tracking-wider text-[#1e1b2e] uppercase">FASRAOUI SARA</h1>
            <p className="text-[10px] text-[#7e6d8f] uppercase tracking-widest font-mono">DEVELOPER</p>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden lg:flex items-center bg-white/85 border border-[#f3e8ff] p-1.5 rounded-2xl shadow-lg shadow-purple-500/5 backdrop-blur-md gap-1 text-xs uppercase tracking-wider font-semibold text-[#6b5b7b]">
          {[
            { id: 'about', label: 'ABOUT' },
            { id: 'skills', label: 'SKILLS' },
            { id: 'projects', label: 'WORK' },
            { id: 'experience', label: 'EXPERIENCE' },
            { id: 'education', label: 'EDUCATION' },
            { id: 'contact', label: 'CONTACT' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white font-bold shadow-md shadow-pink-500/20' 
                  : 'hover:text-[#9333ea] hover:bg-[#faf5ff]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Tools & Socials */}
        <div className="flex items-center gap-2">
          {/* Social Icons Bar */}
          <div className="hidden md:flex items-center gap-3 bg-white/85 border border-[#f3e8ff] px-4 py-2.5 rounded-2xl shadow-lg shadow-purple-500/5 backdrop-blur-md text-[#6b5b7b]">
            <a href="https://github.com/sarafasra" target="_blank" rel="noreferrer" className="hover:text-[#ec4899] transition-colors"><Github /></a>
            <a href="mailto:sarafasraoui75@gmail.com" className="hover:text-[#ec4899] transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="tel:+212639118333" className="hover:text-[#ec4899] transition-colors"><Phone className="w-4 h-4" /></a>
          </div>

          {/* Let's Talk CTA */}
          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] hover:opacity-90 px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-purple-500/25"
          >
            <Sparkles className="w-3.5 h-3.5" /> LET'S TALK
          </a>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white rounded-2xl font-bold shadow-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 text-lg font-bold uppercase tracking-widest text-[#1e1b2e] lg:hidden">
          {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#ec4899] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pt-36 pb-20 space-y-28">
        
        {/* Hero Section (2 Columns: Left Text + Right Glowing Photo Circle) */}
        <section id="about" className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Badge & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#6b5b7b]">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2f8] text-[#db2777] border border-[#fbcfe8] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-ping" />
                OPEN TO NEW OPPORTUNITIES
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" /> MOROCCO | UTC+1
              </span>
            </div>

            {/* Headline Typography Style */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal leading-[1.1] tracking-tight text-[#1e1b2e]">
              Building modern <br />
              web solutions <span className="text-[#8e7d9e] font-sans italic font-light">with</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] via-[#d946ef] to-[#8b5cf6] italic font-serif">precision & purpose.</span>
            </h1>

            {/* Subheading */}
            <p className="text-[#52465e] text-lg md:text-xl max-w-2xl font-normal leading-relaxed">
              Hi, I'm <strong className="text-[#1e1b2e] font-bold">Fasraoui Sara</strong> — Full-Stack Developer passionate about transforming complex backend architectures and sleek interfaces into high-performing web applications.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white font-bold text-sm tracking-wider uppercase hover:opacity-90 transition-all shadow-lg shadow-pink-500/25"
              >
                Get In Touch
              </a>
              <a 
                href="/cv.pdf" 
                download="Fasraoui_Sara_CV.pdf"
                className="px-8 py-3.5 rounded-2xl bg-white border border-[#e9d5ff] hover:border-[#d946ef] text-[#1e1b2e] font-semibold text-sm tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#ec4899]" /> Resume
              </a>
            </div>
          </div>

          {/* Right Column: Glowing Circular Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Soft Pink & Mauve Ambient Glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#f472b6] via-[#e879f9] to-[#a78bfa] opacity-40 blur-2xl group-hover:opacity-60 transition duration-500"></div>
              
              {/* Gradient Ring */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-tr from-[#ec4899] via-[#d946ef] to-[#8b5cf6] shadow-2xl shadow-purple-500/20">
                {/* Inner Circle Container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#fce7f3] to-[#f3e8ff] relative">
                  <img 
                    src="/image.jpg" 
                    alt="Fasraoui Sara" 
                    className="w-full h-full object-cover object-[50%_20%]"
                    onError={(e) => {
                      console.error('Image introuvable:', e.currentTarget.src);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="border-b border-[#f3e8ff] pb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold text-[#c026d3] uppercase tracking-widest">SKILLS & TECHNOLOGIES</h2>
            <span className="text-xs text-[#9c89b0] font-mono">01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 border border-[#f3e8ff] hover:border-[#f0abfc] transition-all p-6 rounded-3xl space-y-4 shadow-lg shadow-purple-500/5">
              <div className="w-11 h-11 rounded-2xl bg-[#fdf2f8] flex items-center justify-center">
                <Layout className="w-5 h-5 text-[#ec4899]" />
              </div>
              <h3 className="font-bold text-lg text-[#1e1b2e]">Frontend</h3>
              <p className="text-xs text-[#6b5b7b] leading-relaxed">HTML5, CSS3, JavaScript ES6+, React, Tailwind CSS</p>
            </div>

            <div className="bg-white/90 border border-[#f3e8ff] hover:border-[#f0abfc] transition-all p-6 rounded-3xl space-y-4 shadow-lg shadow-purple-500/5">
              <div className="w-11 h-11 rounded-2xl bg-[#faf5ff] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[#8b5cf6]" />
              </div>
              <h3 className="font-bold text-lg text-[#1e1b2e]">Backend</h3>
              <p className="text-xs text-[#6b5b7b] leading-relaxed">PHP 8, Laravel Framework, MVC Architecture, REST APIs</p>
            </div>

            <div className="bg-white/90 border border-[#f3e8ff] hover:border-[#f0abfc] transition-all p-6 rounded-3xl space-y-4 shadow-lg shadow-purple-500/5">
              <div className="w-11 h-11 rounded-2xl bg-[#fdf4ff] flex items-center justify-center">
                <Database className="w-5 h-5 text-[#d946ef]" />
              </div>
              <h3 className="font-bold text-lg text-[#1e1b2e]">Databases & Tools</h3>
              <p className="text-xs text-[#6b5b7b] leading-relaxed">MySQL, MongoDB, Git, GitHub, VS Code, Figma, XAMPP</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8">
          <div className="border-b border-[#f3e8ff] pb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold text-[#c026d3] uppercase tracking-widest">FEATURED WORK</h2>
            <span className="text-xs text-[#9c89b0] font-mono">02</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.href}
                className={`bg-white/90 border border-[#f3e8ff] ${
                  index % 2 === 0 ? 'hover:border-[#f472b6]' : 'hover:border-[#c084fc]'
                } transition-all p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-lg shadow-purple-500/5`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${
                        index % 2 === 0
                          ? 'text-[#db2777] bg-[#fdf2f8] border-[#fbcfe8]'
                          : 'text-[#7c3aed] bg-[#faf5ff] border-[#e9d5ff]'
                      }`}
                    >
                      {project.badge}
                    </span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub ${project.title}`}
                      className={`text-[#7e6d8f] ${
                        index % 2 === 0 ? 'hover:text-[#ec4899]' : 'hover:text-[#8b5cf6]'
                      } transition-colors`}
                    >
                      <Github />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e1b2e]">{project.title}</h3>
                  <p className="text-sm text-[#52465e] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8e7d9e]">
                  {project.stack.map((tech, i) => (
                    <React.Fragment key={tech}>
                      {i > 0 && <span>•</span>}
                      <span>{tech}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="border-b border-[#f3e8ff] pb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold text-[#c026d3] uppercase tracking-widest">EXPÉRIENCES PROFESSIONNELLES</h2>
            <span className="text-xs text-[#9c89b0] font-mono">03</span>
          </div>

          <div className="bg-white/90 border border-[#f3e8ff] hover:border-[#f472b6] transition-all p-8 rounded-3xl space-y-5 shadow-lg shadow-purple-500/5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#fdf2f8] pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#db2777] bg-[#fdf2f8] border border-[#fbcfe8] px-3 py-1 rounded-lg">
                  STAGE • DÉVELOPPEMENT WEB
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1e1b2e] mt-3">
                  Stage en Développement Web — Orchid Island State
                </h3>
              </div>
              <span className="text-xs font-mono font-semibold text-[#7c3aed] bg-[#faf5ff] border border-[#e9d5ff] px-3 py-1.5 rounded-xl">
                Expérience récente
              </span>
            </div>

            <ul className="space-y-3 text-sm text-[#52465e] leading-relaxed list-disc pl-5 marker:text-[#ec4899]">
              <li>Amélioration d’une plateforme immobilière et de ses interfaces responsive.</li>
              <li>Optimisation SEO technique : métadonnées, Sitemap et Robots.txt.</li>
              <li>Amélioration des données structurées Schema.org (JSON-LD).</li>
              <li>Optimisation de la visibilité sur les moteurs de recherche et d’IA (SEO &amp; GEO).</li>
            </ul>
          </div>
        </section>

        {/* Education & Languages */}
        <section id="education" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div className="space-y-6">
            <div className="border-b border-[#f3e8ff] pb-4 flex items-center justify-between">
              <h2 className="text-xs font-mono font-bold text-[#c026d3] uppercase tracking-widest">EDUCATION</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/90 border border-[#f3e8ff] p-6 rounded-2xl space-y-2 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#ec4899]">2026</span>
                <h3 className="font-bold text-[#1e1b2e]">Formation Développement Full Stack</h3>
                <p className="text-xs text-[#6b5b7b]">École Numérique Ahmed El Hansali</p>
              </div>
              <div className="bg-white/90 border border-[#f3e8ff] p-6 rounded-2xl space-y-2 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#8b5cf6]">2023 - 2025</span>
                <h3 className="font-bold text-[#1e1b2e]">Technicien Spécialisé Développement Digital (Option Full Stack)</h3>
                <p className="text-xs text-[#6b5b7b]">ISTA Oued Zem</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-6" id="languages">
            <div className="border-b border-[#f3e8ff] pb-4 flex items-center justify-between">
              <h2 className="text-xs font-mono font-bold text-[#c026d3] uppercase tracking-widest">LANGUAGES</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/90 border border-[#f3e8ff] p-5 rounded-2xl text-center space-y-1 shadow-sm">
                <span className="text-xl">🇲🇦</span>
                <h4 className="text-sm font-bold text-[#1e1b2e]">Arabe</h4>
                <p className="text-xs text-[#8e7d9e] font-mono">Natif</p>
              </div>
              <div className="bg-white/90 border border-[#f3e8ff] p-5 rounded-2xl text-center space-y-1 shadow-sm">
                <span className="text-xl">🇫🇷</span>
                <h4 className="text-sm font-bold text-[#1e1b2e]">Français</h4>
                <p className="text-xs text-[#8e7d9e] font-mono">Intermédiaire</p>
              </div>
              <div className="bg-white/90 border border-[#f3e8ff] p-5 rounded-2xl text-center space-y-1 shadow-sm">
                <span className="text-xl">🇬🇧</span>
                <h4 className="text-sm font-bold text-[#1e1b2e]">Anglais</h4>
                <p className="text-xs text-[#8e7d9e] font-mono">Intermédiaire</p>
              </div>
            </div>
          </div>

        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-r from-[#fdf2f8] via-white to-[#faf5ff] border border-[#f3e8ff] p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-xl shadow-purple-500/5">
          <h2 className="text-3xl font-serif text-[#1e1b2e]">Let's work together.</h2>
          <p className="text-sm text-[#52465e] max-w-md mx-auto">
            Got a project in mind or a job opportunity? Feel free to reach out directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href="mailto:sarafasraoui75@gmail.com" 
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md shadow-pink-500/20"
            >
              <Mail className="w-4 h-4" /> sarafasraoui75@gmail.com
            </a>
            <a 
              href="tel:+212639118333" 
              className="px-6 py-3 rounded-xl bg-white border border-[#e9d5ff] hover:border-[#ec4899] text-[#1e1b2e] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#ec4899]" /> +212 639118333
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#f3e8ff] py-8 text-center text-xs text-[#8e7d9e] font-mono">
        © 2026 FASRAOUI SARA — BUILT WITH REACT & TAILWIND CSS
      </footer>

    </div>
  );
} 