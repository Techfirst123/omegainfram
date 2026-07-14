import { Link } from 'react-router-dom'

type ServicePageProps = {
  kicker: string
  title: string
  intro: string
  image?: string
  imageAlt: string
  heroImages?: string[]
  services: string[]
  outcomes: string[]
}

export function ServicePage({ kicker, title, intro, image, imageAlt, heroImages, services, outcomes }: ServicePageProps) {
  return (
    <main className="seo-page">
      <section className="seo-hero section-shell">
        <div className="seo-hero-copy">
          <p className="section-kicker">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="seo-cta-row">
            <Link to="/contact" className="hero-primary-btn">Request Project Consultation</Link>
            <Link to="/about-omega-group" className="hero-secondary-btn seo-secondary-dark">About Omega Group</Link>
          </div>
        </div>
        {heroImages && heroImages.length > 0 ? (
          <div className="seo-hero-slider" role="img" aria-label={imageAlt}>
            {heroImages.map((src, idx) => (
              <span
                key={src}
                style={{
                  backgroundImage: `url(${src})`,
                  animationDelay: `${idx * 5}s`,
                  animationDuration: `${heroImages.length * 5}s`,
                }}
              />
            ))}
          </div>
        ) : (
          <img className="seo-hero-image" src={image} alt={imageAlt} loading="eager" decoding="async" />
        )}
      </section>

      <section className="seo-content-grid section-shell">
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2>Built for dependable project execution</h2>
          <p className="section-intro">
            Omega Infram combines engineering coordination, procurement support, vendor management, site execution,
            and renewable infrastructure delivery so clients can move from planning to commissioning with confidence.
          </p>
        </div>
        <div className="seo-card-grid">
          {services.map((service) => (
            <article className="seo-service-card" key={service}>
              <h3>{service}</h3>
              <p>
                Planned for practical delivery across renewable energy projects India, with clear scopes, accountable
                teams, and green-energy focused execution.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-band">
        <div className="section-shell seo-band-inner">
          <div>
            <p className="section-kicker">Project Value</p>
            <h2>Why developers and enterprises work with Omega</h2>
          </div>
          <div className="seo-outcomes">
            {outcomes.map((outcome) => (
              <div className="seo-outcome" key={outcome}>
                <span aria-hidden="true" />
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export function AboutOmegaGroupPage() {
  return (
    <main className="seo-page">
      <section className="seo-hero section-shell">
        <div className="seo-hero-copy">
          <p className="section-kicker">About Omega Group</p>
          <h1>Green energy and infrastructure execution for India</h1>
          <p>
            Omega Group and Omega Infram work across solar EPC, biogas plant solutions, renewable energy projects,
            materials supply, vendor work, and infrastructure delivery with a focus on practical engineering outcomes.
          </p>
          <div className="seo-cta-row">
            <Link to="/contact" className="hero-primary-btn">Contact Omega Group</Link>
            <Link to="/green-energy-projects" className="hero-secondary-btn seo-secondary-dark">Green Energy Projects</Link>
          </div>
        </div>
        <img
          className="seo-hero-image"
          src="/international-delivery.png"
          alt="Omega Group renewable energy project delivery and infrastructure coordination"
          loading="eager"
          decoding="async"
        />
      </section>

      <section className="seo-content-grid section-shell">
        <div>
          <p className="section-kicker">Omega Infram</p>
          <h2>Focused on renewable infrastructure, vendor coordination, and delivery discipline</h2>
          <p className="section-intro">
            The group supports clients through solar project contracting, biogas infrastructure, civil works, supply
            coordination, and multi-location execution models for industrial and public infrastructure needs.
          </p>
        </div>
        <div className="seo-card-grid">
          {['Solar EPC and plant installation', 'Biogas and compressed biogas infrastructure', 'Green infrastructure services', 'Materials supply and vendor execution'].map((item) => (
            <article className="seo-service-card" key={item}>
              <h3>{item}</h3>
              <p>Structured for scalable delivery, transparent coordination, and long-term asset performance.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export function ContactPage() {
  return (
    <main className="seo-page">
      <section className="contact-page section-shell">
        <div className="contact-copy">
          <p className="section-kicker">Contact / Enquiry</p>
          <h1>Request a project consultation</h1>
          <p>
            Speak with Omega Group about solar EPC services, biogas plant solutions, renewable energy projects,
            infrastructure services, materials supply, vendor work, or project execution requirements.
          </p>
          <div className="contact-methods">
            <a href="tel:+911141630318">011-41630318</a>
            <a href="mailto:info@omegainfram.com">info@omegainfram.com</a>
            <span>348, DLF Prime Towers, Okhla Phase-1, New Delhi - 110020</span>
          </div>
        </div>
        <form className="enquiry-form" aria-label="Omega Group project enquiry form">
          <label>
            Name
            <input name="name" type="text" autoComplete="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </label>
          <label>
            Project Type
            <select name="projectType" defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Solar EPC Services</option>
              <option>Biogas Plant Solutions</option>
              <option>Green Energy Projects</option>
              <option>Infrastructure Services</option>
              <option>Materials Supply / Vendor Work</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="Tell us about your project location, scope, and timeline" />
          </label>
          <a className="primary-link contact-submit" href="mailto:info@omegainfram.com?subject=Omega%20Group%20Project%20Consultation">
            Contact Omega Group
          </a>
        </form>
      </section>
    </main>
  )
}
