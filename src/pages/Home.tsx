import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function Home() {
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
      {/* Ambient Particle System */}
      <div id="ambient-particles" aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
        <div className="rising-particle" style={{ width: '3px', height: '3px', background: 'rgba(96,165,250,0.7)', bottom: '-10px', left: '5%', animation: 'riseParticle 8s linear 0s infinite' }}></div>
        <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(56,189,248,0.6)', bottom: '-10px', left: '12%', animation: 'riseParticle 10s linear 1.5s infinite' }}></div>
        <div className="rising-particle" style={{ width: '4px', height: '4px', background: 'rgba(96,165,250,0.5)', bottom: '-10px', left: '22%', animation: 'riseParticleSlow 14s linear 0.5s infinite' }}></div>
        <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(147,197,253,0.7)', bottom: '-10px', left: '30%', animation: 'riseParticle 9s linear 3s infinite' }}></div>
        <div className="rising-particle" style={{ width: '3px', height: '3px', background: 'rgba(56,189,248,0.5)', bottom: '-10px', left: '40%', animation: 'riseParticleSlow 12s linear 2s infinite' }}></div>
        <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(96,165,250,0.8)', bottom: '-10px', left: '48%', animation: 'riseParticle 7s linear 4s infinite' }}></div>
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
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
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
                  className="sm:w-auto hover:bg-blue-500 transition-all flex gap-2 btn-glow items-center justify-center font-medium text-white bg-blue-600 w-full rounded-lg pt-3.5 pr-8 pb-3.5 pl-8"
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
            className="relative rounded-3xl overflow-hidden"
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
                  Als ons systeem binnen de eerste <strong className="text-white">30 dagen</strong> niet zorgt voor een meetbare stijging in gekwalificeerde aanvragen of afspraken, storten we onze management fee <strong className="text-white">direct terug</strong>.
                </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Loved by locals.</h2>
              <p className="text-gray-400 max-w-lg">Local businesses trust us to improve their online presence. Here's what they're saying.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-gray-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="User" />
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-bold">5.0</span> from 50+ reviews
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review 1 */}
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
              <p className="leading-relaxed text-sm text-gray-300 mb-6">"From day one the process has been smooth, easy, and honestly stress free."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 font-bold">CL</div>
                <div>
                  <div className="text-sm font-medium text-white">Cleanure Laundry</div>
                  <div className="text-xs text-gray-500">Owner</div>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
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
              <p className="leading-relaxed text-sm text-gray-300 mb-6">"Super simple throughout the entire process."</p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=64&h=64" className="w-10 h-10 object-cover rounded-full" alt="Sarah" />
                <div>
                  <div className="text-sm font-medium text-white">Sean B.</div>
                  <div className="text-xs text-gray-500">Pearl Pressure Washing</div>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                <Icon icon="solar:star-bold" className="w-4 h-4" />
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">"Professional, fast, and they actually answer the phone. Most agencies I've worked with ghost you after the sale. The PUSHLY team treats my business like it's their own."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center font-bold text-blue-300">MK</div>
                <div>
                  <div className="text-white font-medium text-sm">Mike Kowalski</div>
                  <div className="text-gray-500 text-xs">Kowalski Auto Detailing</div>
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
          className="z-10 text-center max-w-3xl mr-auto ml-auto pr-6 pl-6 relative"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
            Klaar Om Te Groeien?
            <br />
            <span className="text-gradient-blue">Laten We Beginnen.</span>
          </h2>

          <p className="text-lg text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
            Jij focust op je vak. Wij zorgen dat de rest meegroeit — van leadgeneratie tot opvolging, van afspraken tot reputatie.
          </p>

          <Link
            to="/get-started"
            className="hover:bg-blue-500 transition-all text-lg font-semibold text-white bg-blue-600 rounded-full py-4 px-12 btn-glow shadow-2xl shadow-blue-600/20 inline-flex items-center gap-3"
          >
            Start De Samenwerking
            <Icon icon="solar:arrow-right-linear" width="22" height="22" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
