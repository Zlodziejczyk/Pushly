import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function GetStarted() {
  return (
    <main className="flex-grow px-4 md:px-6 pt-28 md:pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Copy */}
          <div className="flex flex-col gap-8 pt-2 md:pt-4">
            <div className="space-y-5">
              {/* Pulsing availability badge */}
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-200 w-fit badge-glow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-xs font-medium uppercase tracking-widest font-mono">
                  Accepteert Nieuwe Klanten
                </span>
              </div>

              {/* Headline */}
              <h1 className="sm:text-4xl md:text-5xl leading-[1.08] text-3xl font-medium text-white tracking-tight">
                Laten we <span className="text-gradient-blue">Kennismaken.</span>
              </h1>

              {/* Subheadline */}
              <p className="leading-relaxed text-base font-light text-gray-300 max-w-md">
                Geen verkooppraatje en geen verplichtingen. Wij beginnen met luisteren — naar jouw bedrijf, je markt en wat je wilt bereiken. Van daaruit adviseren we wat er voor jou echt zin heeft. Dit is het begin van een samenwerking, niet een transactie.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              <p className="text-sky-400 text-xs font-medium uppercase tracking-widest font-mono mb-2">
                Hoe het werkt
              </p>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-5 h-5 rounded-full border border-gray-700 bg-[#030712] flex-shrink-0"></div>
                <div>
                  <h3 className="text-base font-medium text-gray-100">Gesprek</h3>
                  <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                    Een kennismakingsgesprek van 20 minuten waarin we luisteren naar jouw situatie, uitdagingen en ambities. Geen pitch, gewoon begrip.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-5 h-5 rounded-full border border-gray-700 bg-[#030712] flex-shrink-0"></div>
                <div>
                  <h3 className="text-base font-medium text-gray-100">Advies</h3>
                  <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                    We analyseren je huidige digitale aanwezigheid en komen terug met een concrete aanbeveling — wat er voor jou echt zou werken.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 w-5 h-5 rounded-full border border-gray-700 bg-[#030712] flex-shrink-0"></div>
                <div>
                  <h3 className="text-base font-medium text-gray-100">Voorstel</h3>
                  <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                    Als het klikt, presenteren we een helder voorstel met scope, planning en transparante prijzen. Jij beslist — geen druk.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3" aria-hidden="true">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jan" alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gray-800" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie" alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gray-800" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pieter" alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gray-800" />
                </div>
                <p className="text-xs text-gray-400">
                  Vertrouwd door het <span className="font-medium text-gray-200">Nederlands MKB</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Widget */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/30 via-indigo-500/30 to-violet-600/30 rounded-3xl blur-3xl glow-pulse-noscale" aria-hidden="true"></div>

            <div className="relative bg-white rounded-xl overflow-hidden min-h-[600px] flex flex-col shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)]">
              {/* Decorative browser bar mockup */}
              <div className="flex bg-gray-50/80 border-gray-100 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between" aria-hidden="true">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 border border-red-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 border border-amber-500/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 border border-green-500/20"></div>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-md px-2.5 py-1 shadow-sm">
                  <Icon icon="solar:lock-keyhole-linear" width="12" height="12" className="text-green-500" />
                  <span className="text-xs text-gray-500 font-mono tracking-tight">pushly.nl/get-started</span>
                </div>
                <div className="w-4"></div>
              </div>

              {/* Booking Embed */}
              <div className="w-full h-full bg-white relative">
                <iframe src="https://api.leadconnectorhq.com/widget/booking/wW2s55ou7kRg72xwbSQQ" style={{ width: '100%', height: '801px', minHeight: '600px', border: 'none', overflow: 'auto' }} scrolling="yes" id="dVdV3RVAQIOxs97tERJl_1765144010091" title="Boek een gratis scan met Pushly" data-initial-iframe-hidden="true" data-unique-id-mapped="true" data-iframe-resizer-initialized="true"></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section id="pakketten" className="max-w-6xl mx-auto mt-32 md:mt-40 px-4">
        <div className="text-center mb-14">
          <p className="text-sky-400 text-xs font-medium uppercase tracking-widest mb-3 font-mono">Pakketten</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Eerlijke prijzen. Geen verrassingen.</h2>
          <p className="text-gray-400 text-base md:text-lg font-light max-w-lg mx-auto">Kies het pakket dat past bij jouw fase. Altijd maandelijks opzegbaar.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {/* TIER 1 — BASIS */}
          <div className="relative glass-card rounded-2xl p-6 lg:p-8 flex flex-col">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-wider mb-4">
                <Icon icon="solar:bolt-linear" width="12" height="12" />
                Basis
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-white">€297</span>
                <span className="text-gray-500 text-sm">/maand</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Website, CRM, marketing &amp; campagnebeheer — alles wat je nodig hebt om zichtbaar te worden én leads te genereren.</p>
            </div>
            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">High-speed website of funnel</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">CRM met contactbeheer &amp; pipeline</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">Google &amp; Meta campagnebeheer</span>
              </div>
            </div>
          </div>

          {/* TIER 2 — GROEI */}
          <div className="relative glass-card rounded-2xl p-6 lg:p-8 flex flex-col" style={{ borderColor: 'rgba(56,189,248,0.3)', background: 'rgba(56,189,248,0.04)' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/25">Meest Gekozen</div>
            </div>
            <div className="mb-6 mt-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4">
                <Icon icon="solar:graph-new-up-linear" width="12" height="12" />
                Groei
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-white">€497</span>
                <span className="text-gray-500 text-sm">/maand</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Alles uit Basis + AI-gestuurde marketing, creatieve content en agressievere schaling — gebouwd om sneller te groeien.</p>
            </div>
            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white font-medium">Alles uit Basis, plus:</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">AI-gestuurde campagne-optimalisatie</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">Creatives &amp; ad-ontwerp inbegrepen</span>
              </div>
            </div>
          </div>

          {/* TIER 3 — SCHAAL */}
          <div className="relative glass-card rounded-2xl p-6 lg:p-8 flex flex-col">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
                <Icon icon="solar:crown-linear" width="12" height="12" />
                Schaal
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-white">€797</span>
                <span className="text-gray-500 text-sm">/maand</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">Full-service groeipartner. Wij beheren alles — van strategie tot uitvoering — zodat jij kunt focussen op ondernemen.</p>
            </div>
            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-violet-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white font-medium">Alles uit Groei, plus:</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-violet-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">Dedicated accountmanager</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-violet-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">Uitgebreide SEO &amp; contentcreatie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <Icon icon="solar:shield-check-linear" width="14" height="14" className="text-emerald-500" />
            Geen setup kosten • Maandelijks opzegbaar • Adspend niet inbegrepen
          </p>
        </div>
      </section>

      <div className="pb-24 md:pb-32"></div>
    </main>
  );
}
