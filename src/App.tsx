import React from 'react'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  {
    label: 'About Us',
    href: '#about',
    description: 'A premier renewable infrastructure company focused on global delivery and engineering excellence.',
    statValue: '18+',
    statLabel: 'Countries',
    children: ['Who We Are', 'Leadership', 'Global Footprint', 'Execution Model'],
  },
  {
    label: 'Our Businesses',
    href: '#businesses',
    description: 'Turnkey solar EPC, C&I solutions, and hybrid energy architectures for a net-zero future.',
    statValue: '4.8 GW+',
    statLabel: 'Capacity',
    children: [
      'Utility Scale Solar',
      'C&I Solar',
      'Hybrid Energy',
      'O&M Services',
      'International Delivery',
    ],
  },
  {
    label: 'Sustainability',
    href: '#sustainability',
    description: 'Designing infrastructure that reduces carbon intensity and improves energy resilience.',
    statValue: 'Net Zero',
    statLabel: 'Vision',
    children: ['Mission', 'Climate Impact', 'Responsible Delivery'],
  },
  {
    label: 'CSR',
    href: '#csr',
    description: 'Empowering communities through energy access, skilling, and health initiatives.',
    statValue: '120+',
    statLabel: 'Partners',
    children: ['Community Programs', 'Skill Development', 'Outreach'],
  },
  {
    label: 'Investors',
    href: '#investors',
    description: 'Transparent reporting and disciplined governance for long-term capital confidence.',
    statValue: 'Trusted',
    statLabel: 'Governance',
    children: ['Overview', 'Governance', 'Project Pipeline'],
  },
  {
    label: 'News & Media',
    href: '#news',
    description: 'Latest updates from Omega Infram on multi-site rollouts and sourcing partnerships.',
    statValue: 'Latest',
    statLabel: 'Updates',
    children: ['Updates', 'Press Releases', 'Announcements'],
  },
  {
    label: 'Careers',
    href: '#careers',
    description: 'Join teams shaping the future of solar and renewable infrastructure programs.',
    statValue: 'Join Us',
    statLabel: 'Growth',
    children: ['Life at Omega', 'Open Roles', 'Opportunities'],
  },
  {
    label: 'Contact Us',
    href: '#contact',
    description: 'Connect with our corporate office or investor desk for business enquiries.',
    statValue: '24/7',
    statLabel: 'Support',
    children: ['Corporate Office', 'Enquiries', 'Investor Desk'],
  },
]

function MegaMenuCard({ item }: { item: any }) {
  return (
    <div className="mega-menu" role="menu" aria-label={`${item.label} mega menu`}>
      <div className="mega-menu-inner">
        <div className="mega-menu-rings" aria-hidden="true" />
        <div className="mega-menu-grid">
          <div className="mega-menu-content">
            <p className="mega-menu-kicker">{item.label}</p>
            <h3>{item.label}</h3>
            <p className="mega-menu-description">{item.description}</p>
            <div className="mega-menu-links">
              {item.children.map((child: string) => (
                <a key={child} href={item.href} role="menuitem">
                  {child}
                </a>
              ))}
            </div>
          </div>
          <div className="mega-menu-stat">
            <p>{item.statLabel}</p>
            <strong>{item.statValue}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

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
    statValue: '6+',
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

interface BusinessStream {
  title: string;
  description: string;
  accent: string;
  images: string[];
}

const businessStreams: BusinessStream[] = [
  {
    title: 'Solar Energy',
    description: 'One of the most trusted solar energy players in both domestic and international markets, with in-house capabilities for design, engineering, manufacturing, testing, installation, and commissioning to execute large-size turnkey projects.',
    accent: 'sunrise',
    images: ['/utility-scale-solar.jpg', '/ci-solar.png', '/hybrid-energy.png'],
  },
  {
    title: 'Infrastructure',
    description: 'Designing and building the core assets that drive economic growth, from highways to smart city architectures with focus on efficiency and sustainability.',
    accent: 'sunrise',
    images: ['/international-delivery.png', '/solar-carports.jpg'],
  },
  {
    title: 'Oil & Gas',
    description: 'Specialized engineering and project management for upstream and downstream operations in the energy sector.',
    accent: 'sky',
    images: ['/ci-solar.png', '/utility-scale-solar.jpg'],
  },
  {
    title: 'Manufacturing Plants',
    description: 'Optimized industrial facility design and construction for high-performance manufacturing environments.',
    accent: 'leaf',
    images: ['/om-services.jpg', '/solar-carports.jpg'],
  },
  {
    title: 'Biomass Plants',
    description: 'Renewable energy solutions through advanced biomass conversion technologies and sustainable plant engineering.',
    accent: 'slate',
    images: ['/hybrid-energy.png', '/utility-scale-solar.jpg'],
  },
  {
    title: 'E-Commerce',
    description: 'Specialized logistics and technology infrastructure for rapid delivery and automated retail operations.',
    accent: 'sky',
    images: ['/international-delivery.png', '/ci-solar.png'],
  }
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
    lines: ['348,DLF Prime Towers,Okhla Phase-1,New Delhi -110020', 'ph-011-41630318'],
  },
  {
    title: 'Registered Office',
    lines: ['348,DLF Prime Towers,Okhla Phase-1,New Delhi -110020', 'ph-011-41630318'],
  },
  {
    title: 'Business Enquiries',
    lines: ['info@omegainfram.com', 'ph-011-41630318'],
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
  const [activeStreamIdx, setActiveStreamIdx] = React.useState(0)
  const [activeImageIdx, setActiveImageIdx] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % businessStreams[activeStreamIdx].images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [activeStreamIdx])

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
              {item.children ? <MegaMenuCard item={item} /> : null}
            </div>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-solar-power-station-in-a-field-27848-large.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-intro-text">
              <p className="section-kicker">Welcome to Omega Infram</p>
              <h1>Pioneering Renewable Energy Solutions</h1>
              <p>Leading the global transition to sustainable infrastructure through innovation and engineering excellence.</p>

              <div className="hero-cta">
                <a href="#contact" className="hero-primary-btn">
                  Get Consultation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#about" className="hero-secondary-btn">Our Approach</a>
              </div>
            </div>
          </div>
        </section>

        <div className="card-stack">
          <FeatureCard slides={featureCards} id="about" />
        </div>


        <section className="business-section section-shell" id="businesses">
          <div className="section-head">
            <p className="section-kicker">BUSINESS</p>
            <h2>Our Business Streams</h2>
          </div>

          <div className="business-tabs" aria-label="Business categories">
            {businessStreams.map((stream, idx) => (
              <span
                key={stream.title}
                className={activeStreamIdx === idx ? 'is-active' : ''}
                onClick={() => {
                  setActiveStreamIdx(idx)
                  setActiveImageIdx(0)
                }}
              >
                {stream.title}
              </span>
            ))}
          </div>

          <div className="business-feature">
            <div className="business-feature-content">
              <h3>{businessStreams[activeStreamIdx].title}</h3>
              <p>{businessStreams[activeStreamIdx].description}</p>
              <a href="#contact" className="know-more-outline">
                KNOW MORE
              </a>
            </div>
            <div className="business-feature-media">
              {businessStreams[activeStreamIdx].images.map((img, idx) => (
                <div
                  key={img + idx}
                  className={`business-feature-slide ${activeImageIdx === idx ? 'is-active' : ''}`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
              <div className="business-feature-dots">
                {businessStreams[activeStreamIdx].images.map((_, idx) => (
                  <span
                    key={idx}
                    className={activeImageIdx === idx ? 'is-active' : ''}
                    onClick={() => setActiveImageIdx(idx)}
                  />
                ))}
              </div>
            </div>
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
