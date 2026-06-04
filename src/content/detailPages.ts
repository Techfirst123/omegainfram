export type DetailPageContent = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  image: string
  imageAlt: string
  highlights: string[]
  sections: Array<{
    heading: string
    body: string
  }>
  ctaLabel: string
}

export const businessDetails: DetailPageContent[] = [
  {
    slug: 'solar-energy',
    title: 'Solar Energy Solutions',
    eyebrow: 'Business Stream',
    summary:
      'Omega Group delivers solar EPC, C&I solar, utility-scale solar plant installation, hybrid energy planning, and execution support for renewable energy projects across India.',
    image: '/utility-scale-solar.jpg',
    imageAlt: 'Utility-scale solar energy project by Omega Group',
    highlights: ['Utility-scale solar EPC', 'C&I rooftop and ground-mounted systems', 'Hybrid solar and storage planning', 'Commissioning and project execution'],
    sections: [
      {
        heading: 'Turnkey Solar EPC',
        body: 'Our solar energy teams support clients from feasibility and engineering to procurement, installation, commissioning, and handover. The focus is on quality execution, reliable vendor coordination, and long-term plant performance.',
      },
      {
        heading: 'Current Project Focus',
        body: 'Omega Group is actively supporting solar project opportunities in Maharashtra, Rajasthan, and Goa, including large-scale procurement and KUSUM-linked renewable energy work.',
      },
      {
        heading: 'Clean Energy Value',
        body: 'Solar projects reduce carbon intensity, improve energy security, and create durable infrastructure for industrial, rural, and utility-scale requirements.',
      },
    ],
    ctaLabel: 'Request Solar EPC Consultation',
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure Services',
    eyebrow: 'Business Stream',
    summary:
      'Omega Group develops and supports civil, industrial, and green infrastructure projects with disciplined site execution, materials coordination, and vendor management.',
    image: '/infra-construction.jpg',
    imageAlt: 'Infrastructure construction and project execution by Omega Group',
    highlights: ['Civil infrastructure works', 'Materials supply', 'Vendor work coordination', 'Site execution support'],
    sections: [
      {
        heading: 'Practical Project Delivery',
        body: 'Our infrastructure work is structured around clear scopes, reliable suppliers, field coordination, and accountable execution for public, industrial, and renewable infrastructure projects.',
      },
      {
        heading: 'Green Infrastructure Approach',
        body: 'We align infrastructure development with sustainability goals by supporting renewable energy assets, efficient materials planning, and responsible construction practices.',
      },
      {
        heading: 'Execution Strength',
        body: 'Omega Group brings multi-location coordination, project controls, and vendor work experience for clients who need speed, quality, and predictable delivery.',
      },
    ],
    ctaLabel: 'Discuss Infrastructure Requirements',
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas Project Support',
    eyebrow: 'Business Stream',
    summary:
      'Omega Group supports specialized energy-sector infrastructure, procurement coordination, industrial services, and project management for upstream and downstream requirements.',
    image: '/oilgas-rig.jpg',
    imageAlt: 'Oil and gas infrastructure project support',
    highlights: ['Industrial project coordination', 'Energy-sector procurement', 'Site and vendor management', 'Safety-focused execution'],
    sections: [
      {
        heading: 'Energy Infrastructure Capability',
        body: 'Our oil and gas support capabilities are built for complex project environments where safety, coordination, and schedule discipline are essential.',
      },
      {
        heading: 'Procurement and Vendor Support',
        body: 'Omega Group helps align materials, contractors, and execution teams so industrial energy projects can move with clarity and accountability.',
      },
      {
        heading: 'Responsible Transition',
        body: 'While expanding green energy, the group also supports conventional energy infrastructure with a responsible, compliance-focused project execution mindset.',
      },
    ],
    ctaLabel: 'Connect With Energy Projects Team',
  },
  {
    slug: 'manufacturing-plants',
    title: 'Manufacturing Plant Development',
    eyebrow: 'Business Stream',
    summary:
      'Omega Group supports industrial facility development, manufacturing plant construction, equipment coordination, and operational infrastructure for high-performance production environments.',
    image: '/mfg-factory.jpg',
    imageAlt: 'Manufacturing plant and industrial facility development',
    highlights: ['Industrial facility planning', 'Plant construction support', 'Equipment and vendor coordination', 'Quality-focused execution'],
    sections: [
      {
        heading: 'Industrial Facility Planning',
        body: 'We support plant layouts, construction coordination, and utility infrastructure so manufacturing projects are planned for operational efficiency.',
      },
      {
        heading: 'Execution and Coordination',
        body: 'Our teams coordinate vendors, materials, and site requirements for industrial facilities where timing and quality control matter.',
      },
      {
        heading: 'Performance-Oriented Infrastructure',
        body: 'The goal is to build durable manufacturing environments that support productivity, safety, and long-term business continuity.',
      },
    ],
    ctaLabel: 'Plan a Manufacturing Project',
  },
  {
    slug: 'biomass-plants',
    title: 'Biomass Plant Solutions',
    eyebrow: 'Business Stream',
    summary:
      'Omega Group supports biomass, biogas, and waste-to-energy plant infrastructure through renewable plant planning, procurement support, and practical project execution.',
    image: '/hybrid-energy.png',
    imageAlt: 'Biomass and renewable energy plant solution',
    highlights: ['Biomass plant execution', 'Biogas infrastructure', 'Waste-to-energy planning', 'Renewable fuel ecosystem support'],
    sections: [
      {
        heading: 'Renewable Plant Engineering',
        body: 'Biomass and biogas plants require strong coordination between feedstock planning, civil works, equipment supply, and commissioning. Omega Group supports these connected workstreams.',
      },
      {
        heading: 'Waste-to-Energy Impact',
        body: 'These projects convert organic waste into useful energy, reduce environmental burden, and create local economic value through cleaner infrastructure.',
      },
      {
        heading: 'Path Found Biogas Focus',
        body: 'Through Path Found Biogas, the group continues to build renewable-energy execution capability across solar, biogas, and compressed biogas-linked infrastructure.',
      },
    ],
    ctaLabel: 'Explore Biomass Project Support',
  },
  {
    slug: 'e-commerce',
    title: 'Zumbii E-Commerce and Retail Mart Platform',
    eyebrow: 'Business Stream',
    summary:
      'Zumbii.com is a B2B and B2C platform that also supports retail small marts in Tier 2 cities, helping customers shop essential items online as well as offline.',
    image: '/zumbii-platform.png',
    imageAlt: 'Zumbii B2B and B2C mini supermarket platform for essential items',
    highlights: ['B2B and B2C platform', 'Retail small mart model', 'Tier 2 city focus', 'Online and offline essential shopping'],
    sections: [
      {
        heading: 'B2B and B2C Retail Model',
        body: 'Zumbii.com is designed as a commerce platform where businesses and consumers can access essential products through a connected online and offline retail ecosystem.',
      },
      {
        heading: 'Small Mart Network',
        body: 'The platform supports retail small marts in Tier 2 cities with a practical neighborhood store model for groceries, daily-use items, clothing, pharmaceuticals, beverages, and other essentials.',
      },
      {
        heading: 'Online and Offline Convenience',
        body: 'Zumbii helps customers shop essential items online while also maintaining offline retail access, creating a flexible buying experience for everyday community needs.',
      },
    ],
    ctaLabel: 'Discuss Zumbii Partnership',
  },
]

export const csrUpdateDetails: DetailPageContent[] = [
  {
    slug: 'path-found-225mw-maharashtra',
    title: '225 MW Solar Power Procurement in Maharashtra',
    eyebrow: 'New Project Procurement',
    summary:
      "Path Found Biogas has received a procurement update connected to 225 MW (AC) solar power in Maharashtra, strengthening Omega Group's renewable energy project pipeline.",
    image: '/utility-scale-solar.jpg',
    imageAlt: 'Solar power project procurement update in Maharashtra',
    highlights: ['225 MW (AC) solar power', 'Maharashtra project activity', 'Path Found Biogas', 'Renewable energy procurement'],
    sections: [
      {
        heading: 'Project Overview',
        body: 'The update is connected with procurement of 225 MW (AC) solar power in Maharashtra, linked to renewable energy development and power purchase activity.',
      },
      {
        heading: 'Strategic Importance',
        body: "This strengthens Omega Group's renewable energy presence and supports its focus on solar EPC, green infrastructure, and clean power delivery across India.",
      },
      {
        heading: 'Execution Focus',
        body: 'Omega Group will continue aligning project coordination, vendor support, and execution planning around reliable renewable energy outcomes.',
      },
    ],
    ctaLabel: 'Contact Omega Group',
  },
  {
    slug: 'western-india-industrial-solar-rollout',
    title: 'Industrial Solar Rollout Across Western India',
    eyebrow: 'Project Update',
    summary:
      'Omega Group continues expanding multi-site industrial solar activity across western India with execution support for commercial and infrastructure clients.',
    image: '/ci-solar.png',
    imageAlt: 'Commercial and industrial solar rollout in western India',
    highlights: ['Industrial solar', 'Multi-site execution', 'Western India', 'Commercial clean energy'],
    sections: [
      {
        heading: 'Program Focus',
        body: 'Industrial solar programs help businesses reduce operating costs, improve energy resilience, and meet sustainability commitments through reliable clean power.',
      },
      {
        heading: 'Omega Execution Model',
        body: 'The group supports engineering coordination, vendor planning, procurement alignment, installation supervision, and commissioning workflows.',
      },
      {
        heading: 'Client Value',
        body: 'For industries, the rollout approach creates predictable execution, practical project controls, and scalable renewable-energy adoption.',
      },
    ],
    ctaLabel: 'Discuss Industrial Solar',
  },
  {
    slug: 'hybrid-storage-renewable-framework',
    title: 'Hybrid Execution Framework for Storage-Linked Renewable Assets',
    eyebrow: 'Corporate Announcement',
    summary:
      'Omega Group has advanced a hybrid execution framework for renewable energy assets that combine solar generation, storage planning, and resilient energy architecture.',
    image: '/hybrid-energy.png',
    imageAlt: 'Hybrid renewable energy and storage asset framework',
    highlights: ['Hybrid energy', 'Storage-linked assets', 'Solar plus storage', 'Energy resilience'],
    sections: [
      {
        heading: 'Why Hybrid Matters',
        body: 'Hybrid renewable assets improve energy availability by combining generation with storage and smarter project architecture.',
      },
      {
        heading: 'Execution Model',
        body: "Omega Group's framework focuses on system planning, vendor coordination, project scheduling, commissioning readiness, and long-term reliability.",
      },
      {
        heading: 'Future Readiness',
        body: 'Storage-linked renewable assets help clients prepare for demand growth, grid variability, and sustainability requirements.',
      },
    ],
    ctaLabel: 'Explore Hybrid Energy',
  },
  {
    slug: 'global-sourcing-module-bos-partnerships',
    title: 'Global Sourcing Partnerships for Module and BOS Supply',
    eyebrow: 'Media Release',
    summary:
      'Omega Group is strengthening sourcing partnerships for solar modules, BOS components, and project materials to support renewable infrastructure delivery.',
    image: '/international-delivery.png',
    imageAlt: 'Global sourcing and international delivery partnerships',
    highlights: ['Module sourcing', 'BOS supply', 'Vendor partnerships', 'Renewable project materials'],
    sections: [
      {
        heading: 'Supply Chain Strength',
        body: 'Renewable projects depend on timely, quality-assured sourcing of modules, structures, inverters, cables, and balance-of-system materials.',
      },
      {
        heading: 'Vendor Network',
        body: 'Omega Group continues to build relationships with reliable suppliers and logistics partners to reduce execution risk.',
      },
      {
        heading: 'Project Delivery Impact',
        body: 'Better sourcing coordination supports faster project delivery, improved cost control, and stronger client confidence.',
      },
    ],
    ctaLabel: 'Connect for Supply Support',
  },
]
