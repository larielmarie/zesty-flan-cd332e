import { createFileRoute } from '@tanstack/react-router'
import { Phone } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const PHONE = '850.390.3442'
const PHONE_HREF = 'tel:8503903442'
const EMAIL = 'Tirrell.wilson@AdvancedFurnitureInstallation.com'
const EMAIL_HREF = 'mailto:Tirrell.wilson@AdvancedFurnitureInstallation.com'

const services = [
  {
    icon: null,
    iconImg: '/desk-icon.svg',
    title: 'Systems Furniture',
    description:
      'Expert installation of modular workstations, panel systems, and cubicle configurations for open-plan and private offices.',
  },
  {
    icon: '🗄️',
    title: 'Case Goods',
    description:
      'Precise assembly and placement of desks, credenzas, bookcases, and executive furniture for any commercial environment.',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Education',
    description:
      'Specialized installs for clinics, hospitals, universities, and K–12 facilities — meeting compliance and safety standards.',
  },
  {
    icon: '🏛️',
    title: 'Government Projects',
    description:
      'Cleared crews with experience delivering on government contracts, GSA schedules, and military installations.',
  },
  {
    icon: '🚚',
    title: 'Delivery & Logistics',
    description:
      'White-glove delivery coordination, receiving, and site staging to keep your project on schedule from dock to desk.',
  },
  {
    icon: '🔧',
    title: 'Reconfigurations',
    description:
      'Efficient moves, adds, and changes to existing furniture layouts — minimizing downtime and protecting your investment.',
  },
]

const recentProjects = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
]

const stats = [
  { value: '20+', label: 'Years in Business' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction Goal' },
  { value: '6', label: 'Service Specialties' },
]

const whyUs = [
  'Strict punch-list process — we don\'t leave until it\'s right',
  'Crews with clean backgrounds',
  'On-time delivery coordination & staging',
  'Experience with GSA, healthcare, and higher-ed compliance',
  'Locally owned and operated in the Florida Panhandle',
]

const steps = [
  {
    number: '01',
    title: 'Request a Quote',
    description:
      'Call us or send over your project specs, floor plan, or furniture manifest. We respond within one business day.',
  },
  {
    number: '02',
    title: 'Site Assessment',
    description:
      'Our team visits the site to verify conditions, access points, and any coordination needed with your contractor.',
  },
  {
    number: '03',
    title: 'Scheduled Installation',
    description:
      'We show up on time, fully equipped, and work systematically through the scope — keeping your space clean as we go.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description:
      'You inspect every piece with us. We address any punch-list items on the spot before we close out the job.',
  },
]

function NavBar() {
  return (
    <nav
      style={{ backgroundColor: 'var(--maroon)' }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        <div className="flex items-center gap-3">
          <div
            style={{ backgroundColor: 'var(--gold)' }}
            className="w-1 h-8 rounded-full"
          />
          <div>
            <div
              className="font-display font-bold text-white text-base md:text-lg leading-tight"
            >
              Advanced Furniture
            </div>
            <div
              className="font-ui text-xs tracking-widest uppercase"
              style={{ color: 'var(--gold-light)' }}
            >
              Commercial Installation
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap justify-center md:justify-end w-full md:w-auto">
          <a
            href={PHONE_HREF}
            className="font-ui font-bold text-xs md:text-sm tracking-wider uppercase px-2 md:px-4 py-1.5 md:py-2 rounded transition-all duration-200 hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--maroon-dark)',
            }}
          >
            <Phone size={14} className="md:hidden inline mr-1" style={{ display: 'inline', verticalAlign: 'middle' }} />
            <Phone size={16} className="hidden md:inline mr-1" style={{ display: 'inline', verticalAlign: 'middle' }} /> 
            <span className="hidden sm:inline">Call Us</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href={EMAIL_HREF}
            className="font-ui font-bold text-xs md:text-sm tracking-wider uppercase px-2 md:px-4 py-1.5 md:py-2 rounded transition-all duration-200 hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--maroon-dark)',
            }}
          >
            <span className="hidden sm:inline">Request a Quote</span>
            <span className="sm:hidden">Quote</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--maroon-dark)' }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/team-install.jpg)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(74,16,25,0.88) 0%, rgba(107,26,42,0.82) 50%, rgba(74,16,25,0.92) 100%)',
        }}
      />

      {/* Gold accent bar */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: 'var(--gold)' }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className="inline-block font-ui font-semibold text-sm tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          style={{
            backgroundColor: 'rgba(201,162,39,0.2)',
            color: 'var(--gold-light)',
            border: '1px solid rgba(201,162,39,0.4)',
          }}
        >
          Florida Roots. Southern Reach.
        </div>

        <h1
          className="font-display font-black text-white mb-6 leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          Commercial Furniture
          <br />
          <span style={{ color: 'var(--gold)' }}>Installation Experts</span>
        </h1>

        <p
          className="font-ui text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ letterSpacing: '0.02em' }}
        >
          From systems furniture and case goods to government and healthcare
          environments — Advanced Furniture delivers professional installs, on
          time, every time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={EMAIL_HREF}
            className="font-ui font-bold text-xl md:text-2xl tracking-wider px-10 py-5 rounded-lg shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-gold"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--maroon-dark)',
            }}
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="font-ui font-semibold text-lg tracking-wider px-8 py-5 rounded-lg border-2 text-white transition-all duration-200 hover:bg-white hover:text-maroon"
            style={{ borderColor: 'rgba(255,255,255,0.4)' }}
          >
            View Services ↓
          </a>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: 'rgba(255,255,255,0.3)' }}
        >
          <div
            className="w-1 h-3 rounded-full"
            style={{ backgroundColor: 'var(--gold)' }}
          />
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section
      style={{ backgroundColor: 'var(--gold)' }}
      className="py-10 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-display font-black text-4xl md:text-5xl"
                style={{ color: 'var(--maroon-dark)' }}
              >
                {stat.value}
              </div>
              <div
                className="font-ui font-semibold text-sm uppercase tracking-widest mt-1"
                style={{ color: 'var(--maroon)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RecentProjects() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="font-ui font-semibold text-sm tracking-widest uppercase mb-4"
            style={{ color: 'var(--gold-dark)' }}
          >
            Recent Projects
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-5xl"
            style={{ color: 'var(--maroon)' }}
          >
            Recent Projects
          </h2>
          <p
            className="font-ui text-base text-gray-600 max-w-3xl mx-auto mt-4"
            style={{ letterSpacing: '0.01em' }}
          >
            A curated selection of recent commercial furniture installs and workspace transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((src, index) => (
            <div
              key={src}
              className="overflow-hidden rounded-3xl shadow-xl bg-white"
            >
              <img
                src={src}
                alt={`Recent project ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="font-ui font-semibold text-sm tracking-widest uppercase mb-4"
            style={{ color: 'var(--gold-dark)' }}
          >
            What We Do
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-5xl"
            style={{ color: 'var(--maroon)' }}
          >
            Our Services
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded"
            style={{ backgroundColor: 'var(--gold)' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl p-8 shadow-sm border-l-4 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                borderLeftColor: 'var(--gold)',
              }}
            >
              <div className="mb-4">
                {service.iconImg ? (
                  <img
                    src={service.iconImg}
                    alt={service.title}
                    style={{ width: '48px', height: '48px' }}
                  />
                ) : (
                  <span className="text-4xl">{service.icon}</span>
                )}
              </div>
              <h3
                className="font-display font-bold text-xl mb-3"
                style={{ color: 'var(--maroon)' }}
              >
                {service.title}
              </h3>
              <p
                className="font-ui text-base leading-relaxed"
                style={{ color: '#4A4A4A', letterSpacing: '0.01em' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--maroon)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <div
              className="font-ui font-semibold text-sm tracking-widest uppercase mb-4"
              style={{ color: 'var(--gold-light)' }}
            >
              Why Advanced Furniture
            </div>
            <h2
              className="font-display font-bold text-4xl md:text-5xl text-white mb-8 leading-tight"
            >
              The Standard Your
              <br />
              <span style={{ color: 'var(--gold)' }}>Project Deserves</span>
            </h2>
            <ul className="space-y-4">
              {whyUs.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 font-ui text-lg text-gray-200"
                  style={{ letterSpacing: '0.01em' }}
                >
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: 'var(--gold)',
                      color: 'var(--maroon-dark)',
                    }}
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo side */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl opacity-30"
              style={{ backgroundColor: 'var(--gold)' }}
            />
            <img
              src="/extra.jpg"
              alt="Advanced Furniture installation crew at work"
              className="relative rounded-xl shadow-2xl w-full object-cover"
              style={{ maxHeight: '460px' }}
            />
            <div
              className="absolute -bottom-4 -right-4 rounded-xl px-6 py-4 shadow-xl"
              style={{ backgroundColor: 'var(--gold)' }}
            >
              <div
                className="font-display font-black text-2xl leading-tight"
                style={{ color: 'var(--maroon-dark)' }}
              >
                On Time.
              </div>
              <div
                className="font-display font-black text-2xl leading-tight"
                style={{ color: 'var(--maroon-dark)' }}
              >
                Every Time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="font-ui font-semibold text-sm tracking-widest uppercase mb-4"
            style={{ color: 'var(--gold-dark)' }}
          >
            How It Works
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-5xl"
            style={{ color: 'var(--maroon)' }}
          >
            Our Process
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded"
            style={{ backgroundColor: 'var(--gold)' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-0.5 -translate-x-1/2 z-0"
                  style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }}
                />
              )}
              <div className="relative z-10 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg font-display font-black text-xl"
                  style={{
                    backgroundColor: 'var(--maroon)',
                    color: 'var(--gold)',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="font-display font-bold text-xl mb-3"
                  style={{ color: 'var(--maroon)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-ui text-base leading-relaxed"
                  style={{ color: '#4A4A4A' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--maroon-dark)' }}
    >
      {/* Decorative gold circle */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--gold)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--gold)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className="font-ui font-semibold text-sm tracking-widest uppercase mb-4"
          style={{ color: 'var(--gold-light)' }}
        >
          Ready to Get Started?
        </div>
        <h2
          className="font-display font-black text-white mb-6 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Let's Talk About
          <br />
          <span style={{ color: 'var(--gold)' }}>Your Project</span>
        </h2>
        <p
          className="font-ui text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ letterSpacing: '0.02em' }}
        >
          Whether you're outfitting a new office, reconfiguring an existing
          space, or managing a large commercial build-out — our crew is ready
          to deliver a clean, professional install.
        </p>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 font-ui font-bold text-2xl md:text-3xl tracking-wider px-12 py-6 rounded-xl shadow-2xl transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: 'var(--gold)',
            color: 'var(--maroon-dark)',
          }}
        >
          <Phone size={24} style={{ color: 'var(--maroon-dark)' }} />
          {PHONE}
        </a>

        <p
          className="font-ui text-sm mt-6 tracking-wide"
          style={{ color: 'rgba(201,162,39,0.6)' }}
        >
          Call or text — we pick up
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ backgroundColor: 'var(--charcoal)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div
            className="font-display font-bold text-white text-lg"
          >
            Advanced Furniture
          </div>
          <div
            className="font-ui text-sm tracking-wider"
            style={{ color: 'var(--gold)' }}
          >
            Commercial Furniture Installation
          </div>
        </div>
        <div className="font-ui text-gray-400 text-sm text-center">
          Pensacola, FL · Gulf Coast Region
        </div>
        <a
          href={PHONE_HREF}
          className="font-ui font-semibold tracking-wider transition-colors hover:opacity-80"
          style={{ color: 'var(--gold)' }}
        >
          {PHONE}
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center">
        <p className="font-ui text-gray-600 text-xs tracking-wide">
          © {new Date().getFullYear()} Advanced Furniture. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <StatsBar />
      <RecentProjects />
      <Services />
      <WhyUs />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}
