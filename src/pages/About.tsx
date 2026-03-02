import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.pushly.nl/about',
  url: 'https://www.pushly.nl/about',
  name: 'Over Ons — Pushly',
  description: 'Pushly helpt lokale servicebedrijven professioneler online te worden en meer klanten aan te trekken zonder extra werk.',
  inLanguage: 'nl-NL',
  isPartOf: { '@id': 'https://www.pushly.nl/#website' },
  about: { '@id': 'https://www.pushly.nl/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pushly.nl' },
      { '@type': 'ListItem', position: 2, name: 'Over Ons', item: 'https://www.pushly.nl/about' },
    ],
  },
};

export default function About() {
  usePageMeta({
    title: 'Over Ons — Het Team achter Pushly',
    description: 'Pushly helpt lokale servicebedrijven professioneler online te worden en meer klanten aan te trekken. Transparant, eerlijk en resultaatgericht.',
    canonical: 'https://www.pushly.nl/about',
  });
  useJsonLd('about-schema', ABOUT_SCHEMA);
  return (
    <div className="flex-grow pt-32 pb-24 relative z-10">
      <div className="absolute inset-0 z-0 bg-grid opacity-50"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-4 block">Meet The Team</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Hey, We're <br />
              <span className="text-gray-500">PUSHLY.</span>
            </h1>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Pushly was created to help service businesses look more professional online and attract more customers without doing extra work. Our mission is simple: build the three tools every business needs to win today — a strong website, great reviews, and a fully optimized Google Business Profile.
              </p>
              <p>
                We focus on clarity, honesty, and real results. Whether you're just starting out or leveling up your online presence, we’re here to give you a clean, modern system that supports your growth every day.
              </p>
            </div>

            <div className="mt-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-yellow-500" />
                  <span>Built for service businesses of all sizes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-yellow-500" />
                  <span>Transparent, reliable, and easy to work with</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-yellow-500" />
                  <span>Focused on results that actually matter</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-full min-h-[400px]"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse" aria-hidden="true"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 1 }}></stop>
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#ea580c', stopOpacity: 1 }}></stop>
                  </linearGradient>
                  <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 1 }}></stop>
                  </linearGradient>
                </defs>
                <circle cx="100" cy="70" r="45" fill="none" stroke="url(#grad1)" strokeWidth="20" strokeLinecap="round" className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: 'center', animationDirection: 'reverse' }}></circle>
                <circle cx="75" cy="130" r="45" fill="none" stroke="url(#grad2)" strokeWidth="20" strokeLinecap="round" className="animate-[spin_15s_linear_infinite]" style={{ transformOrigin: 'center' }}></circle>
                <circle cx="125" cy="130" r="45" fill="none" stroke="url(#grad3)" strokeWidth="20" strokeLinecap="round" className="animate-[spin_12s_linear_infinite]" style={{ transformOrigin: 'center', animationDirection: 'reverse' }}></circle>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-12 mt-20 border-t border-white/5 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Icon icon="solar:hand-shake-linear" className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Commitment</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                We don't just build websites; we build assets that appreciate. We view every client as a long-term partner, not a transactional project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <Icon icon="solar:bolt-linear" className="text-yellow-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">What Drives Us</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Seeing local businesses outrank national chains. We believe the "little guy" deserves the same enterprise-grade technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Icon icon="solar:chart-2-linear" className="text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Why Choose Us</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                No fluff. No confusing jargon. No hidden fees. Just a clean, powerful growth system that works while you sleep.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="md:mt-32 max-w-5xl mt-24 mr-auto ml-auto px-2">
        <div className="text-center mb-14">
          <p className="uppercase text-xs font-medium text-sky-400 tracking-widest font-mono mb-3">Vergelijking</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Waarom wij anders zijn</h2>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-lg mx-auto">Stop met betalen voor "mooie" websites die niet verkopen.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/30 via-indigo-500/30 to-violet-600/30 rounded-3xl blur-3xl opacity-60 pointer-events-none" aria-hidden="true"></div>
          <div className="relative overflow-x-auto rounded-xl">
            <div className="min-w-[640px] rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/30" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}>
              {/* Table Header */}
              <div className="grid border-b border-white/10 bg-white/[0.02]" style={{ gridTemplateColumns: '3fr 2.5fr 2.5fr 2.5fr' }}>
                <div className="uppercase text-xs font-medium text-gray-400 tracking-wider font-mono py-5 px-5">Feature</div>
                <div className="py-5 px-4 text-center"><span className="text-xs font-medium tracking-wider text-gray-300 uppercase font-mono">Pushly Basis</span></div>
                <div className="py-5 px-4 text-center" style={{ background: 'rgba(56,189,248,0.04)' }}><span className="text-xs font-medium tracking-wider text-sky-300 uppercase font-mono">Pushly Groei</span></div>
                <div className="py-5 px-4 text-center text-xs font-medium tracking-wider text-gray-400 uppercase font-mono">Traditioneel Bureau</div>
              </div>
              {[
                { label: 'Maandelijkse Kosten', basis: '€297/mnd', groei: '€497/mnd', trad: '€3.000 – €8.000/mnd', basisColor: 'text-emerald-400', groeiColor: 'text-emerald-400', tradColor: 'text-gray-400' },
                { label: 'Eenmalige Setup', basis: '€0', groei: '€0', trad: '€3.000 – €5.000+', basisColor: 'text-emerald-400', groeiColor: 'text-emerald-400', tradColor: 'text-gray-400' },
                { label: 'Paginasnelheid', basis: '99/100', groei: '99/100', trad: 'Vaak Traag (Wordpress)', basisColor: 'text-white', groeiColor: 'text-white', tradColor: 'text-gray-400' },
                { label: 'Review Automatisering', basis: 'check', groei: 'check', trad: 'cross', basisColor: '', groeiColor: '', tradColor: '' },
                { label: 'Advertentiebeheer', basis: 'Campagnebeheer', groei: '+ AI-optimalisatie', trad: '€500+ extra/mnd', basisColor: 'text-white', groeiColor: 'text-white font-medium', tradColor: 'text-gray-400' },
                { label: 'Creatives & Content', basis: 'cross', groei: 'check', trad: '€300+/stuk', basisColor: '', groeiColor: '', tradColor: 'text-gray-400' },
                { label: 'Doorlopende Support', basis: 'Maandelijks', groei: 'Onbeperkt', trad: 'Uurtarief (€100+/uur)', basisColor: 'text-white', groeiColor: 'text-white font-medium', tradColor: 'text-gray-400' },
                { label: 'Focus', basis: 'Leads & Zichtbaarheid', groei: 'Schaling & Omzet', trad: 'Alleen Design', basisColor: 'text-sky-400 font-medium', groeiColor: 'text-sky-400 font-medium', tradColor: 'text-gray-400' },
              ].map((row, idx) => (
                <div key={row.label} className={`grid hover:bg-white/[0.04] transition-colors group ${idx < 7 ? 'border-b border-white/5' : ''}`} style={{ gridTemplateColumns: '3fr 2.5fr 2.5fr 2.5fr' }}>
                  <div className="py-5 px-5 font-medium text-sm text-white group-hover:text-sky-200 transition-colors">{row.label}</div>
                  <div className="py-5 px-4 flex items-center justify-center">
                    {row.basis === 'check' ? <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center"><Icon icon="solar:check-circle-linear" width="16" height="16" className="text-sky-400" /></div>
                      : row.basis === 'cross' ? <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Icon icon="solar:close-circle-linear" width="16" height="16" className="text-gray-500" /></div>
                        : <span className={`text-sm ${row.basisColor}`}>{row.basis}</span>}
                  </div>
                  <div className="py-5 px-4 flex items-center justify-center" style={{ background: 'rgba(56,189,248,0.04)' }}>
                    {row.groei === 'check' ? <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center"><Icon icon="solar:check-circle-linear" width="16" height="16" className="text-sky-400" /></div>
                      : row.groei === 'cross' ? <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Icon icon="solar:close-circle-linear" width="16" height="16" className="text-gray-500" /></div>
                        : <span className={`text-sm ${row.groeiColor}`}>{row.groei}</span>}
                  </div>
                  <div className="py-5 px-4 flex items-center justify-center">
                    {row.trad === 'cross' ? <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Icon icon="solar:close-circle-linear" width="16" height="16" className="text-gray-500" /></div>
                      : <span className={`text-sm text-center ${row.tradColor}`}>{row.trad}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-950 border-t border-gray-900 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Wat Onze Klanten Zeggen</h2>
              <p className="text-gray-400 max-w-lg">Lokale ondernemers vertrouwen op Pushly om hun online aanwezigheid te verbeteren. Dit zeggen zij.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                <img width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Klant avatar" />
                <img width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Klant avatar" />
                <img width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="Klant avatar" />
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-bold">5.0</span> from 50+ reviews
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: '"From day one the process has been smooth, easy, and honestly stress free."', name: 'Cleanure Laundry', role: 'Owner', avatarSeed: 'Cleanure' },
              { quote: '"Super simple throughout the entire process."', name: 'Sean B.', role: 'Pearl Pressure Washing', avatarSeed: 'Sean' },
              { quote: '"Professional, fast, and they actually answer the phone. Most agencies I\'ve worked with ghost you after the sale. The PUSHLY team treats my business like it\'s their own."', name: 'Mike Kowalski', role: 'Kowalski Auto Detailing', avatarSeed: 'Mike' },
            ].map((review) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Icon key={i} icon="solar:star-bold" className="w-4 h-4" />)}
                </div>
                <p className="leading-relaxed text-sm text-gray-300 mb-6">{review.quote}</p>
                <div className="flex items-center gap-3">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.avatarSeed}`} alt={review.name} width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border border-white/10 bg-gray-800" />
                  <div>
                    <div className="text-sm font-medium text-white">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-950 border-t border-gray-900 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-gray-950/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Common Questions</h2>
              <p className="text-gray-400">Everything you need to know about working with us.</p>
            </div>
            <div className="space-y-3 relative z-10">
              {[
                { q: 'Why should I choose Pushly over a big agency?', a: 'Big agencies are slow and expensive. We specialize in fast turnaround, local-focused results, and hands-on support. You get direct access to the people actually doing the work.' },
                { q: 'What kind of businesses do you work with?', a: 'We partner with service-based businesses that rely on local customers — contractors, home services, med spas, real estate pros, auto shops, and more. If people search for you on Google, we can help you win more of those searches.' },
                { q: 'Do I have to sign a long-term contract?', a: 'We offer both monthly and annual plans. We believe in earning your business every month, so we don\'t lock you into multi-year contracts you can\'t get out of.' },
              ].map((faq) => (
                <details key={faq.q} className="group bg-gray-900/50 border border-white/5 rounded-lg overflow-hidden">
                  <summary className="flex cursor-pointer hover:bg-white/5 transition-colors select-none font-medium text-white p-4 items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-gray-500">
                      <Icon icon="solar:alt-arrow-down-linear" width="16" height="16" />
                    </span>
                  </summary>
                  <div className="px-4 pb-4 pt-4 text-gray-400 text-sm leading-relaxed border-t border-white/5">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
