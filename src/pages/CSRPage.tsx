import React from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Download,
  Droplets,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Leaf,
  Mail,
  Medal,
  Mountain,
  Recycle,
  ShieldCheck,
  Sprout,
  SunMedium,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react'

type IconType = LucideIcon

const heroImage =
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=82'

const focusAreas: Array<{ title: string; text: string; icon: IconType }> = [
  { title: 'Education & Skill Development', text: 'Scholarships, school support, and employability programs for young learners.', icon: GraduationCap },
  { title: 'Healthcare & Medical Support', text: 'Preventive health camps, medical access, and awareness drives for underserved communities.', icon: HeartPulse },
  { title: 'Environmental Sustainability', text: 'Tree plantation, waste reduction, water conservation, and biodiversity stewardship.', icon: Leaf },
  { title: 'Rural Development', text: 'Village infrastructure, public amenities, and practical support for local resilience.', icon: Mountain },
  { title: 'Women Empowerment', text: 'Livelihood training, health awareness, and community leadership opportunities.', icon: Users },
  { title: 'Renewable Energy Initiatives', text: 'Solar awareness, clean-energy access, and climate-positive infrastructure education.', icon: SunMedium },
  { title: 'Sports & Youth Development', text: 'Sports promotion, youth engagement, and discipline-building community programs.', icon: Medal },
  { title: 'Community Welfare Programs', text: 'Relief support, welfare partnerships, and need-based interventions for families.', icon: HandHeart },
]

const impactStats = [
  { value: 50000, suffix: '+', label: 'Lives Impacted' },
  { value: 200, suffix: '+', label: 'Community Projects' },
  { value: 100, suffix: '+', label: 'Educational Programs' },
  { value: 25, suffix: '+', label: 'Healthcare Camps' },
  { value: 10000, suffix: '+', label: 'Trees Planted' },
  { value: 500, suffix: '+', label: 'Employment Opportunities Created' },
]

const initiatives = [
  'Free Health Camps',
  'Scholarship Programs',
  'Solar Energy Awareness',
  'Plantation Drives',
  'Village Infrastructure Development',
  'Skill Development Workshops',
  'Sports Promotion Activities',
  'Disaster Relief Support',
]

const commitments: Array<{ title: string; text: string; icon: IconType }> = [
  { title: 'Carbon Footprint Reduction', text: 'Operational choices designed to reduce emissions and strengthen climate accountability.', icon: Activity },
  { title: 'Renewable Energy Adoption', text: 'Awareness and deployment support that advances solar and green-energy adoption.', icon: SunMedium },
  { title: 'Waste Management', text: 'Cleaner resource cycles through responsible disposal, reuse, and community education.', icon: Recycle },
  { title: 'Water Conservation', text: 'Practical water stewardship programs for communities and project ecosystems.', icon: Droplets },
  { title: 'Green Infrastructure', text: 'Infrastructure planning that balances growth, resilience, and environmental responsibility.', icon: Building2 },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1100&q=78',
    alt: 'Community volunteers supporting welfare distribution',
    title: 'Community Welfare',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=78',
    alt: 'Students participating in education and skill development activity',
    title: 'Education Programs',
  },
  {
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1100&q=78',
    alt: 'Healthcare professional supporting community medical outreach',
    title: 'Healthcare Outreach',
  },
  {
    src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1100&q=78',
    alt: 'Hands planting a tree for environmental sustainability',
    title: 'Plantation Drives',
  },
  {
    src: 'https://images.unsplash.com/photo-1497436072909-f5e4be1d8b8b?auto=format&fit=crop&w=1100&q=78',
    alt: 'Green landscape representing sustainability and environmental care',
    title: 'Sustainability',
  },
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1100&q=78',
    alt: 'Solar panels representing renewable energy awareness',
    title: 'Renewable Energy',
  },
]

const stories = [
  {
    quote: 'Omega Group support helped our students access better learning resources and career guidance.',
    name: 'School Program Coordinator',
    role: 'Education Partner',
  },
  {
    quote: 'The medical camp brought timely health screening to families who rarely receive preventive care.',
    name: 'Community Health Volunteer',
    role: 'Healthcare Outreach',
  },
  {
    quote: 'The village infrastructure initiative improved daily mobility and strengthened local confidence.',
    name: 'Local Community Representative',
    role: 'Rural Development',
  },
]

const partnerships = ['NGOs', 'Educational Institutions', 'Healthcare Organizations', 'Government Bodies', 'Community Groups']

const reports = [
  { title: 'CSR Policy PDF', text: 'Governance framework and responsible social investment principles.' },
  { title: 'Annual CSR Reports', text: 'Year-wise program progress, expenditure, and community outcomes.' },
  { title: 'Sustainability Reports', text: 'Environment, social, and governance commitments across operations.' },
  { title: 'Impact Assessment Reports', text: 'Outcome measurement and community impact evaluation summaries.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeader({ eyebrow, title, text, tone = 'light' }: { eyebrow: string; title: string; text?: string; tone?: 'light' | 'dark' }) {
  const isDark = tone === 'dark'
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      variants={fadeUp}
    >
      <p className={`text-xs font-bold uppercase tracking-[0.24em] ${isDark ? 'text-emerald-300' : 'text-[#0a84ff]'}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-bold leading-tight tracking-normal md:text-5xl ${isDark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {text ? <p className={`mt-5 text-base leading-8 md:text-lg ${isDark ? 'text-white/70' : 'text-slate-600'}`}>{text}</p> : null}
    </motion.div>
  )
}

function ImpactCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!isInView) return
    const duration = 1300
    const startedAt = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value])

  return (
    <div ref={ref} className="rounded-lg border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
      <strong className="block text-3xl font-bold tracking-normal md:text-4xl">
        {count.toLocaleString('en-IN')}
        {suffix}
      </strong>
      <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.14em] text-white/72">{label}</span>
    </div>
  )
}

function IconCard({ title, text, icon: Icon }: { title: string; text: string; icon: IconType }) {
  return (
    <motion.article
      className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#34a853]/35 hover:shadow-xl hover:shadow-slate-200/80"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      variants={fadeUp}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0a84ff]/10 text-[#0a84ff] transition group-hover:bg-[#34a853]/12 group-hover:text-[#34a853]">
        <Icon aria-hidden="true" size={24} />
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-normal text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </motion.article>
  )
}

export default function CSRPage() {
  const [lightboxImage, setLightboxImage] = React.useState<(typeof galleryImages)[number] | null>(null)

  return (
    <main className="bg-white text-slate-700">
      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden pt-[72px]">
        <img
          src={heroImage}
          alt="Community development, education, healthcare, and environmental sustainability"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a36]/92 via-[#0d3b66]/72 to-[#061a36]/26" />
        <div className="mx-auto flex min-h-[calc(100vh-72px)] w-[min(1200px,calc(100%-40px))] items-center py-20">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">Omega Group CSR</p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-normal text-white md:text-6xl lg:text-7xl">
              Creating Sustainable Impact for Communities
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
              At Omega Group, we believe that business success is measured not only by profits but also by the positive
              impact we create for society.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#initiatives"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#34a853] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[#2f974b] focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Explore Our Initiatives
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#partner"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/18 focus:outline-none focus:ring-4 focus:ring-white/25"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <SectionHeader
          eyebrow="Vision & Mission"
          title="Responsible growth that strengthens communities"
          text="Our CSR approach connects sustainable growth with education, healthcare, environmental responsibility, livelihood enhancement, and long-term community development."
        />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          <IconCard
            title="CSR Vision"
            text="To enable inclusive, sustainable growth by supporting communities with resources, knowledge, clean energy awareness, and resilient social infrastructure."
            icon={ShieldCheck}
          />
          <IconCard
            title="CSR Mission"
            text="To deliver focused programs in education, healthcare, environment, livelihood enhancement, rural development, and renewable-energy awareness."
            icon={Sprout}
          />
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 md:py-28" id="focus-areas">
        <SectionHeader
          eyebrow="Focus Areas"
          title="Our CSR Focus Areas"
          text="Omega Group invests in programs that are practical, measurable, and aligned with the needs of communities around our work."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <IconCard key={area.title} {...area} />
          ))}
        </div>
      </section>

      <section className="bg-[#0d3b66] px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">Impact Statistics</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-normal text-white md:text-5xl">
                Measurable progress across people, planet, and opportunity
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {impactStats.map((stat) => (
                <ImpactCounter key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28" id="initiatives">
        <SectionHeader eyebrow="Key Initiatives" title="CSR programs built for lasting community value" />
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
          {initiatives.map((initiative, index) => (
            <motion.article
              key={initiative}
              className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.22) }}
              variants={fadeUp}
            >
              <span className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[#0a84ff] via-[#34a853] to-transparent" aria-hidden="true" />
              <div className="pl-8">
                <span className="text-sm font-bold text-[#0a84ff]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-bold tracking-normal text-slate-950">{initiative}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Delivered through local partnerships, field coordination, and impact tracking for transparent outcomes.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:py-28">
        <SectionHeader
          eyebrow="ESG Commitment"
          title="Sustainability Commitment"
          text="Our ESG priorities support clean energy adoption, responsible resource use, and greener infrastructure choices."
          tone="dark"
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-5">
          {commitments.map(({ title, text, icon: Icon }) => (
            <motion.article
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              variants={fadeUp}
            >
              <Icon className="text-emerald-300" size={26} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold tracking-normal text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <SectionHeader
          eyebrow="Gallery"
          title="CSR activity gallery"
          text="A visual view of community welfare, education, healthcare, sustainability, and renewable-energy engagement."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxImage(image)}
              className="group overflow-hidden rounded-lg bg-slate-100 text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-[#0a84ff]/30"
              aria-label={`Open gallery image: ${image.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent opacity-90" />
                <span className="absolute bottom-4 left-4 text-lg font-bold text-white">{image.title}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 md:py-28">
        <SectionHeader eyebrow="Success Stories" title="Voices from the communities we serve" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <motion.figure
              key={story.name}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              variants={fadeUp}
            >
              <blockquote className="text-base leading-8 text-slate-700">"{story.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-5">
                <strong className="block text-slate-950">{story.name}</strong>
                <span className="text-sm font-semibold text-[#0a84ff]">{story.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <SectionHeader
          eyebrow="Partnerships"
          title="Collaborating with trusted institutions"
          text="Omega Group works with NGOs, schools, healthcare organizations, government bodies, and community groups to deliver accountable CSR programs."
        />
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {partnerships.map((partner) => (
            <div key={partner} className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#0a84ff]/10 text-[#0a84ff]">
                <BriefcaseBusiness size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold tracking-normal text-slate-950">{partner}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 md:py-28">
        <SectionHeader eyebrow="Reports" title="CSR Reports & Downloads" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reports.map((report) => (
            <article key={report.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <Download className="text-[#34a853]" size={26} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold tracking-normal text-slate-950">{report.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{report.text}</p>
              <a
                href="mailto:csr@omegagroup.in?subject=CSR%20Report%20Request"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0a84ff] hover:text-[#34a853]"
              >
                Request Download
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:py-28" id="partner">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-lg bg-[#0d3b66] p-8 text-white md:grid-cols-[1fr_0.72fr] md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">Join Our Mission</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-normal text-white md:text-5xl">
              Partner with Omega Group to create measurable social impact
            </h2>
            <p className="mt-5 text-base leading-8 text-white/78">
              We welcome partnerships, donations, volunteer programs, and community collaborations that strengthen
              education, healthcare, sustainability, and livelihood outcomes.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 text-slate-800">
            <h3 className="text-xl font-bold tracking-normal text-slate-950">Contact CSR Team</h3>
            <div className="mt-5 grid gap-4 text-sm leading-7">
              <p><strong>Omega Group</strong></p>
              <a className="inline-flex items-center gap-2 font-semibold text-[#0a84ff]" href="mailto:csr@omegagroup.in">
                <Mail size={17} aria-hidden="true" />
                csr@omegagroup.in
              </a>
              <a className="font-semibold text-[#0a84ff]" href="https://www.omegainfram.com">www.omegainfram.com</a>
              <p>Phone: 011-41630318</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                  <a key={social} href="/" className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-700 hover:border-[#0a84ff] hover:text-[#0a84ff]">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxImage ? (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/86 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.title}
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-white p-3 text-slate-950 shadow-lg"
            onClick={() => setLightboxImage(null)}
            aria-label="Close gallery image"
          >
            <X size={22} aria-hidden="true" />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-h-[82vh] max-w-[94vw] rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </main>
  )
}
