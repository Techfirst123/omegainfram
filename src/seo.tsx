import React from 'react'
import { useLocation } from 'react-router-dom'
import { businessDetails, csrUpdateDetails } from './content/detailPages'
import { SITE_NAME, SITE_URL, seoPages } from './seoData'

function setMeta(selector: string, attr: 'content' | 'href', value: string, create: () => HTMLElement) {
  let element = document.head.querySelector(selector) as HTMLElement | null
  if (!element) {
    element = create()
    document.head.appendChild(element)
  }
  element.setAttribute(attr, value)
}

function upsertJsonLd(id: string, data: unknown) {
  let element = document.getElementById(id) as HTMLScriptElement | null
  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.id = id
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

function getBreadcrumbItems(pathname: string, title: string) {
  const parts = pathname.split('/').filter(Boolean)
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ]

  if (parts.length > 0) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: title.split('|')[0].trim(),
      item: `${SITE_URL}${pathname}`,
    })
  }

  return items
}

export function SeoManager() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    const normalizedPath = pathname.replace(/\/$/, '') || '/'
    const fallback = seoPages['/']
    const businessMatch = normalizedPath.startsWith('/businesses/')
      ? businessDetails.find((item) => normalizedPath === `/businesses/${item.slug}`)
      : undefined
    const csrMatch = normalizedPath.startsWith('/csr/updates/')
      ? csrUpdateDetails.find((item) => normalizedPath === `/csr/updates/${item.slug}`)
      : undefined
    const page = businessMatch
      ? {
          title: `${businessMatch.title} | Omega Group Business Stream`,
          description: businessMatch.summary,
          keywords: `${businessMatch.title}, Omega Group green energy, Omega Infram, solar EPC company India, renewable energy projects India`,
        }
      : csrMatch
        ? {
            title: `${csrMatch.title} | Omega Group CSR Update`,
            description: csrMatch.summary,
            keywords: `${csrMatch.title}, Omega Group CSR, Omega Infram, renewable energy company, renewable energy projects India`,
          }
        : seoPages[normalizedPath] ?? {
            title: `${SITE_NAME} | Renewable Energy & Infrastructure`,
            description:
              'Omega Infram delivers renewable energy, solar EPC, biogas, infrastructure, materials supply, and project execution services across India.',
            keywords: fallback.keywords,
          }
    const canonical = `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`
    const image = `${SITE_URL}/utility-scale-solar.jpg`

    document.title = page.title
    setMeta('meta[name="description"]', 'content', page.description, () => {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      return meta
    })
    setMeta('meta[name="keywords"]', 'content', page.keywords, () => {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'keywords')
      return meta
    })
    setMeta('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'robots')
      return meta
    })
    setMeta('link[rel="canonical"]', 'href', canonical, () => {
      const link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      return link
    })

    const socialTags: Array<[string, string, string]> = [
      ['property', 'og:type', 'website'],
      ['property', 'og:site_name', SITE_NAME],
      ['property', 'og:title', page.title],
      ['property', 'og:description', page.description],
      ['property', 'og:url', canonical],
      ['property', 'og:image', image],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', page.title],
      ['name', 'twitter:description', page.description],
      ['name', 'twitter:image', image],
    ]

    socialTags.forEach(([kind, name, content]) => {
      setMeta(`meta[${kind}="${name}"]`, 'content', content, () => {
        const meta = document.createElement('meta')
        meta.setAttribute(kind, name)
        return meta
      })
    })

    upsertJsonLd('jsonld-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Omega Infram Pvt Ltd',
      alternateName: ['Omega Group', 'Omega Infram'],
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: 'info@omegainfram.com',
      telephone: '+91-11-41630318',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '348, DLF Prime Towers, Okhla Phase-1',
        addressLocality: 'New Delhi',
        postalCode: '110020',
        addressCountry: 'IN',
      },
      knowsAbout: [
        'Solar EPC',
        'Solar plant installation',
        'Biogas plant solutions',
        'Renewable energy projects',
        'Green infrastructure',
        'Project execution',
      ],
    })

    upsertJsonLd('jsonld-local-business', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Omega Infram Pvt Ltd',
      image,
      url: SITE_URL,
      telephone: '+91-11-41630318',
      email: 'info@omegainfram.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '348, DLF Prime Towers, Okhla Phase-1',
        addressLocality: 'New Delhi',
        postalCode: '110020',
        addressCountry: 'IN',
      },
      areaServed: 'India',
      description: fallback.description,
    })

    upsertJsonLd('jsonld-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    })

    upsertJsonLd('jsonld-breadcrumbs', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: getBreadcrumbItems(normalizedPath, page.title),
    })
  }, [pathname])

  return null
}
