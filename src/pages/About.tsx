import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function About() {
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
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
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
    </div>
  );
}
