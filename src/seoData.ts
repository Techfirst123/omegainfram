import { businessDetails, csrUpdateDetails } from './content/detailPages'

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
  '/ground-mount-solar-epc': {
    title: 'Ground Mount Solar EPC Services for Utility-Scale Projects | Omega Infram',
    description:
      'Ground-mount solar EPC for utility-scale and industrial power plants, covering site engineering, structure design, module installation, and grid-tied commissioning across India.',
    keywords:
      'ground mount solar EPC, utility-scale solar EPC, solar plant installation, solar project contractor, Omega Infram',
  },
  '/rooftop-solar': {
    title: 'Rooftop Solar EPC for Commercial & Industrial Roofs | Omega Infram',
    description:
      'Rooftop solar installation for commercial, industrial, and institutional roofs, covering structural assessment, mounting design, net-metering, and performance monitoring.',
    keywords:
      'rooftop solar EPC, commercial rooftop solar, industrial rooftop solar, net metering solar, Omega Infram',
  },
  '/solar-ipp-asset-management': {
    title: 'Solar IPP and Renewable Asset Management | Omega Infram',
    description:
      'Independent power producer (IPP) solar asset support and renewable portfolio management, including performance monitoring, asset optimization, and PPA-linked operations.',
    keywords:
      'solar IPP, renewable asset management, solar O&M, PPA solar assets, Omega Infram',
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
  '/companies/path-found-biogas-pvt-ltd': {
    title: 'Path Found Biogas Pvt Ltd | Omega Group Renewable Energy Company',
    description:
      'Path Found Biogas Pvt Ltd delivers compressed biogas, waste-to-energy, solar EPC, and green infrastructure programs under Omega Group.',
    keywords:
      'Path Found Biogas, Pathfound Biogas Pvt Ltd, compressed biogas, waste to energy, Omega Group green energy, solar EPC company India',
  },
  '/companies/helios-solar-tech-power-solution-pvt-ltd': {
    title: 'Helios Solar Tech Power Solution Pvt Ltd | Omega Group',
    description:
      'Helios Solar Tech Power Solution Pvt Ltd specializes in high-efficiency solar technologies and smart grid integration under Omega Group.',
    keywords:
      'Helios Solar Tech, Omega Group companies, solar technology, smart grid, renewable energy company',
  },
  '/sustainability': {
    title: 'Sustainability | Omega Group Green Energy & Net-Zero Projects',
    description:
      'Omega Group advances sustainability through solar EPC, biogas, hybrid energy, battery storage, and low-carbon infrastructure project execution.',
    keywords:
      'Omega Group green energy, sustainability, net-zero projects, renewable energy projects India, solar plant installation',
  },
  '/csr': {
    title: 'Omega Group CSR | Sustainable Community Impact & Social Development',
    description:
      'Explore Omega Group CSR initiatives across education, healthcare, environmental sustainability, rural development, renewable energy awareness, women empowerment, and community welfare.',
    keywords:
      'Omega Group CSR, corporate social responsibility India, sustainable community development, CSR education healthcare environment, renewable energy CSR initiatives',
  },
  '/admin/whatsapp': {
    title: 'Omega Group WhatsApp Admin | Business Activity Messaging',
    description:
      'Secure Omega Group admin dashboard for WhatsApp Business activity updates to vendors, investors, clients, staff, partners, and business contacts.',
    keywords:
      'Omega Group WhatsApp admin, WhatsApp Business Cloud API, vendor messaging, investor updates, business contact management',
  },
}

const defaultSeo: PageSeo = {
  title: `${SITE_NAME} | Renewable Energy & Infrastructure`,
  description:
    'Omega Infram delivers renewable energy, solar EPC, biogas, infrastructure, materials supply, and project execution services across India.',
  keywords: seoPages['/'].keywords,
}

/**
 * Single source of truth for resolving title/description/keywords for a
 * pathname, shared by the client-side SeoManager and the build-time
 * prerender script so both stay in sync.
 */
export function getSeoForPath(pathname: string): PageSeo {
  const normalizedPath = pathname.replace(/\/$/, '') || '/'

  if (normalizedPath.startsWith('/businesses/')) {
    const match = businessDetails.find((item) => normalizedPath === `/businesses/${item.slug}`)
    if (match) {
      return {
        title: `${match.title} | Omega Group Business Stream`,
        description: match.summary,
        keywords: `${match.title}, Omega Group green energy, Omega Infram, solar EPC company India, renewable energy projects India`,
      }
    }
  }

  if (normalizedPath.startsWith('/csr/updates/')) {
    const match = csrUpdateDetails.find((item) => normalizedPath === `/csr/updates/${item.slug}`)
    if (match) {
      return {
        title: `${match.title} | Omega Group CSR Update`,
        description: match.summary,
        keywords: `${match.title}, Omega Group CSR, Omega Infram, renewable energy company, renewable energy projects India`,
      }
    }
  }

  return seoPages[normalizedPath] ?? defaultSeo
}
