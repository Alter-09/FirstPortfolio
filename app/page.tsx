'use client';

import { ArrowUpRight, Github, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(clsx(classes));
}

export default function HomePage() {
  return (
    <main id="content" className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-20 pt-6 sm:px-8 lg:px-10">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-sm focus:text-slate-950">
        Skip to content
      </a>

      <header className="sticky top-4 z-40 mb-10 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-xl">
        <nav className="flex items-center justify-between text-sm text-slate-300">
          <Link href="#home" className="font-semibold tracking-[0.25em] text-slate-100 uppercase">DL</Link>
          <div className="flex items-center gap-4">
            <Link href="#about" className="transition hover:text-cyan-400">About</Link>
            <Link href="#projects" className="transition hover:text-cyan-400">Projects</Link>
            <Link href="#skills" className="transition hover:text-cyan-400">Skills</Link>
            <Link href="#experience" className="transition hover:text-cyan-400">Experience</Link>
            <Link href="#contact" className="transition hover:text-cyan-400">Contact</Link>
          </div>
        </nav>
      </header>

      <section id="home" className="grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
            <Sparkles size={16} />
            Full-stack development, AI coding, and continuous learning
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            I build practical software that feels thoughtful, modern, and ready to use.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I’m {profile.name}, a {profile.title} from {profile.location} focused on full-stack work, AI-assisted development, and building useful projects that solve real problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#projects" className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">View Projects</Link>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-5 py-3 font-medium text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-300">Visit GitHub</a>
            <a href={profile.resume} download="Diego-Leon-Resume.txt" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-200 transition hover:bg-cyan-400/20">Download Resume</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span>{profile.currentRole}</span>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-lg font-semibold text-cyan-300">DL</div>
            <div>
              <p className="font-medium text-white">{profile.name}</p>
              <p className="text-sm text-slate-400">{profile.title}</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5 font-mono text-sm leading-7 text-slate-300">
            <div className="text-cyan-400">$ whoami</div>
            <div>{profile.name}</div>
            <div>{profile.title}</div>
            <div>{profile.languages}</div>
            <div>Motorsport enthusiast</div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="scroll-mt-24 py-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">About</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">What I’m building</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {profile.bio}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Projects</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <ArrowUpRight className="text-slate-400 transition group-hover:text-cyan-400" size={18} />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">{tag}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3 text-sm text-cyan-300">
                <a href={project.demo} className="transition hover:text-cyan-200">Live demo</a>
                <a href={project.github} className="transition hover:text-cyan-200">GitHub</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Capabilities</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Skills & Stack</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.category} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="font-semibold text-white">{skill.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className={cn('rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300', 'bg-slate-950/70')}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Career</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.role} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-cyan-300">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.date}</p>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{item.impact}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-16">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Let’s build</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Ready to shape something memorable?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">I’m open to meaningful collaborations, technical challenges, and opportunities to build useful products with a strong sense of craft.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-300"><Github size={16} /> GitHub</a>
              <a href={profile.profileRepo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-300"><Mail size={16} /> View profile repo</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-6 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}
