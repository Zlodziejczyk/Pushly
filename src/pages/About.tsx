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
            <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase mb-4 block">Ontmoet Het Team</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Hey, Wij zijn <br />
              <span className="text-gray-500">PUSHLY.</span>
            </h1>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Pushly is opgericht om lokale servicebedrijven te helpen professioneler online te verschijnen en meer klanten aan te trekken, zonder extra moeite te hoeven doen. Onze missie is simpel: de drie tools bouwen die elk bedrijf vandaag de dag nodig heeft om te winnen — een sterke website, geweldige reviews en een volledig geoptimaliseerd Google Bedrijfsprofiel.
              </p>
              <p>
                We focussen op duidelijkheid, eerlijkheid en echte resultaten. Of je nu net begint of je online aanwezigheid naar een hoger niveau wilt tillen, we zijn er om je een helder, modern systeem te geven dat jouw groei elke dag ondersteunt.
              </p>
            </div>

            <div className="mt-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-yellow-500" />
                  <span>Gebouwd voor bedrijven van elke omvang</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-yellow-500" />
                  <span>Transparant, betrouwbaar en makkelijk om mee te werken</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Icon icon="solar:check-circle-bold" className="w-5 h-5 text-yellow-500" />
                  <span>Gefocust op resultaten die er echt toe doen</span>
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
              <h3 className="text-xl font-semibold text-white mb-3">Onze Toewijding</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                We bouwen niet zomaar websites; we bouwen digitale assets die in waarde stijgen. We zien elke klant als een langdurige partner, niet als een eenmalig project.
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
              <h3 className="text-xl font-semibold text-white mb-3">Onze Drijfveer</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Het zien van lokale bedrijven die nationale concurrenten verslaan in Google. Wij geloven dat de "kleine speler" recht heeft op dezelfde enterprise-grade technologie.
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
              <h3 className="text-xl font-semibold text-white mb-3">Strak & Transparant</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Geen blabla. Geen verwarrend vakjargon. Geen verborgen kosten. Alleen een helder, krachtig groeisysteem dat voor jou werkt terwijl jij slaapt.
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
                <span className="text-white font-bold">5.0</span> van de 50+ reviews
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: '"Vanaf dag één is het proces soepel, eenvoudig en eerlijk gezegd compleet stressvrij verlopen."', name: 'Cleanure Laundry', role: 'Eigenaar', avatarSeed: 'Cleanure' },
              { quote: '"Een super simpel proces van begin tot eind."', name: 'Sean B.', role: 'Pearl Pressure Washing', avatarSeed: 'Sean' },
              { quote: '"Professioneel, snel, en ze nemen daadwerkelijk de telefoon op. De meeste bureaus reageren nergens meer op na de verkoop. Het PUSHLY team behandelt mijn bedrijf alsof het hun eigen bedrijf is."', name: 'Mike Kowalski', role: 'Kowalski Auto Detailing', avatarSeed: 'Mike' },
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
              <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Veelgestelde Vragen</h2>
              <p className="text-gray-400">Alles wat je moet weten over de samenwerking met ons.</p>
            </div>
            <div className="space-y-3 relative z-10">
              {[
                { q: 'Waarom zou ik voor Pushly kiezen in plaats van een groot bureau?', a: 'Grote bureaus zijn traag en duur. Wij zijn gespecialiseerd in een snelle oplevering, lokaal gerichte resultaten en hands-on support. Je krijgt direct contact met de mensen die het werk daadwerkelijk uitvoeren.' },
                { q: 'Met wat voor soort bedrijven werken jullie samen?', a: 'We werken samen met servicegerichte bedrijven die afhankelijk zijn van lokale klanten — aannemers, thuisservices, medische spa\'s, makelaars, autogarages en meer. Als mensen naar je zoeken op Google, kunnen wij je helpen om vaker gevonden te worden.' },
                { q: 'Zit ik vast aan een langdurig contract?', a: 'We bieden zowel maandelijkse als jaarlijkse plannen aan. We geloven dat we jouw klandizie elke maand opnieuw moeten verdienen, dus we binden je niet aan meerjarige contracten waar je niet onderuit kunt.' },
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
