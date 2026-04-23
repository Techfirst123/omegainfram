import React from 'react'
import { Routes, Route, useNavigate, useParams, Link, useLocation } from 'react-router-dom'
import './App.css'

const companyNameMap: Record<string, string> = {
  'path-found-biogas-pvt-ltd': 'Path Found Biogas pvt ltd',
  'helios-solar-tech-power-solution-pvt-ltd': 'Helios Solar Tech Power solution pvt ltd'
};

function CompanyRouteWrapper() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const companyName = slug ? companyNameMap[slug] : null;

  if (!companyName) return <div style={{ padding: '100px', textAlign: 'center' }}>Company not found</div>;

  return <CompanyDetailView companyName={companyName} onBack={() => navigate('/')} />;
}

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
    description: 'Development and Turnkey solar EPC, C&I solutions, and hybrid energy architectures for a net-zero future.',
    statValue: '10+',
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
    label: 'Our Companies',
    href: '#companies',
    description: 'Explore the specialized divisions and companies within the Omega Group.',
    statValue: '10+',
    statLabel: 'Divisions',
    children: ['Path Found Biogas pvt ltd', 'Helios Solar Tech Power solution pvt ltd', 'DS Buildwelll', 'Omega Infra Mining Co.LLP', 'SB Enterprises', 'Progressive Pharma Corporation', 'White Paper law Consultancy', 'Banna Infratech LLP', 'Path Found Infrastructure', 'Samaira Shadab Infrastructure LLP'],
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

function MegaMenuCard({ item, onSelectCompany }: { item: any; onSelectCompany?: (name: string, isCompany: boolean) => void }) {
  const isCompanyCategory = item.label === 'Our Companies'
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
                <a 
                  key={child} 
                  href={isCompanyCategory ? '#' : item.href} 
                  role="menuitem"
                  onClick={(e) => {
                    if (isCompanyCategory && onSelectCompany) {
                      e.preventDefault()
                      onSelectCompany(child, true)
                    } else if (onSelectCompany) {
                      onSelectCompany(child, false)
                    }
                  }}
                >
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
    kicker: 'Who We Are?',
    description:
      'Omega Group is an established holding company that has its roots since 2003,having various industries linked by the years.The Company has been ascertained by (Sadab Ansari),The Founder Chairman who is from Bihar.For the last 23 years,We have been managing a decent reputation in the markets globally by providing best quality work in a range of fields of infrastructure considering all the environmental and social factors.Effectively,we have been proficient to give the best results in terms of EPC services',
    statValue: '75 +',
    statLabel: 'Global Footprints',
  },
  {
    kicker: 'Our Focus',
    description:
      'We specialized in solar, hybrid, and asset-support programs where execution quality matters as much as engineering depth. Our turnkey models ensure cost efficiency, speed of delivery, and technical resilience for every mega-watt installed.',
    statValue: '4.8 GW+',
    statLabel: 'Solar capacity delivered',
  },
  {
    kicker: 'Global Presence',
    description:
      'Our teams are structured to coordinate multiple geographies, multiple clients, and multiple parallel work packages. We bring localized expertise to global sourcing and international project delivery standards.',
    statValue: '6+',
    statLabel: 'Countries served',
  },
  {
    kicker: 'Future Forward',
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
    description: 'Development and Turnkey solar EPC, C&I solutions, and hybrid energy architectures for a net-zero future.',
    accent: 'sunrise',
    images: ['/utility-scale-solar.jpg', '/ci-solar.png', '/hybrid-energy.png', '/international-delivery.png'],
  },
  {
    title: 'Infrastructure',
    description: 'Designing and building the core assets that drive economic growth, from highways to smart city architectures with focus on efficiency and sustainability.',
    accent: 'sunrise',
    images: ['/infra-viaduct.jpg', '/infra-construction.jpg', '/infra-machinery.jpg', '/infra-highway.jpg'],
  },
  {
    title: 'Oil & Gas',
    description: 'Specialized engineering and project management for upstream and downstream operations in the energy sector.',
    accent: 'sky',
    images: ['/oilgas-rig.jpg', '/oilgas-pipeline.jpg', '/oilgas-refinery.jpg', '/oilgas-drilling.png'],
  },
  {
    title: 'Manufacturing Plants',
    description: 'Optimized industrial facility design and construction for high-performance manufacturing environments.',
    accent: 'leaf',
    images: ['/mfg-inspector.jpg', '/mfg-welding.png', '/mfg-factory.jpg'],
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

const companiesList = [
  { name: 'Path Found Biogas pvt ltd', desc: 'Waste-to-energy ecosystems and bio-renewable fuels.' },
  { name: 'Helios Solar Tech Power solution pvt ltd', desc: 'High-efficiency solar solutions and smart grids.' },
  { name: 'DS Buildwelll', desc: 'Structural and civil infrastructure works.' },
  { name: 'Omega Infra Mining Co.LLP', desc: 'Sustainable mining and aggregate operations.' },
  { name: 'SB Enterprises', desc: 'Industrial procurement and commercial contracting.' },
  { name: 'Progressive Pharma Corporation', desc: 'Healthcare and pharmaceutical manufacturing.' },
  { name: 'White Paper law Consultancy', desc: 'Corporate legal compliance and strategic advisory.' },
  { name: 'Banna Infratech LLP', desc: 'Public infrastructure and specialized civil projects.' },
  { name: 'Path Found Infrastructure', desc: 'Large-scale national corridors and highway systems.' },
  { name: 'Samaira Shadab Infrastructure LLP', desc: 'Bespoke integrated civic amenities and urban development.' },
];

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

function CompanyDetailView({ companyName, onBack }: { companyName: string, onBack: () => void }) {
  const descriptions: Record<string, string> = {
    'Path Found Biogas pvt ltd': 'PathFound Bigoass Pvt. Ltd. is a forward-thinking solar energy company operating under the umbrella of Omega Group, committed to delivering sustainable and innovative energy solutions. The company focuses on harnessing solar power to provide efficient, reliable, and eco-friendly energy systems for residential, commercial, and industrial applications.\n\nWith a strong emphasis on quality, technology, and long-term performance, PathFound Bigoass Pvt. Ltd. specializes in end-to-end solar solutions — from design and engineering to installation and maintenance. The company aims to contribute to a greener future by reducing carbon footprints and promoting clean energy adoption across India.',
    'Helios Solar Tech Power solution pvt ltd': 'Helios Solar Tech specializes in cutting-edge solar technologies and power solutions, driving the global transition to clean energy with innovative photovoltaic systems and smart grid integration.',
  };

  const companyLogos: Record<string, string> = {
    'Path Found Biogas pvt ltd': '/pathfound-logo.png',
  };

  const defaultDesc = `At ${companyName}, we envision a future where innovation and engineering excellence lead to self-reliance in the ever-evolving industry. Our commitment to excellence bridges the gap between current challenges and sustainable future requirements, fostering growth and development.`;

  const desc = descriptions[companyName] || defaultDesc;
  const logo = companyLogos[companyName];

  const projects: Record<string, any[]> = {
    'Path Found Biogas pvt ltd': [
      {
        image: '/project-sangli.png',
        badge: 'Running Project',
        title: 'SPL Installation - Rajasthan, Sangli',
        stats: [
          { label: 'Capacity', value: '180MW Solar System' },
          { label: 'Scope', value: 'Design, Supply, Installation & Commissioning' },
          { label: 'Approximate Cost', value: '630 Cr' }
        ]
      },
      {
        image: '/solar-carports.jpg', // Replace with the actual image
        badge: 'Running Project',
        title: 'KUSUM A & C - Rajasthan',
        stats: [
          { label: 'Capacity', value: '200MW Solar System' },
          { label: 'Scope', value: 'Design, Supply, Installation & Commissioning' },
          { label: 'Approximate Cost', value: '770 Cr' }
        ]
      },
      {
        image: '/kusum-project.jpg', // Placeholder for the third project image
        badge: 'Running Project',
        title: 'KUSUM A & C - Rajasthan',
        stats: [
          { label: 'Capacity', value: '15 MW Solar System' },
          { label: 'Scope', value: 'Design, Supply, Installation & Commissioning' },
          { label: 'Approximate Cost', value: '65 Cr' }
        ]
      }
    ]
  };
  const companyProjects = projects[companyName];

  return (
    <div className="company-detail-page">
      <div className="company-header-banner">
        <div className="company-header-inner">
          {logo ? (
            <div className="company-logo-container">
              <img src={logo} alt={companyName} className="company-specific-logo" />
            </div>
          ) : (
            <>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px', opacity: 0.9 }}>
                <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
              </svg>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                 <span className="banner-line"></span>
                 <h2>{companyName}</h2>
                 <span className="banner-line"></span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="company-content-wrapper">
        <button onClick={onBack} className="back-btn">&larr; Back to Home</button>
        <div className="company-content">
          <h1 className="company-heading"><span>Empowering</span> Future, Building Excellence</h1>
          {desc.split('\n\n').map((paragraph, index) => (
            <p key={index} className="company-paragraph" style={{ marginBottom: '16px' }}>{paragraph}</p>
          ))}
        </div>
        
        {companyProjects && (
          <div className="project-list">
            {companyProjects.map((project, index) => (
              <div key={index} className={`project-highlight-card ${index % 2 !== 0 ? 'project-reverse' : ''}`}>
                <div className="project-image-side">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info-side">
                  <div className="project-badge">{project.badge || 'Featured Project'}</div>
                  <h3>{project.title}</h3>
                  <div className="project-stats-grid">
                    {project.stats.map((stat: any, idx: number) => (
                      <div key={idx} className="project-stat-box">
                        <span className="stat-label">{stat.label}</span>
                        <strong className="stat-value">{stat.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
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
        <Link className="brand-block" to="/" aria-label="Omega Infram home">
          <div className="brand-stack">
            <img className="brand-logo" src="/logo.png" alt="Omega Infram logo" />
            <p className="brand-company-name">omega infram pvt ltd</p>
          </div>
        </Link>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <a href={item.href.startsWith('#') ? `/${item.href}` : item.href}>{item.label}</a>
              {item.children ? <MegaMenuCard item={item} onSelectCompany={(name, isCompany) => {
                if (isCompany) {
                  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  navigate(`/companies/${slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }} /> : null}
            </div>
          ))}
        </nav>
      </header>

      <Routes>
        <Route path="/companies/:slug" element={
          <main style={{ marginTop: '72px', minHeight: '80vh' }}>
            <CompanyRouteWrapper />
          </main>
        } />
        <Route path="/" element={
          <main>
        <section className="hero-section" id="home">
          <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src="/hero-section-new.mp4" type="video/mp4" />
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


        <section className="business-section" id="businesses">
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

        <section className="companies-section section-shell" id="companies">
          <div className="section-head companies-head">
            <p className="section-kicker">Omega Group</p>
            <h2>Our Companies</h2>
            <p className="section-intro">
              The diverse subsidiaries and specialized entities driving our global operations and engineering excellence.
            </p>
          </div>

          <div className="companies-scrolling-wrapper">
            <div className="companies-marquee">
              {[...companiesList, ...companiesList].map((company, idx) => (
                <div className="company-logo-card" key={company.name + idx}>
                  <div className="company-logo-wrapper">
                    <img
                      className="company-logo-image"
                      src={`https://api.dicebear.com/7.x/shapes/svg?seed=${company.name}&backgroundColor=ffffff`}
                      alt={company.name}
                    />
                  </div>
                  <h4>{company.name}</h4>
                  <p className="company-desc">{company.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sustainability-section section-shell" id="sustainability" style={{ marginTop: '24px' }}>
          <div className="section-head">
            <p className="section-kicker">Sustainability</p>
            <h2>Driving a Net-Zero Future</h2>
            <p className="section-intro">
              We believe that true engineering excellence is measured by its impact on the planet. Omega Group integrates sustainable practices across all verticals to reduce carbon intensity and improve energy resilience globally.
            </p>
          </div>

          <div className="focus-section" style={{ marginTop: '20px' }}>
            <div className="feature-block" style={{
              background: `linear-gradient(180deg, rgba(6, 14, 25, 0.4), rgba(6, 14, 25, 0.8)), url('/utility-scale-solar.jpg') center/cover no-repeat`
            }}>
              <div className="feature-copy">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Environmental Stewardship</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.6', opacity: 0.9 }}>
                  From deploying multi-gigawatt solar pipelines to engineering highly efficient biomass facilities, our mandate is to carefully preserve ecosystems while aggressively expanding the world's renewable energy capacity.
                </p>
                <a href="#contact" style={{ display: 'inline-block', marginTop: '24px', color: '#86efac', textDecoration: 'none', fontWeight: 600 }}>
                  Read our 2026 ESG Report &rarr;
                </a>
              </div>
            </div>
            <div className="highlight-grid">
              <div className="highlight-card summary-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#22c55e', margin: '0 0 12px 0' }}>4.8 GW+</h3>
                <p style={{ fontSize: '1rem', color: '#4a5568', margin: 0 }}>Active renewable energy capacity offsetting millions of tons of CO2 annually.</p>
              </div>
              <div className="highlight-card summary-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#0a84ff', margin: '0 0 12px 0' }}>Net-Zero 2040</h3>
                <p style={{ fontSize: '1rem', color: '#4a5568', margin: 0 }}>Aggressively committed to achieving zero emissions across our entire supply chain.</p>
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

        <footer className="site-footer" id="contact">
          <div className="footer-container">
            <div className="footer-columns">
              <div className="footer-contact-card">
                <h4>Contact Details</h4>
                <ul>
                  <li>
                    <strong>Phone</strong>
                    011-41630318
                  </li>
                  <li>
                    <strong>Business Enquiry</strong>
                    info@omegainfram.com
                  </li>
                  <li>
                    <strong>Location</strong>
                    348, DLF Prime Towers, Okhla Phase-1, New Delhi -110020
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>Copyright © 2026 Omega Infram Pvt Ltd. All rights reserved.</p>
              <div className="footer-socials">
                <a href="#home">LinkedIn</a>
                <a href="#home">Facebook</a>
                <a href="#home">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
        } />
      </Routes>

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
