'use client';

import { ArrowUpRight, Github, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

/* ── Data ── */

const profile = {
  name: 'Diego León',
  title: 'Full Stack Developer',
  location: 'Colombia',
  bio: 'I build practical software with a strong focus on full-stack development, AI-assisted workflows, and useful user experiences.',
  github: 'https://github.com/Alter-09',
  profileRepo: 'https://github.com/Alter-09/alter-09',
  resume: '/resume.txt',
  currentRole: 'Software Developer at MySQL',
  languages: 'Native Spanish • C1 English'
};

const projects = [
  {
    title: 'Campusbuild',
    summary: 'A custom web app for managing projects over time, with calendar support and practical workflow tools.',
    tags: ['JavaScript', 'Productivity', 'Web App'],
    demo: 'https://github.com/Alter-09/Campusbuild',
    github: 'https://github.com/Alter-09/Campusbuild'
  },
  {
    title: 'SmartCity-Fix',
    summary: 'A civic-minded project focused on building smart city solutions and useful improvements for everyday life.',
    tags: ['HTML', 'Python', 'Innovation'],
    demo: 'https://github.com/Alter-09/SmartCity-Fix',
    github: 'https://github.com/Alter-09/SmartCity-Fix'
  },
  {
    title: 'Task_manager_pro',
    summary: 'A Python-based task management project designed to keep work organized and moving forward.',
    tags: ['Python', 'Workflow', 'Planning'],
    demo: 'https://github.com/Alter-09/Task_manager_pro',
    github: 'https://github.com/Alter-09/Task_manager_pro'
  }
];

const skills = [
  { category: 'Full Stack', items: ['JavaScript', 'HTML', 'CSS', 'Python', 'MySQL', 'Docker'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'UI Development'] },
  { category: 'Backend', items: ['REST APIs', 'Database Design', 'Automation', 'Server Logic'] },
  { category: 'Workflow', items: ['Git', 'VS Code', 'AI-assisted Development', 'Continuous Learning'] }
];

const experience = [
  {
    role: 'Software Developer',
    company: 'MySQL',
    date: 'Current',
    impact: 'Working on software development while continuing to expand my technical skills in practical, production-focused engineering.'
  },
  {
    role: 'Independent Builder',
    company: 'Personal Projects',
    date: '2024 — Present',
    impact: 'Built hands-on web and productivity projects that combine real-world usefulness with clean implementation.'
  }
];

const highlights = [
  {
    title: 'Current focus',
    text: 'Building practical software with a mix of full-stack development and AI-assisted workflows.'
  },
  {
    title: 'Communication',
    text: 'Fluent in Spanish and confident in English, with a collaborative and curious approach.'
  },
  {
    title: 'Interests',
    text: 'Motorsport, technology, and turning ideas into useful digital tools.'
  },
  {
    title: 'Approach',
    text: 'Thoughtful implementation, clean UX, and a strong emphasis on learning by doing.'
  }
];

const navItems = [
  { id: 'home', label: 'Home', num: '01' },
  { id: 'about', label: 'About', num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'skills', label: 'Skills', num: '04' },
  { id: 'experience', label: 'Experience', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' }
];

/* ── Page ── */

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-ink">
      {/* ── TOPBAR ── */}
      <header className="sticky top-0 z-50 flex min-h-[76px] items-center justify-between border-b-4 border-ink bg-accent-red px-4 py-3.5 text-cream sm:px-8">
        <Link href="#home" onClick={() => handleNavClick('home')} className="flex items-center gap-3 text-inherit no-underline">
          <span className="grid h-[42px] w-[42px] -skew-x-[9deg] -rotate-[5deg] place-items-center bg-ink font-display text-[25px] text-accent-yellow">
            D
          </span>
          <span className="leading-[0.85]">
            <strong className="block font-display text-[25px] tracking-[1px]">DIEGO LEÓN</strong>
            <small className="mt-[5px] block text-[11px] font-bold tracking-[3px]">DEVELOPER</small>
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <span className="hidden text-[14px] font-bold uppercase tracking-[1px] sm:block">
            {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
          </span>
          <div className="grid h-10 w-10 rotate-[4deg] place-items-center border-[3px] border-ink bg-accent-yellow font-extrabold text-ink">
            DL
          </div>
        </div>
      </header>

      {/* ── WORKSPACE (Sidebar + Main) ── */}
      <div className="grid min-h-[calc(100vh-116px)] grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)]">

        {/* ── SIDEBAR ── */}
        <aside className="flex flex-col border-b-[3px] border-accent-yellow bg-ink px-5 py-3 text-cream md:border-b-0 md:py-[38px]">
          <div className="hidden text-[12px] font-extrabold tracking-[2px] text-accent-yellow md:block">
            NAVIGATION
          </div>
          <nav className="mt-2.5 flex gap-1 overflow-x-auto md:mt-[26px] md:grid md:gap-2 md:overflow-x-visible" id="main-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex-shrink-0 whitespace-nowrap border-l-4 border-transparent px-2 py-[11px] font-bold text-[#b8b3ab] no-underline transition-all duration-200 hover:translate-x-1 hover:border-l-accent-yellow hover:bg-accent-red hover:text-cream md:whitespace-normal ${
                  activeSection === item.id
                    ? 'translate-x-1 border-l-accent-yellow bg-accent-red !text-cream'
                    : ''
                }`}
              >
                <span className="mr-2 inline-block w-[30px] text-[13px] text-[#6e6a64]">
                  {activeSection === item.id ? <span className="text-accent-yellow">{item.num}</span> : item.num}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto hidden -rotate-[2deg] border-t-2 border-[#4b4843] px-2.5 pt-4 md:block">
            <span className="text-[12px] font-extrabold tracking-[2px] text-accent-yellow">PERSONAL KIT</span>
            <p className="mt-2.5 text-[#b8b3ab]" style={{ lineHeight: '1.1' }}>Build with intent. Ship with craft. One project at a time.</p>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main
          id="app"
          className="overflow-hidden bg-paper px-6 py-11 dot-grid sm:px-[clamp(24px,5vw,72px)]"
          style={{ animation: 'reveal .4s ease both' }}
        >
          {/* ─ HOME ─ */}
          <section id="home" className="mb-16 scroll-mt-24">
            <div className="mb-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h1 className="mb-1.5 font-display text-[clamp(35px,5vw,66px)] uppercase leading-[.95] tracking-[-1px]">
                    I build practical<br />software.
                  </h1>
                  <p className="max-w-[620px] text-[20px] text-[#625d56]">
                    Full-stack development, AI-assisted workflows, and continuous learning — all in one place.
                  </p>
                </motion.div>
              </div>
              <a href="#projects" className="neo-shadow-hover border-[3px] border-ink bg-accent-red px-4 py-[11px] font-extrabold uppercase tracking-[1px] text-cream no-underline shadow-neo-sm">
                View Projects ↗
              </a>
            </div>

            {/* Metric cards */}
            <div className="mb-8 grid grid-cols-2 gap-3.5 xl:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="relative min-h-[130px] border-[3px] border-ink bg-cream p-[18px] shadow-neo"
              >
                <span className="text-[14px] font-extrabold uppercase">Role</span>
                <span className="mt-[11px] block font-display text-[32px] leading-[.9] text-accent-red xl:text-[43px]">Dev</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative min-h-[130px] translate-y-2 -rotate-1 border-[3px] border-ink bg-accent-red p-[18px] text-cream shadow-neo"
              >
                <span className="text-[14px] font-extrabold uppercase">Focus</span>
                <span className="mt-[11px] block font-display text-[32px] leading-[.9] xl:text-[43px]">Full Stack</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="relative min-h-[130px] rotate-1 border-[3px] border-ink bg-accent-yellow p-[18px] shadow-neo"
              >
                <span className="text-[14px] font-extrabold uppercase">Base</span>
                <span className="mt-[11px] block font-display text-[32px] leading-[.9] xl:text-[43px]">CO 🇨🇴</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative min-h-[130px] translate-y-[5px] border-[3px] border-ink bg-accent-teal p-[18px] text-cream shadow-neo"
              >
                <span className="text-[14px] font-extrabold uppercase">Languages</span>
                <span className="mt-[11px] block font-display text-[32px] leading-[.9] xl:text-[43px]">ES / EN</span>
              </motion.div>
            </div>

            {/* Profile panel + Tip panel */}
            <div className="grid gap-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,.65fr)]">
              <div className="border-[3px] border-ink bg-cream p-6 shadow-neo">
                <div className="mb-3.5 flex items-center justify-between gap-3 border-b-[3px] border-ink pb-[13px]">
                  <h2 className="m-0 font-display text-[27px] uppercase leading-none">Terminal</h2>
                </div>
                <div className="font-mono text-[15px] leading-8">
                  <div className="font-bold text-accent-red">$ whoami</div>
                  <div>{profile.name}</div>
                  <div>{profile.title}</div>
                  <div>{profile.languages}</div>
                  <div>Motorsport enthusiast</div>
                  <div className="mt-3 font-bold text-accent-red">$ cat bio.txt</div>
                  <div className="text-[#625d56]">{profile.bio}</div>
                </div>
              </div>
              <div className="rotate-[2deg] border-[3px] border-ink bg-ink p-6 text-cream shadow-neo">
                <h2 className="m-0 mb-2 font-display text-[27px] uppercase leading-none text-accent-yellow">Quick Links</h2>
                <div className="mt-4 grid gap-2.5">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="neo-shadow-hover flex items-center gap-2 border-2 border-ink bg-accent-red px-3 py-2.5 font-bold text-cream no-underline shadow-neo-sm">
                    <Github size={16} /> GitHub Profile
                  </a>
                  <a href={profile.resume} download="Diego-Leon-Resume.txt" className="neo-shadow-hover flex items-center gap-2 border-2 border-ink bg-accent-yellow px-3 py-2.5 font-bold text-ink no-underline shadow-neo-sm">
                    <Mail size={16} /> Download Resume
                  </a>
                  <a href={profile.profileRepo} target="_blank" rel="noreferrer" className="neo-shadow-hover flex items-center gap-2 border-2 border-ink bg-accent-teal px-3 py-2.5 font-bold text-cream no-underline shadow-neo-sm">
                    <ArrowUpRight size={16} /> Profile Repo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ─ ABOUT ─ */}
          <section id="about" className="mb-16 scroll-mt-24">
            <div className="mb-8 flex items-end justify-between gap-5">
              <div>
                <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">ABOUT ME</span>
                <h1 className="mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px]">
                  What I&apos;m building
                </h1>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="border-[3px] border-ink bg-cream p-6 shadow-neo"
                >
                  <h3 className="font-display text-[20px] uppercase">{item.title}</h3>
                  <p className="mt-2 text-[#625d56]" style={{ lineHeight: '1.25' }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ─ PROJECTS ─ */}
          <section id="projects" className="mb-16 scroll-mt-24">
            <div className="mb-8 flex items-end justify-between gap-5">
              <div>
                <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">SELECTED WORK</span>
                <h1 className="mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px]">
                  Projects
                </h1>
                <p className="max-w-[620px] text-[20px] text-[#625d56]">
                  Hands-on projects that combine real-world usefulness with clean implementation.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="neo-shadow-hover group border-[3px] border-ink bg-cream p-6 shadow-neo"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-[20px] uppercase">{project.title}</h3>
                    <ArrowUpRight className="text-muted transition-colors group-hover:text-accent-red" size={18} />
                  </div>
                  <p className="mt-3 text-[15px] font-bold leading-[1.25] text-[#625d56]">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border-2 border-ink bg-paper px-3 py-1 text-[12px] font-extrabold uppercase tracking-[2px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="neo-shadow-hover border-2 border-ink bg-accent-red px-3 py-1.5 text-[13px] font-bold text-cream no-underline shadow-neo-sm">
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="neo-shadow-hover border-2 border-ink bg-paper px-3 py-1.5 text-[13px] font-bold text-ink no-underline shadow-neo-sm">
                      GitHub
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ─ SKILLS ─ */}
          <section id="skills" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">CAPABILITIES</span>
              <h1 className="mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px]">
                Skills &amp; Stack
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
                  className="border-[3px] border-ink bg-cream p-6 shadow-neo"
                >
                  <h3 className="mb-4 font-display text-[20px] uppercase">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="border-2 border-ink bg-paper px-3 py-1 text-[14px] font-bold">
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
              <span className="text-[12px] font-extrabold tracking-[2px] text-accent-teal">CAREER</span>
              <h1 className="mb-1.5 font-display text-[clamp(35px,5vw,50px)] uppercase leading-[.95] tracking-[-1px]">
                Experience
              </h1>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="border-[3px] border-ink bg-cream p-6 shadow-neo"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-display text-[20px] uppercase">{item.role}</h3>
                      <p className="text-[14px] font-bold text-accent-red">{item.company}</p>
                    </div>
                    <span className="border-2 border-ink bg-accent-yellow px-3 py-1 text-[13px] font-extrabold uppercase">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.3] text-[#625d56]">{item.impact}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ─ CONTACT ─ */}
          <section id="contact" className="mb-8 scroll-mt-24">
            <div className="-rotate-1 border-[3px] border-ink bg-accent-red p-6 text-cream shadow-neo md:p-8">
              <h2 className="mb-2 font-display text-[27px] uppercase text-accent-yellow">Let&apos;s Build</h2>
              <h1 className="mb-1.5 font-display text-[clamp(28px,4vw,50px)] uppercase leading-[.95] tracking-[-1px]">
                Ready to shape something memorable?
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-[1.25]" style={{ color: '#d8d2c6' }}>
                I&apos;m open to meaningful collaborations, technical challenges, and opportunities to build useful products with a strong sense of craft.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={profile.github} target="_blank" rel="noreferrer" className="neo-shadow-hover flex items-center gap-2 border-[3px] border-ink bg-cream px-4 py-2.5 font-extrabold text-ink no-underline shadow-neo-sm">
                  <Github size={16} /> GitHub
                </a>
                <a href={profile.profileRepo} target="_blank" rel="noreferrer" className="neo-shadow-hover flex items-center gap-2 border-[3px] border-ink bg-accent-yellow px-4 py-2.5 font-extrabold text-ink no-underline shadow-neo-sm">
                  <Mail size={16} /> View Profile Repo
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer className="flex flex-col justify-between gap-4 border-t-[3px] border-ink bg-accent-yellow px-4 py-[15px] text-[13px] font-extrabold uppercase sm:flex-row sm:px-8">
        <span>DIEGO LEÓN / {new Date().getFullYear()}</span>
        <span>Built with Next.js, Tailwind CSS, and Framer Motion.</span>
      </footer>
    </div>
  );
}
