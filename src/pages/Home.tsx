import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import ParticleSystem from '../components/ParticleSystem';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.pushly.nl/#business',
  name: 'Pushly',
  url: 'https://www.pushly.nl',
  description: 'Wij zijn een digitaal bureau dat groeisystemen ontwerpt voor ambitieuze MKB-ondernemers. Meer afspraken, sterkere reputatie, minder handwerk.',
  priceRange: '€€',
  areaServed: { '@type': 'Country', name: 'Nederland' },
  taxID: 'NL005217421B14',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Kasia' },
      reviewBody: 'Pushly regelt al onze social advertising — van campagnes tot aan de creatives. Ze snappen onze stijl en bereiken precies de juiste mensen. Dankzij hun aanpak zien we duidelijk meer nieuwe klanten binnenkomen.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Organization', name: 'King Protein' },
      reviewBody: 'Pushly heeft onze webshop opgepakt, SEO doorgevoerd en AI-koppelingen gebouwd die ons contentbeheer automatiseren. Daarnaast lopen de advertentiecampagnes en zien we het verschil direct in de omzet. Een echte alles-in-één partner.',
    },
  ],
};

export default function Home() {
  usePageMeta({
    title: 'Pushly — Digitale Groei voor het MKB',
    description: 'Wij bouwen groeisystemen voor ambitieuze MKB-ondernemers. Meer afspraken, sterkere reputatie, minder handwerk. 30 dagen geld-terug garantie.',
    canonical: 'https://www.pushly.nl/',
  });
  useJsonLd('home-schema', HOME_SCHEMA);

  useEffect(() => {
    // Unicorn Studio Background — deferred until after LCP via requestIdleCallback
    const load = () => {
      const initUnicorn = () => {
        const studio = (window as any).UnicornStudio;
        if (studio?.init) studio.init();
      };

      if (!document.querySelector('script[src*="unicornStudio"]')) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
        script.onload = initUnicorn;
        document.head.appendChild(script);
      } else {
        initUnicorn();
      }
    };

    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(load, { timeout: 3000 });
      return () => {
        (window as any).cancelIdleCallback(id);
        const studio = (window as any).UnicornStudio;
        if (studio?.destroy) studio.destroy();
      };
    } else {
      const t = setTimeout(load, 500);
      return () => {
        clearTimeout(t);
        const studio = (window as any).UnicornStudio;
        if (studio?.destroy) studio.destroy();
      };
    }
  }, []);

  useEffect(() => {
    // Counter Animation Logic
    const counterEl = document.getElementById('counter-display');
    let counterAnimated = false;

    const animateCounter = () => {
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        const val1 = Math.round(eased * 10);
        const val2 = Math.round(eased * 20);

        if (counterEl) {
          counterEl.textContent = `${val1} – ${val2}`;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counterAnimated) {
            counterAnimated = true;
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterEl) counterObserver.observe(counterEl);

    return () => {
      if (counterEl) counterObserver.unobserve(counterEl);
    };
  }, []);

  return (
    <>
      <ParticleSystem />

      {/* Unicorn Studio Background */}
      <div
        className="top-0 w-full h-screen -z-10 absolute"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
        }}
      >
        <div className="top-0 w-full -z-10 absolute h-full">
          <div data-us-project="FixNvEwvWwbu3QX9qC3F" className="absolute w-full h-full left-0 top-0 -z-10"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="md:pt-40 md:pb-32 overflow-hidden min-h-screen flex pt-32 pb-20 relative items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border-blue-500/20 border rounded-full mb-8 py-1 px-3 items-center backdrop-blur-md"
              >
                Digitaal Bureau voor Groeiend MKB
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" style={{ animationIterationCount: 3 }}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-6"
              >
                Wij Bouwen
                <br />
                <span className="text-gradient-blue">Digitale Groei.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="leading-relaxed text-lg text-gray-400 max-w-xl mb-10"
              >
                Wij zijn een digitaal bureau dat groeisystemen ontwerpt voor ambitieuze MKB-ondernemers. Meer afspraken, sterkere reputatie, minder handwerk. — Alles op zijn plek.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-8"
              >
                <Link
                  to="/get-started"
                  className="sm:w-auto hover:bg-blue-500 transition-all flex gap-2 btn-glow items-center justify-center font-medium text-white bg-blue-600 w-full rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Bespreek De Mogelijkheden
                  <Icon icon="solar:arrow-right-linear" width="20" height="20" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex items-center gap-3 text-xs text-gray-500"
              >
                <div className="flex items-center gap-1.5 bg-gray-900/60 border border-gray-800 rounded-full py-1.5 px-3 backdrop-blur-sm">
                  <Icon icon="solar:shield-check-linear" width="14" height="14" className="text-blue-400" />
                  <span>Strategie &amp; Automatisering</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-900/60 border border-gray-800 rounded-full py-1.5 px-3 backdrop-blur-sm">
                  <Icon icon="solar:star-bold" width="14" height="14" className="text-yellow-500" />
                  <span>Bewezen voor MKB</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="flex lg:justify-end phone-perspective relative justify-center">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-5deg) rotateX(5deg)' }}
              >
                {/* Agenda Background Card */}
                <div
                  className="absolute -left-16 md:-left-44 top-6 md:top-16 z-0 md:w-80 w-72 bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-2xl"
                  style={{ transform: 'rotateY(-5deg) rotateX(2deg) translateZ(-20px)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon icon="solar:calendar-linear" width="16" height="16" className="text-blue-400" />
                      <span className="text-xs font-medium text-gray-300">Agenda — Vandaag</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">Ma, 14 Okt</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-lg p-2.5">
                      <div className="w-1 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <div>
                        <div className="text-xs font-medium text-white">Pieter — Keukenmontage</div>
                        <div className="text-[10px] text-gray-400">09:00 – 10:30</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2.5">
                      <div className="w-1 h-8 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <div>
                        <div className="text-xs font-medium text-white">Lisa — Controleafspraak</div>
                        <div className="text-[10px] text-gray-400">11:00 – 11:45</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 rounded-lg p-2.5">
                      <div className="w-1 h-8 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <div>
                        <div className="text-xs font-medium text-white">Tom — Offerte badkamer</div>
                        <div className="text-[10px] text-gray-400">13:00 – 14:00</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-2.5">
                      <div className="w-1 h-8 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <div>
                        <div className="text-xs font-medium text-gray-300">Anna — Lekkage spoed</div>
                        <div className="text-[10px] text-gray-400">15:30 – 16:30</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-2.5 opacity-50">
                      <div className="w-1 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <div className="text-xs font-medium text-gray-400">Mark — Inspectie CV</div>
                        <div className="text-[10px] text-gray-500">17:00 – 17:30</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Frame Mockup */}
                <div className="relative z-10 w-56 md:w-64 ml-auto mr-4">
                  <div className="bg-gray-900 rounded-[2.5rem] border-2 border-gray-700 p-2 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.6)]">
                    <div className="relative bg-gray-950 rounded-[2rem] overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-20"></div>
                      <div className="pt-8 pb-6 px-4 min-h-[420px] bg-gradient-to-b from-gray-950 to-gray-900">
                        <div className="flex justify-between items-center mb-6 text-[9px] text-gray-500 px-1">
                          <span>9:41</span>
                          <div className="flex gap-1 items-center">
                            <Icon icon="solar:bolt-linear" width="10" height="10" />
                            <div className="w-5 h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div className="w-4 h-full bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        {/* Notification: New Lead */}
                        <motion.div
                          animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 mb-4 shadow-lg"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                              <Icon icon="solar:chat-round-dots-linear" width="16" height="16" className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <span className="text-[10px] font-semibold text-white">Nieuwe Lead</span>
                                <span className="text-[8px] text-gray-400">Nu</span>
                              </div>
                              <p className="text-[9px] text-gray-300 mt-0.5 leading-relaxed">
                                Sophie de Vries wil een afspraak inplannen voor volgende week.
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        {/* Notification: New Review */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-3 mb-4">
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-yellow-600 flex items-center justify-center flex-shrink-0">
                              <Icon icon="solar:star-bold" width="16" height="16" className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <span className="text-[10px] font-semibold text-white">Nieuwe Review</span>
                                <span className="text-[8px] text-gray-400">2m</span>
                              </div>
                              <p className="text-[9px] text-gray-300 mt-0.5">
                                ⭐⭐⭐⭐⭐ "Fantastische service!"
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Notification: Appointment Confirmed */}
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-3 mb-4 opacity-70">
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                              <Icon icon="solar:calendar-check-linear" width="16" height="16" className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <span className="text-[10px] font-semibold text-white">Afspraak Bevestigd</span>
                                <span className="text-[8px] text-gray-400">15m</span>
                              </div>
                              <p className="text-[9px] text-gray-300 mt-0.5">
                                Tom B. komt morgen om 14:00 langs.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-2.5 text-center">
                            <div className="text-sm font-bold text-white">18</div>
                            <div className="text-[8px] text-gray-500 uppercase tracking-wider">Afspraken</div>
                          </div>
                          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-2.5 text-center">
                            <div className="text-sm font-bold text-emerald-400">4.9★</div>
                            <div className="text-[8px] text-gray-500 uppercase tracking-wider">Reviews</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="probleem" className="py-24 md:py-32 relative" style={{ background: 'linear-gradient(180deg, #050a15 0%, #0a1628 50%, #050a15 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
              Herkenbaar?
              <br />
              <span className="text-gradient-blue">Je groeit sneller dan je processen aankunnen.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Je bent druk met waar je goed in bent. Maar terwijl jij aan het werk bent, glippen potentiële klanten door je vingers. Niet omdat je dienst tekortschiet — maar omdat je processen niet meeschalen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden border-red-500/10 hover:border-red-500/20 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                  <Icon icon="solar:close-circle-linear" width="24" height="24" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Zonder Systeem</h3>
                  <p className="text-xs text-red-400 font-medium uppercase tracking-wider">Herkenbare Knelpunten</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5 border border-red-500/20">
                    <Icon icon="solar:close-circle-linear" width="14" height="14" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Eindeloos Nabellen</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Na een volle werkdag nog handmatig leads opvolgen die inmiddels al verder zijn.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5 border border-red-500/20">
                    <Icon icon="solar:close-circle-linear" width="14" height="14" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Kansen Die Weglopen</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Wie niet direct bereikbaar is, verliest de lead aan de concurrent die dat wél is.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5 border border-red-500/20">
                    <Icon icon="solar:close-circle-linear" width="14" height="14" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Onvoorspelbare Planning</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Een agenda die afwisselt tussen te druk en te leeg, zonder grip op de instroom.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* New Way */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden border-emerald-500/10 hover:border-emerald-500/20 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Icon icon="solar:check-circle-linear" width="24" height="24" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Met Pushly</h3>
                  <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Eén Digitale Infrastructuur</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <Icon icon="solar:check-circle-linear" width="14" height="14" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Directe Opvolging</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Elke gemiste oproep wordt automatisch beantwoord — de lead blijft warm, ook als jij bezig bent.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <Icon icon="solar:check-circle-linear" width="14" height="14" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Intelligente Nurturing</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Leads worden automatisch gefilterd en opgewarmd via persoonlijke opvolgberichten.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <Icon icon="solar:check-circle-linear" width="14" height="14" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Een Agenda Die Zich Vult</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Gekwalificeerde afspraken verschijnen in je planning, zonder dat jij iets hoeft te doen.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Systeem / 3-Pijler Section */}
      <section id="systeem" className="md:py-32 bg-gray-950 border-gray-900 border-t pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 py-1 px-3 items-center">
              Zo Werken Wij
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
              Drie Pijlers
              <br />
              <span className="text-gradient-blue">Eén Groeimotor.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Geen complexe funnels of marketingjargon. Wij ontwerpen een samenhangende digitale infrastructuur die structureel resultaat oplevert.
            </p>
          </motion.div>

          {/* Zig-Zag Row 1: Text Left, Graphic Right — Aantrekken */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/30">1</div>
                <div className="h-px bg-gray-800 flex-1"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Aantrekken</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Eerste indrukken tellen. Wij ontwerpen landingspagina's die niet alleen mooi zijn, maar converteren. Snel, helder en gebouwd om vertrouwen te wekken.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Zodra een bezoeker interest toont, worden hun gegevens naadloos vastgelegd.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-10 bg-gray-950 border-b border-gray-800 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="flex text-[10px] text-gray-500 font-mono bg-gray-800 h-5 rounded-md mx-auto px-6 items-center">
                    pushly.nl/get-started
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-gray-900/50 relative">
                  <div className="mb-6">
                    <div className="h-3 bg-gray-800 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-800 rounded w-1/2 mb-6"></div>
                    <div className="h-2 bg-gray-800/50 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-800/50 rounded w-5/6"></div>
                  </div>
                  <div className="bg-gray-950 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                      <Icon icon="solar:clipboard-text-linear" width="16" height="16" className="text-blue-400" />
                      Vraag Direct Een Offerte Aan
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-gray-800 border border-gray-700 rounded-lg p-2.5 flex items-center gap-2">
                        <Icon icon="solar:user-linear" width="14" height="14" className="text-gray-500" />
                        <span className="text-xs text-gray-400">Je naam</span>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 rounded-lg p-2.5 flex items-center gap-2">
                        <Icon icon="solar:phone-linear" width="14" height="14" className="text-gray-500" />
                        <span className="text-xs text-gray-400">Telefoonnummer</span>
                      </div>
                      <div className="bg-gray-800 border border-gray-700 rounded-lg p-2.5 flex items-center gap-2">
                        <Icon icon="solar:letter-linear" width="14" height="14" className="text-gray-500" />
                        <span className="text-xs text-gray-400">E-mailadres</span>
                      </div>
                      <div className="w-full bg-blue-600 text-white text-xs font-medium py-2.5 rounded-lg text-center">
                        Verstuur Aanvraag →
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30" aria-hidden="true">
                    <Icon icon="solar:chat-round-dots-linear" width="22" height="22" className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Zig-Zag Row 2: Graphic Left, Text Right — Opvolgen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-last lg:order-first"
            >
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Automated Flow</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                      <Icon icon="solar:phone-calling-rounded-linear" width="24" height="24" />
                    </div>
                    <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                      <div className="text-xs font-medium text-white">Gemiste Oproep</div>
                      <div className="text-[10px] text-gray-400">+31 6 12 345 678 • 14:32</div>
                    </div>
                    <div className="text-red-400">
                      <Icon icon="solar:phone-calling-rounded-linear" width="18" height="18" />
                    </div>
                  </div>
                  <div className="flex justify-center text-gray-700" aria-hidden="true">
                    <Icon icon="solar:arrow-down-linear" width="20" height="20" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Icon icon="solar:chat-round-dots-linear" width="24" height="24" />
                    </div>
                    <div className="flex-1 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <div className="text-xs font-medium text-white flex items-center gap-1">
                        Auto SMS Verstuurd
                        <span className="text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">instant</span>
                      </div>
                      <div className="text-[10px] text-blue-300 mt-1">"Hoi! Ik ben even bezig met een klus. Hoe kan ik je helpen?"</div>
                    </div>
                  </div>
                  <div className="flex justify-center text-gray-700" aria-hidden="true">
                    <Icon icon="solar:arrow-down-linear" width="20" height="20" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <Icon icon="solar:chat-round-check-linear" width="24" height="24" />
                    </div>
                    <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                      <div className="text-xs font-medium text-white">Klant Reageert</div>
                      <div className="text-[10px] text-gray-400 mt-1">"Ik zoek een loodgieter voor een lekkage. Wanneer kan je komen?"</div>
                    </div>
                  </div>
                  <div className="flex justify-center text-gray-700" aria-hidden="true">
                    <Icon icon="solar:arrow-down-linear" width="20" height="20" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <Icon icon="solar:calendar-check-linear" width="24" height="24" />
                    </div>
                    <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                      <div className="text-xs font-medium text-white flex items-center gap-1">
                        Afspraak Ingepland
                        <Icon icon="solar:check-circle-bold" width="14" height="14" className="text-emerald-400" />
                      </div>
                      <div className="text-[10px] text-emerald-300 mt-1">Morgen 15:30 — Automatisch in je agenda</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/30">2</div>
                <div className="h-px bg-gray-800 flex-1"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Opvolgen</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Snelheid bepaalt wie de klant wint. Ons systeem vangt elke gemiste oproep op met een persoonlijk geautomatiseerd bericht — nog voordat de lead verder zoekt.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Daarna volgt intelligente opwarming via sms en e-mail. Geen lead blijft onbeantwoord.
              </p>
            </motion.div>
          </div>

          {/* Zig-Zag Row 3: Text Left, Graphic Right — Converteren */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/30">3</div>
                <div className="h-px bg-gray-800 flex-1"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Converteren</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Warme leads boeken zelf een afspraak in jouw gesynchroniseerde agenda. Geen heen-en-weer, geen administratie.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Na afloop vraagt het systeem automatisch om een Google review. Zo groeit je online reputatie mee met je bedrijf.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-white flex items-center gap-2">
                      <Icon icon="solar:calendar-linear" width="16" height="16" className="text-blue-400" />
                      Agenda — Deze Week
                    </h4>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5 font-medium">96% Bezet</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1">
                    <div className="text-center">
                      <div className="text-[9px] text-gray-500 mb-1">Ma</div>
                      <div className="h-16 bg-blue-500/20 border border-blue-500/10 rounded-lg flex items-center justify-center">
                        <div className="w-1.5 h-10 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] text-gray-500 mb-1">Di</div>
                      <div className="h-16 bg-blue-500/20 border border-blue-500/10 rounded-lg flex items-center justify-center">
                        <div className="w-1.5 h-12 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] text-gray-500 mb-1">Wo</div>
                      <div className="h-16 bg-emerald-500/20 border border-emerald-500/10 rounded-lg flex items-center justify-center">
                        <div className="w-1.5 h-14 bg-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] text-gray-500 mb-1">Do</div>
                      <div className="h-16 bg-blue-500/20 border border-blue-500/10 rounded-lg flex items-center justify-center">
                        <div className="w-1.5 h-11 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] text-gray-500 mb-1">Vr</div>
                      <div className="h-16 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center">
                        <div className="w-1.5 h-6 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-800 my-5"></div>
                <div>
                  <h4 className="text-sm font-medium text-white flex items-center gap-2 mb-4">
                    <Icon icon="solar:star-linear" width="16" height="16" className="text-yellow-500" />
                    Recente Reviews
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">PB</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-medium text-white">Pieter Bakker</span>
                          <span className="text-yellow-500 text-[10px]">★★★★★</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">"Snel geholpen, uitstekende service. Zeker een aanrader!"</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Icon icon="logos:google-icon" width="10" height="10" />
                          <span className="text-[8px] text-gray-500">Google Review • 2 uur geleden</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">SV</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-medium text-white">Sophie de Vries</span>
                          <span className="text-yellow-500 text-[10px]">★★★★★</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">"Alles perfect geregeld. Top communicatie!"</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Icon icon="logos:google-icon" width="10" height="10" />
                          <span className="text-[8px] text-gray-500">Google Review • 5 uur geleden</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-2.5">
                    <Icon icon="solar:magic-stick-3-linear" width="16" height="16" className="text-yellow-500" />
                    <span className="text-[10px] text-yellow-400">Automatische review-verzoek verstuurd naar 3 klanten vandaag</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #030712 0%, #0c1a35 50%, #030712 100%)' }}>
        <div className="absolute inset-0 bg-blue-500/5"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <div className="mb-8">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-4 block">Gemiddeld Resultaat Per Maand</span>
            <div className="flex items-baseline justify-center gap-2">
              <span id="counter-display" className="text-7xl md:text-9xl font-bold text-gradient-blue tracking-tighter">0 – 0</span>
            </div>
            <p className="text-lg md:text-xl text-gray-300 font-medium mt-2 tracking-tight">Gekwalificeerde afspraken, structureel</p>
          </div>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ons systeem plaatst gekwalificeerde afspraken direct in je agenda. Geen handmatig nabellen, geen giswerk. Reken op een structurele groei van <strong className="text-white">10 tot 20 bevestigde afspraken per maand</strong> — consistent en voorspelbaar.
          </p>

          {/* Weekly Progress Bars */}
          <div className="mt-12 max-w-lg mx-auto grid grid-cols-4 gap-3">
            {[
              { label: 'Week 1', height: '30%', color: 'bg-blue-600/30' },
              { label: 'Week 2', height: '50%', color: 'bg-blue-600/40' },
              { label: 'Week 3', height: '75%', color: 'bg-blue-600/50' },
              { label: 'Week 4', height: '95%', color: 'bg-blue-500', glow: true },
            ].map((bar, i) => (
              <div key={bar.label} className="text-center">
                <div className="h-20 bg-gray-800/50 rounded-lg flex items-end overflow-hidden">
                  <motion.div
                    className={`w-full ${bar.color} rounded-t-sm${bar.glow ? ' shadow-[0_0_15px_rgba(59,130,246,0.4)]' : ''}`}
                    initial={{ height: '0%' }}
                    whileInView={{ height: bar.height }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: i * 0.2, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-[10px] text-gray-500 mt-2 block">{bar.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Guarantee Section */}
      <section className="md:py-32 bg-gray-950 border-gray-900 border-t pt-24 pb-24" id="garantie">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative guarantee-shimmer rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.7) 100%)', border: '2px solid rgba(234,179,8,0.25)', boxShadow: '0 0 60px -20px rgba(234,179,8,0.1), inset 0 1px 0 rgba(255,255,255,0.05)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #eab308, transparent)' }}></div>

            <div className="relative z-10 p-8 md:p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8" style={{ background: 'linear-gradient(135deg, rgba(234,179,8,0.15) 0%, rgba(234,179,8,0.05) 100%)', border: '1px solid rgba(234,179,8,0.25)' }}>
                <Icon icon="solar:shield-check-linear" width="36" height="36" style={{ color: '#eab308' }} />
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Onze Belofte</h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Wij geloven in partnerschap, niet in loze beloftes. Daarom nemen wij het risico op ons — zodat jij met vertrouwen kunt starten.
              </p>

              <div className="bg-gray-900/50 border border-yellow-500/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                <p className="text-gray-300 leading-relaxed">
                  Als ons systeem binnen de eerste <strong className="text-white">30 dagen</strong> niet zorgt voor een meetbare stijging in gekwalificeerde aanvragen of afspraken, storten we onze management fee <strong className="text-white">direct terug</strong>. Of we werken kosteloos door totdat we dat resultaat wél behalen. <strong className="text-white">Jij beslist.</strong>
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-500">Geen kleine lettertjes. Gewoon een partner die levert.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Icon icon="solar:check-circle-linear" width="14" height="14" style={{ color: '#eab308' }} />
                  30 dagen geld-terug
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Icon icon="solar:check-circle-linear" width="14" height="14" style={{ color: '#eab308' }} />
                  Maandelijks opzegbaar
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Icon icon="solar:check-circle-linear" width="14" height="14" style={{ color: '#eab308' }} />
                  Geen verborgen kosten
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-950 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Wat Onze Klanten Zeggen</h2>
              <p className="text-gray-400 max-w-lg">Lokale ondernemers vertrouwen op Pushly om hun online aanwezigheid te verbeteren. Dit zeggen zij.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="flex -space-x-3">
                <img width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Klant avatar" />
                <img width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Klant avatar" />
                <img width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="Klant avatar" />
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-bold">5.0</span> uit 50+ beoordelingen
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Review — Yankeetattooz */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
              </div>
              <p className="leading-relaxed text-sm text-gray-300 mb-6">"Pushly regelt al onze social advertising — van campagnes tot aan de creatives. Ze snappen onze stijl en bereiken precies de juiste mensen. Dankzij hun aanpak zien we duidelijk meer nieuwe klanten binnenkomen."</p>
              <div className="flex items-center gap-3">
                <img src="/favicons/yankeetattooz.png" alt="Yankeetattooz" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-xl border border-white/10 bg-white object-contain p-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-white">Kasia</div>
                  <div className="text-xs text-gray-500">Yankeetattooz — Schiedam</div>
                </div>
              </div>
            </motion.div>

            {/* Review — King Protein */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
              </div>
              <p className="leading-relaxed text-sm text-gray-300 mb-6">"Pushly heeft onze webshop opgepakt, SEO doorgevoerd en AI-koppelingen gebouwd die ons contentbeheer automatiseren. Daarnaast lopen de advertentiecampagnes en zien we het verschil direct in de omzet. Een echte alles-in-één partner."</p>
              <div className="flex items-center gap-3">
                <img src="/favicons/king-protein.png" alt="King Protein" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-xl border border-white/10 bg-white object-contain p-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-white">Eigenaar</div>
                  <div className="text-xs text-gray-500">King-protein.nl</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative py-32 md:py-44 overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #0c1a35 0%, #030712 70%)' }}>
        <div className="absolute top-0 right-0 bottom-0 left-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10 reveal text-center max-w-3xl mr-auto ml-auto pr-6 pl-6 relative"
        >
          <div className="mb-8 bounce-arrow inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900/50 text-gray-500" aria-hidden="true">
            <Icon icon="solar:arrow-down-linear" width="20" height="20" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
            Klaar Om Te Groeien?
            <br />
            <span className="text-gradient-blue">Laten We Beginnen.</span>
          </h2>

          <p className="text-lg text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
            Jij focust op je vak. Wij zorgen dat de rest meegroeit — van leadgeneratie tot opvolging, van afspraken tot reputatie. Samen bouwen we aan jouw digitale fundament.
          </p>

          <p className="text-base text-gray-500 mb-10 max-w-xl mx-auto">
            Eén gesprek. Geen verplichtingen. Ontdek wat er mogelijk is.
          </p>

          <Link
            to="/get-started"
            className="hover:bg-blue-500 transition-all text-lg font-semibold text-white bg-blue-600 rounded-full py-4 px-12 btn-glow shadow-2xl shadow-blue-600/20 inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            Start De Samenwerking
            <Icon icon="solar:arrow-right-linear" width="22" height="22" />
          </Link>

          <p className="mt-6 text-xs text-gray-600">Vrijblijvend • Persoonlijk • Binnen 24 uur reactie</p>
        </motion.div>
      </section>
    </>
  );
}
