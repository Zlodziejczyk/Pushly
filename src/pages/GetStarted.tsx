import { useState, Fragment } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { useJsonLd } from '../hooks/useJsonLd';

// Add VITE_GHL_WEBHOOK_URL to your .env file.
// In GHL: Automation → Create Workflow → Trigger: Inbound Webhook → copy the URL.
const GHL_WEBHOOK_URL = (import.meta.env.VITE_GHL_WEBHOOK_URL ?? '') as string;

const GET_STARTED_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.pushly.nl/get-started',
  url: 'https://www.pushly.nl/get-started',
  name: 'Plan Een Gratis Scan | Pushly',
  description: 'Boek een vrijblijvend kennismakingsgesprek met Pushly. Geen verkooppraatje, geen verplichtingen — binnen 24 uur reactie.',
  inLanguage: 'nl-NL',
  isPartOf: { '@id': 'https://www.pushly.nl/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pushly.nl' },
      { '@type': 'ListItem', position: 2, name: 'Plan Een Scan', item: 'https://www.pushly.nl/get-started' },
    ],
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.pushly.nl/get-started',
      actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'],
    },
    result: { '@type': 'Reservation', name: 'Gratis kennismakingsgesprek met Pushly' },
  },
};

// ─── Form config ────────────────────────────────────────────────────────────

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  hasAds: string;
  adBudget: string;
  mainGoal: string;
  packageInterest: string;
  extraInfo: string;
}

const INIT: FormData = {
  firstName: '', lastName: '', email: '', phone: '', companyName: '',
  industry: '', hasAds: '', adBudget: '',
  mainGoal: '', packageInterest: '', extraInfo: '',
};

const INDUSTRIES = [
  'Horeca & Toerisme', 'Detailhandel', 'Bouw & Installatie', 'Zorg & Welzijn',
  'Financiële Diensten', 'E-commerce & Online Retail', 'Professionele Diensten',
  'Automotive', 'Beauty & Lifestyle', 'Vastgoed', 'Overig',
];

const AD_BUDGETS = [
  '€200 – €500 / maand', '€500 – €1.000 / maand',
  '€1.000 – €2.500 / maand', '€2.500 – €5.000 / maand', '€5.000+ / maand',
];

const GOALS = [
  { value: 'leads',      label: 'Meer Leads & Afspraken',     icon: 'solar:users-group-rounded-linear' },
  { value: 'visibility', label: 'Betere Online Zichtbaarheid', icon: 'solar:eye-linear' },
  { value: 'revenue',    label: 'Meer Omzet & Groei',          icon: 'solar:graph-new-up-linear' },
  { value: 'automation', label: 'Alles Automatiseren',         icon: 'solar:cpu-bolt-linear' },
];

const PACKAGES = [
  { value: 'basis',   label: 'Basis',           sub: '€297/mnd', icon: 'solar:bolt-linear',          accent: 'text-gray-300',   border: 'border-white/10' },
  { value: 'groei',   label: 'Groei',           sub: '€497/mnd', icon: 'solar:graph-new-up-linear',  accent: 'text-sky-400',    border: 'border-sky-500/30',    popular: true },
  { value: 'schaal',  label: 'Schaal',          sub: '€797/mnd', icon: 'solar:crown-linear',         accent: 'text-violet-400', border: 'border-violet-500/20' },
  { value: 'unknown', label: 'Weet ik nog niet', sub: '',         icon: 'solar:question-circle-linear', accent: 'text-gray-500',  border: 'border-white/10' },
];

const STEP_LABELS = ['Jouw Bedrijf', 'Marketing & Budget', 'Doelen & Pakket'];

const INPUT = 'w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors';
const LABEL = 'block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide';

// ─── Component ───────────────────────────────────────────────────────────────

export default function GetStarted() {
  usePageMeta({
    title: 'Plan een Gratis Scan | Pushly',
    description: 'Boek een vrijblijvend kennismakingsgesprek. Geen verkooppraatje, geen verplichtingen — gewoon eerlijk advies. Binnen 24 uur reactie.',
    canonical: 'https://www.pushly.nl/get-started',
  });
  useJsonLd('get-started-schema', GET_STARTED_SCHEMA);

  const [step, setStep]               = useState(1);
  const [data, setData]               = useState<FormData>(INIT);
  const [errors, setErrors]           = useState<Set<string>>(new Set());
  const [submitting, setSubmitting]   = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [submitError, setSubmitError] = useState('');

  // ─── Helpers ──────────────────────────────────────────────────────────────

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setData(prev => ({ ...prev, [field]: e.target.value }));
      setErrors(prev => { const n = new Set(prev); n.delete(field); return n; });
    };

  const pick = (field: keyof FormData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => { const n = new Set(prev); n.delete(field); return n; });
  };

  const validate = (forStep = step): Set<string> => {
    const e = new Set<string>();
    if (forStep === 1) {
      if (!data.firstName.trim()) e.add('firstName');
      if (!data.lastName.trim())  e.add('lastName');
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.add('email');
      if (!data.phone.trim())     e.add('phone');
      if (!data.companyName.trim()) e.add('companyName');
    }
    if (forStep === 2) {
      if (!data.industry) e.add('industry');
      if (!data.hasAds)   e.add('hasAds');
      if (!data.adBudget) e.add('adBudget');
    }
    if (forStep === 3) {
      if (!data.mainGoal)        e.add('mainGoal');
      if (!data.packageInterest) e.add('packageInterest');
    }
    return e;
  };

  const goNext = () => {
    const errs = validate();
    if (errs.size) { setErrors(errs); return; }
    setErrors(new Set());
    setStep(s => s + 1);
  };

  const goBack = () => {
    setErrors(new Set());
    setStep(s => s - 1);
  };

  const handleSubmit = async () => {
    const errs = validate(3);
    if (errs.size) { setErrors(errs); return; }
    setErrors(new Set());
    setSubmitting(true);
    setSubmitError('');
    try {
      if (GHL_WEBHOOK_URL) {
        await fetch(GHL_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName:     data.firstName,
            lastName:      data.lastName,
            email:         data.email,
            phone:         data.phone,
            companyName:   data.companyName,
            industry:      data.industry,
            hasActiveAds:  data.hasAds === 'yes' ? 'Ja' : 'Nee',
            adBudget:      data.adBudget,
            mainGoal:      data.mainGoal,
            packageInterest: data.packageInterest,
            notes:         data.extraInfo || undefined,
            source:        'pushly.nl/get-started',
          }),
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitError('Er is iets misgegaan. Probeer het opnieuw of bel ons: +31 6 8447 4399');
    } finally {
      setSubmitting(false);
    }
  };

  const hasErr = (f: string) => errors.has(f);
  const fld = (f: string) =>
    `${INPUT} ${hasErr(f) ? 'border-red-500/60 focus:ring-red-500/40' : 'border-white/10 focus:ring-sky-500/40 focus:border-sky-500/50'}`;

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <main className="flex-grow px-4 md:px-6 pt-28 md:pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: Copy */}
          <div className="flex flex-col gap-8 pt-2 md:pt-4">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-200 w-fit badge-glow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-xs font-medium uppercase tracking-widest font-mono">Accepteert Nieuwe Klanten</span>
              </div>

              <h1 className="sm:text-4xl md:text-5xl leading-[1.08] text-3xl font-medium text-white tracking-tight">
                Laten we <span className="text-gradient-blue">Kennismaken.</span>
              </h1>

              <p className="leading-relaxed text-base font-light text-gray-300 max-w-md">
                Geen verkooppraatje en geen verplichtingen. Wij beginnen met luisteren — naar jouw bedrijf, je markt en wat je wilt bereiken. Van daaruit adviseren we wat er voor jou echt zin heeft. Dit is het begin van een samenwerking, niet een transactie.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-sky-400 text-xs font-medium uppercase tracking-widest font-mono mb-2">Hoe het werkt</p>

              {[
                { title: 'Gesprek', body: 'Een kennismakingsgesprek van 20 minuten waarin we luisteren naar jouw situatie, uitdagingen en ambities. Geen pitch, gewoon begrip.' },
                { title: 'Advies',  body: 'We analyseren je huidige digitale aanwezigheid en komen terug met een concrete aanbeveling — wat er voor jou echt zou werken.' },
                { title: 'Voorstel', body: 'Als het klikt, presenteren we een helder voorstel met scope, planning en transparante prijzen. Jij beslist — geen druk.' },
              ].map(({ title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="mt-0.5 w-5 h-5 rounded-full border border-gray-700 bg-[#030712] flex-shrink-0"></div>
                  <div>
                    <h3 className="text-base font-medium text-gray-100">{title}</h3>
                    <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3" aria-hidden="true">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jan"    alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gray-800" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie" alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gray-800" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pieter" alt="" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gray-800" />
                </div>
                <p className="text-xs text-gray-400">Vertrouwd door het <span className="font-medium text-gray-200">Nederlands MKB</span>.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form → Calendar */}
          <div className="relative">
            {/* Ambient glow */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 bg-gradient-to-r from-sky-500/30 via-indigo-500/30 to-violet-600/30 rounded-3xl blur-3xl glow-pulse-noscale"
              aria-hidden="true"
              style={{ willChange: 'transform' }}
            />

            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Confirmation ── */
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative rounded-2xl border border-white/10 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)]"
                  style={{ background: 'rgba(17,24,39,0.9)', backdropFilter: 'blur(16px)' }}
                >
                  <div className="p-8 lg:p-10 text-center">
                    {/* Success icon */}
                    <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
                      <Icon icon="solar:check-circle-bold" width="32" height="32" className="text-emerald-400" />
                    </div>

                    <h2 className="text-2xl font-semibold text-white mb-3">Bedankt, {data.firstName}!</h2>
                    <p className="text-gray-400 text-base leading-relaxed max-w-sm mx-auto mb-8">
                      We hebben je aanvraag ontvangen. Je ontvangt binnen een paar minuten een <span className="text-white font-medium">e-mail en SMS</span> met een link om direct een gesprek in te plannen.
                    </p>

                    {/* What happens next */}
                    <div className="text-left space-y-4 mb-8">
                      <p className="text-sky-400 text-xs font-medium uppercase tracking-widest font-mono">Wat er nu gebeurt</p>
                      {[
                        { icon: 'solar:letter-linear', text: 'Check je inbox — we sturen een boekingslink naar ' + data.email },
                        { icon: 'solar:smartphone-linear', text: 'Ook per SMS naar ' + data.phone },
                        { icon: 'solar:calendar-linear', text: 'Kies een moment dat jou uitkomt — 20 min kennismaking' },
                      ].map(({ icon, text }) => (
                        <div key={icon} className="flex items-start gap-3">
                          <Icon icon={icon} width="18" height="18" className="text-sky-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Fallback contact */}
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-xs text-gray-500">
                        Geen e-mail ontvangen? Check je spam of bel ons direct:
                      </p>
                      <a href="tel:+31684474399" className="inline-flex items-center gap-2 mt-2 text-sm text-sky-400 hover:text-sky-300 transition-colors">
                        <Icon icon="solar:phone-linear" width="14" height="14" />
                        +31 6 8447 4399
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* ── Pre-qualify form ── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative rounded-2xl border border-white/10 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)]"
                  style={{ background: 'rgba(17,24,39,0.9)', backdropFilter: 'blur(16px)' }}
                >
                  <div className="p-6 lg:p-8">

                    {/* Step header */}
                    <div className="mb-6">
                      <p className="text-sky-400 text-xs font-medium uppercase tracking-widest font-mono mb-4">
                        Stap {step} van {STEP_LABELS.length}
                      </p>

                      {/* Progress bar */}
                      <div className="flex items-center gap-2 mb-5">
                        {STEP_LABELS.map((label, i) => (
                          <Fragment key={label}>
                            <div className="flex items-center gap-2 shrink-0">
                              <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${
                                i + 1 < step  ? 'bg-sky-500 border-sky-500 text-white' :
                                i + 1 === step ? 'border-sky-500 text-sky-400 bg-sky-500/10' :
                                'border-gray-700 text-gray-600'
                              }`}>
                                {i + 1 < step
                                  ? <Icon icon="solar:check-linear" width="10" height="10" />
                                  : i + 1}
                              </div>
                              <span className={`text-xs hidden sm:block font-medium transition-colors ${
                                i + 1 === step ? 'text-white' : i + 1 < step ? 'text-sky-400' : 'text-gray-600'
                              }`}>{label}</span>
                            </div>
                            {i < STEP_LABELS.length - 1 && (
                              <div className={`flex-1 h-px transition-all ${i + 1 < step ? 'bg-sky-500/50' : 'bg-white/10'}`} />
                            )}
                          </Fragment>
                        ))}
                      </div>

                      <h2 className="text-xl font-semibold text-white">{STEP_LABELS[step - 1]}</h2>
                    </div>

                    {/* Step content */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18 }}
                      >

                        {/* ── Step 1: Jouw Bedrijf ── */}
                        {step === 1 && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className={LABEL}>Voornaam</label>
                                <input className={fld('firstName')} type="text" placeholder="Jan" value={data.firstName} onChange={update('firstName')} />
                              </div>
                              <div>
                                <label className={LABEL}>Achternaam</label>
                                <input className={fld('lastName')} type="text" placeholder="de Vries" value={data.lastName} onChange={update('lastName')} />
                              </div>
                            </div>
                            <div>
                              <label className={LABEL}>E-mailadres</label>
                              <input className={fld('email')} type="email" placeholder="jan@bedrijf.nl" value={data.email} onChange={update('email')} />
                            </div>
                            <div>
                              <label className={LABEL}>Telefoonnummer</label>
                              <input className={fld('phone')} type="tel" placeholder="+31 6 ..." value={data.phone} onChange={update('phone')} />
                            </div>
                            <div>
                              <label className={LABEL}>Bedrijfsnaam</label>
                              <input className={fld('companyName')} type="text" placeholder="Jouw Bedrijf B.V." value={data.companyName} onChange={update('companyName')} />
                            </div>
                          </div>
                        )}

                        {/* ── Step 2: Marketing & Budget ── */}
                        {step === 2 && (
                          <div className="space-y-5">
                            <div>
                              <label className={LABEL}>Branche</label>
                              <div className="relative">
                                <select
                                  className={fld('industry')}
                                  value={data.industry}
                                  onChange={update('industry')}
                                  style={{ backgroundColor: '#111827', colorScheme: 'dark' }}
                                >
                                  <option value="" disabled>Selecteer je branche</option>
                                  {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                                </select>
                                <Icon icon="solar:alt-arrow-down-linear" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="16" height="16" />
                              </div>
                            </div>

                            <div>
                              <label className={LABEL}>Loop je al online advertenties?</label>
                              <div className="grid grid-cols-2 gap-3">
                                {[
                                  { value: 'yes', label: 'Ja, ik adverteer al',    icon: 'solar:check-circle-linear' },
                                  { value: 'no',  label: 'Nee, ik start voor het eerst', icon: 'solar:add-circle-linear' },
                                ].map(opt => (
                                  <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => pick('hasAds', opt.value)}
                                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all text-sm font-medium ${
                                      data.hasAds === opt.value
                                        ? 'border-sky-500/50 bg-sky-500/10 text-white'
                                        : hasErr('hasAds')
                                        ? 'border-red-500/40 bg-white/[0.02] text-gray-400 hover:border-white/20'
                                        : 'border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-gray-300'
                                    }`}
                                  >
                                    <Icon icon={opt.icon} width="18" height="18" className={data.hasAds === opt.value ? 'text-sky-400' : 'text-gray-500'} />
                                    {opt.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className={LABEL}>Maandelijks advertentiebudget beschikbaar</label>
                              <div className="relative">
                                <select
                                  className={fld('adBudget')}
                                  value={data.adBudget}
                                  onChange={update('adBudget')}
                                  style={{ backgroundColor: '#111827', colorScheme: 'dark' }}
                                >
                                  <option value="" disabled>Selecteer budget</option>
                                  {AD_BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                                </select>
                                <Icon icon="solar:alt-arrow-down-linear" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="16" height="16" />
                              </div>
                              <p className="text-xs text-gray-500 mt-1.5">Advertentiekosten zijn niet inbegrepen in de maandprijs.</p>
                            </div>
                          </div>
                        )}

                        {/* ── Step 3: Doelen & Pakket ── */}
                        {step === 3 && (
                          <div className="space-y-5">
                            <div>
                              <label className={LABEL}>Wat is je belangrijkste doel?</label>
                              <div className="grid grid-cols-2 gap-3">
                                {GOALS.map(goal => (
                                  <button
                                    key={goal.value}
                                    type="button"
                                    onClick={() => pick('mainGoal', goal.value)}
                                    className={`flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all ${
                                      data.mainGoal === goal.value
                                        ? 'border-sky-500/50 bg-sky-500/10'
                                        : hasErr('mainGoal')
                                        ? 'border-red-500/40 bg-white/[0.02] hover:border-white/20'
                                        : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                                    }`}
                                  >
                                    <Icon icon={goal.icon} width="18" height="18" className={data.mainGoal === goal.value ? 'text-sky-400' : 'text-gray-500'} />
                                    <span className={`text-sm font-medium leading-snug ${data.mainGoal === goal.value ? 'text-white' : 'text-gray-400'}`}>{goal.label}</span>
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className={LABEL}>Welk pakket spreekt je aan?</label>
                              <div className="grid grid-cols-2 gap-3">
                                {PACKAGES.map(pkg => (
                                  <button
                                    key={pkg.value}
                                    type="button"
                                    onClick={() => pick('packageInterest', pkg.value)}
                                    className={`relative flex flex-col items-start gap-1.5 p-4 rounded-xl border text-left transition-all ${
                                      data.packageInterest === pkg.value
                                        ? 'border-sky-500/50 bg-sky-500/10'
                                        : hasErr('packageInterest')
                                        ? 'border-red-500/40 bg-white/[0.02] hover:border-white/20'
                                        : `${pkg.border} bg-white/[0.02] hover:border-white/20`
                                    }`}
                                  >
                                    {'popular' in pkg && pkg.popular && (
                                      <div className="absolute -top-2.5 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-blue-600">
                                        Populair
                                      </div>
                                    )}
                                    <Icon icon={pkg.icon} width="16" height="16" className={data.packageInterest === pkg.value ? 'text-sky-400' : pkg.accent} />
                                    <span className={`text-sm font-semibold ${data.packageInterest === pkg.value ? 'text-white' : 'text-gray-300'}`}>{pkg.label}</span>
                                    {pkg.sub && (
                                      <span className={`text-xs ${data.packageInterest === pkg.value ? 'text-sky-300' : 'text-gray-500'}`}>{pkg.sub}</span>
                                    )}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className={LABEL}>
                                Aanvullende informatie <span className="text-gray-600 normal-case tracking-normal">(optioneel)</span>
                              </label>
                              <textarea
                                className={`${INPUT} border-white/10 focus:ring-sky-500/40 focus:border-sky-500/50 resize-none`}
                                rows={3}
                                placeholder="Huidige situatie, specifieke uitdagingen, vragen..."
                                value={data.extraInfo}
                                onChange={update('extraInfo')}
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Validation error message */}
                    {errors.size > 0 && (
                      <p className="mt-4 text-xs text-red-400 flex items-center gap-1.5">
                        <Icon icon="solar:danger-triangle-linear" width="14" height="14" />
                        Vul alle verplichte velden in om door te gaan.
                      </p>
                    )}
                    {submitError && (
                      <p className="mt-4 text-xs text-red-400">{submitError}</p>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={goBack}
                          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <Icon icon="solar:arrow-left-linear" width="16" height="16" />
                          Vorige
                        </button>
                      ) : <div />}

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={goNext}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/20"
                        >
                          Volgende
                          <Icon icon="solar:arrow-right-linear" width="16" height="16" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={submitting}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            <>
                              <Icon icon="solar:refresh-linear" width="16" height="16" className="animate-spin" />
                              Bezig...
                            </>
                          ) : (
                            <>
                              Afspraak Inplannen
                              <Icon icon="solar:calendar-add-linear" width="16" height="16" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Trust footnote */}
                    <p className="mt-4 text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
                      <Icon icon="solar:shield-check-linear" width="12" height="12" className="text-emerald-500" />
                      Geen verplichtingen · Gegevens worden vertrouwelijk behandeld
                    </p>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
              {['High-speed website of funnel', 'CRM met contactbeheer & pipeline', 'Google & Meta campagnebeheer', 'Campagne-optimalisatie & rapportage', 'Automatische lead opvolging (SMS & e-mail)', 'Google Review automatisering', 'Online agenda & boekingssysteem', 'Maandelijks rapport & support'].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-sky-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{f}</span>
                </div>
              ))}
            </div>
            <Link to="/get-started" className="w-full text-center py-3 px-6 rounded-xl text-sm font-medium text-white border border-white/15 hover:bg-white/10 transition-all block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950">Start met Basis</Link>
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
              {['Alles uit Basis, plus:', 'AI-gestuurde campagne-optimalisatie', 'Creatives & ad-ontwerp inbegrepen', 'Social media contentcreatie & planning', 'Agressieve schaling & A/B testing', 'AI chatbot voor automatische antwoorden', 'Tweewekelijkse strategie-call', 'Onbeperkte website-aanpassingen'].map((f, i) => (
                <div key={f} className="flex items-start gap-3">
                  <Icon icon="solar:check-circle-linear" width="18" height="18" className={`${i === 0 ? 'text-sky-400' : 'text-emerald-400'} mt-0.5 flex-shrink-0`} />
                  <span className={`text-sm ${i === 0 ? 'text-white font-medium' : 'text-gray-300'}`}>{f}</span>
                </div>
              ))}
            </div>
            <Link to="/get-started" className="w-full text-center py-3 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/20 block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950">Start met Groei</Link>
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
              {['Alles uit Groei, plus:', 'Dedicated accountmanager', 'Uitgebreide SEO & contentcreatie', 'Maandelijks ROI-rapport met adspend analyse', 'Meerdere funnels & A/B testing', 'Prioriteits-support & wekelijks overleg', 'Custom integraties & automatiseringen'].map((f, i) => (
                <div key={f} className="flex items-start gap-3">
                  <Icon icon="solar:check-circle-linear" width="18" height="18" className="text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className={`text-sm ${i === 0 ? 'text-white font-medium' : 'text-gray-300'}`}>{f}</span>
                </div>
              ))}
            </div>
            <Link to="/get-started" className="w-full text-center py-3 px-6 rounded-xl text-sm font-medium text-white border border-violet-500/30 hover:bg-violet-500/10 transition-all block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950">Start met Schaal</Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <Icon icon="solar:shield-check-linear" width="14" height="14" className="text-emerald-500" />
            Geen setup kosten • Maandelijks opzegbaar • Adspend niet inbegrepen
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="md:mt-32 max-w-5xl mt-24 mr-auto ml-auto px-2 pb-16">
        <div className="text-center mb-14">
          <p className="uppercase text-xs font-medium text-sky-400 tracking-widest font-mono mb-3">Vergelijking</p>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Waarom wij anders zijn</h2>
          <p className="text-gray-400 text-base font-light max-w-lg mx-auto">Stop met betalen voor "mooie" websites die niet verkopen.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/30 via-indigo-500/30 to-violet-600/30 rounded-3xl blur-3xl opacity-60 pointer-events-none" aria-hidden="true"></div>
          <div className="relative overflow-x-auto rounded-xl">
            <div className="min-w-[640px] rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/30" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}>
              <div className="grid border-b border-white/10 bg-white/[0.02]" style={{ gridTemplateColumns: '3fr 2.5fr 2.5fr 2.5fr' }}>
                <div className="uppercase text-xs font-medium text-gray-400 tracking-wider font-mono py-5 px-5">Feature</div>
                <div className="py-5 px-4 text-center"><span className="text-xs font-medium tracking-wider text-gray-300 uppercase font-mono">Pushly Basis</span></div>
                <div className="py-5 px-4 text-center" style={{ background: 'rgba(56,189,248,0.04)' }}><span className="text-xs font-medium tracking-wider text-sky-300 uppercase font-mono">Pushly Groei</span></div>
                <div className="py-5 px-4 text-center text-xs font-medium tracking-wider text-gray-400 uppercase font-mono">Traditioneel Bureau</div>
              </div>
              {[
                { label: 'Maandelijkse Kosten', basis: '€297/mnd', groei: '€497/mnd', trad: '€3.000 – €8.000/mnd', bc: 'text-emerald-400', gc: 'text-emerald-400', tc: 'text-gray-400' },
                { label: 'Eenmalige Setup', basis: '€0', groei: '€0', trad: '€3.000 – €5.000+', bc: 'text-emerald-400', gc: 'text-emerald-400', tc: 'text-gray-400' },
                { label: 'Paginasnelheid', basis: '99/100', groei: '99/100', trad: 'Vaak Traag (Wordpress)', bc: 'text-white', gc: 'text-white', tc: 'text-gray-400' },
                { label: 'Review Automatisering', basis: 'check', groei: 'check', trad: 'cross', bc: '', gc: '', tc: '' },
                { label: 'Advertentiebeheer', basis: 'Campagnebeheer', groei: '+ AI-optimalisatie', trad: '€500+ extra/mnd', bc: 'text-white', gc: 'text-white font-medium', tc: 'text-gray-400' },
                { label: 'Creatives & Content', basis: 'cross', groei: 'check', trad: '€300+/stuk', bc: '', gc: '', tc: 'text-gray-400' },
                { label: 'Doorlopende Support', basis: 'Maandelijks', groei: 'Onbeperkt', trad: 'Uurtarief (€100+/uur)', bc: 'text-white', gc: 'text-white font-medium', tc: 'text-gray-400' },
                { label: 'Focus', basis: 'Leads & Zichtbaarheid', groei: 'Schaling & Omzet', trad: 'Alleen Design', bc: 'text-sky-400 font-medium', gc: 'text-sky-400 font-medium', tc: 'text-gray-400' },
              ].map((row, idx) => (
                <div key={row.label} className={`grid hover:bg-white/[0.04] transition-colors group ${idx < 7 ? 'border-b border-white/5' : ''}`} style={{ gridTemplateColumns: '3fr 2.5fr 2.5fr 2.5fr' }}>
                  <div className="py-5 px-5 font-medium text-sm text-white group-hover:text-sky-200 transition-colors">{row.label}</div>
                  <div className="py-5 px-4 flex items-center justify-center">
                    {row.basis === 'check' ? <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center"><Icon icon="solar:check-circle-linear" width="16" height="16" className="text-sky-400" /></div>
                      : row.basis === 'cross' ? <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Icon icon="solar:close-circle-linear" width="16" height="16" className="text-gray-500" /></div>
                        : <span className={`text-sm ${row.bc}`}>{row.basis}</span>}
                  </div>
                  <div className="py-5 px-4 flex items-center justify-center" style={{ background: 'rgba(56,189,248,0.04)' }}>
                    {row.groei === 'check' ? <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center"><Icon icon="solar:check-circle-linear" width="16" height="16" className="text-sky-400" /></div>
                      : row.groei === 'cross' ? <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Icon icon="solar:close-circle-linear" width="16" height="16" className="text-gray-500" /></div>
                        : <span className={`text-sm ${row.gc}`}>{row.groei}</span>}
                  </div>
                  <div className="py-5 px-4 flex items-center justify-center">
                    {row.trad === 'cross' ? <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Icon icon="solar:close-circle-linear" width="16" height="16" className="text-gray-500" /></div>
                      : <span className={`text-sm text-center ${row.tc}`}>{row.trad}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pb-24 md:pb-32"></div>
    </main>
  );
}
