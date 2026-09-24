'use client';

import { ArrowUpRight, Github, Globe, Mail, Moon, Phone, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/* ── Translation Dictionary ── */

type Lang = 'es' | 'en';
type Theme = 'light' | 'dark';

const t = {
  es: {
    nav: { home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos', skills: 'Habilidades', experience: 'Trayectoria', referencesContact: 'Referencias & Contacto' },
    header: { subtitle: 'FULLSTACK DEVELOPER · IA' },
    home: {
      headline: 'Construyo soluciones digitales con impacto real.',
      subline: 'Desarrollo full-stack, automatización con n8n e inteligencia artificial aplicada — resolviendo problemas concretos con criterio y disciplina.',
      cta: 'Ver 9 Proyectos ↗',
      metricRole: 'Rol', metricFocus: 'Enfoque', metricBase: 'Ubicación', metricLangs: 'Idiomas',
      terminalCommand: '$ whoami', terminalTitle: 'Terminal Profesional',
      terminalStack: '$ stack', terminalStackVal: 'Full-Stack · n8n · IA',
      terminalLocation: '$ location', terminalLocationVal: 'Floridablanca, CO 🇨🇴',
      terminalAvailability: '$ availability', terminalAvailabilityVal: 'Disponible para trabajar',
      downloadResume: 'Descargar CV',
      navLabel: 'NAVEGACIÓN',
      quickActions: 'Acciones Rápidas',
    },
    about: {
      label: 'FILOSOFÍA & PROPÓSITO', heading: 'Misión y Visión',
      highlights: [
        { title: 'Misión', text: 'Construir soluciones digitales que transformen procesos a través de tecnología, combinando desarrollo web, automatización e IA orientadas a resultados desde el primer día.' },
        { title: 'Visión', text: 'Consolidarme como líder técnico en proyectos con impacto social, dominando arquitecturas escalables, sistemas sostenibles e IA aplicada en los próximos 5 años.' },
        { title: 'Propuesta de Valor', text: 'Combino base técnica fullstack sólida con comunicación C1 en inglés, proactividad y metodologías ágiles Scrum para ejecutar sin necesidad de microgestión.' },
        { title: 'Metodología', text: 'Aprendizaje rápido con propósito, diseño limpio, UX funcional y entregas con altos estándares de calidad técnica.' },
      ],
    },
    projects: { label: 'PORTFOLIO DE PROYECTOS', heading: 'Proyectos Destacados (9)', subline: 'Proyectos de producción, hackathons, automatizaciones de IA y aplicaciones empresariales.', liveDemo: 'Demo en vivo', github: 'GitHub' },
    skills: { label: 'STACK & CAPACIDADES', heading: 'Habilidades Técnicas y Metodologías' },
    experience: { label: 'TRAYECTORIA', heading: 'Experiencia & Formación Académica' },
    testimonials: { label: 'REPUTACIÓN PERCIBIDA', heading: 'Lo que dicen de mi trabajo' },
    contact: { tag: 'HABLEMOS', heading: '¿Listo para construir algo de alto valor?', body: 'Abierto a oportunidades como Fullstack Junior Developer, desafíos de automatización con IA y colaboración en equipos ágiles.', github: 'GitHub', profileRepo: 'Ver Repositorio Perfil' },
    footer: { built: 'Construido con Next.js, Tailwind CSS y Framer Motion.' },
  },
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', skills: 'Skills', experience: 'Career', referencesContact: 'References & Contact' },
    header: { subtitle: 'FULLSTACK DEVELOPER · AI' },
    home: {
      headline: 'I build digital solutions that deliver real impact.',
      subline: 'Full-stack engineering, n8n workflow automation, and applied AI — solving concrete challenges with craft, precision, and discipline.',
      cta: 'View 9 Projects ↗',
      metricRole: 'Role', metricFocus: 'Focus', metricBase: 'Location', metricLangs: 'Languages',
      terminalCommand: '$ whoami', terminalTitle: 'Professional Terminal',
      terminalStack: '$ stack', terminalStackVal: 'Full-Stack · n8n · AI',
      terminalLocation: '$ location', terminalLocationVal: 'Floridablanca, CO 🇨🇴',
      terminalAvailability: '$ availability', terminalAvailabilityVal: 'Open to work',
      downloadResume: 'Download Resume',
      navLabel: 'NAVIGATION',
      quickActions: 'Quick Actions',
    },
    about: {
      label: 'PHILOSOPHY & PURPOSE', heading: 'Mission & Vision',
      highlights: [
        { title: 'Mission', text: 'Build digital solutions that transform operations through technology, combining web engineering, automation, and AI focused on immediate value delivery.' },
        { title: 'Vision', text: 'Establish myself as a technical leader on high-impact social and enterprise projects, mastering scalable architectures, resilient systems, and applied AI over the next 5 years.' },
        { title: 'Value Proposition', text: 'I blend strong technical engineering with C1 English communication, proactive initiative, and Scrum agility to execute independently without micromanagement.' },
        { title: 'Approach', text: 'Purposeful fast learning, clean interface architecture, functional UX, and dependable software shipped to high standards.' },
      ],
    },
    projects: { label: 'PROJECT PORTFOLIO', heading: 'Featured Projects (9)', subline: 'Production systems, hackathons, AI automation pipelines, and enterprise tools.', liveDemo: 'Live Demo', github: 'GitHub' },
    skills: { label: 'STACK & CAPABILITIES', heading: 'Technical Skills & Methodologies' },
    experience: { label: 'CAREER', heading: 'Experience & Academic Training' },
    testimonials: { label: 'PEER REPUTATION', heading: 'What colleagues say about my work' },
    contact: { tag: "LET'S BUILD", heading: 'Ready to build high-value software?', body: "Open to Junior Fullstack Developer positions, AI automation challenges, and collaborative high-performance engineering teams.", github: 'GitHub', profileRepo: 'View Profile Repo' },
    footer: { built: 'Built with Next.js, Tailwind CSS, and Framer Motion.' },
  },
};

/* ── Static Data ── */

const profile = {
  name: 'Juan Diego León Prada',
  shortName: 'Diego León',
  location: 'Floridablanca, Santander, Colombia',
  email: 'diegoleonp09@gmail.com',
  phone: '+57 313 4451805',
  github: 'https://github.com/Alter-09',
  profileRepo: 'https://github.com/Alter-09/alter-09',
  resume: '/resume.txt',
};

const projects = [
  {
    title: 'NeoMetro',
    summary: {
      es: 'Portal de reportes en tiempo real para Metrolínea con clasificación de incidentes por IA, mapas interactivos con Leaflet y automatización n8n Cloud.',
      en: 'Real-time incident reporting portal for Metrolínea with AI severity classification, interactive Leaflet maps, and n8n Cloud automation.',
    },
    tags: ['JavaScript', 'n8n', 'Leaflet', 'AI'],
    demo: 'https://hackaton-eta-three.vercel.app',
    github: 'https://github.com/Alter-09/HackatonNeoMetro',
  },
  {
    title: 'MundoFutbol Bot',
    summary: {
      es: 'Sistema automatizado de gestión de suscripciones para streaming deportivo en Telegram con generación de llaves de licencia y flujos PostgreSQL en n8n.',
      en: 'Automated sports streaming subscription system for Telegram bot with license key generation and PostgreSQL n8n workflows.',
    },
    tags: ['n8n', 'PostgreSQL', 'JavaScript', 'Telegram API'],
    demo: 'https://github.com/Alter-09',
    github: 'https://github.com/Alter-09',
  },
  {
    title: 'SmartCity-Fix',
    summary: {
      es: 'Sistema inteligente de recepción y priorización autónoma de incidentes urbanos mediante análisis de evidencia visual y textual con IA.',
      en: 'Intelligent urban incident management and autonomous routing system analyzing visual and text evidence with AI.',
    },
    tags: ['IA Aplicada', 'Python', 'Automatización', 'Analytics'],
    demo: 'https://github.com/Alter-09/SmartCity-Fix',
    github: 'https://github.com/Alter-09/SmartCity-Fix',
  },
  {
    title: 'RapidExpres',
    summary: {
      es: 'Plataforma de gestión logística y seguimiento de envíos exprés con optimización de rutas y panel de control en tiempo real.',
      en: 'Logistics management and express parcel tracking platform with route optimization and real-time control dashboard.',
    },
    tags: ['JavaScript', 'Logistics', 'Web App'],
    demo: 'https://github.com/Alter-09',
    github: 'https://github.com/Alter-09',
  },
  {
    title: 'SISTEMA_AEROPUERTO',
    summary: {
      es: 'Sistema empresarial Java con arquitectura en capas para administrar vuelos, pilotos, pasajeros y aeropuertos con persistencia JSON.',
      en: 'Layered Java enterprise system for managing flights, pilots, passengers, and airports with clean OOP and JSON persistence.',
    },
    tags: ['Java', 'OOP', 'Maven'],
    demo: 'https://github.com/Alter-09/SISTEMA_AEROPUERTO',
    github: 'https://github.com/Alter-09/SISTEMA_AEROPUERTO',
  },
  {
    title: 'AMB-exam',
    summary: {
      es: 'Motor de evaluaciones y exámenes técnicos para verificación de competencias con seguimiento de resultados y análisis de desempeño.',
      en: 'Technical assessment and exam engine for competency verification with result tracking and performance analytics.',
    },
    tags: ['JavaScript', 'Assessment', 'Education'],
    demo: 'https://github.com/Alter-09',
    github: 'https://github.com/Alter-09',
  },
  {
    title: 'MetaNav',
    summary: {
      es: 'Organizador de tareas y enfoque diario con diseño neubrutalista, módulos de kanban, reflexión y seguimiento de hábitos.',
      en: 'Daily task and focus organizer with neubrutalist design, kanban modules, daily reflection, and habit tracking.',
    },
    tags: ['CSS', 'JavaScript', 'Productivity'],
    demo: 'https://meta-nav.vercel.app',
    github: 'https://github.com/Alter-09/MetaNav',
  },
  {
    title: 'MusicStream',
    summary: {
      es: 'Simulación de plataforma de streaming musical interactiva con catálogo de compra de álbumes y sencillos.',
      en: 'Interactive music streaming platform simulation featuring album catalog and single track purchase workflows.',
    },
    tags: ['HTML5', 'CSS', 'JavaScript'],
    demo: 'https://github.com/Alter-09',
    github: 'https://github.com/Alter-09',
  },
  {
    title: 'EduSprint',
    summary: {
      es: 'Planeación y arquitectura ágil de aplicación colaborativa para optimización de flujos Scrum y trabajo en equipo.',
      en: 'Agile planning and collaborative architecture blueprint for Scrum workflows and sprint management.',
    },
    tags: ['Scrum', 'Agile', 'Planning'],
    demo: 'https://github.com/Alter-09',
    github: 'https://github.com/Alter-09',
  },
];

const skills = [
  { category: 'Full Stack & Lenguajes', items: ['Python', 'JavaScript', 'HTML5', 'CSS', 'TypeScript', 'MySQL', 'PostgreSQL'] },
  { category: 'Automatización & IA', items: ['N8N', 'Procesos con IA', 'Vector Spaces', 'Embeddings', 'Flujos de IA'] },
  { category: 'Herramientas & Infra', items: ['Docker', 'Docker Desktop', 'DBeaver', 'Git', 'GitHub', 'VS Code'] },
  { category: 'Metodologías & Blandas', items: ['Scrum / Agile', 'Inglés C1', 'Proactividad', 'Trabajo en Equipo', 'Aprendizaje Rápido'] },
];

const experience = [
  {
    role: { es: 'Desarrollador de Software', en: 'Software Developer' },
    company: 'MySQL / Engineering Projects',
    date: { es: 'Actual', en: 'Current' },
    impact: {
      es: 'Desarrollo de software y soluciones técnicas prácticas, combinando bases de datos relacionales, backend y flujos asistidos por IA.',
      en: 'Developing software and practical engineering solutions, combining relational databases, backend services, and AI-assisted workflows.',
    },
  },
  {
    role: { es: 'Desarrollador en Etapa Formativa', en: 'Developer (Formative Stage)' },
    company: 'Globant',
    date: { es: '2026 — Presente', en: '2026 — Present' },
    impact: {
      es: 'Vinculado en etapa formativa profundizando en estándares profesionales de la industria, arquitecturas modernas y proyección hacia ingeniería de sistemas.',
      en: 'Enrolled in professional formative training deepening modern industry standards, scalable architectures, and systems engineering.',
    },
  },
  {
    role: { es: 'Técnico en Desarrollo de Software con IA', en: 'Software & AI Developer Graduate' },
    company: 'Campuslands',
    date: { es: '2025 — 2026', en: '2025 — 2026' },
    impact: {
      es: 'Formación intensiva basada en proyectos reales de desarrollo web, automatización con n8n, bases de datos PostgreSQL/MySQL y trabajo colaborativo con Scrum.',
      en: 'Intensive real-project based training covering web development, n8n automation, PostgreSQL/MySQL databases, and agile Scrum collaboration.',
    },
  },
  {
    role: { es: 'Técnico Académico en Inglés C1', en: 'Academic English C1' },
    company: 'Praxis English Institute',
    date: { es: '2025', en: '2025' },
    impact: {
      es: 'Certificación de competencia lingüística C1 para documentación técnica internacional y comunicación fluida en equipos multiculturales.',
      en: 'C1 language certification enabling technical documentation mastery and fluent cross-border team communication.',
    },
  },
];

const testimonials = [
  {
    quote: 'Su compromiso y puntualidad elevan el nivel de cualquier equipo. Siempre entrega con calidad. Es alguien en quien se puede confiar a ciegas.',
    quoteEn: 'His commitment and punctuality elevate the level of any team. He always delivers quality. Someone you can blindly trust.',
    author: 'Sebastián Ayala',
    role: 'Compañero de proyecto académico · Campuslands',
  },
  {
    quote: 'Tiene una gran capacidad para entender el problema rápido y proponer soluciones concretas. Es sólido.',
    quoteEn: 'He has great ability to grasp problems quickly and propose concrete solutions. He is solid.',
    author: 'Santiago Sarmiento',
    role: 'Compañero de Hackathon y MundoFutbol Bot',
  },
];

const navIds = ['home', 'about', 'projects', 'skills', 'experience', 'references-contact'];

/* ── Page ── */

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('es');
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const tx = t[lang];
  const isDark = theme === 'dark';

  /* Hydrate lang & theme from localStorage / system preference */
  useEffect(() => {
    const storedLang = localStorage.getItem('portfolio-lang') as Lang | null;
    if (storedLang === 'es' || storedLang === 'en') setLang(storedLang);

    const storedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  const switchLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('portfolio-lang', l);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  /* IntersectionObserver Scrollspy */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { id: 'home', label: tx.nav.home, num: '01' },
    { id: 'about', label: tx.nav.about, num: '02' },
    { id: 'projects', label: tx.nav.projects, num: '03' },
    { id: 'skills', label: tx.nav.skills, num: '04' },
    { id: 'experience', label: tx.nav.experience, num: '05' },
    { id: 'references-contact', label: tx.nav.referencesContact, num: '06' },
  ];

  /* Dynamic Theme Classes */
  const cardBg = isDark ? 'bg-[#1c1b18] border-[#383530] text-cream' : 'bg-cream border-ink text-ink';
  const headingColor = isDark ? 'text-cream' : 'text-ink';
  const subtitleColor = isDark ? 'text-[#a8a29e]' : 'text-[#625d56]';
  const tagBg = isDark ? 'bg-[#282723] text-cream border-[#383530]' : 'bg-paper text-ink border-ink';
  const canvasBg = isDark ? 'bg-[#121211] dot-grid-dark' : 'bg-paper dot-grid';

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-ink' : 'bg-ink'}`}>
      {/* ── TOPBAR ── */}
      <header className="sticky top-0 z-50 flex min-h-[76px] items-center justify-between border-b-4 border-ink bg-accent-red px-4 py-3.5 text-cream sm:px-8">
        <a href="#home" className="flex items-center gap-3 text-inherit no-underline">
          <span className="grid h-[42px] w-[42px] -skew-x-[9deg] -rotate-[5deg] place-items-center bg-ink font-display text-[25px] text-accent-yellow">
            D
          </span>
          <span className="leading-[0.85]">
            <strong className="block font-display text-[23px] tracking-[1px] sm:text-[25px]">JUAN DIEGO LEÓN</strong>
            <small className="mt-[5px] block text-[11px] font-bold tracking-[3px]">{tx.header.subtitle}</small>
          </span>
        </a>
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="neo-shadow-hover grid h-10 w-10 place-items-center border-[3px] border-ink bg-ink text-accent-yellow shadow-neo-sm transition-colors hover:bg-[#282723]"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} className="text-accent-yellow" />}
          </button>

          {/* Language Toggle */}
          <div className="flex items-center overflow-hidden border-[3px] border-ink bg-ink shadow-neo-sm">
            <button
              id="lang-es"
              onClick={() => switchLang('es')}
              className={`px-3 py-1.5 text-[12px] font-extrabold tracking-[1px] transition-colors ${lang === 'es' ? 'bg-accent-yellow text-ink' : 'bg-ink text-[#b8b3ab] hover:text-cream'}`}
            >
              ES
            </button>
            <div className="h-6 w-[2px] bg-[#302d29]" />
            <button
              id="lang-en"
              onClick={() => switchLang('en')}
              className={`px-3 py-1.5 text-[12px] font-extrabold tracking-[1px] transition-colors ${lang === 'en' ? 'bg-accent-yellow text-ink' : 'bg-ink text-[#b8b3ab] hover:text-cream'}`}
            >
              EN
            </button>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Globe size={14} className="opacity-60" />
            <span className="text-[12px] font-bold uppercase tracking-[1px]">
              {new Date().toLocaleDateString(lang === 'es' ? 'es-CO' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
            </span>
          </div>
        </div>
      </header>

      {/* ── WORKSPACE (Sticky Sidebar + Main) ── */}
      <div className="flex min-h-[calc(100vh-76px)]">

        {/* ── STICKY SIDEBAR (Desktop) ── */}
        <aside className="hidden w-[220px] shrink-0 flex-col border-r-[3px] border-[#302d29] bg-ink px-5 py-[38px] md:sticky md:top-[76px] md:flex md:h-[calc(100vh-76px)] md:overflow-y-auto">
          <div className="text-[12px] font-extrabold tracking-[2px] text-accent-yellow">
            {tx.home.navLabel}
          </div>
          <nav className="mt-[26px] grid gap-2" id="main-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`border-l-4 border-transparent px-2 py-[11px] font-bold text-[#b8b3ab] no-underline transition-all duration-200 hover:translate-x-1 hover:border-l-accent-yellow hover:bg-accent-red hover:text-cream ${
                  activeSection === item.id ? 'translate-x-1 border-l-accent-yellow bg-accent-red !text-cream' : ''
                }`}
              >
                <span className="mr-2 inline-block w-[30px] text-[13px]">
                  <span className={activeSection === item.id ? 'text-accent-yellow' : 'text-[#6e6a64]'}>{item.num}</span>
                </span>
                {item.label}
              </a>
            ))}
          </nav>

        </aside>

        {/* Mobile Bottom Navigation */}
        <aside className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-1 overflow-x-auto border-t-[3px] border-accent-yellow bg-ink px-3 py-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex-shrink-0 whitespace-nowrap border-b-2 border-transparent px-2 py-1.5 text-[12px] font-bold text-[#b8b3ab] no-underline transition-all ${
                activeSection === item.id ? 'border-b-accent-yellow text-cream' : ''
              }`}
            >
              {item.num} {item.label}
            </a>
          ))}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main
          id="app"
          className={`min-w-0 flex-1 overflow-hidden px-6 py-11 pb-20 sm:px-[clamp(24px,5vw,72px)] md:pb-11 transition-colors duration-200 ${canvasBg}`}
          style={{ animation: 'reveal .4s ease both' }}
        >
          {/* ─ HOME ─ */}
          <section id="home" className="mb-16 scroll-mt-24">
            <div className="mb-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <div>
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <h1 className={`mb-1.5 font-display text-[clamp(32px,4.5vw,62px)] uppercase leading-[.95] tracking-[-1px] ${headingColor}`}>
                    {tx.home.headline}
                  </h1>
                  <p className={`max-w-[680px] text-[20px] ${subtitleColor}`}>
                    {tx.home.subline}
                  </p>
                </motion.div>
              </div>
              <a href="#projects" className="neo-shadow-hover border-[3px] border-ink bg-accent-red px-4 py-[11px] font-extrabold uppercase tracking-[1px] text-cream no-underline shadow-neo-sm">
                {tx.home.cta}
              </a>
            </div>

            {/* Metric Cards */}
            <div className="mb-8 grid grid-cols-2 gap-3.5 xl:grid-cols-4">
              {[
                { label: tx.home.metricRole, value: 'Fullstack', cls: isDark ? 'bg-[#1c1b18] border-[#383530] text-cream' : 'bg-cream border-ink text-ink', valCls: 'text-accent-red' },
                { label: tx.home.metricFocus, value: 'Web & IA', cls: 'translate-y-2 -rotate-1 bg-accent-red text-cream border-ink', valCls: '' },
                { label: tx.home.metricBase, value: 'CO 🇨🇴', cls: 'rotate-1 bg-accent-yellow text-ink border-ink', valCls: '' },
                { label: tx.home.metricLangs, value: 'ES / EN C1', cls: 'translate-y-[5px] bg-accent-teal text-cream border-ink', valCls: '' },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`relative min-h-[130px] border-[3px] p-[18px] shadow-neo ${m.cls}`}
                >
                  <span className="text-[14px] font-extrabold uppercase">{m.label}</span>
                  <span className={`mt-[11px] block font-display text-[30px] leading-[.9] xl:text-[38px] ${m.valCls}`}>{m.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Terminal + Quick Links */}
            <div className="grid gap-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)]">
              <div className={`border-[3px] p-6 shadow-neo ${cardBg}`}>
                <div className="mb-3.5 flex items-center border-b-[3px] border-inherit pb-[13px]">
                  <h2 className="m-0 font-display text-[27px] uppercase leading-none">{tx.home.terminalTitle}</h2>
                </div>
                <div className="font-mono text-[15px] leading-[2]">
                  <div>
                    <span className="font-bold text-accent-red">{tx.home.terminalCommand}</span>
                    <span className="ml-2">{profile.name}</span>
                  </div>
                  <div>
                    <span className="font-bold text-accent-red">{tx.home.terminalStack}</span>
                    <span className="ml-2">{tx.home.terminalStackVal}</span>
                  </div>
                  <div>
                    <span className="font-bold text-accent-red">{tx.home.terminalLocation}</span>
                    <span className="ml-2">{tx.home.terminalLocationVal}</span>
                  </div>
                  <div>
                    <span className="font-bold text-accent-red">{tx.home.terminalAvailability}</span>
                    <span className="ml-2 font-bold text-accent-teal">{tx.home.terminalAvailabilityVal}</span>
                  </div>
                </div>
              </div>
              <div className="rotate-[2deg] border-[3px] border-ink bg-ink p-6 text-cream shadow-neo">
                <h2 className="m-0 mb-2 font-display text-[27px] uppercase leading-none text-accent-yellow">{tx.home.quickActions}</h2>
                <div className="mt-4 grid gap-2.5">
                  <a href={profile.resume} download="Juan-Diego-Leon-Resume.txt" className="neo-shadow-hover flex items-center gap-2 border-2 border-ink bg-accent-yellow px-3 py-2.5 font-bold text-ink no-underline shadow-neo-sm">
                    <ArrowUpRight size={16} /> {tx.home.downloadResume}
                  </a>
                  <a href={`mailto:${profile.email}`} className="neo-shadow-hover flex items-center gap-2 border-2 border-ink bg-accent-teal px-3 py-2.5 font-bold text-cream no-underline shadow-neo-sm">
                    <Mail size={16} /> {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ─ ABOUT ─ */}
          <section id="about" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">{tx.about.label}</span>
              <h1 className={`mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px] ${headingColor}`}>
                {tx.about.heading}
              </h1>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {tx.about.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`border-[3px] p-6 shadow-neo ${cardBg}`}
                >
                  <h3 className="font-display text-[20px] uppercase text-accent-red">{item.title}</h3>
                  <p className={`mt-2 ${subtitleColor}`} style={{ lineHeight: '1.3' }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ─ PROJECTS ─ */}
          <section id="projects" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">{tx.projects.label}</span>
              <h1 className={`mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px] ${headingColor}`}>
                {tx.projects.heading}
              </h1>
              <p className={`max-w-[680px] text-[20px] ${subtitleColor}`}>
                {tx.projects.subline}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`neo-shadow-hover group flex flex-col border-[3px] p-6 shadow-neo ${cardBg}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-[20px] uppercase">{project.title}</h3>
                    <ArrowUpRight className="text-muted transition-colors group-hover:text-accent-red" size={18} />
                  </div>
                  <p className={`mt-3 flex-1 text-[15px] font-bold leading-[1.25] ${subtitleColor}`}>
                    {project.summary[lang]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`border-2 px-3 py-1 text-[12px] font-extrabold uppercase tracking-[2px] ${tagBg}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="neo-shadow-hover border-2 border-ink bg-accent-red px-3 py-1.5 text-[13px] font-bold text-cream no-underline shadow-neo-sm">
                      {tx.projects.liveDemo}
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className={`neo-shadow-hover border-2 px-3 py-1.5 text-[13px] font-bold no-underline shadow-neo-sm ${tagBg}`}>
                      {tx.projects.github}
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ─ SKILLS ─ */}
          <section id="skills" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">{tx.skills.label}</span>
              <h1 className={`mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px] ${headingColor}`}>
                {tx.skills.heading}
              </h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`border-[3px] p-6 shadow-neo ${cardBg}`}
                >
                  <h3 className="mb-4 font-display text-[19px] uppercase text-accent-yellow">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className={`border-2 px-3 py-1 text-[13px] font-bold ${tagBg}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ─ EXPERIENCE ─ */}
          <section id="experience" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">{tx.experience.label}</span>
              <h1 className={`mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px] ${headingColor}`}>
                {tx.experience.heading}
              </h1>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => {
                const role = typeof item.role === 'object' ? item.role[lang] : item.role;
                const company = typeof item.company === 'object' ? (item.company as Record<Lang, string>)[lang] : item.company;
                const date = typeof item.date === 'object' ? item.date[lang] : item.date;
                return (
                  <motion.div
                    key={String(role)}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className={`border-[3px] p-6 shadow-neo ${cardBg}`}
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-display text-[20px] uppercase">{role}</h3>
                        <p className="text-[14px] font-bold text-accent-red">{company}</p>
                      </div>
                      <span className="border-2 border-ink bg-accent-yellow px-3 py-1 text-[13px] font-extrabold uppercase text-ink">
                        {date}
                      </span>
                    </div>
                    <p className={`mt-4 max-w-2xl text-[15px] leading-[1.3] ${subtitleColor}`}>{item.impact[lang]}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ─ REFERENCES & CONTACT ─ */}
          <section id="references-contact" className="mb-8 scroll-mt-24">
            <div className="mb-8">
              <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">{tx.testimonials.label}</span>
              <h2 className={`mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px] ${headingColor}`}>
                {tx.testimonials.heading}
              </h2>
            </div>
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((tItem, index) => (
                <motion.div
                  key={tItem.author}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`relative border-[3px] p-6 shadow-neo ${cardBg}`}
                >
                  <p className="text-[16px] italic leading-[1.4] text-accent-yellow">
                    &ldquo;{lang === 'es' ? tItem.quote : tItem.quoteEn}&rdquo;
                  </p>
                  <div className="mt-4 border-t-2 border-inherit pt-3">
                    <strong className="block font-display text-[17px] uppercase">{tItem.author}</strong>
                    <span className={`text-[13px] ${subtitleColor}`}>{tItem.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="-rotate-1 border-[3px] border-ink bg-accent-red p-6 text-cream shadow-neo md:p-8">
              <h3 className="mb-2 font-display text-[27px] uppercase text-accent-yellow">{tx.contact.tag}</h3>
              <h2 className="mb-1.5 font-display text-[clamp(28px,4vw,50px)] uppercase leading-[.95] tracking-[-1px]">
                {tx.contact.heading}
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-[1.25]" style={{ color: '#d8d2c6' }}>
                {tx.contact.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={profile.github} target="_blank" rel="noreferrer" className="neo-shadow-hover flex items-center gap-2 border-[3px] border-ink bg-cream px-4 py-2.5 font-extrabold text-ink no-underline shadow-neo-sm">
                  <Github size={16} /> {tx.contact.github}
                </a>
                <a href={profile.profileRepo} target="_blank" rel="noreferrer" className="neo-shadow-hover flex items-center gap-2 border-[3px] border-ink bg-accent-yellow px-4 py-2.5 font-extrabold text-ink no-underline shadow-neo-sm">
                  <ArrowUpRight size={16} /> {tx.contact.profileRepo}
                </a>
                <a href={`mailto:${profile.email}`} className="neo-shadow-hover flex items-center gap-2 border-[3px] border-ink bg-accent-teal px-4 py-2.5 font-extrabold text-cream no-underline shadow-neo-sm">
                  <Mail size={16} /> {profile.email}
                </a>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="neo-shadow-hover flex items-center gap-2 border-[3px] border-ink bg-paper px-4 py-2.5 font-extrabold text-ink no-underline shadow-neo-sm">
                  <Phone size={16} /> {profile.phone}
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer className="flex flex-col justify-between gap-4 border-t-[3px] border-ink bg-accent-yellow px-4 py-[15px] text-[13px] font-extrabold uppercase text-ink sm:flex-row sm:px-8">
        <span>JUAN DIEGO LEÓN PRADA / {new Date().getFullYear()}</span>
        <span>{tx.footer.built}</span>
      </footer>
    </div>
  );
}
