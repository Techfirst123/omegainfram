import React from 'react'
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

const featureCards = [
  {
    kicker: 'Who We Are',
    title: 'Omega Infram Pvt Ltd',
    description:
      'Omega Infram Pvt Ltd is a premier renewable infrastructure company focused on solar energy, hybrid power systems, and long-term asset delivery. We execute high-stakes projects across utility-scale, commercial, and industrial segments with disciplined engineering, procurement, commissioning, and operations support.',
    statValue: '75 +',
    statLabel: 'Global Footprints',
  },
  {
    kicker: 'Our Focus',
    title: 'Renewable EPC Excellence',
    description:
      'We specialized in solar, hybrid, and asset-support programs where execution quality matters as much as engineering depth. Our turnkey models ensure cost efficiency, speed of delivery, and technical resilience for every mega-watt installed.',
    statValue: '4.8 GW+',
    statLabel: 'Solar capacity delivered',
  },
  {
    kicker: 'Global Presence',
    title: 'Global Delivery Mindset',
    description:
      'Our teams are structured to coordinate multiple geographies, multiple clients, and multiple parallel work packages. We bring localized expertise to global sourcing and international project delivery standards.',
    statValue: '18 +',
    statLabel: 'Countries served',
  },
  {
    kicker: 'Future Forward',
    title: 'Sustainability Mission',
    description:
      'We design renewable infrastructure that reduces carbon intensity, improves energy resilience, and creates durable value for clients and communities. Our mission is to accelerate the transition to a net-zero future.',
    statValue: '1.6 GW',
    statLabel: 'Annual execution capacity',
  },
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

function FeatureCard({ slides, id }: { slides: any[]; id?: string }) {
  const [activeIdx, setActiveIdx] = React.useState(0)

  return (
    <section className="info-section" id={id}>
      <div className="info-card">
        <div className="info-card-rings" aria-hidden="true" />
        <div className="info-card-inner">
          <div className="info-copy-container">
            <div 
              className="info-copy-track" 
              style={{ transform: `translateY(-${activeIdx * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div className="info-slide" key={idx}>
                  <p className="hero-kicker">{slide.kicker}</p>
                  <h1>{slide.title}</h1>
                  <p className="hero-text hero-text-dark">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="info-stat-container">
             <div 
              className="info-stat-track" 
              style={{ transform: `translateY(-${activeIdx * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div className="info-stat-panel" key={idx}>
                  <p>{slide.statLabel}</p>
                  <strong>{slide.statValue}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-dot-rail" aria-hidden="true">
            {slides.map((_, idx) => (
              <span 
                key={idx} 
                className={activeIdx === idx ? 'is-active' : ''} 
                onMouseEnter={() => setActiveIdx(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [showScroll, setShowScroll] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
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
            <div className="hero-intro-text">
              <p className="section-kicker" style={{color: '#fff', opacity: 0.8}}>Welcome to Omega Infram</p>
              <h1 style={{color: '#fff'}}>Pioneering Renewable Energy Solutions</h1>
              <p style={{color: '#fff', opacity: 0.9, maxWidth: '600px', fontSize: '1.2rem'}}>Leading the global transition to sustainable infrastructure through innovation and engineering excellence.</p>
            </div>
          </div>
        </section>

        <div className="card-stack">
          <FeatureCard slides={featureCards} id="about" />
        </div>


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

      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 7-7 7 7M12 19V5" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App
