import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Server,
  ShieldCheck,
  TerminalSquare,
  X,
} from "lucide-react";
import { profile, projects } from "./profile.js";
const techGroups = [
  {
    icon: Server,
    title: "Backend y APIs",
    items: ["Node.js", "Express", "JavaScript", "API REST", "C#"],
  },
  {
    icon: Database,
    title: "Bases de datos",
    items: ["PostgreSQL", "MongoDB", "Supabase", "SQL"],
  },
  {
    icon: ShieldCheck,
    title: "Herramientas y prácticas",
    items: ["JWT", "Postman", "Git", "GitHub / Bitbucket", "Diseño de APIs"],
  },
  {
    icon: Layers3,
    title: "Complementarias",
    items: ["React", "TypeScript", "HTML", "CSS"],
  },
];
const timeline = [
  {
    period: "2025 — Actualidad",
    title: "Ingeniería en Desarrollo y Gestión de Software",
    where: "Universidad Tecnológica de la Huasteca Hidalguense",
    detail:
      "Formación en desarrollo de software, arquitectura, gestión y calidad de proyectos.",
  },
  {
    period: "2023 — 2025",
    title: "TSU en Tecnologías de la Información",
    where: "Universidad Tecnológica de la Huasteca Hidalguense",
    detail: "Especialización en Desarrollo de Software Multiplataforma.",
  },
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selected]);
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hola José Antonio, vi tu portafolio y me gustaría contactarte.")}`;
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <span className="brand-symbol">JA</span>
            <span className="brand-dot">.</span>
            <span className="brand-sub">BACKEND / DEV</span>
          </a>
          <nav
            className={menuOpen ? "nav open" : "nav"}
            aria-label="Navegación principal"
          >
            {[
              ["Sobre mí", "#sobre-mi"],
              ["Trayectoria", "#trayectoria"],
              ["Habilidades", "#habilidades"],
              ["Proyectos", "#proyectos"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="header-contact"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero shell" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="pulse" /> DESARROLLADOR BACKEND
            </p>
            <p className="hero-hello">HOLA, SOY JOSÉ ANTONIO MARTÍNEZ</p>
            <h1>
              Desarrollo de
              <span className="hero-last">
                Software<span className="period">.</span>
              </span>
            </h1>
            <p className="hero-message">
              Construyo la <em>lógica</em> detrás de cada solución.
            </p>
            <p className="hero-description">
              Me especializo en desarrollo backend, APIs REST y bases de datos.
              Construyo soluciones funcionales, seguras y organizadas para
              problemas reales.
            </p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#proyectos">
                Explorar proyectos <ArrowUpRight size={18} />
              </a>
              <a
                className="button button-outline"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp <MessageCircle size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} />
                {profile.location}
              </span>
              <span className="meta-divider" />
              <span>Estadía profesional</span>
            </div>
          </div>
          <div className="hero-aside" aria-hidden="true">
            <div className="ambient ambient-one" />
            <div className="ambient ambient-two" />
            <div className="code-window">
              <div className="window-head">
                <span className="traffic">
                  <i />
                  <i />
                  <i />
                </span>
                <span>about-me.js</span>
                <span>⌁</span>
              </div>
              <div className="code-lines">
                <p>
                  <span className="c-purple">const</span> developer = {"{"}
                </p>
                <p className="indent">
                  <span className="c-blue">name</span>:{" "}
                  <span className="c-yellow">'José Antonio'</span>,
                </p>
                <p className="indent">
                  <span className="c-blue">focus</span>:{" "}
                  <span className="c-yellow">'Backend'</span>,
                </p>
                <p className="indent">
                  <span className="c-blue">stack</span>: [
                </p>
                <p className="double-indent">
                  <span className="c-yellow">'Node.js'</span>,
                </p>
                <p className="double-indent">
                  <span className="c-yellow">'PostgreSQL'</span>,
                </p>
                <p className="double-indent">
                  <span className="c-yellow">'REST APIs'</span>
                </p>
                <p className="indent">],</p>
                <p className="indent">
                  <span className="c-blue">status</span>:{" "}
                  <span className="c-yellow">'Building...'</span>
                </p>
                <p>{"}"};</p>
                <p className="last-code">_</p>
              </div>
            </div>
            <div className="floating-tag">
              <span className="tag-light" /> SYSTEM STATUS{" "}
              <strong>ONLINE</strong>
            </div>
          </div>
          <a className="scroll-hint" href="#sobre-mi">
            DESLIZA PARA EXPLORAR <ArrowDown size={15} />
          </a>
        </section>
        <div className="divider-wide" />
        <section className="section shell about" id="sobre-mi">
          <div className="section-top">
            <span className="section-index">01 / PERFIL</span>
            <span className="section-line" />
          </div>
          <div className="about-grid">
            <div>
              <p className="section-kicker">CONOCE UN POCO DE MÍ</p>
              <h2>
                Más que código,
                <br />
                <span>soluciones.</span>
              </h2>
            </div>
            <div className="about-text">
              <p>
                Hola, soy <strong>José Antonio Martínez Alvarado</strong>,
                estudiante de Ingeniería en Desarrollo y Gestión de Software en
                la Universidad Tecnológica de la Huasteca Hidalguense.
              </p>
              <p>
                Disfruto desarrollar el lado del servidor: estructurar APIs,
                organizar datos, implementar reglas de negocio y conectar
                sistemas. También tengo experiencia trabajando con frontend, lo
                que me permite comprender el producto de extremo a extremo.
              </p>
              <p>
                Actualmente busco una <strong>estadía profesional</strong> donde
                pueda aportar, seguir aprendiendo y trabajar en soluciones
                utilizadas por personas reales.
              </p>
              <div className="about-facts">
                <span>
                  <strong>Ubicación</strong>Hidalgo, México
                </span>
                <span>
                  <strong>Enfoque</strong>Backend / APIs
                </span>
                <span>
                  <strong>Formación</strong>Ingeniería en curso
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-tint" id="trayectoria">
          <div className="shell">
            <div className="section-top">
              <span className="section-index">02 / FORMACIÓN</span>
              <span className="section-line" />
            </div>
            <div className="section-heading">
              <div>
                <p className="section-kicker">MI RECORRIDO</p>
                <h2>
                  Mi <span>trayectoria.</span>
                </h2>
              </div>
              <p>
                Preparación académica y aprendizaje continuo para construir
                mejores sistemas.
              </p>
            </div>
            <div className="timeline">
              {timeline.map((entry, i) => (
                <article className="timeline-entry" key={entry.period}>
                  <div className="timeline-index">0{i + 1}</div>
                  <div className="timeline-content">
                    <span className="date">{entry.period}</span>
                    <h3>{entry.title}</h3>
                    <p className="timeline-where">{entry.where}</p>
                    <p className="timeline-detail">{entry.detail}</p>
                  </div>
                  <ChevronRight className="timeline-arrow" size={22} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section shell" id="habilidades">
          <div className="section-top">
            <span className="section-index">03 / STACK</span>
            <span className="section-line" />
          </div>
          <div className="section-heading">
            <div>
              <p className="section-kicker">MIS HERRAMIENTAS</p>
              <h2>
                Habilidades y <span>tecnologías.</span>
              </h2>
            </div>
            <p>
              Herramientas que utilizo para diseñar, construir y conectar
              aplicaciones.
            </p>
          </div>
          <div className="skills-grid">
            {techGroups.map(({ icon: Icon, title, items }, i) => (
              <article className="skill-card" key={title}>
                <div className="skill-heading">
                  <span className="skill-icon">
                    <Icon size={22} />
                  </span>
                  <span className="skill-number">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <div className="pills">
                  {items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section section-tint" id="proyectos">
          <div className="shell">
            <div className="section-top">
              <span className="section-index">04 / TRABAJO</span>
              <span className="section-line" />
            </div>
            <div className="section-heading">
              <div>
                <p className="section-kicker">LO QUE HE CONSTRUIDO</p>
                <h2>
                  Proyectos <span>destacados.</span>
                </h2>
              </div>
              <p>
                Trabajo académico y práctico en aplicaciones, APIs y sistemas de
                gestión.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-visual ${project.accent}`}>
                    <span className="project-number">
                      {project.number} / SELECTED WORK
                    </span>
                    <div className="visual-icon">
                      {project.accent === "pizza" ? (
                        <Layers3 size={62} strokeWidth={1} />
                      ) : (
                        <TerminalSquare size={62} strokeWidth={1} />
                      )}
                    </div>
                    <span className="project-watermark">
                      {project.name.toUpperCase()}
                    </span>
                  </div>
                  <div className="project-body">
                    <p className="project-kind">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <div className="project-tags">
                      {project.stack.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {project.link ? (
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver proyecto <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="project-link"
                        onClick={() => setSelected(project)}
                      >
                        Ver detalles <ArrowUpRight size={17} />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section shell contact" id="contacto">
          <div className="section-top">
            <span className="section-index">05 / CONTACTO</span>
            <span className="section-line" />
          </div>
          <div className="contact-panel">
            <div>
              <p className="section-kicker">
                ¿TIENES UN PROYECTO O UNA OPORTUNIDAD?
              </p>
              <h2>
                Construyamos algo
                <br />
                <span>que funcione.</span>
              </h2>
              <p className="contact-description">
                Estoy interesado en oportunidades de estadía profesional y en
                colaborar en proyectos donde el backend marque la diferencia.
              </p>
              <a
                className="button button-primary"
                href={`mailto:${profile.email}?subject=${encodeURIComponent("Contacto desde tu portafolio")}`}
              >
                Envíame un correo <ArrowUpRight size={18} />
              </a>
              <a
                className="button button-outline contact-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Contactar por WhatsApp{" "}
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="contact-details">
              <span className="contact-label">CORREO ELECTRÓNICO</span>
              <button type="button" className="email-copy" onClick={copyEmail}>
                <Mail size={17} />
                {profile.email}
                {copied ? <Check size={16} /> : <Code2 size={16} />}
              </button>
              <span className="copy-feedback">
                {copied ? "Correo copiado" : "Haz clic para copiar el correo"}
              </span>
              <span className="contact-label location-label">UBICACIÓN</span>
              <p>
                <MapPin size={17} />
                {profile.location}
              </p>
              <div className="socials">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={17} /> WhatsApp{" "}
                  <ExternalLink size={14} />
                </a>
                {profile.github && (
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Github size={17} /> GitHub <ExternalLink size={14} />
                  </a>
                )}
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn <ExternalLink size={14} />
                  </a>
                )}
                {profile.cv && (
                  <a href={profile.cv} download>
                    <Download size={17} /> Descargar CV
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell footer-inner">
          <a className="brand" href="#inicio">
            <span className="brand-symbol">JA</span>
            <span className="brand-dot">.</span>
          </a>
          <p>
            © {new Date().getFullYear()} José Antonio Martínez Alvarado. Hecho
            con React.
          </p>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para contactar a José Antonio"
        title="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      {selected && (
        <div className="modal-backdrop" onMouseDown={() => setSelected(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalles de ${selected.name}`}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
            <span className="section-index">PROYECTO / {selected.number}</span>
            <h2>{selected.name}</h2>
            <p className="modal-summary">{selected.summary}</p>
            <h3>Mi participación</h3>
            <p>{selected.role}</p>
            <h3>Aspectos técnicos</h3>
            <ul>
              {selected.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="pills">
              {selected.stack.map((t) => (
                <span className="pill" key={t}>
                  {t}
                </span>
              ))}
            </div>
            {selected.link && (
              <a
                className="button button-primary modal-action"
                href={selected.link}
                target="_blank"
                rel="noreferrer"
              >
                {selected.linkLabel}
                <ArrowUpRight size={16} />
              </a>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
export default App;
