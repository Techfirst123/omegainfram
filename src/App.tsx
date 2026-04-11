import heroVideo from '../asset/istockphoto-1667456740-640_adpp_is-DW5QRCR8.mp4'
import './App.css'

const metrics = [
  { value: '4.8 GW+', label: 'Solar capacity delivered and under execution' },
  { value: '38', label: 'Utility, C&I, and hybrid sites across continents' },
  { value: '120+', label: 'Clients, investors, and industrial partners served' },
  { value: '14', label: 'Parallel delivery cells active across global programs' },
]

const services = [
  {
    title: 'Utility-Scale EPC',
    description:
      'Full-scope engineering, procurement, construction, and commissioning for high-output solar parks and grid-connected infrastructure.',
  },
  {
    title: 'C&I Solar Programs',
    description:
      'Distributed portfolios for factories, campuses, logistics parks, and energy-intensive facilities with predictable deployment schedules.',
  },
  {
    title: 'Hybrid & Storage Integration',
    description:
      'Solar, BESS, and grid orchestration designed to stabilize performance, unlock dispatch flexibility, and strengthen energy resilience.',
  },
  {
    title: 'O&M Intelligence',
    description:
      'Performance monitoring, lifecycle maintenance, and digital reporting that keeps assets bankable and operating at peak yield.',
  },
]

const projects = [
  {
    name: 'Sundrift Desert Array',
    location: 'Rajasthan, India',
    capacity: '650 MWp',
    detail: 'Utility-scale solar field built in phased blocks with accelerated grid evacuation planning.',
  },
  {
    name: 'Helios Logistics Roofline',
    location: 'Dubai, UAE',
    capacity: '92 MWp',
    detail: 'Multi-site industrial rooftop rollout for a regional logistics network with unified monitoring.',
  },
  {
    name: 'Atacama Storage Hybrid',
    location: 'Antofagasta, Chile',
    capacity: '310 MWp + 180 MWh',
    detail: 'Solar-plus-storage project engineered for mining reliability and harsh-climate performance.',
  },
  {
    name: 'Blue Coast Port Microgrid',
    location: 'Mombasa, Kenya',
    capacity: '74 MWp',
    detail: 'Port-side clean energy infrastructure supporting marine operations and cold-chain facilities.',
  },
]

const regions = [
  'India',
  'Middle East',
  'Africa',
  'Europe',
  'Latin America',
  'Southeast Asia',
]

const clients = [
  'Independent Power Producers',
  'Industrial Manufacturing Groups',
  'Logistics & Port Operators',
  'Data Center Developers',
  'Public Infrastructure Agencies',
  'Global EPC Partners',
]

const executionTracks = [
  {
    title: 'Central PMO',
    text: 'A single command layer aligns engineering, procurement, site controls, and stakeholder reporting across every geography.',
  },
  {
    title: 'Parallel Delivery Pods',
    text: 'Dedicated teams run multiple packages simultaneously so land readiness, module supply, civil works, and energization keep moving together.',
  },
  {
    title: 'Localized Intelligence',
    text: 'Regional partners and on-ground specialists adapt every project to grid codes, permitting paths, climate, and workforce realities.',
  },
]

const milestones = [
  'Originated as an infrastructure engineering group with a focus on complex energy assets',
  'Expanded into cross-border solar EPC programs and multi-client renewable portfolios',
  'Built a delivery model designed for concurrent project execution without losing governance quality',
  'Now supporting global energy transition programs with solar, storage, and O&M capability',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <img className="brand-logo" src="/logo.png" alt="Omega Infram logo" />
          <div>
            <p className="eyebrow">Omega Infram</p>
            <p className="brand-subtitle">Global Solar Infrastructure</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Capabilities</a>
          <a href="#projects">Projects</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-copy">
              <p className="section-kicker hero-kicker">Solar energy company</p>
              <h1>Building high-performance solar programs across continents, clients, and parallel delivery tracks.</h1>
              <p className="hero-text">
                We deliver utility-scale, commercial, and hybrid solar infrastructure with the governance depth of a
                global EPC partner and the speed of regionally embedded teams.
              </p>

              <div className="hero-actions">
                <a className="primary-link" href="#projects">
                  Explore projects
                </a>
                <a className="secondary-link" href="#contact">
                  Talk to our team
                </a>
              </div>

              <div className="hero-badges" aria-label="Key operating themes">
                <span>Global project footprint</span>
                <span>Multi-client execution</span>
                <span>Concurrent delivery model</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="orbital orbital-one" />
              <div className="orbital orbital-two" />
              <div className="visual-panel panel-core">
                <p>Live portfolio</p>
                <strong>14 Active parallel workstreams</strong>
              </div>
              <div className="visual-panel panel-floating">
                <span>Regions connected</span>
                <strong>6 global clusters</strong>
              </div>
              <div className="sun-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-grid" aria-label="Company metrics">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </article>
          ))}
        </section>

        <section className="story-section" id="about">
          <div className="story-copy">
            <p className="section-kicker">About Omega Infram</p>
            <h2>Engineering excellence with a global footprint and local execution intelligence.</h2>
            <p>
              Inspired by the earlier Omega mock site, this new experience keeps the same global mindset but sharpens the
              message around renewable infrastructure delivery. Our teams coordinate design, procurement, construction,
              and performance optimization across multiple countries at once.
            </p>
            <p>
              That means we can support investors, developers, utilities, and industrial clients who need one partner
              capable of managing multiple projects and multiple stakeholders without losing schedule discipline.
            </p>
          </div>

          <div className="timeline-card">
            <p className="timeline-title">Growth trajectory</p>
            <ul className="timeline-list">
              {milestones.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="section-kicker">Capabilities</p>
            <h2>Services designed for complex solar portfolios and overlapping execution schedules.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Featured projects</p>
              <h2>Selected programs from a globally distributed solar pipeline.</h2>
            </div>
            <p className="section-caption">
              Our portfolio spans desert utility parks, rooftop rollouts, industrial hybrids, and resilient microgrids.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-location">{project.location}</p>
                <h3>{project.name}</h3>
                <strong>{project.capacity}</strong>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="globe-section">
          <div className="map-card">
            <p className="section-kicker">Global footprint</p>
            <h2>Regional presence that keeps decision-making close to the ground.</h2>
            <div className="region-pills">
              {regions.map((region) => (
                <span key={region}>{region}</span>
              ))}
            </div>
          </div>

          <div className="execution-card">
            <p className="section-kicker">Execution model</p>
            <div className="execution-list">
              {executionTracks.map((track) => (
                <article key={track.title}>
                  <h3>{track.title}</h3>
                  <p>{track.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clients-section" id="clients">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Clients and partners</p>
              <h2>Built to serve multiple stakeholder groups with one integrated delivery language.</h2>
            </div>
            <p className="section-caption">
              We collaborate with asset owners, developers, institutional investors, and industrial operators who need
              confidence at both portfolio and site level.
            </p>
          </div>

          <div className="client-grid">
            {clients.map((client) => (
              <article className="client-card" key={client}>
                <span>{client}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="section-kicker">Start a conversation</p>
            <h2>Need a solar partner for multiple sites, multiple clients, or parallel packages?</h2>
              <p>
                Let's shape a delivery strategy that matches your capacity targets, procurement realities, and geographic
                expansion plan.
              </p>
          </div>

          <div className="contact-card">
            <a href="mailto:hello@omegainfram.com">hello@omegainfram.com</a>
            <a href="tel:+910000000000">+91 00000 00000</a>
            <p>Omega Infram renewable delivery office, serving projects across India and international markets.</p>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <img className="footer-logo" src="/logo.png" alt="Omega Infram logo" />
            <div>
              <p className="eyebrow">Omega Infram</p>
              <p className="brand-subtitle">Solar infrastructure delivery across global markets.</p>
            </div>
          </div>

          <p className="footer-copy">Designed for multi-project execution, multi-client portfolios, and high-trust renewable delivery.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
