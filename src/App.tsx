import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
const queryClient = new QueryClient();
const skills = [
  'React.js',
  'React Native',
  'Expo',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'HTML / CSS',
  'MUI',
  'Tailwind CSS',
  'Redux',
  'TanStack Query',
  'REST APIs',
  'GraphQL',
  'Git',
  'Android releases',
];
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    document.title = 'Rajkumar Ravichandran — Frontend Engineer';
    const description =
      document.querySelector('meta[name="description"]') ??
      document.createElement('meta');
    description.setAttribute('name', 'description');
    description.setAttribute(
      'content',
      'Rajkumar Ravichandran is a frontend engineer building web and mobile products from Coimbatore, India.',
    );
    document.head.appendChild(description);
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const copyEmail = async () => {
    await navigator.clipboard?.writeText('kraj11752@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="portfolio-shell" data-testid="portfolio-page">
      <header className="site-nav">
        <div className="container-wide nav-inner">
          <button
            className="brand-mark"
            onClick={() => scrollTo('top')}
            aria-label="Back to top"
            data-testid="button-brand-home"
          >
            <span className="brand-stamp">RR</span>
            <span className="brand-copy">
              <span className="brand-name">Rajkumar Ravichandran</span>
              <span className="brand-sub">frontend engineer</span>
            </span>
          </button>
          <nav className="nav-links" aria-label="Primary navigation">
            <button
              className="nav-link"
              onClick={() => scrollTo('about')}
              data-testid="link-nav-about"
            >
              About
            </button>
            <button
              className="nav-link"
              onClick={() => scrollTo('work')}
              data-testid="link-nav-work"
            >
              Projects
            </button>
            <button
              className="nav-link"
              onClick={() => scrollTo('experience')}
              data-testid="link-nav-experience"
            >
              Experience
            </button>
            <button
              className="nav-link"
              onClick={() => scrollTo('contact')}
              data-testid="link-nav-contact"
            >
              Contact
            </button>
          </nav>
          <a
            className="nav-resume"
            href="/resume/Rajkumar_Ravichandran_Resume.docx"
            download="Rajkumar_Ravichandran_Resume.docx"
            data-testid="link-nav-resume"
          >
            Download resume <Download size={13} />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {menuOpen && (
            <nav className="mobile-menu" aria-label="Mobile navigation">
              <button
                className="nav-link"
                onClick={() => scrollTo('about')}
                data-testid="link-mobile-about"
              >
                About
              </button>
              <button
                className="nav-link"
                onClick={() => scrollTo('work')}
                data-testid="link-mobile-work"
              >
                Projects
              </button>
              <button
                className="nav-link"
                onClick={() => scrollTo('experience')}
                data-testid="link-mobile-experience"
              >
                Experience
              </button>
              <button
                className="nav-link"
                onClick={() => scrollTo('contact')}
                data-testid="link-mobile-contact"
              >
                Contact
              </button>
            </nav>
          )}
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="container-wide hero-grid">
            <div className="reveal">
              <div className="eyebrow">
                frontend engineer · Coimbatore, India
              </div>
              <h1 className="hero-title" data-testid="text-hero-title">
                I build web and <em>mobile products.</em>
              </h1>
              <p className="hero-copy">
                I am Rajkumar, a frontend engineer with 3+ years of experience.
                I turn product ideas into clear, reliable screens with React,
                TypeScript, Next.js and React Native.
              </p>
              <div className="hero-actions">
                <button
                  className="button-primary"
                  onClick={() => scrollTo('work')}
                  data-testid="button-hero-work"
                >
                  See my projects <ArrowDownRight size={15} />
                </button>
                <button
                  className="button-quiet"
                  onClick={() => scrollTo('contact')}
                  data-testid="button-hero-contact"
                >
                  Get in touch <ArrowUpRight size={15} />
                </button>
              </div>
              <div className="hero-meta">
                <span className="meta-rule" />
                3+ years making production web and mobile products
              </div>
            </div>
            <aside
              className="hero-visual reveal delay-2"
              aria-label="Frontend engineering snapshot"
            >
              <div className="hero-visual-top">
                <span>frontend / 01</span>
                <span className="hero-status">
                  <i /> building
                </span>
              </div>
              <div className="hero-visual-title">
                From idea
                <br />
                <em>to interface.</em>
              </div>
              <div className="hero-screen" aria-hidden="true">
                <div className="hero-screen-bar">
                  <span>product flow</span>
                  <span>03 screens</span>
                </div>
                <div className="hero-screen-body">
                  <div className="hero-screen-sidebar">
                    <span className="is-active" />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="hero-screen-main">
                    <span className="hero-screen-label">clear flows</span>
                    <strong>made to move</strong>
                    <div className="hero-screen-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-visual-foot">
                <span>React · TypeScript · Expo</span>
                <span>03+ yrs</span>
              </div>
            </aside>
          </div>
        </section>
        <section className="section" id="about">
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="section-index">01 / about</div>
              <div>
                <h2 className="section-title">
                  A practical approach to <em>frontend work.</em>
                </h2>
                <p className="section-intro">
                  I focus on making products easy for people to use and easy
                  for teams to keep improving.
                </p>
              </div>
            </div>
            <div className="about-layout">
              <div className="reveal delay-1">
                <p className="about-lede">
                  Good frontend work is the part that makes a product feel{' '}
                  <span className="soft">straightforward.</span>
                </p>
                <div className="note-card">
                  <p>
                    I care about the small things: a useful empty state, a clear
                    error and a screen that feels right on a phone.
                  </p>
                </div>
              </div>
              <article
                className="role-card reveal delay-2"
                data-testid="card-current-role"
              >
                <div className="role-top">
                  <div>
                    <div className="role-company">Stairs7 Solutions</div>
                    <div
                      className="mono"
                      style={{
                        fontSize: '9px',
                        color: 'hsl(var(--primary))',
                        marginTop: '6px',
                      }}
                    >
                      frontend engineering · individual contributor
                    </div>
                  </div>
                  <div className="role-date">
                    AUG 2024
                    <br />— PRESENT
                  </div>
                </div>
                <h3>What I do day to day</h3>
                <p>
                  Hands-on frontend engineering and UI architecture across
                  production SaaS and enterprise applications.
                </p>
                <ul className="role-points">
                  <li>
                    Build with React, TypeScript, Next.js, MUI, Tailwind, REST
                    and GraphQL.
                  </li>
                  <li>
                    Work with TanStack Query and Redux for connected product
                    experiences.
                  </li>
                  <li>
                    Take part in planning, code reviews, pairing, releases and
                    production debugging.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="section work-section" id="work">
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="section-index">02 / projects</div>
              <div>
                <h2 className="section-title">
                  A few things I have <em>worked on.</em>
                </h2>
                <p className="section-intro">
                  Real products and side projects, with a short note on what
                  each one does. Open a project to visit its live site.
                </p>
              </div>
            </div>
            <div className="project-list">
              <a
                className="project-feature reveal delay-1"
                href="https://www.aptster.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Aptster website in a new tab"
                data-testid="link-project-aptster"
              >
                <div className="project-copy">
                  <div>
                    <div className="project-kicker">
                      01 · client project / Techoedge Corporation
                    </div>
                    <h3 className="project-title">Aptster</h3>
                    <p className="project-description">
                      A community platform for apartment residents, local
                      businesses and property teams. I worked on the web app
                      and its React Native / Expo mobile app, including
                      sign-in, community, marketplace, announcements,
                      maintenance and payment features.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">React</span>
                      <span className="project-tag">
                        React Native / Expo
                      </span>
                      <span className="project-tag">
                        multiple user roles
                      </span>
                    </div>
                  </div>
                  <span className="project-link">
                    Open project <ExternalLink size={13} />
                  </span>
                </div>
                <div className="project-preview">
                  <img
                    src="/previews/aptster.png"
                    alt="Screenshot of the Aptster community platform website"
                    data-testid="img-preview-aptster"
                  />
                </div>
              </a>
              <a
                className="project-feature reveal delay-2"
                href="https://www.stairs7solution.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Stairs7 Solutions website in a new tab"
                data-testid="link-project-stairs7"
              >
                <div className="project-copy">
                  <div>
                    <div className="project-kicker">
                      02 · current company / Stairs7 Solutions
                    </div>
                    <h3 className="project-title">Stairs7 Solutions</h3>
                    <p className="project-description">
                      A technology training and software company. I work
                      hands-on on frontend engineering and UI architecture for
                      its web products and software work.
                    </p>
                    <div className="project-tags">
                      <span className="project-tag">React</span>
                      <span className="project-tag">TypeScript</span>
                      <span className="project-tag">
                        software + training
                      </span>
                    </div>
                  </div>
                  <span className="project-link">
                    Open project <ExternalLink size={13} />
                  </span>
                </div>
                <div className="project-preview">
                  <img
                    src="/previews/stairs7.png"
                    alt="Screenshot of the Stairs7 Solutions website"
                    data-testid="img-preview-stairs7"
                  />
                </div>
              </a>
              <div className="project-grid">
                <a
                  className="project-card plain reveal delay-1"
                  href="https://sri-balaji-cars-page-z842-pazkigan5-raj98-coders-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Sri Balaji Self Drive project in a new tab"
                  data-testid="link-project-sri-balaji"
                >
                  <div className="card-heading">
                    <h3>Sri Balaji Self Drive</h3>
                    <ArrowUpRight className="card-arrow" size={20} />
                  </div>
                  <div>
                    <p className="project-description">
                      A vehicle booking project that helps customers view cars
                      and make a booking.
                    </p>
                    <span className="project-link">
                      Open project <ExternalLink size={13} />
                    </span>
                  </div>
                </a>
                <a
                  className="project-card reveal delay-2"
                  href="https://meal-app-repo-wls60b7nj-raj98-coders-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Meal Engine project in a new tab"
                  data-testid="link-project-meal-engine"
                >
                  <div className="card-heading">
                    <h3>Meal Engine</h3>
                    <ArrowUpRight className="card-arrow" size={20} />
                  </div>
                  <div>
                    <p className="project-description">
                      A meal discovery project with filters to help people find
                      something to cook or order quickly.
                    </p>
                    <span className="project-link">
                      Open project <ExternalLink size={13} />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="skills">
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="section-index">03 / skills</div>
              <div>
                <h2 className="section-title">
                  The tools I use to <em>do the work.</em>
                </h2>
                <p className="section-intro">
                  A straightforward toolkit for building responsive, connected
                  web and mobile products.
                </p>
              </div>
            </div>
            <div className="skills-layout">
              <div className="skills-copy reveal delay-1">
                <p>
                  I work across screens, data and delivery — from the first
                  component to the production release.
                </p>
              </div>
              <div
                className="skill-cloud reveal delay-2"
                aria-label="Skills list"
                data-testid="list-skills"
              >
                {skills.map((skill) => (
                  <span
                    className="skill-chip"
                    key={skill}
                    data-testid={`skill-${skill
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section experience-section" id="experience">
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="section-index">04 / experience</div>
              <div>
                <h2 className="section-title">
                  Where I have <em>grown.</em>
                </h2>
                <p className="section-intro">
                  I have moved from building individual screens to owning
                  larger frontend decisions across web and mobile products.
                </p>
              </div>
            </div>
            <div className="experience-grid">
              <p className="experience-note reveal delay-1">
                My work at Stairs7 is Building production-ready frontend experiences with a focus on scalable UI architecture, performance, responsive design and maintainable engineering practices.
              </p>
              <div className="timeline reveal delay-2">
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">Aug 2024 — present</div>
                  <h3>Stairs7 Solutions Private Limited</h3>
                  <p>
                    Frontend Engineer working hands-on across React,
                    TypeScript, Next.js, React Native, UI architecture, technical planning,
                    reviews, pairing and production debugging.
                  </p>
                </article>
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">Jan 2023 — Aug 2024</div>
                  <h3>Stairs7 · pre-incorporation phase</h3>
                  <p>
                    Built production React, TypeScript and JavaScript
                    frontends, reusable UI and API-driven workflows; grew into
                    architecture, performance and feature ownership.
                  </p>
                </article>
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">Sep 2022 — Dec 2022</div>
                  <h3>Amazon</h3>
                  <p>
                    Worked as a Virtual Customer Associate before moving into
                    frontend software development.
                  </p>
                </article>
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">May 2021 — Aug 2022</div>
                  <h3>Suguna Pips</h3>
                  <p>
                    Worked as an Admission Counselor, helping students with
                    course information and admissions coordination.
                  </p>
                </article>
              </div>
            </div>
            <div className="education-strip reveal delay-1">
              <div className="education-label">
                education / foundations
              </div>
              <div className="education-item">
                <h3>B.E. Computer Science &amp; Engineering</h3>
                <p>
                  Sri Krishna College of Engineering and Technology
                  <br />
                  CGPA 8.02
                </p>
              </div>
              <div className="education-item">
                <h3>Diploma in Computer Engineering</h3>
                <p>PSG College of Technology</p>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="container-wide contact-inner">
            <div className="contact-layout">
              <div className="contact-main">
                <div className="contact-kicker">05 / say hello</div>
                <h2
                  className="contact-title"
                  data-testid="text-contact-title"
                >
                  <span>Let's work</span>
                  <span>on something</span>
                  <span>useful.</span>
                </h2>
                <p className="contact-copy">
                  I am open to frontend engineering roles and good projects in
                  Bengaluru, Chennai, Hyderabad, Pune, remote, or relocation.
                </p>
                <div className="contact-links">
                  <button
                    className="copy-email"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    data-testid="button-copy-email"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'email copied' : 'kraj11752@gmail.com'}
                  </button>
                  <a
                    className="contact-link"
                    href="https://linkedin.com/in/rajkumar-ravichandran-90301a145"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-linkedin"
                  >
                    LinkedIn <ExternalLink size={13} />
                  </a>
                  <a
                    className="contact-link"
                    href="/resume/Rajkumar_Ravichandran_Resume.docx"
                    download="Rajkumar_Ravichandran_Resume.docx"
                    data-testid="link-resume"
                  >
                    Download resume <Download size={13} />
                  </a>
                </div>
              </div>
              <aside
                className="contact-card reveal delay-2"
                aria-label="Current availability"
              >
                <div className="contact-card-top">
                  <span>available for work</span>
                  <span className="contact-card-status">
                    <i /> open
                  </span>
                </div>
                <h3>
                  Available for
                  <br />
                  <em>useful work.</em>
                </h3>
                <div className="contact-card-list">
                  <div>
                    <span>01</span>
                    <p>Full-time frontend roles</p>
                  </div>
                  <div>
                    <span>02</span>
                    <p>Teams building useful products</p>
                  </div>
                  <div>
                    <span>03</span>
                    <p>Remote work or relocation</p>
                  </div>
                </div>
                <p className="contact-card-note">
                  Tell me about your project or role and how I can help.
                </p>
              </aside>
            </div>
            <footer className="contact-foot">
              <span>Rajkumar Ravichandran · frontend engineer</span>
              <span>Coimbatore, Tamil Nadu · 2025</span>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}
function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
export default App;