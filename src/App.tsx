import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route, useNavigate, useParams, Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  ChevronUp,
  Factory,
  Gauge,
  Hammer,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Recycle,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import './App.css'
import { SeoManager } from './seo'

const ServicePage = React.lazy(() => import('./pages/ServicePages').then((module) => ({ default: module.ServicePage })))
const AboutOmegaGroupPage = React.lazy(() => import('./pages/ServicePages').then((module) => ({ default: module.AboutOmegaGroupPage })))
const ContactPage = React.lazy(() => import('./pages/ServicePages').then((module) => ({ default: module.ContactPage })))
const CSRPage = React.lazy(() => import('./pages/CSRPage'))
const WhatsAppAdminPage = React.lazy(() => import('./pages/WhatsAppAdminPage'))
const BusinessDetailPage = React.lazy(() => import('./pages/DetailPages').then((module) => ({ default: module.BusinessDetailPage })))
const CSRUpdateDetailPage = React.lazy(() => import('./pages/DetailPages').then((module) => ({ default: module.CSRUpdateDetailPage })))

const companyNameMap: Record<string, string> = {
  'path-found-biogas-pvt-ltd': 'Path Found Biogas pvt ltd',
  'helios-solar-tech-power-solution-pvt-ltd': 'Helios Solar Tech Power solution pvt ltd'
};

type NavChild = string | { label: string; href: string }

type NavItem = {
  label: string
  href: string
  description?: string
  statValue?: string
  statLabel?: string
  children?: NavChild[]
}

type FeatureSlide = {
  kicker: string
  title?: string
  description: string
  statValue: string
  statLabel: string
}

type ProjectStat = {
  label: string
  value: string
}

type Project = {
  image: string
  badge: string
  title: string
  stats: ProjectStat[]
}

function CompanyRouteWrapper() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const companyName = slug ? companyNameMap[slug] : null;

  if (!companyName) return <div style={{ padding: '100px', textAlign: 'center' }}>Company not found</div>;

  return <CompanyDetailView companyName={companyName} onBack={() => navigate('/')} />;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
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
    href: '/businesses',
    description: 'Development and Turnkey solar EPC, C&I solutions, and hybrid energy architectures for a net-zero future.',
    statValue: '10+',
    statLabel: 'Capacity',
    children: [
      { label: 'Solar EPC Services', href: '/solar-epc-services' },
      { label: 'Biogas Plant Solutions', href: '/biogas-plant-solutions' },
      { label: 'Green Energy Projects', href: '/green-energy-projects' },
      { label: 'Infrastructure Services', href: '/infrastructure-services' },
      { label: 'Business Streams', href: '/businesses' },
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
    href: '/csr',
    description: 'Empowering communities through energy access, skilling, and health initiatives.',
    statValue: '120+',
    statLabel: 'Partners',
    children: [
      { label: 'CSR Vision', href: '/csr#focus-areas' },
      { label: 'Key Initiatives', href: '/csr#initiatives' },
      { label: 'Partner With Us', href: '/csr#partner' },
    ],
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
    href: '/contact',
    description: 'Connect with our corporate office or investor desk for business enquiries.',
    statValue: '24/7',
    statLabel: 'Support',
    children: ['Corporate Office', 'Enquiries', 'Investor Desk'],
  },
]

const servicePages = {
  '/solar-epc-services': {
    kicker: 'Solar EPC Services',
    title: 'Solar EPC services and solar plant installation in India',
    intro:
      'Omega Infram supports solar developers, industries, and infrastructure clients with engineering, procurement, installation, commissioning, and solar project contractor services.',
    image: '/utility-scale-solar.jpg',
    imageAlt: 'Utility-scale solar plant installation by Omega Infram solar EPC team',
    services: ['Site execution planning', 'Engineering and procurement support', 'Solar plant installation', 'Testing and commissioning'],
    outcomes: ['Single-window coordination for solar EPC scopes.', 'Execution support for utility-scale and C&I solar assets.', 'Vendor and materials supply alignment for faster delivery.'],
  },
  '/biogas-plant-solutions': {
    kicker: 'Biogas Plant Solutions',
    title: 'Biogas plant solutions and waste-to-energy infrastructure',
    intro:
      'Omega Group supports biogas infrastructure and compressed biogas project delivery through practical planning, supply coordination, installation support, and renewable plant execution.',
    image: '/project-sangli.png',
    imageAlt: 'Biogas and renewable energy infrastructure project execution by Omega Group',
    services: ['Biogas project planning', 'CBG infrastructure support', 'Vendor and material coordination', 'Plant execution assistance'],
    outcomes: ['Waste-to-energy project support from planning to commissioning.', 'Biogas infrastructure built around dependable site execution.', 'Green energy project delivery aligned with client requirements.'],
  },
  '/green-energy-projects': {
    kicker: 'Green Energy Projects',
    title: 'Renewable energy projects for a low-carbon future',
    intro:
      'Omega Infram delivers green energy projects across solar, hybrid energy, battery storage, and biogas infrastructure with a focus on scalable execution in India.',
    image: '/hybrid-energy.png',
    imageAlt: 'Hybrid renewable energy projects including solar and storage infrastructure',
    services: ['Solar and hybrid energy projects', 'Battery storage coordination', 'Renewable asset execution', 'Green infrastructure planning'],
    outcomes: ['Project structures designed for renewable energy expansion.', 'Execution teams aligned to schedule, scope, and quality.', 'Practical support for industrial and utility-scale energy assets.'],
  },
  '/infrastructure-services': {
    kicker: 'Infrastructure Services',
    title: 'Green infrastructure services, materials supply, and vendor work',
    intro:
      'Omega Infram provides infrastructure services for renewable and civil projects, including materials supply, vendor execution, construction coordination, and site delivery.',
    image: '/infra-construction.jpg',
    imageAlt: 'Infrastructure services and construction coordination by Omega Infram',
    services: ['Civil infrastructure execution', 'Materials supply', 'Vendor work coordination', 'Project controls and delivery support'],
    outcomes: ['Infrastructure delivery connected to renewable project goals.', 'Clear coordination across suppliers, vendors, and site teams.', 'Execution support for public, industrial, and energy infrastructure.'],
  },
}

function MegaMenuCard({ item, onSelectCompany }: { item: NavItem; onSelectCompany?: (name: string, isCompany: boolean) => void }) {
  const isCompanyCategory = item.label === 'Our Companies'
  if (!item.children) return null
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
              {item.children.map((child: NavChild) => {
                const childLabel = typeof child === 'string' ? child : child.label
                const childHref = typeof child === 'string' ? '#' : child.href
                return (
                <a
                  key={childLabel}
                  href={isCompanyCategory ? '#' : childHref}
                  role="menuitem"
                  onClick={(e) => {
                    if (isCompanyCategory && onSelectCompany) {
                      e.preventDefault()
                      onSelectCompany(childLabel, true)
                    } else if (onSelectCompany) {
                      if (childHref.startsWith('/')) return
                      e.preventDefault()
                      onSelectCompany(childLabel, false)
                    }
                  }}
                >
                  {childLabel}
                </a>
              )})}
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
      'Omega Group is an established holding company that has its roots since 2003, having various industries linked by the years.The Company has been ascertained by (Sadab Ansari), The Founder Chairman who is from Bihar. For the last 23 years, We have been managing a decent reputation in the markets globally by providing best quality work in a range of fields of infrastructure considering all the environmental and social factors. Effectively,we have been proficient to give the best results in terms of EPC services',
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
  slug: string;
}

const businessStreams: BusinessStream[] = [
  {
    title: 'Solar Energy',
    description: 'Development and Turnkey solar EPC, C&I solutions, and hybrid energy architectures for a net-zero future.',
    accent: 'sunrise',
    images: ['/utility-scale-solar.jpg', '/ci-solar.png', '/hybrid-energy.png', '/international-delivery.png'],
    slug: 'solar-energy',
  },
  {
    title: 'Infrastructure',
    description: 'Designing and building the core assets that drive economic growth, from highways to smart city architectures with focus on efficiency and sustainability.',
    accent: 'sunrise',
    images: ['/infra-viaduct.jpg', '/infra-construction.jpg', '/infra-machinery.jpg', '/infra-highway.jpg'],
    slug: 'infrastructure',
  },
  {
    title: 'Oil & Gas',
    description: 'Specialized engineering and project management for upstream and downstream operations in the energy sector.',
    accent: 'sky',
    images: ['/oilgas-rig.jpg', '/oilgas-pipeline.jpg', '/oilgas-refinery.jpg', '/oilgas-drilling.png'],
    slug: 'oil-gas',
  },
  {
    title: 'Manufacturing Plants',
    description: 'Optimized industrial facility design and construction for high-performance manufacturing environments.',
    accent: 'leaf',
    images: ['/mfg-inspector.jpg', '/mfg-welding.png', '/mfg-factory.jpg'],
    slug: 'manufacturing-plants',
  },
  {
    title: 'Biomass Plants',
    description: 'Renewable energy solutions through advanced biomass conversion technologies and sustainable plant engineering.',
    accent: 'slate',
    images: ['/hybrid-energy.png', '/utility-scale-solar.jpg'],
    slug: 'biomass-plants',
  },
  {
    title: 'E-Commerce',
    description: 'Specialized logistics and technology infrastructure for rapid delivery and automated retail operations.',
    accent: 'sky',
    images: ['/zumbii-platform.png', '/international-delivery.png', '/ci-solar.png'],
    slug: 'e-commerce',
  }
]

const runningProjectLocations = [
  { state: 'Maharashtra', project: '225 MW solar procurement', x: 61, y: 53 },
  { state: 'Rajasthan', project: 'KUSUM solar project', x: 52, y: 37 },
  { state: 'Goa', project: 'Renewable infrastructure support', x: 57, y: 67 },
]

const companiesList = [
  { name: 'Path Found Biogas pvt ltd', desc: 'Waste-to-energy ecosystems and bio-renewable fuels.', logo: '/pathfound-logo.png' },
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

function getCompanyInitials(name: string) {
  const ignoredWords = new Set(['pvt', 'ltd', 'llp', 'co', 'corporation'])
  return name
    .replace(/\./g, ' ')
    .split(/\s+/)
    .filter((word) => word && !ignoredWords.has(word.toLowerCase()))
    .map((word) => word[0])
    .join('')
    .slice(0, 4)
    .toUpperCase()
}

function CompanyLogo({ company }: { company: { name: string; logo?: string } }) {
  if (company.logo) {
    return (
      <img
        className="company-logo-image company-logo-image-real"
        src={company.logo}
        alt={`${company.name} official logo`}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <div className="company-initial-logo" aria-label={`${company.name} logo placeholder`}>
      {getCompanyInitials(company.name)}
    </div>
  )
}

const newsItems = [
  {
    title: 'Path Found Biogas secures procurement update for 225 MW solar power in Maharashtra',
    meta: 'New Project Procurement',
    slug: 'path-found-225mw-maharashtra',
  },
  {
    title: 'Omega expands multi-site industrial solar rollout across western India',
    meta: 'Project Update',
    slug: 'western-india-industrial-solar-rollout',
  },
  {
    title: 'New hybrid execution framework launched for storage-linked renewable assets',
    meta: 'Corporate Announcement',
    slug: 'hybrid-storage-renewable-framework',
  },
  {
    title: 'Omega strengthens global sourcing partnerships for module and BOS supply',
    meta: 'Media Release',
    slug: 'global-sourcing-module-bos-partnerships',
  },
]


function FeatureCard({ slides, id }: { slides: FeatureSlide[]; id?: string }) {
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
                  <h2>{slide.title || slide.kicker}</h2>
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

function LegacyCompanyDetailView({ companyName, onBack }: { companyName: string, onBack: () => void }) {
  const descriptions: Record<string, string> = {
    'Path Found Biogas pvt ltd': 'PathFound Biogas Pvt. Ltd. is a forward-thinking solar energy company operating under the umbrella of Omega Group, committed to delivering sustainable and innovative energy solutions & Compressed Biogas Energy. The company focuses on harnessing solar power to provide efficient, reliable, and eco-friendly energy systems for residential, commercial, and industrial applications.\n\nWith a strong emphasis on quality, technology, and long-term performance, PathFound Bigoass Pvt. Ltd. specializes in end-to-end solar solutions — from design and engineering to installation and maintenance. The company aims to contribute to a greener future by reducing carbon footprints and promoting clean energy adoption across India.',
    'Helios Solar Tech Power solution pvt ltd': 'Helios Solar Tech specializes in cutting-edge solar technologies and power solutions, driving the global transition to clean energy with innovative photovoltaic systems and smart grid integration.',
  };

  const companyLogos: Record<string, string> = {
    'Path Found Biogas pvt ltd': '/pathfound-logo.png',
  };

  const defaultDesc = `At ${companyName}, we envision a future where innovation and engineering excellence lead to self-reliance in the ever-evolving industry. Our commitment to excellence bridges the gap between current challenges and sustainable future requirements, fostering growth and development.`;

  const desc = descriptions[companyName] || defaultDesc;
  const logo = companyLogos[companyName];

  const projects: Record<string, Project[]> = {
    'Path Found Biogas pvt ltd': [
      {
        image: '/utility-scale-solar.jpg',
        badge: 'Current Project',
        title: '225MW Solar project,maharashtra',
        stats: [
          { label: 'Capacity', value: '225 MW (AC) Solar Power' },
          { label: 'Location', value: 'Maharashtra' },
          { label: 'Scope', value: 'Procurement under MSEDC power purchase agreement' }
        ]
      },
      {
        image: '/project-sangli.png',
        badge: 'Running Project',
        title: 'SP Installation - Sangli, Maharashtra',
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
          { label: 'Scope', value: 'Development,Design, Supply, Installation & Commissioning' },
          { label: 'Approximate Cost', value: '770 Cr' }
        ]
      },
      {
        image: '/BESS Image.png', // Replace with the actual image
        badge: 'Running Project',
        title: 'EPC Sindhudurg Maharashtra',
        stats: [
          { label: 'Capacity', value: '15MW Solar System' },
          { label: 'Scope', value: 'Development,Design, Supply, Installation & Commissioning with Battery Energy Storage system (BESS)' },
          { label: 'Approximate Cost', value: '60 Cr' }
        ]
      },
      {
        image: '/utility-scale-solar.jpg', // Replace with the actual image
        badge: 'upcoming Project',
        title: 'Battery Energy Storage System (BESS), Jodhpur, Rajasthan ',
        stats: [
          { label: 'Capacity', value: '50 MW/100 MW' },
          { label: 'Scope', value: 'Battery installation with Solar System' },
          { label: 'Approximate Cost', value: '60 Cr' }
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
              <img src={logo} alt={`${companyName} renewable energy company logo`} className="company-specific-logo" loading="eager" decoding="async" />
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
                  <img src={project.image} alt={`${project.title} renewable energy project by Omega Group`} loading="lazy" decoding="async" />
                </div>
                <div className="project-info-side">
                  <div className="project-badge">{project.badge || 'Featured Project'}</div>
                  <h3>{project.title}</h3>
                  <div className="project-stats-grid">
                    {project.stats.map((stat, idx) => (
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

const companyHeroSlides = [
  '/utility-scale-solar.jpg',
  '/project-sangli.png',
  '/infra-construction.jpg',
  '/hybrid-energy.png',
]

const companyStats = [
  { value: 23, suffix: '+', label: 'Years Experience' },
  { value: 28, suffix: '+', label: 'Projects Completed' },
  { value: 670, suffix: '+ MW', label: 'MW Developed' },
  { value: 1.8, suffix: 'M tCO2e', label: 'CO2 Reduction' },
]

const services = [
  { title: 'Compressed Biogas (CBG)', icon: Factory, text: 'Planning and execution support for CBG-ready renewable fuel facilities.' },
  { title: 'Waste to Energy', icon: Recycle, text: 'Integrated infrastructure that converts organic waste streams into long-term energy value.' },
  { title: 'Renewable Energy Consulting', icon: SunMedium, text: 'Feasibility, procurement, project planning, and stakeholder coordination.' },
  { title: 'EPC Solutions', icon: Hammer, text: 'Engineering, procurement, installation, commissioning, and site delivery alignment.' },
  { title: 'Operations & Maintenance', icon: Wrench, text: 'Performance-led maintenance systems for renewable and infrastructure assets.' },
  { title: 'Green Infrastructure', icon: Building2, text: 'Civil, energy, storage, and utility support for sustainable growth corridors.' },
]

const featuredProjects = [
  { image: '/utility-scale-solar.jpg', name: '225 MW Solar Power Program', capacity: '225 MW AC', location: 'Maharashtra', status: 'Current Project', desc: 'Procurement-linked solar power development aligned with utility-scale renewable energy expansion.' },
  { image: '/project-sangli.png', name: 'Sangli SP Installation', capacity: '180 MW', location: 'Sangli, Maharashtra', status: 'Running', desc: 'Design, supply, installation, and commissioning support for a large regional solar system.' },
  { image: '/solar-carports.jpg', name: 'KUSUM A & C Deployment', capacity: '200 MW', location: 'Rajasthan', status: 'Running', desc: 'Development and EPC coordination for decentralized clean-energy capacity under KUSUM-linked work.' },
  { image: '/BESS Image.png', name: 'Sindhudurg Solar + BESS', capacity: '15 MW', location: 'Sindhudurg, Maharashtra', status: 'Execution', desc: 'Solar EPC program integrated with battery energy storage for improved energy reliability.' },
  { image: '/hybrid-energy.png', name: 'Jodhpur BESS Program', capacity: '50 MW / 100 MWh', location: 'Jodhpur, Rajasthan', status: 'Upcoming', desc: 'Battery energy storage installation planned with solar infrastructure for peak support.' },
  { image: '/infra-machinery.jpg', name: 'Green Infrastructure Works', capacity: 'Multi-site', location: 'Western India', status: 'Pipeline', desc: 'Civil and energy infrastructure support for renewable facilities and industrial clients.' },
]

const impactStats = [
  { value: 940, suffix: '+ GWh', label: 'Renewable Energy Generated' },
  { value: 1.8, suffix: 'M tCO2e', label: 'Carbon Emissions Reduced' },
  { value: 120, suffix: '+', label: 'Communities Served' },
  { value: 12, suffix: '+', label: 'Projects Under Execution' },
]

const reasons = [
  { title: 'Industry Expertise', icon: Award },
  { title: 'Government Project Experience', icon: ShieldCheck },
  { title: 'Sustainable Solutions', icon: Leaf },
  { title: 'End-to-End Execution', icon: Gauge },
  { title: 'Quality Assurance', icon: BadgeCheck },
  { title: 'Skilled Team', icon: Users },
]

const galleryImages = [
  { src: '/utility-scale-solar.jpg', label: 'Utility-scale solar project' },
  { src: '/project-sangli.png', label: 'Sangli renewable site' },
  { src: '/infra-construction.jpg', label: 'Infrastructure execution' },
  { src: '/hybrid-energy.png', label: 'Hybrid energy facility' },
  { src: '/BESS Image.png', label: 'Battery energy storage' },
  { src: '/infra-machinery.jpg', label: 'Project machinery' },
]

const timelineItems = [
  { year: '2003', title: 'Group Foundation', text: 'Omega Group began building execution depth across infrastructure and industrial work.' },
  { year: '2016', title: 'Renewable Expansion', text: 'Solar EPC, procurement, and green infrastructure capabilities became a strategic priority.' },
  { year: '2021', title: 'Pathfound Scale-up', text: 'Pathfound Biogas strengthened its renewable energy and compressed biogas project focus.' },
  { year: '2024', title: 'Major Project Pipeline', text: 'Large solar, BESS, and KUSUM-linked programs expanded across Maharashtra and Rajasthan.' },
  { year: '2026', title: 'Growth Plan', text: 'Expansion into integrated waste-to-energy, CBG, and storage-led infrastructure programs.' },
]

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [current, setCurrent] = React.useState(0)
  const ref = React.useRef<HTMLSpanElement | null>(null)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const start = performance.now()
      const duration = 1400
      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1)
        setCurrent(value * (1 - Math.pow(1 - progress, 3)))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.4 })

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  const formatted = Number.isInteger(value) ? Math.round(current).toLocaleString('en-IN') : current.toFixed(1)
  return <span ref={ref}>{formatted}{suffix}</span>
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function CompanyDetailView({ companyName, onBack, embedded = false }: { companyName: string, onBack?: () => void; embedded?: boolean }) {
  const [lightbox, setLightbox] = React.useState<{ src: string; label: string } | null>(null)
  const isPathfound = companyName === 'Path Found Biogas pvt ltd'

  if (!isPathfound) {
    return <LegacyCompanyDetailView companyName={companyName} onBack={onBack || (() => window.history.back())} />
  }

  return (
    <article className="company-detail-page" id="companies">
      <section className="company-hero" aria-label="Pathfound Biogas company introduction">
        <div className="company-hero-slider" aria-hidden="true">
          {companyHeroSlides.map((image, index) => (
            <span key={image} style={{ backgroundImage: `url("${image}")`, animationDelay: `${index * 5}s` }} />
          ))}
        </div>
        <div className="company-hero-overlay" />
        <div className="company-hero-content">
          {onBack ? <button onClick={onBack} className="company-back-btn">Back to Home</button> : null}
          <motion.img src="/pathfound-logo.png" alt="Pathfound Biogas Pvt Ltd logo" className="company-hero-logo" loading="eager" decoding="async" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} />
          <motion.p className="section-kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Omega Group Renewable Energy Company</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>Pathfound Biogas Pvt Ltd</motion.h1>
          <motion.p className="company-hero-tagline" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>Building a Sustainable Energy Future</motion.p>
          <motion.div className="company-hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
            <a href="#pathfound-projects" className="company-primary-btn">View Projects <ArrowRight size={18} /></a>
            <Link to="/contact" className="company-secondary-btn">Contact Us <Mail size={18} /></Link>
          </motion.div>
        </div>
      </section>

      <section className="company-overview company-section">
        <Reveal className="company-overview-media">
          <img src="/project-sangli.png" alt="Pathfound Biogas renewable energy project site" loading="lazy" decoding="async" />
          <div className="company-media-badge"><Sparkles size={18} /> Renewable infrastructure portfolio</div>
        </Reveal>
        <Reveal className="company-overview-copy">
          <p className="section-kicker">Company Overview</p>
          <h2>Clean energy infrastructure with boardroom discipline and field execution depth.</h2>
          <p>
            Pathfound Biogas Pvt Ltd works across compressed biogas, solar, waste-to-energy, EPC, and green infrastructure programs under Omega Group. The company combines practical site execution, procurement coordination, and sustainability-led planning for public, industrial, and investor-grade renewable assets.
          </p>
          <div className="company-stat-grid">
            {companyStats.map((stat) => (
              <div className="company-stat-card" key={stat.label}>
                <strong><AnimatedCounter value={stat.value} suffix={stat.suffix} /></strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="company-section">
        <Reveal className="company-section-head">
          <p className="section-kicker">Key Services</p>
          <h2>Integrated renewable energy and green infrastructure services</h2>
        </Reveal>
        <div className="service-card-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Reveal className="service-card" key={service.title}>
                <Icon size={28} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="company-section" id="pathfound-projects">
        <Reveal className="company-section-head">
          <p className="section-kicker">Featured Projects</p>
          <h2>Project portfolio built for scale, reliability, and measurable impact</h2>
        </Reveal>
        <div className="project-card-grid">
          {featuredProjects.map((project) => (
            <Reveal className="modern-project-card" key={project.name}>
              <img src={project.image} alt={`${project.name} renewable energy project`} loading="lazy" decoding="async" />
              <div className="modern-project-body">
                <span>{project.status}</span>
                <h3>{project.name}</h3>
                <div className="project-meta">
                  <p><Zap size={16} /> {project.capacity}</p>
                  <p><MapPin size={16} /> {project.location}</p>
                </div>
                <p>{project.desc}</p>
                <Link to="/contact">Read More <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-overlay" />
        <div className="impact-inner">
          <Reveal className="company-section-head company-section-head-light">
            <p className="section-kicker">Impact</p>
            <h2>Renewable progress translated into measurable outcomes</h2>
          </Reveal>
          <div className="impact-grid">
            {impactStats.map((stat) => (
              <div className="impact-card" key={stat.label}>
                <strong><AnimatedCounter value={stat.value} suffix={stat.suffix} /></strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <Reveal className="company-section-head">
          <p className="section-kicker">Why Choose Us</p>
          <h2>Trusted execution for investors, government stakeholders, and enterprise clients</h2>
        </Reveal>
        <div className="choose-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <Reveal className="choose-card" key={reason.title}>
                <Icon size={26} />
                <h3>{reason.title}</h3>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="company-section">
        <Reveal className="company-section-head">
          <p className="section-kicker">Gallery</p>
          <h2>Project visuals from renewable and infrastructure workstreams</h2>
        </Reveal>
        <div className="gallery-masonry">
          {galleryImages.map((image, index) => (
            <button className="gallery-tile" key={image.src} onClick={() => setLightbox(image)} style={{ gridRowEnd: index % 3 === 1 ? 'span 2' : 'span 1' }}>
              <img src={image.src} alt={image.label} loading="lazy" decoding="async" />
              <span>{image.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="company-section">
        <Reveal className="company-section-head">
          <p className="section-kicker">Company Timeline</p>
          <h2>Milestones shaping a larger sustainable energy platform</h2>
        </Reveal>
        <div className="timeline">
          {timelineItems.map((item) => (
            <Reveal className="timeline-item" key={item.year}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="company-cta">
        <div>
          <p className="section-kicker">Partner With Us</p>
          <h2>Partner With Us For Sustainable Growth</h2>
        </div>
        <div className="company-cta-actions">
          <Link to="/contact" className="company-primary-btn">Request Proposal <ArrowRight size={18} /></Link>
          <Link to="/contact" className="company-secondary-btn company-secondary-dark">Contact Team <Handshake size={18} /></Link>
        </div>
      </section>

      <section className="company-section company-ecosystem">
        <Reveal className="company-section-head">
          <p className="section-kicker">Omega Group Ecosystem</p>
          <h2>Specialized companies supporting energy, infrastructure, and enterprise execution</h2>
        </Reveal>
        <div className="ecosystem-grid">
          {companiesList.map((company) => (
            <Link className="ecosystem-card" to={`/companies/${company.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={company.name}>
              <CompanyLogo company={company} />
              <div>
                <h3>{company.name}</h3>
                <p>{company.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {!embedded ? <footer className="company-footer">
        <div>
          <img src="/pathfound-logo.png" alt="Pathfound Biogas Pvt Ltd logo" loading="lazy" decoding="async" />
          <p>Pathfound Biogas Pvt Ltd develops sustainable energy infrastructure across biogas, solar, storage, EPC, and green infrastructure programs.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="#pathfound-projects">Projects</a>
          <Link to="/businesses">Businesses</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Our Businesses</h3>
          <span>Compressed Biogas</span>
          <span>Waste to Energy</span>
          <span>Green Infrastructure</span>
        </div>
        <div>
          <h3>Contact Information</h3>
          <span>New Delhi, India</span>
          <span>info@omegainfram.com</span>
          <span>+91-11-41630318</span>
        </div>
        <form className="newsletter-form">
          <h3>Newsletter</h3>
          <label>
            <span>Email address</span>
            <input type="email" placeholder="you@example.com" />
          </label>
          <button type="submit">Subscribe</button>
        </form>
      </footer> : null}

      {lightbox ? (
        <button className="gallery-lightbox" onClick={() => setLightbox(null)} aria-label="Close gallery image">
          <X size={28} />
          <img src={lightbox.src} alt={lightbox.label} />
          <span>{lightbox.label}</span>
        </button>
      ) : null}
    </article>
  )
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScroll, setShowScroll] = React.useState(false)
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const [menuOpen, setMenuOpen] = React.useState(false)
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
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="page-shell">
      <SeoManager />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <header className="topbar">
        <Link className="brand-block" to="/" aria-label="Omega Infram home">
          <div className="brand-stack">
            <img className="brand-logo" src="/logo.png" alt="Omega Infram green energy and infrastructure company logo" loading="eager" decoding="async" />
            <p className="brand-company-name">omega infram pvt ltd</p>
          </div>
        </Link>

        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <a href={item.href.startsWith('#') ? `/${item.href}` : item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              {item.children ? <MegaMenuCard item={item} onSelectCompany={(name, isCompany) => {
                setMenuOpen(false)
                if (isCompany) {
                  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  navigate(`/companies/${slug}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  if (item.href.startsWith('#')) {
                    navigate('/');
                    setTimeout(() => {
                      const el = document.getElementById(item.href.replace('#', ''));
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    navigate(item.href);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }} /> : null}
            </div>
          ))}
        </nav>
      </header>

      {/* JSX Variables for Reusable Sections */}
      <Suspense fallback={<main className="route-loading">Loading Omega Infram page...</main>}>
      <Routes>
        <Route path="/companies/:slug" element={
          <main style={{ minHeight: '80vh' }}>
            <CompanyRouteWrapper />
          </main>
        } />

        <Route path="/" element={
          <main>
            <section className="hero-section" id="home">
              <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/hero-world-map-poster.jpg" aria-hidden="true">
                <source src="/hero-world-map.webm" type="video/webm" />
                <source src="/hero-section-new.mp4" type="video/mp4" />
              </video>
              <div className="hero-overlay" />
              <div className="hero-content">
                <div className="hero-intro-text">
                  <p className="section-kicker">Welcome to Omega Infram</p>
                  <h1>Pioneering Renewable Energy Solutions</h1>
                  <p>Leading the global transition to sustainable infrastructure through innovation and engineering excellence.</p>
                  <div className="hero-cta">
                    <a href="/#contact" className="hero-primary-btn">
                      Request Project Consultation
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <Link to="/contact" className="hero-secondary-btn">Contact Omega Group</Link>
                  </div>
                </div>
                <div className="hero-project-map" aria-label="Running project locations in India">
                  <div className="hero-project-map-header">
                    <span>Running Projects</span>
                    <strong>India</strong>
                  </div>
                  <div className="hero-project-map-panel">
                    {runningProjectLocations.map((location, index) => (
                      <div
                        key={location.state}
                        className="hero-map-pin"
                        style={{
                          left: `${location.x}%`,
                          top: `${location.y}%`,
                          animationDelay: `${index * 220}ms`,
                        }}
                      >
                        <span className="pin-dot" aria-hidden="true" />
                        <span className="pin-label">
                          <strong>{location.state}</strong>
                          <small>{location.project}</small>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="card-stack" id="about">
              <FeatureCard slides={featureCards} />
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
                  <Link to={`/businesses/${businessStreams[activeStreamIdx].slug}`} className="know-more-outline">
                    KNOW MORE
                  </Link>
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

            <CompanyDetailView companyName="Path Found Biogas pvt ltd" embedded />

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
                    <Link to="/contact" style={{ display: 'inline-block', marginTop: '24px', color: '#86efac', textDecoration: 'none', fontWeight: 600 }}>
                      Read our 2026 ESG Report &rarr;
                    </Link>
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
                    <Link to={`/csr/updates/${item.slug}`}>Read More</Link>
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
                <Link className="primary-link" to="/contact">
                  Explore Careers
                </Link>
              </div>
            </section>
          </main>
        } />

        <Route path="/about" element={
          <main style={{ marginTop: '72px', minHeight: '80vh' }}>
            <section className="section-shell route-intro">
              <p className="section-kicker">About Omega Group</p>
              <h1>About Omega Group and Omega Infram</h1>
              <p className="section-intro">
                Omega Group focuses on green energy, solar EPC, biogas infrastructure, renewable energy projects,
                materials supply, vendor work, and reliable infrastructure execution.
              </p>
            </section>
            <div className="card-stack">
              <FeatureCard slides={featureCards} />
            </div>
          </main>
        } />

        <Route path="/about-omega-group" element={<AboutOmegaGroupPage />} />

        {Object.entries(servicePages).map(([path, page]) => (
          <Route
            key={path}
            path={path}
            element={<ServicePage {...page} />}
          />
        ))}

        <Route path="/businesses" element={
          <main style={{ marginTop: '72px', minHeight: '80vh' }}>
            <section className="business-section" id="businesses">
              <div className="section-head">
                <p className="section-kicker">BUSINESS</p>
                <h1>Our Business Streams</h1>
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
                  <Link to={`/businesses/${businessStreams[activeStreamIdx].slug}`} className="know-more-outline">
                    KNOW MORE
                  </Link>
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
          </main>
        } />

        <Route path="/businesses/:slug" element={<BusinessDetailPage />} />

        <Route path="/companies" element={
          <main style={{ minHeight: '80vh' }}>
            <CompanyDetailView companyName="Path Found Biogas pvt ltd" />
          </main>
        } />

        <Route path="/sustainability" element={
          <main style={{ marginTop: '72px', minHeight: '80vh' }}>
            <section className="sustainability-section section-shell" id="sustainability" style={{ marginTop: '24px' }}>
              <div className="section-head">
                <p className="section-kicker">Sustainability</p>
                <h1>Driving a Net-Zero Future</h1>
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
                    <Link to="/contact" style={{ display: 'inline-block', marginTop: '24px', color: '#86efac', textDecoration: 'none', fontWeight: 600 }}>
                      Read our 2026 ESG Report &rarr;
                    </Link>
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
          </main>
        } />

        <Route path="/csr" element={<CSRPage />} />
        <Route path="/csr/updates/:slug" element={<CSRUpdateDetailPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/whatsapp" element={<WhatsAppAdminPage />} />
      </Routes>
      </Suspense>

      {!location.pathname.startsWith('/companies') ? <footer className="site-footer" id="contact">
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
                  <strong>Get me</strong>
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
            <p>Copyright &copy; 2026 Omega Infram Pvt Ltd. All rights reserved.</p>
            <div className="footer-socials">
              <Link to="/">LinkedIn</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Instagram</Link>
            </div>
          </div>
        </div>
      </footer> : null}
      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}

export default App
