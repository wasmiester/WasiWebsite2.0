"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./mystyles.module.scss";
import capsuleGuard from "../../public/capsule capture.png";
import aiiae from "../../public/Gemini_Generated_Image_8ql7u08ql7u08ql7.png";
import apiProject from "../../public/apiProject.png";

const NOVA_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%230D1224'/%3E%3Ctext x='400' y='230' font-family='monospace' font-size='18' fill='%238B93A7' text-anchor='middle'%3ENOVA screenshot placeholder%3C/text%3E%3C/svg%3E";

/* ---------- Header ---------- */

function ThemeToggle() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function currentIsDark() {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "dark") return true;
      if (attr === "light") return false;
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }

    function sync() {
      btn!.setAttribute("aria-pressed", String(currentIsDark()));
    }

    function onClick() {
      const next = currentIsDark() ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("wasi-theme", next);
      } catch {
        /* ignore */
      }
      sync();
    }

    btn.addEventListener("click", onClick);
    sync();
    return () => btn.removeEventListener("click", onClick);
  }, []);

  return (
    <button
      type="button"
      className={styles["theme-toggle"]}
      ref={btnRef}
      aria-pressed="false"
    >
      <svg
        className={styles["icon-sun"]}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        className={styles["icon-moon"]}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <span className={styles["sr-only"]}>Toggle dark mode</span>
    </button>
  );
}

function Header() {
  return (
    <header className={styles.site}>
      <div className={styles.wrap}>
        <a
          className={styles.brand}
          href="#top"
          aria-label="Wasi Raza — home"
        >
          <span className={styles["brand-path"]}>~/</span>WasiR
        </a>
        <div className={styles["nav-right"]}>
          <nav className={styles.primary} aria-label="Primary">
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function StatusPanel() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleEl = titleRef.current;
    const cursorEl = cursorRef.current;
    const body = bodyRef.current;
    if (!titleEl || !body) return;

    const fullText = "wasi@production — status";
    const rows = Array.from(
      body.querySelectorAll<HTMLElement>(`.${styles["status-row"]}`),
    );
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      titleEl.textContent = fullText;
      if (cursorEl) cursorEl.style.display = "none";
      rows.forEach((r) => r.classList.add(styles["is-in"]));
      return;
    }

    let i = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function revealRows(idx: number) {
      if (idx >= rows.length) {
        if (cursorEl) cursorEl.style.display = "none";
        return;
      }
      rows[idx].classList.add(styles["is-in"]);
      timeouts.push(setTimeout(() => revealRows(idx + 1), 90));
    }

    function typeChar() {
      if (i <= fullText.length) {
        titleEl!.textContent = fullText.slice(0, i);
        i++;
        timeouts.push(setTimeout(typeChar, 22));
      } else {
        revealRows(0);
      }
    }

    timeouts.push(setTimeout(typeChar, 250));
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={styles["status-panel"]}
      role="img"
      aria-label="Status panel summarizing Wasi's current work"
    >
      <div className={styles["status-titlebar"]}>
        <span className={styles["status-dot"]} aria-hidden="true"></span>
        <span ref={titleRef}></span>
        <span className={styles["typing-cursor"]} ref={cursorRef}></span>
      </div>
      <div className={styles["status-body"]} ref={bodyRef}>
        <div className={styles["status-row"]}>
          <span className={styles["status-key"]}>In production</span>
          <span className={styles["status-val"]}>3+ years</span>
        </div>
        <div className={styles["status-row"]}>
          <span className={styles["status-key"]}>Currently</span>
          <span className={styles["status-val"]}>
            Coding Instructor, Impact A&amp;C
          </span>
        </div>
        <div className={styles["status-row"]}>
          <span className={styles["status-key"]}>Last shipped</span>
          <span className={styles["status-val"]}>
            Event-Ingestion-Platform
          </span>
        </div>
        <div className={styles["status-row"]}>
          <span className={styles["status-key"]}>Prior stop</span>
          <span className={styles["status-val"]}>ZE PowerGroup</span>
        </div>
        <div className={styles["status-row"]}>
          <span className={styles["status-key"]}>Stack</span>
          <span className={styles["status-val"]}>Java, Python, React</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrap} ${styles["hero-grid"]}`}>
        <div>
          <p className={styles["hero-eyebrow"]}>Full-stack software engineer</p>
          <h1 className={styles.headline}>Wasi Raza</h1>
          <p className={styles.dek}>
            Three years shipping data pipelines, APIs, and systems that ran in
            the real world, not just a demo. Bachelor&apos;s in Computer
            Science, currently teaching the next generation of developers to
            do the same.
          </p>
          <div className={styles["cta-row"]}>
            <a
              className={`${styles.btn} ${styles.primary}`}
              href="https://github.com/wasmiester/WasiWebsite2.0/raw/main/public/Wasi_Raza_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href="https://github.com/wasmiester"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className={`${styles.btn} ${styles.ghost}`}
              href="https://www.linkedin.com/in/wasi-raza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className={`${styles.btn} ${styles.ghost}`} href="#contact">
              Email
            </a>
          </div>
        </div>

        <StatusPanel />
      </div>

      <a
        className={styles["scroll-cue"]}
        href="#projects"
        aria-label="Scroll to see more"
      >
        <span className={styles["scroll-cue-track"]} aria-hidden="true"></span>
      </a>
    </section>
  );
}

/* ---------- Projects ---------- */

type ProjectFact = { term: string; desc: string };
type Project = {
  index: string;
  eyebrow: string;
  title: string;
  repo: string;
  figCaption: string;
  image?: StaticImageData;
  alt: string;
  facts: ProjectFact[];
  tags: string[];
};

const projects: Project[] = [
  {
    index: "01",
    eyebrow: "Desktop assistant",
    title: "NOVA",
    repo: "https://github.com/wasmiester/NOVA",
    figCaption: "Fig. 01 — NOVA, activity + conversation view",
    alt: "NOVA desktop assistant screenshot placeholder",
    facts: [
      {
        term: "Problem",
        desc: "Voice assistants either sound smart or actually do things — rarely both.",
      },
      {
        term: "What it does",
        desc: "A voice-first desktop assistant built on Claude that reads native apps and the browser through Windows UI Automation and Playwright, keeps memory across sessions, and writes its own tools at runtime when it needs one it doesn't have.",
      },
      {
        term: "Decision",
        desc: "Gave it real OS-level control instead of a sandboxed plugin API, so it can act inside apps that were never built with an assistant in mind.",
      },
    ],
    tags: ["agentic-ai", "claude-api", "whisper"],
  },
  {
    index: "02",
    eyebrow: "Computer vision",
    title: "CapsuleGuard_AI",
    repo: "https://github.com/wasmiester/CapsuleGuard_AI",
    figCaption: "Fig. 02 — CapsuleGuard, live inspection feed",
    image: capsuleGuard,
    alt: "CapsuleGuard_AI live computer-vision inspection feed",
    facts: [
      {
        term: "Problem",
        desc: "Manual visual QC on a production line doesn't scale, and it doesn't stay consistent across a shift.",
      },
      {
        term: "What it does",
        desc: "A computer-vision monitor that classifies items in real time and flags unsafe or defective ones instantly, built alongside coursework in generative AI engineering.",
      },
    ],
    tags: ["opencv", "pytorch", "real-time-vision"],
  },
  {
    index: "03",
    eyebrow: "Data pipeline",
    title: "AI-Incident-Analysis-Engine",
    repo: "https://github.com/wasmiester/AI-Incident-Analysis-Engine",
    figCaption: "Fig. 03 — AI-Incident-Analysis-Engine, pipeline diagram",
    image: aiiae,
    alt: "AI-Incident-Analysis-Engine pipeline diagram",
    facts: [
      {
        term: "Problem",
        desc: "Incident reports pile up faster than anyone can read them for patterns.",
      },
      {
        term: "What it does",
        desc: "Ingests raw incident reports, runs anomaly detection over them, and produces structured, model-assisted root-cause analysis instead of another dashboard nobody opens.",
      },
    ],
    tags: ["anomaly-detection", "python", "incident-management"],
  },
  {
    index: "04",
    eyebrow: "Ingestion service",
    title: "Event-Ingestion-Platform",
    repo: "https://github.com/wasmiester/Event-Ingestion-platform",
    figCaption: "Fig. 04 — Event-Ingestion-Platform, API response",
    image: apiProject,
    alt: "Event-Ingestion-Platform API response screenshot",
    facts: [
      {
        term: "Problem",
        desc: "Streaming event data breaks quietly — a dropped or duplicated write doesn't throw an error, it just costs you data.",
      },
      {
        term: "What it does",
        desc: "A high-throughput ingestion service built on the same instincts as the production pricing pipeline I maintained at ZE PowerGroup: idempotent writes, and schema changes that don't take the system down.",
      },
    ],
    tags: ["java", "spring-boot", "postgresql"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.project} data-index={project.index}>
      <div className={styles["project-figure"]}>
        <figure>
          {project.image ? (
            <Image src={project.image} alt={project.alt} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={NOVA_PLACEHOLDER} alt={project.alt} />
          )}
          <div className={styles["fig-caption"]}>{project.figCaption}</div>
        </figure>
      </div>
      <div className={styles["project-copy"]}>
        <h3 className={styles["project-title"]}>
          <small>{project.eyebrow}</small>
          {project.title}
        </h3>
        <dl className={styles["project-facts"]}>
          {project.facts.map((fact) => (
            <div key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.desc}</dd>
            </div>
          ))}
        </dl>
        <div className={styles["tag-row"]}>
          {project.tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span className={styles["project-visit"]} aria-hidden="true">
        View repo{" "}
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </span>
      <a
        className={styles["project-link"]}
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles["sr-only"]}>
          View {project.title} repo on GitHub
        </span>
      </a>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrap}>
        <h2 className={styles["section-title"]}>Things I&apos;ve shipped</h2>
        <p className={styles["section-lede"]}>
          Four systems, four different failure modes to design around.
        </p>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.index} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Off the clock ---------- */

function AsideNote() {
  return (
    <section className={styles["aside-note"]}>
      <div className={styles.wrap}>
        <p className={styles["aside-label"]}>{"// off the clock"}</p>
        <p>
          Outside of shipping backends I&apos;m usually in the middle of some
          other system I can&apos;t leave alone — right now that&apos;s 3D
          printing and electrical engineering, pulling apart how things are
          actually built instead of just how they&apos;re coded. Same instinct
          that makes me track down a flaky parser makes me want to understand
          why a circuit or a print failed, not just that it did.
        </p>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

function Testimonials() {
  return (
    <section id="testimonials">
      <div className={styles.wrap}>
        <h2 className={styles["section-title"]}>What people say</h2>
        <p className={styles["section-lede"]}>
          From managers and teammates across teaching and engineering roles.
        </p>

        <div className={styles["lead-quote-wrap"]}>
          <span className={styles["quote-mark"]} aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className={styles["lead-quote"]}>
            &quot;Wasi is an exceptional developer and teammate who quickly
            adapted to challenging situations, demonstrating strong skills
            and a proactive learning attitude. His collaborative
            problem-solving approach not only accelerated solutions but also
            fostered mutual learning. Over time, he showed significant
            growth, taking on increasingly complex tasks independently. His
            professionalism, teamwork, and respect for others made a lasting
            impact, and he would be a valued addition to any team.&quot;
            <cite>
              Benjamin Tisserand — My supervisor at ZE PowerGroup, now Agile
              Developer II at SAP
            </cite>
          </blockquote>
        </div>

        <div className={styles["quote-minor-row"]}>
          <blockquote className={styles["minor-quote"]}>
            &quot;Wasi is a great team player who gets along well with
            everyone, which creates a positive work environment. He asks
            insightful questions that demonstrate his commitment to fully
            understanding projects and contributing effectively. Wasi&apos;s
            proactive approach and strong interpersonal skills make him a
            valuable asset to any team.&quot;
            <cite>Tony Huang — Java Developer, ZE PowerGroup</cite>
          </blockquote>
          <blockquote className={styles["minor-quote"]}>
            &quot;Wasi is very helpful and courteous with instructors,
            students and CTL staff and does well to work with the many
            personality types and expectations in a multitude of scenarios
            and contexts that arise. His technical knowledge and ability to
            problem solve are an important asset to the success of the online
            synchronous sessions. Wasi is customer service oriented, a good
            team player and has a calm demeanor. Wasi has been a valued
            member of the support team for the MSN program.&quot;
            <cite>Janine Hirtz — Senior Educational Consultant, UBCO</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience timeline ---------- */

type TimelineItem = {
  dateStart: string;
  dateEnd: string;
  role: string;
  company: string;
  bullets: string[];
  tags?: string[];
};

const timelineItems: TimelineItem[] = [
  {
    dateStart: "Apr 2024 —",
    dateEnd: "Jun 2025",
    role: "Coding Instructor",
    company: "Impact A&C",
    bullets: [
      "Taught programming fundamentals K–12: Python basics, app development, Scratch, and game modding.",
      "Designed independent computer-vision and ML-based monitoring projects, alongside coursework toward the IBM Generative AI Engineering Professional Certificate.",
    ],
  },
  {
    dateStart: "Feb 2023 —",
    dateEnd: "Apr 2024",
    role: "Software Engineer",
    company: "ZE PowerGroup",
    bullets: [
      "Maintained a large-scale production database ingesting real-time energy and commodities pricing data from third-party market vendors.",
      "Diagnosed and resolved data-parsing failures by updating regex-based parsers as upstream vendors changed formatting.",
      "Built an automated CI/CD test suite covering 95% of previously manual test cases.",
    ],
    tags: ["java", "spring boot", "sql", "oracle db", "liquibase", "jenkins"],
  },
  {
    dateStart: "Jan 2021 —",
    dateEnd: "Apr 2021",
    role: "Software Engineering Intern",
    company: "Atomic47 Labs",
    bullets: [
      "Developed, tested, and documented Nest.js API endpoints for profile management and crypto transaction retrieval.",
      "Redesigned a multi-step sign-in flow into a streamlined React portal, reducing the clicks required to log in.",
    ],
    tags: ["nest.js", "react", "postman"],
  },
  {
    dateStart: "Sep 2019 —",
    dateEnd: "Dec 2020",
    role: "Full Stack Developer",
    company: "University of British Columbia",
    bullets: [
      "Built a scientific research platform in React and TypeScript to handle data from thousands of Canadian clinics.",
      "Delivered full SDLC for secure profile management and REST APIs, reducing corrupt entries via field-level validation.",
    ],
    tags: ["react", "typescript", "docker"],
  },
];

function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    timeline.classList.add(styles["tl-pending"]);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeline.classList.remove(styles["tl-pending"]);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(timeline);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className={styles.wrap}>
        <h2 className={styles["section-title"]}>Where I&apos;ve worked</h2>
        <p className={styles["section-lede"]}>Four stops, in order.</p>

        <div className={styles.timeline} ref={timelineRef}>
          {timelineItems.map((item) => (
            <div className={styles["tl-item"]} key={item.role}>
              <div className={styles["tl-date"]}>
                {item.dateStart}
                <br />
                {item.dateEnd}
              </div>
              <div className={styles["tl-node"]} aria-hidden="true"></div>
              <div>
                <h3 className={styles["tl-role"]}>
                  {item.role} <span>· {item.company}</span>
                </h3>
                <ul className={styles["tl-bullets"]}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {item.tags && (
                  <div className={styles["tl-tags"]}>
                    {item.tags.map((tag) => (
                      <span className={styles.tag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

type FormStatus = {
  state: "" | "sending" | "success" | "error";
  text: string;
};

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ state: "", text: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const accessKey = (
      form.elements.namedItem("access_key") as HTMLInputElement | null
    )?.value;
    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus({
        state: "error",
        text: "Form isn't wired up yet — add a Web3Forms access key.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ state: "sending", text: "Sending…" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({
          state: "success",
          text: "Thanks — got it. I'll get back to you soon.",
        });
        form.reset();
      } else {
        setStatus({
          state: "error",
          text: "Something went wrong. Try the email link above instead.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        text: "Network error. Try the email link above instead.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className={styles["contact-form"]}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      {/* Get a free access key at web3forms.com (enter your email, no account needed) and paste it below */}
      <input type="hidden" name="access_key" defaultValue="YOUR_WEB3FORMS_ACCESS_KEY" />
      <input type="hidden" name="subject" defaultValue="New message from wasiraza.com" />
      <input
        type="checkbox"
        name="botcheck"
        className={styles["hp-field"]}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles["form-row"]}>
        <div className={styles["form-field"]}>
          <label htmlFor="cf-name">Name</label>
          <input type="text" id="cf-name" name="name" required autoComplete="name" />
        </div>
        <div className={styles["form-field"]}>
          <label htmlFor="cf-email">Email</label>
          <input type="email" id="cf-email" name="email" required autoComplete="email" />
        </div>
      </div>
      <div className={styles["form-field"]}>
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows={5} required></textarea>
      </div>

      <div className={styles["form-submit-row"]}>
        <button
          type="submit"
          className={`${styles.btn} ${styles.primary}`}
          disabled={submitting}
        >
          Send message
        </button>
        <p
          className={styles["form-status"]}
          data-state={status.state || undefined}
          role="status"
          aria-live="polite"
        >
          {status.text}
        </p>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className={styles.wrap}>
        <h2 className={styles["section-title"]}>Hiring a full-stack engineer?</h2>
        <p className={styles["section-lede"]}>
          Open to backend- or frontend-leaning roles. Feel free to message me
          and let&apos;s set up a dialogue.
        </p>
        <div className={styles["contact-cta-row"]}>
          <a className={`${styles.btn} ${styles.ghost}`} href="mailto:wasiulhassanraza@gmail.com">
            Email me
          </a>
          <a
            className={`${styles.btn} ${styles.ghost}`}
            href="https://github.com/wasmiester/WasiWebsite2.0/raw/main/public/Wasi_Raza_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            className={`${styles.btn} ${styles.ghost}`}
            href="https://github.com/wasmiester"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className={`${styles.btn} ${styles.ghost}`}
            href="https://www.linkedin.com/in/wasi-raza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <ContactForm />

        <p className={styles["contact-note"]}>
          Fastest way to reach me. Hope to hear from you soon 😁
        </p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className={styles.site}>
      <div className={styles.wrap}>
        <div className={styles["footer-row"]}>
          <div className={styles["footer-links"]}>
            <a href="https://github.com/wasmiester" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/wasi-raza/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:wasiulhassanraza@gmail.com">Email</a>
            <a
              href="https://github.com/wasmiester/WasiWebsite2.0/raw/main/public/Wasi_Raza_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <div className={styles["footer-note"]}>© 2026 Wasi Raza</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div>
      <Header />
      <main id="top">
        <Hero />
        <Projects />
        <AsideNote />
        <Testimonials />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
