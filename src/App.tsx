import heroVideo from '../asset/istockphoto-1667456740-640_adpp_is-DW5QRCR8.mp4'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  {
    label: 'About Us',
    href: '#about',
    children: ['Who We Are', 'Leadership Overview', 'Global Footprint', 'Execution Model'],
  },
  {
    label: 'Our Businesses',
    href: '#businesses',
    children: [
      'Utility Scale Solar',
      'C&I Solar',
      'Hybrid Energy',
      'O&M Services',
      'Solar Carports & Rooftops',
      'International Project Delivery',
    ],
  },
  {
    label: 'Sustainability',
    href: '#sustainability',
    children: ['Sustainability Mission', 'Climate Impact', 'Responsible Delivery'],
  },
  {
    label: 'CSR',
    href: '#csr',
    children: ['Community Programs', 'Skill Development', 'Health & Safety Outreach'],
  },
  {
    label: 'Investors',
    href: '#investors',
    children: ['Investor Overview', 'Governance', 'Project Pipeline'],
  },
  {
    label: 'News & Media',
    href: '#news',
    children: ['Latest Updates', 'Press Releases', 'Project Announcements'],
  },
  {
    label: 'Careers',
    href: '#careers',
    children: ['Life at Omega', 'Open Roles', 'Graduate Opportunities'],
  },
  {
    label: 'Contact Us',
    href: '#contact',
    children: ['Corporate Office', 'Business Enquiries', 'Investor Desk'],
  },
]

const whoWeArePanels = [
  {
    title: 'Renewable EPC Focus',
    text: 'We specialize in solar, hybrid, and asset-support programs where execution quality matters as much as engineering depth.',
  },
  {
    title: 'Global Delivery Mindset',
    text: 'Our teams are structured to coordinate multiple geographies, multiple clients, and multiple parallel work packages.',
  },
  {
    title: 'Lifecycle Partnership',
    text: 'From concept and procurement through commissioning and O&M, we stay engaged across the project life cycle.',
  },
]

const achievements = [
  { type: 'Milestone', value: '4.8 GW+', label: 'Solar capacity delivered and under execution across utility and C&I programs' },
  { type: 'Current Projects', value: '38+', label: 'Active projects progressing across rooftops, ground-mount sites, and hybrid packages' },
  { type: 'Milestone', value: '18 Countries', label: 'International delivery footprint supported through regional partnerships and global sourcing' },
  { type: 'Current Projects', value: '14 Cells', label: 'Parallel delivery cells coordinating engineering, procurement, execution, and commissioning' },
  { type: 'Milestone', value: '120+', label: 'Clients, partners, and institutional stakeholders served through renewable infrastructure programs' },
  { type: 'Current Projects', value: '1.6 GW', label: 'Near-term annual execution capacity aligned to current project pipeline commitments' },
]

const businessStreams = [
  {
    title: 'Utility Scale Solar',
    description:
      'Turnkey solar EPC for large generation parks with engineering, procurement, grid integration, commissioning, and handover under a single governance model.',
    accent: 'sunrise',
  },
  {
    title: 'C&I Solar',
    description:
      'Distributed solar portfolios for manufacturing campuses, logistics parks, institutions, and commercial real estate looking to lower energy costs and emissions.',
    accent: 'sky',
  },
  {
    title: 'Hybrid Energy',
    description:
      'Integrated solar, storage, and backup architectures engineered for high uptime, peak shaving, and more resilient energy supply in demanding environments.',
    accent: 'leaf',
  },
  {
    title: 'O&M Services',
    description:
      'Lifecycle asset support with preventive maintenance, performance analytics, fault response, and long-term yield optimization for operating plants.',
    accent: 'slate',
  },
  {
    title: 'Solar Carports & Rooftops',
    description:
      'Design-build solar systems for rooftops, mobility hubs, and parking structures where space efficiency and aesthetics matter alongside output.',
    accent: 'sunrise',
  },
  {
    title: 'International Project Delivery',
    description:
      'Cross-border execution support for developers and investors who need a disciplined partner capable of handling multiple stakeholders and concurrent sites.',
    accent: 'sky',
  },
]

const highlights = [
  {
    title: 'Sustainability Mission',
    description:
      'We design renewable infrastructure that reduces carbon intensity, improves energy resilience, and creates durable value for clients and communities.',
    cta: 'Know More',
  },
  {
    title: 'CSR Commitments',
    description:
      'Our community initiatives focus on energy access, skilling, workplace safety awareness, and localized support around project geographies.',
    cta: 'View Programs',
  },
  {
    title: 'Investor Confidence',
    description:
      'We prioritize transparent reporting, controlled delivery, and portfolio-quality execution that supports long-term capital confidence.',
    cta: 'Investor Desk',
  },
]

const newsItems = [
  {
    title: 'Omega expands multi-site industrial solar rollout across western India',
    meta: 'Project Update',
  },
  {
    title: 'New hybrid execution framework launched for storage-linked renewable assets',
    meta: 'Corporate Announcement',
  },
  {
    title: 'Omega strengthens global sourcing partnerships for module and BOS supply',
    meta: 'Media Release',
  },
]

const footerColumns = [
  {
    title: 'Corporate Office',
    lines: ['Omega Infram Pvt Ltd', 'Renewable Projects Division', 'Mumbai, Maharashtra, India'],
  },
  {
    title: 'Registered Office',
    lines: ['Omega Infram Pvt Ltd', 'Ahmedabad, Gujarat, India'],
  },
  {
    title: 'Business Enquiries',
    lines: ['hello@omegainfram.com', '+91 00000 00000'],
  },
  {
    title: 'Investors',
    lines: ['investors@omegainfram.com', 'Governance, disclosures, and updates'],
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand-block" href="#home" aria-label="Omega Infram home">
          <div className="brand-stack">
            <img className="brand-logo" src="/logo.png" alt="Omega Infram logo" />
            <p className="brand-company-name">omega infram pvt ltd</p>
          </div>
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <a href={item.href}>{item.label}</a>
              {item.children ? (
                <div className="submenu" role="menu" aria-label={`${item.label} submenu`}>
                  <div className="submenu-inner">
                    <p className="submenu-title">{item.label}</p>
                    <div className="submenu-links">
                      {item.children.map((child) => (
                        <a key={child} href={item.href} role="menuitem">
                          {child}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-card">
              <div className="hero-card-rings" aria-hidden="true" />
              <div className="hero-card-inner">
                <div className="hero-copy">
                  <p className="section-kicker hero-kicker">Who We Are</p>
                  <h1>Omega Infram Pvt Ltd</h1>
                  <p className="hero-text hero-text-dark">
                    Omega Infram Pvt Ltd is a renewable infrastructure company focused on solar energy, hybrid systems, and
                    long-term asset delivery. We execute projects across utility-scale, commercial, and industrial segments
                    with disciplined engineering, procurement, commissioning, and operations support.
                  </p>
                </div>

                <div className="hero-stat-panel">
                  <p>Global Footprints</p>
                  <strong>18+</strong>
                </div>

                <div className="hero-dot-rail" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span className="is-active" />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="section-head about-head">
            <p className="section-kicker">Who We Are</p>
            <h2>Built to deliver renewable infrastructure with scale, speed, and disciplined governance.</h2>
          </div>

          <div className="who-panel-grid">
            {whoWeArePanels.map((panel) => (
              <article className="who-panel-card" key={panel.title}>
                <p className="section-kicker">Who We Are</p>
                <h3>{panel.title}</h3>
                <p>{panel.text}</p>
              </article>
            ))}
          </div>

          <div className="achievements-strip">
            <div className="achievements-track">
              {[...achievements, ...achievements].map((item, index) => (
                <article className="achievement-card" key={`${item.label}-${index}`}>
                  <span>{item.type}</span>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="achievement-summary">
            {achievements.slice(0, 2).map((item) => (
              <article className="summary-card" key={item.label}>
                <p>{item.type}</p>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="business-section section-shell" id="businesses">
          <div className="section-head">
            <p className="section-kicker">Business</p>
            <h2>Our Business Streams</h2>
          </div>

          <div className="business-tabs" aria-label="Business categories">
            {businessStreams.map((stream) => (
              <span key={stream.title}>{stream.title}</span>
            ))}
          </div>

          <div className="business-grid">
            {businessStreams.map((stream) => (
              <article className={`business-card business-card--${stream.accent}`} key={stream.title}>
                <div className="business-card-media" />
                <div className="business-card-body">
                  <h3>{stream.title}</h3>
                  <p>{stream.description}</p>
                  <a href="#contact">Know More</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="focus-section section-shell" id="sustainability">
          <div className="feature-block">
            <div className="feature-copy">
              <p className="section-kicker">Sustainability</p>
              <h2>Sustainability Mission</h2>
              <p>
                We continuously work to make our services more sustainable by enabling clean power generation, better asset
                efficiency, safer project execution, and more responsible long-term infrastructure outcomes.
              </p>
              <a href="#contact">Know More</a>
            </div>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title} id={item.title === 'CSR Commitments' ? 'csr' : item.title === 'Investor Confidence' ? 'investors' : undefined}>
                <p className="section-kicker">{item.title}</p>
                <p>{item.description}</p>
                <a href="#contact">{item.cta}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="news-section section-shell" id="news">
          <div className="section-head">
            <p className="section-kicker">News &amp; Media</p>
            <h2>Recent updates from Omega Infram</h2>
          </div>

          <div className="news-grid">
            {newsItems.map((item) => (
              <article className="news-card" key={item.title}>
                <span>{item.meta}</span>
                <h3>{item.title}</h3>
                <a href="#contact">Read More</a>
              </article>
            ))}
          </div>
        </section>

        <section className="careers-section section-shell" id="careers">
          <div className="careers-panel">
            <div>
              <p className="section-kicker">Careers</p>
              <h2>Build a better future with us</h2>
              <p>
                Join teams shaping solar and renewable infrastructure programs across engineering, project controls,
                procurement, commissioning, and operations.
              </p>
            </div>
            <a className="primary-link" href="#contact">
              Explore Careers
            </a>
          </div>
        </section>

        <footer className="site-footer section-shell" id="contact">
          <div className="footer-top">
            <div className="footer-brand">
              <img className="footer-logo" src="/logo.png" alt="Omega Infram logo" />
              <div>
                <p className="section-kicker">Omega Infram Pvt Ltd</p>
                <h2>Renewable infrastructure with global delivery intent.</h2>
              </div>
            </div>

            <a className="secondary-link" href="mailto:hello@omegainfram.com">
              Contact Us
            </a>
          </div>

          <div className="footer-columns">
            {footerColumns.map((column) => (
              <article className="footer-column" key={column.title}>
                <h3>{column.title}</h3>
                {column.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </article>
            ))}
          </div>

          <div className="footer-bottom">
            <div className="footer-socials">
              <a href="#home">LinkedIn</a>
              <a href="#home">YouTube</a>
              <a href="#home">Instagram</a>
              <a href="#home">Facebook</a>
            </div>
            <p>Copyright © 2026 Omega Infram Pvt Ltd</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
