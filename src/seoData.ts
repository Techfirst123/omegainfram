export const SITE_URL = 'https://www.omegainfram.com'
export const SITE_NAME = 'Omega Infram'

type PageSeo = {
  title: string
  description: string
  keywords: string
}

export const seoPages: Record<string, PageSeo> = {
  '/': {
    title: 'Omega Infram | Green Energy, Solar EPC & Infrastructure Company India',
    description:
      'Omega Infram is an Omega Group green energy and infrastructure company delivering solar EPC, biogas, renewable energy projects, materials supply, vendor work, and project execution across India.',
    keywords:
      'Omega Group green energy, Omega Infram, renewable energy company, solar EPC company India, green infrastructure company, renewable energy projects India',
  },
  '/solar-epc-services': {
    title: 'Solar EPC Services India | Solar Plant Installation | Omega Infram',
    description:
      'End-to-end solar EPC services for utility-scale and commercial solar plant installation, engineering, procurement, commissioning, and project execution in India.',
    keywords:
      'solar EPC company India, solar plant installation, solar project contractor, renewable energy projects India, Omega Infram',
  },
  '/biogas-plant-solutions': {
    title: 'Biogas Plant Solutions | Biogas Infrastructure | Omega Group',
    description:
      'Omega Group supports biogas plant solutions, waste-to-energy infrastructure, compressed biogas project execution, vendor coordination, and renewable plant delivery.',
    keywords:
      'biogas plant solutions, biogas infrastructure, Omega Group green energy, renewable energy company, biogas plant India',
  },
  '/green-energy-projects': {
    title: 'Green Energy Projects India | Renewable Energy Company | Omega Infram',
    description:
      'Explore Omega Infram green energy projects across solar, hybrid energy, battery storage, biogas, and renewable infrastructure project execution.',
    keywords:
      'green energy projects, renewable energy projects India, renewable energy company, Omega Infram, Omega Group green energy',
  },
  '/infrastructure-services': {
    title: 'Infrastructure Services | Green Infrastructure Company | Omega Infram',
    description:
      'Professional infrastructure services for renewable energy projects, civil works, materials supply, vendor work, and project execution by Omega Infram.',
    keywords:
      'green infrastructure company, infrastructure services India, materials supply, vendor work, renewable energy projects India',
  },
  '/about-omega-group': {
    title: 'About Omega Group | Renewable Energy & Infrastructure Company',
    description:
      'Learn about Omega Group and Omega Infram, a green energy, solar EPC, biogas, and infrastructure group focused on reliable project execution in India.',
    keywords:
      'About Omega Group, Omega Infram, Omega Group green energy, renewable energy company, green infrastructure company',
  },
  '/contact': {
    title: 'Contact Omega Group | Request Project Consultation | Omega Infram',
    description:
      'Contact Omega Group for solar EPC, biogas plant solutions, renewable energy projects, infrastructure services, materials supply, and project consultation.',
    keywords:
      'Contact Omega Group, Request Project Consultation, solar EPC company India, biogas plant solutions, Omega Infram',
  },
  '/businesses': {
    title: 'Omega Infram Business Streams | Solar, Biogas & Infrastructure',
    description:
      'Omega Infram business streams include solar EPC, renewable energy, biogas infrastructure, civil infrastructure, manufacturing, and project execution.',
    keywords:
      'Omega Infram businesses, solar EPC company India, renewable energy company, biogas infrastructure, green infrastructure company',
  },
  '/companies': {
    title: 'Omega Group Companies | Renewable Energy & Infrastructure Divisions',
    description:
      'Explore Omega Group companies working across biogas, solar technology, infrastructure, procurement, mining, healthcare, and specialized contracting.',
    keywords:
      'Omega Group companies, Omega Infram, Path Found Biogas, Helios Solar Tech, green energy company',
  },
  '/sustainability': {
    title: 'Sustainability | Omega Group Green Energy & Net-Zero Projects',
    description:
      'Omega Group advances sustainability through solar EPC, biogas, hybrid energy, battery storage, and low-carbon infrastructure project execution.',
    keywords:
      'Omega Group green energy, sustainability, net-zero projects, renewable energy projects India, solar plant installation',
  },
  '/csr': {
    title: 'CSR & Updates | Omega Infram Renewable Infrastructure',
    description:
      'Read Omega Infram updates on renewable infrastructure, solar rollout, hybrid energy execution, sourcing partnerships, and community programs.',
    keywords:
      'Omega Infram CSR, renewable infrastructure updates, solar rollout India, green energy company',
  },
}
