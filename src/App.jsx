import { useState, useEffect } from 'react'
import {
  profile,
  navLinks,
  projects,
  techStackCategories,
  background,
} from './data/profile'
import {
  IconDownload,
  IconLinkedIn,
  IconGitHub,
  IconMail,
  IconPhone,
  IconArrow,
  IconMenu,
  IconClose,
  IconExternal,
  IconQr,
  CopyEmailButton,
  QrModal,
} from './components/ui'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="portfolio-app">
      {/* ── Fixed Minimal Navigation ───────────────────────── */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-container">
          <a href="#top" className="nav-logo" aria-label="Shrouk Muhammed">
            <span className="logo-initials">SM</span>
            <span className="logo-text">Shrouk Muhammed</span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download="Shrouk-Muhammed-CV.pdf"
              className="nav-btn-cv"
              onClick={() => setMenuOpen(false)}
            >
              <IconDownload size={14} />
              <span>CV</span>
            </a>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* ── 1. HERO SECTION ───────────────────────────────── */}
        <section className="hero-section">
          <div className="wrap hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot" />
                <span>Software Engineer · Cairo, Egypt</span>
              </div>

              <h1 className="hero-name">Shrouk Muhammed</h1>
              <p className="hero-role">Software Engineer</p>

              <blockquote className="hero-quote">
                “{profile.tagline}”
              </blockquote>

              <p className="hero-intro">{profile.intro}</p>

              <div className="hero-actions">
                <a
                  href={profile.cv}
                  download="Shrouk-Muhammed-CV.pdf"
                  className="btn btn-primary"
                >
                  <IconDownload size={16} />
                  <span>Download CV</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <IconLinkedIn size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <IconGitHub size={16} />
                  <span>GitHub</span>
                </a>

                <a href="#contact" className="btn btn-ghost">
                  <span>Contact Me</span>
                  <IconArrow size={14} />
                </a>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-glow" aria-hidden="true" />
              <div className="portrait-container">
                <picture>
                  <source srcSet="./shrouk-portrait.webp" type="image/webp" />
                  <img
                    src="./shrouk-portrait.jpg"
                    alt="Shrouk Muhammed, Software Engineer"
                    className="portrait-image"
                    width="420"
                    height="500"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="portrait-badge">
                  <span className="portrait-dot" />
                  <span>Shrouk Muhammed · Backend &amp; Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. ABOUT SECTION ──────────────────────────────── */}
        <section id="about" className="section-compact about-section">
          <div className="wrap">
            <div className="section-label">About</div>
            <p className="about-text">{profile.about}</p>
          </div>
        </section>

        {/* ── 3. FEATURED WORK SECTION ──────────────────────── */}
        <section id="work" className="section-compact work-section">
          <div className="wrap">
            <div className="work-header">
              <div>
                <div className="section-label">Featured Work</div>
                <h2 className="section-title">
                  HireHub <span className="accent-mint">×</span> RavenACE
                </h2>
              </div>
              <p className="section-desc">
                Two integrated systems forming a unified AI hiring and secure assessment ecosystem.
              </p>
            </div>

            {/* Architecture Seam Hint */}
            <div
              className="architecture-seam-hint"
              role="img"
              aria-label="HireHub connected to RavenACE via Authenticated REST API"
            >
              <div className="seam-node">
                <strong>HireHub</strong>
                <span>Recruitment &amp; ATS</span>
              </div>
              <div className="seam-connector">
                <span className="seam-line" />
                <span className="seam-label">
                  Authenticated REST API · SHA-256 Secret Verification
                </span>
                <span className="seam-line" />
              </div>
              <div className="seam-node">
                <strong>RavenACE</strong>
                <span>Electron Kiosk &amp; Gemini AI</span>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {projects.map((proj) => (
                <article key={proj.name} className="project-card">
                  <div className="project-top">
                    <div className="project-header-row">
                      <span className="project-badge">{proj.badge}</span>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-live-btn"
                          title={`Open ${proj.name} live platform`}
                        >
                          <span>Live Platform</span>
                          <IconExternal size={13} />
                        </a>
                      )}
                    </div>
                    <h3 className="project-name">{proj.name}</h3>
                  </div>

                  <p className="project-desc">{proj.desc}</p>

                  <div className="project-capabilities">
                    <strong className="caps-heading">System Capabilities</strong>
                    <ul className="caps-list">
                      {proj.capabilities.map((cap) => (
                        <li key={cap} className="caps-item">
                          <span className="bullet">›</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-focus">
                    <span className="focus-label">My Engineering Contributions</span>
                    <p className="focus-text">{proj.myFocus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. TECH STACK SECTION ─────────────────────────── */}
        <section id="stack" className="section-compact stack-section">
          <div className="wrap">
            <div className="section-label">Tech Stack</div>
            <h2 className="section-title">Core Technologies &amp; Principles</h2>

            <div className="tech-categories-grid">
              {techStackCategories.map((group) => (
                <div key={group.category} className="tech-category-card">
                  <h3 className="tech-category-title">{group.category}</h3>
                  <div className="tech-category-items">
                    {group.items.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. BACKGROUND SECTION ─────────────────────────── */}
        <section id="background" className="section-compact background-section">
          <div className="wrap">
            <div className="section-label">Background</div>
            <h2 className="section-title">Education &amp; Credentials</h2>

            <div className="background-list">
              {background.map((item) => (
                <div key={item.degree} className="bg-item">
                  <div className="bg-left">
                    <h3 className="bg-degree">{item.degree}</h3>
                    <span className="bg-institution">{item.institution}</span>
                  </div>
                  <div className="bg-right">
                    <p className="bg-detail">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CONTACT SECTION ────────────────────────────── */}
        <section id="contact" className="section-compact contact-section">
          <div className="wrap">
            <div className="contact-main">
              <div className="section-label">Contact</div>
              <h2 className="section-title">Let’s Connect</h2>
              <p className="contact-lede">
                Available for Software Engineering opportunities. Reach out directly via email, phone, or professional networks.
              </p>

              <div className="contact-channels">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <IconMail size={18} />
                  <span>{profile.email}</span>
                </a>

                <a href={`tel:${profile.phoneHref}`} className="contact-link">
                  <IconPhone size={18} />
                  <span>{profile.phone}</span>
                </a>
              </div>

              <div className="contact-action-row">
                <a
                  href={profile.cv}
                  download="Shrouk-Muhammed-CV.pdf"
                  className="btn btn-primary"
                >
                  <IconDownload size={16} />
                  <span>Download CV</span>
                </a>

                <CopyEmailButton />

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <IconLinkedIn size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <IconGitHub size={16} />
                  <span>GitHub</span>
                </a>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setQrOpen(true)}
                  title="Show QR code for mobile scanning"
                >
                  <IconQr size={16} />
                  <span>Scan QR</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Minimal Footer ────────────────────────────────── */}
      <footer className="footer">
        <div className="wrap footer-container">
          <span className="footer-name">Shrouk Muhammed</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} Shrouk Muhammed. Software Engineer · Cairo, Egypt.
          </span>
        </div>
      </footer>

      {/* ── QR Modal (Discreet & Instant for Job Fairs) ────── */}
      <QrModal isOpen={qrOpen} onClose={() => setQrOpen(false)} />
    </div>
  )
}
