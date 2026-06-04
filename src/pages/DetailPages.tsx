import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { businessDetails, csrUpdateDetails, type DetailPageContent } from '../content/detailPages'

function DetailPageLayout({ content, backTo, backLabel }: { content: DetailPageContent; backTo: string; backLabel: string }) {
  return (
    <main className="seo-page detail-page">
      <section className="detail-hero section-shell">
        <div className="detail-hero-copy">
          <Link to={backTo} className="detail-back-link">{backLabel}</Link>
          <p className="section-kicker">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.summary}</p>
          <div className="detail-highlight-row">
            {content.highlights.map((highlight) => (
              <span key={highlight}>
                <CheckCircle2 size={16} aria-hidden="true" />
                {highlight}
              </span>
            ))}
          </div>
        </div>
        <img src={content.image} alt={content.imageAlt} className="detail-hero-image" loading="eager" decoding="async" />
      </section>

      <section className="detail-section-grid section-shell">
        {content.sections.map((section) => (
          <article className="detail-content-card" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <section className="detail-cta-band">
        <div className="section-shell detail-cta-inner">
          <div>
            <p className="section-kicker">Next Step</p>
            <h2>Discuss this opportunity with Omega Group</h2>
          </div>
          <Link to="/contact" className="hero-primary-btn">
            {content.ctaLabel}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export function BusinessDetailPage() {
  const { slug } = useParams()
  const content = businessDetails.find((item) => item.slug === slug)

  if (!content) {
    return (
      <main className="seo-page route-loading">
        <p>Business stream not found.</p>
      </main>
    )
  }

  return <DetailPageLayout content={content} backTo="/businesses" backLabel="Back to business streams" />
}

export function CSRUpdateDetailPage() {
  const { slug } = useParams()
  const content = csrUpdateDetails.find((item) => item.slug === slug)

  if (!content) {
    return (
      <main className="seo-page route-loading">
        <p>CSR update not found.</p>
      </main>
    )
  }

  return <DetailPageLayout content={content} backTo="/csr" backLabel="Back to CSR" />
}
