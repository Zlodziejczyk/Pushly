import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function Solutions() {
  useEffect(() => {
    const handleScroll = () => {
      const stickySubnav = document.getElementById('sticky-subnav');
      const heroSection = document.getElementById('hero-section');
      if (!heroSection || !stickySubnav) return;
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 64) {
        stickySubnav.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
        stickySubnav.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      } else {
        stickySubnav.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        stickySubnav.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Sub-Nav */}
      <div id="sticky-subnav" className="fixed z-40 top-16 left-0 right-0 transition-all duration-300 opacity-0 -translate-y-2 pointer-events-none" style={{ background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 h-11 overflow-x-auto hide-scrollbar whitespace-nowrap">
            <a href="#websites" className="sub-nav-link text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1.5">
              <Icon icon="solar:monitor-smartphone-linear" width="14" height="14" />
              Websites &amp; Funnels
            </a>
            <a href="#marketing" className="sub-nav-link text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1.5">
              <Icon icon="solar:chart-2-linear" width="14" height="14" />
              Marketing
            </a>
            <a href="#automatisering" className="sub-nav-link text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1.5">
              <Icon icon="solar:bolt-linear" width="14" height="14" />
              Automatisering
            </a>
            <a href="#prijzen" className="sub-nav-link text-xs font-medium text-gray-400 hover:text-white flex items-center gap-1.5">
              <Icon icon="solar:tag-price-linear" width="14" height="14" />
              Prijzen
            </a>
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
              <p className="text-sm text-gray-400">Gevonden worden op het juiste moment met landingspagina's die converteren.</p>
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
              <p className="text-sm text-gray-400">Constante stroom aanvragen via Facebook &amp; Instagram met retargeting.</p>
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
              <p className="text-sm text-gray-400">Opvallen waar de aandacht naartoe gaat met lokale targeting.</p>
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
        </div>
      </section>
    </>
  );
}
