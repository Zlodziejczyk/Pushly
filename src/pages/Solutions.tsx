import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

const SOLUTIONS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.pushly.nl/solutions',
  url: 'https://www.pushly.nl/solutions',
  name: 'Oplossingen — Websites, Marketing & Automatisering | Pushly',
  description: 'Meer aanvragen, minder weggegooid budget. Websites, marketing en automatisering voor het Nederlandse MKB.',
  inLanguage: 'nl-NL',
  isPartOf: { '@id': 'https://www.pushly.nl/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pushly.nl' },
      { '@type': 'ListItem', position: 2, name: 'Oplossingen', item: 'https://www.pushly.nl/solutions' },
    ],
  },
  mainEntity: [
    {
      '@type': 'Service',
      name: 'Basis Pakket',
      description: 'Website, CRM, marketing en campagnebeheer — alles wat je nodig hebt om zichtbaar te worden en leads te genereren.',
      provider: { '@id': 'https://www.pushly.nl/#organization' },
      areaServed: { '@type': 'Country', name: 'Nederland' },
      offers: { '@type': 'Offer', price: '297', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
    },
    {
      '@type': 'Service',
      name: 'Groei Pakket',
      description: 'Alles uit Basis plus AI-gestuurde marketing, creatieve content en agressievere schaling.',
      provider: { '@id': 'https://www.pushly.nl/#organization' },
      areaServed: { '@type': 'Country', name: 'Nederland' },
      offers: { '@type': 'Offer', price: '497', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
    },
    {
      '@type': 'Service',
      name: 'Schaal Pakket',
      description: 'Full-service groeipartner. Wij beheren alles — van strategie tot uitvoering.',
      provider: { '@id': 'https://www.pushly.nl/#organization' },
      areaServed: { '@type': 'Country', name: 'Nederland' },
      offers: { '@type': 'Offer', price: '797', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
    },
  ],
};

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbarHeight = document.querySelector('header')?.offsetHeight ?? 64;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 44 - 8;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Solutions() {
  usePageMeta({
    title: 'Oplossingen — Marketing & Automatisering voor MKB | Pushly',
    description: 'Van high-speed websites tot AI-gestuurde advertentiecampagnes. Basis vanaf €297/mnd, maandelijks opzegbaar, geen verborgen kosten.',
    canonical: 'https://www.pushly.nl/solutions',
  });
  useJsonLd('solutions-schema', SOLUTIONS_SCHEMA);

  const [navbarHeight, setNavbarHeight] = useState(64);

  useEffect(() => {
    const updateNavHeight = () => {
      const h = document.querySelector('header')?.offsetHeight ?? 64;
      setNavbarHeight(h);
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const stickySubnav = document.getElementById('sticky-subnav');
      const heroSection = document.getElementById('hero-section');
      if (!heroSection || !stickySubnav) return;
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < navbarHeight) {
        stickySubnav.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
        stickySubnav.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      } else {
        stickySubnav.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        stickySubnav.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);

  return (
    <>
      {/* Sticky Sub-Nav */}
      <div id="sticky-subnav" className="fixed z-40 left-0 right-0 transition-all duration-300 opacity-0 -translate-y-2 pointer-events-none" style={{ top: `${navbarHeight}px`, background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 h-11 overflow-x-auto hide-scrollbar whitespace-nowrap">
            <button onClick={() => scrollToSection('websites')} className="sub-nav-link cursor-pointer text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <Icon icon="solar:monitor-smartphone-linear" width="14" height="14" />
              Websites &amp; Funnels
            </button>
            <button onClick={() => scrollToSection('marketing')} className="sub-nav-link cursor-pointer text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <Icon icon="solar:chart-2-linear" width="14" height="14" />
              Marketing
            </button>
            <button onClick={() => scrollToSection('automatisering')} className="sub-nav-link cursor-pointer text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <Icon icon="solar:bolt-linear" width="14" height="14" />
              Automatisering
            </button>
            <button onClick={() => scrollToSection('prijzen')} className="sub-nav-link cursor-pointer text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <Icon icon="solar:tag-price-linear" width="14" height="14" />
              Prijzen
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section id="hero-section" className="overflow-hidden pt-36 pb-24 relative">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-500/8 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium mb-8"
            style={{ background: 'rgba(56,189,248,0.08)', borderColor: 'rgba(56,189,248,0.25)', color: 'rgb(56,189,248)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="font-mono tracking-wide">Campagnes die werken. Systemen die het bijhouden.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
            style={{ lineHeight: 1.08 }}
          >
            Meer aanvragen. Minder weggegooid budget.
            <span className="block mt-2 text-gradient-blue">Wij leveren beide.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Wij combineren slimme advertentiecampagnes met een systeem dat elke lead automatisch opvolgt — zodat jij je kunt richten op het echte werk. Klanten helpen.
          </motion.p>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12"
          >
            {[
              { value: '94%', label: 'Response rate' },
              { value: '3×', label: 'Gemiddeld meer leads' },
              { value: '€0', label: 'Setup kosten' },
              { value: '48u', label: 'Live in gemiddeld' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Websites & Funnels */}
      <section className="py-24 relative border-t border-white/5" id="websites">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6" style={{ background: 'rgba(56,189,248,0.08)', borderColor: 'rgba(56,189,248,0.25)', color: 'rgb(56,189,248)' }}>
                <Icon icon="solar:monitor-smartphone-linear" width="14" height="14" />
                <span className="font-mono tracking-wide">Fundament</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Eerst een fundament dat converteert
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Een advertentie is pas zo goed als de pagina waar hij naartoe stuurt. Wij bouwen landingspagina's en funnels die bezoekers overtuigen — snel, mobiel-eerst, en ontworpen om leads op te vangen.
              </p>
              <ul className="space-y-3">
                {[
                  'Paginasnelheid 99/100 op mobiel & desktop',
                  'Ontworpen om leads te converteren, niet alleen te imponeren',
                  'Volledig beheerd — geen technische kennis nodig',
                  'Integratie met je CRM & boekingssysteem',
                  'A/B testing voor continue verbetering',
                  'Inclusief SSL, domein & hosting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Website Mockup Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-2xl p-6 relative"
            >
              {/* Contained blur background */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full"></div>
              </div>

              <div className="relative z-10">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                  </div>
                  <div className="flex-1 ml-2 h-6 rounded-md flex items-center justify-center px-3 text-[10px] text-gray-500 font-mono tracking-wide" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 opacity-50 flex-shrink-0">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    jouwbedrijf.nl/offerte
                  </div>
                </div>

                {/* Landing Page Preview */}
                <div className="rounded-xl overflow-hidden flex flex-col" style={{ background: 'rgba(10,10,10,0.9)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.5)' }}>
                  {/* Page Header */}
                  <div className="px-4 py-2.5 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-[4px] bg-blue-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                        </svg>
                      </div>
                      <span className="text-[10px] font-medium text-white tracking-wide">Loodgieter Pro</span>
                    </div>
                    <div className="text-[9px] font-medium text-gray-400">Bel: 085 123 4567</div>
                  </div>

                  {/* Hero Content */}
                  <div className="p-5 flex flex-col relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[40px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[8px] font-medium tracking-wide mb-3 border border-emerald-500/20">
                        ✓ Binnen 24 uur geholpen
                      </span>
                      <h3 className="text-sm font-medium text-white leading-snug tracking-tight mb-2">
                        Direct een vakman nodig voor jouw lekkage?
                      </h3>
                      <p className="text-[10px] text-gray-400 leading-relaxed mb-4 max-w-[200px] mx-auto">
                        Wij zijn 24/7 bereikbaar en lossen 95% van de problemen direct op. Geen verborgen voorrijkosten.
                      </p>

                      {/* Form */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3 space-y-2.5 text-left">
                        <div className="text-[11px] font-medium text-white mb-1">Vraag gratis een offerte aan</div>
                        <div className="flex gap-2">
                          <div className="flex-1 h-7 rounded bg-black/40 border border-white/10 flex items-center px-2.5">
                            <span className="text-[11px] text-gray-500">Jouw naam</span>
                          </div>
                          <div className="flex-1 h-7 rounded bg-black/40 border border-white/10 flex items-center px-2.5">
                            <span className="text-[11px] text-gray-500">Telefoon</span>
                          </div>
                        </div>
                        <button className="w-full h-8 rounded bg-blue-600 text-[10px] font-medium text-white flex items-center justify-center gap-1.5" style={{ boxShadow: '0 0 15px -3px rgba(37,99,235,0.4)' }}>
                          Ontvang Prijsopgave
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center justify-center gap-1.5 mt-4">
                        <div className="flex gap-[1px]">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-yellow-500">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          ))}
                        </div>
                        <span className="text-[9px] font-medium text-gray-400">4.9/5 (127 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Conversion Badge */}
              <div className="absolute -top-3 -right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium text-white border border-emerald-400/20" style={{ background: 'rgba(16,185,129,0.95)', backdropFilter: 'blur(8px)', boxShadow: '0 4px 20px -2px rgba(16,185,129,0.4)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                Conversieratio: 8.4%
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="py-24 relative border-t border-white/5" id="marketing">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Jouw klanten zitten overal. Wij ook.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Van lokale zoekopdrachten tot social media campagnes — wij zorgen dat jouw bedrijf zichtbaar is op de plekken waar jouw doelgroep tijd spendeert.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Google Ads */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-card rounded-2xl p-7 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, rgba(66,133,244,0.15), rgba(234,67,53,0.1))', border: '1px solid rgba(66,133,244,0.2)' }}>
                <Icon icon="solar:chart-2-linear" width="24" height="24" style={{ color: '#4285f4' }} />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-3">Google Ads</h3>
              <p className="text-sm text-gray-400 mb-5">Gevonden worden op het juiste moment met landingspagina's die converteren.</p>
              <ul className="space-y-2 mt-auto">
                {['Zoekcampagnes op hoge-intent keywords', 'Google Shopping & Display remarketing', 'Lokale campagnes voor omgeving targeting', 'Wekelijkse optimalisatie & rapportage'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                    <Icon icon="solar:check-circle-linear" width="14" height="14" className="text-sky-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* Meta Ads */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card rounded-2xl p-7 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))', border: '1px solid rgba(99,102,241,0.2)' }}>
                <Icon icon="solar:share-circle-linear" width="24" height="24" style={{ color: '#818cf8' }} />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-3">Meta Ads</h3>
              <p className="text-sm text-gray-400 mb-5">Constante stroom aanvragen via Facebook &amp; Instagram met retargeting.</p>
              <ul className="space-y-2 mt-auto">
                {['Facebook & Instagram campagnes', 'Retargeting van websitebezoekers', 'Lookalike audiences op bestaande klanten', 'Creatives & ad-copy inbegrepen (Groei plan)'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                    <Icon icon="solar:check-circle-linear" width="14" height="14" className="text-violet-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* TikTok Ads */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card rounded-2xl p-7 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(236,72,153,0.1))', border: '1px solid rgba(34,211,238,0.2)' }}>
                <Icon icon="solar:video-frame-play-horizontal-linear" width="24" height="24" style={{ color: '#22d3ee' }} />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-3">TikTok Ads</h3>
              <p className="text-sm text-gray-400 mb-5">Opvallen waar de aandacht naartoe gaat met lokale targeting.</p>
              <ul className="space-y-2 mt-auto">
                {['Korte video-advertenties voor brand awareness', 'Lokale geo-targeting per stad of regio', 'In-Feed ads & Spark Ads format', 'Content strategie & scripting'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                    <Icon icon="solar:check-circle-linear" width="14" height="14" className="text-cyan-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Automatisering */}
      <section className="py-24 relative border-t border-white/5" id="automatisering">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Het systeem dat nooit slaapt
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Elke lead wordt automatisch opgevolgd, elke afspraak ingepland, elke klant in beeld. Jij focust op je vak — wij regelen de rest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'solar:chat-round-dots-linear',
                color: 'rgba(56,189,248,0.15)',
                borderColor: 'rgba(56,189,248,0.25)',
                iconColor: '#38bdf8',
                title: 'Lead Opvolging',
                desc: 'Iedere lead krijgt binnen 60 seconden een automatisch bericht — via SMS, e-mail of WhatsApp.',
                features: ['Directe opvolging 24/7', 'Gepersonaliseerde berichten', 'Automatische nurture-sequenties', 'CRM-koppeling & lead scoring'],
                tagColor: 'text-sky-400',
              },
              {
                icon: 'solar:star-linear',
                color: 'rgba(234,179,8,0.15)',
                borderColor: 'rgba(234,179,8,0.25)',
                iconColor: '#eab308',
                title: 'Review Automatisering',
                desc: 'Na elke opdracht stuurt ons systeem automatisch een reviewverzoek via SMS of e-mail.',
                features: ['Automatisch na voltooide opdracht', 'Directe link naar Google-profiel', 'Verhoog je gemiddelde score', 'Maandelijkse reputatierapportage'],
                tagColor: 'text-yellow-400',
              },
              {
                icon: 'solar:calendar-linear',
                color: 'rgba(52,211,153,0.15)',
                borderColor: 'rgba(52,211,153,0.25)',
                iconColor: '#34d399',
                title: 'Agenda & Planning',
                desc: 'Klanten boeken zelf in jouw beschikbare tijdslots. Automatische herinneringen verminderen no-shows drastisch.',
                features: ['Online boekingswidget', 'Bevestigings- & herinneringsberichten', 'Google Agenda & Outlook koppeling', 'No-show reductie tot 80%'],
                tagColor: 'text-emerald-400',
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-7 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: card.color, border: `1px solid ${card.borderColor}` }}>
                  <Icon icon={card.icon} width="24" height="24" style={{ color: card.iconColor }} />
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-3">{card.title}</h3>
                <p className="text-sm text-gray-400 mb-5">{card.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                      <Icon icon="solar:check-circle-linear" width="14" height="14" className={`${card.tagColor} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section className="py-24 relative border-t border-white/5" id="prijzen">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sky-400 text-xs font-medium uppercase tracking-widest mb-3 font-mono">Pakketten</p>
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Eerlijke prijzen. Geen verrassingen.</h2>
            <p className="text-gray-400 text-base font-light max-w-lg mx-auto">Kies het pakket dat past bij jouw fase. Altijd maandelijks opzegbaar.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {/* Basis */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative glass-card rounded-2xl p-6 lg:p-8 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-wider mb-4">
                  <Icon icon="solar:bolt-linear" width="12" height="12" /> Basis
                </div>
                <div className="flex items-baseline gap-1 mb-2"><span className="text-3xl font-bold text-white">€297</span><span className="text-gray-500 text-sm">/maand</span></div>
                <p className="text-sm text-gray-400 leading-relaxed">Website, CRM, marketing &amp; campagnebeheer — alles wat je nodig hebt om zichtbaar te worden én leads te genereren.</p>
              </div>
              <div className="space-y-3 mb-8 flex-grow">
                {['High-speed website of funnel', 'CRM met contactbeheer & pipeline', 'Google & Meta campagnebeheer', 'Campagne-optimalisatie & rapportage', 'Automatische lead opvolging (SMS & e-mail)', 'Google Review automatisering', 'Online agenda & boekingssysteem', 'Maandelijks rapport & support'].map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-sky-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/get-started" className="w-full text-center py-3 px-6 rounded-xl text-sm font-medium text-white border border-white/15 hover:bg-white/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950">Start met Basis</Link>
            </motion.div>

            {/* Groei — Recommended */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative glass-card rounded-2xl p-6 lg:p-8 flex flex-col" style={{ borderColor: 'rgba(56,189,248,0.3)', background: 'rgba(56,189,248,0.04)' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/25">Meest Gekozen</div>
              </div>
              <div className="mb-6 mt-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4">
                  <Icon icon="solar:graph-new-up-linear" width="12" height="12" /> Groei
                </div>
                <div className="flex items-baseline gap-1 mb-2"><span className="text-3xl font-bold text-white">€497</span><span className="text-gray-500 text-sm">/maand</span></div>
                <p className="text-sm text-gray-400 leading-relaxed">Alles uit Basis + AI-gestuurde marketing, creatieve content en agressievere schaling — gebouwd om sneller te groeien.</p>
              </div>
              <div className="space-y-3 mb-8 flex-grow">
                {['Alles uit Basis, plus:', 'AI-gestuurde campagne-optimalisatie', 'Creatives & ad-ontwerp inbegrepen', 'Social media contentcreatie & planning', 'Agressieve schaling & A/B testing', 'AI chatbot voor automatische antwoorden', 'Tweewekelijkse strategie-call', 'Onbeperkte website-aanpassingen'].map((f, i) => (
                  <div key={f} className="flex items-start gap-3">
                    <Icon icon="solar:check-circle-linear" width="18" height="18" className={`${i === 0 ? 'text-sky-400' : 'text-emerald-400'} mt-0.5 flex-shrink-0`} />
                    <span className={`text-sm ${i === 0 ? 'text-white font-medium' : 'text-gray-300'}`}>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/get-started" className="w-full text-center py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950">Start met Groei</Link>
            </motion.div>

            {/* Schaal */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative glass-card rounded-2xl p-6 lg:p-8 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
                  <Icon icon="solar:crown-linear" width="12" height="12" /> Schaal
                </div>
                <div className="flex items-baseline gap-1 mb-2"><span className="text-3xl font-bold text-white">€797</span><span className="text-gray-500 text-sm">/maand</span></div>
                <p className="text-sm text-gray-400 leading-relaxed">Full-service groeipartner. Wij beheren alles — van strategie tot uitvoering — zodat jij kunt focussen op ondernemen.</p>
              </div>
              <div className="space-y-3 mb-8 flex-grow">
                {['Alles uit Groei, plus:', 'Dedicated accountmanager', 'Uitgebreide SEO & contentcreatie', 'Maandelijks ROI-rapport met adspend analyse', 'Meerdere funnels & A/B testing', 'Prioriteits-support & wekelijks overleg', 'Custom integraties & automatiseringen'].map((f, i) => (
                  <div key={f} className="flex items-start gap-3">
                    <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-violet-400 mt-0.5 flex-shrink-0" />
                    <span className={`text-sm ${i === 0 ? 'text-white font-medium' : 'text-gray-300'}`}>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/get-started" className="w-full text-center py-3 px-6 rounded-xl text-sm font-medium text-white border border-violet-500/30 hover:bg-violet-500/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950">Start met Schaal</Link>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
              <Icon icon="solar:shield-check-linear" width="14" height="14" className="text-emerald-500" />
              Geen setup kosten • Maandelijks opzegbaar • Adspend niet inbegrepen
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

