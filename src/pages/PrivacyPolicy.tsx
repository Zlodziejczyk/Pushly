import { usePageMeta } from '../hooks/usePageMeta';

export default function PrivacyPolicy() {
  usePageMeta({
    title: 'Privacybeleid | Pushly',
    description: 'Lees hoe Pushly omgaat met jouw persoonsgegevens, SMS-communicatie en cookiebeleid conform de AVG.',
    canonical: 'https://www.pushly.nl/privacy-policy',
  });

  return (
    <main className="flex-grow pt-32 pb-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 font-mono text-sm">Effective Date: 10/8/2025</p>
        </div>

        {/* Legal Content */}
        <div className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
          {/* Introduction */}
          <section>
            <p className="mb-6">
              Pushly (“we,” “our,” or “us”) respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <a href="https://www.pushly.nl" className="text-blue-400 hover:text-blue-300 transition-colors">https://www.pushly.nl</a>, use our services, or communicate with us by text or other digital channels.
            </p>
            <p>
              By using our site or services, you agree to this Privacy Policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">01.</span> Information We Collect
            </h2>
            <ul className="space-y-3 list-none pl-0">
              <li className="pl-4 border-l-2 border-white/10">
                Name, email, phone number, company name, and other details you voluntarily provide.
              </li>
              <li className="pl-4 border-l-2 border-white/10">
                Details about your business such as industry, goals, and service needs.
              </li>
              <li className="pl-4 border-l-2 border-white/10">
                IP address, browser type, pages visited, and similar analytics.
              </li>
              <li className="pl-4 border-l-2 border-white/10">
                Used to personalize experiences and improve our site and campaign performance.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">02.</span> How We Use Your Information
            </h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="space-y-2 list-disc pl-5 marker:text-gray-500">
              <li>Deliver and improve our marketing and review growth services.</li>
              <li>Communicate by email, phone, or SMS about service updates, promotions, and support.</li>
              <li>Send texts related to appointments or offers (with your express consent).</li>
              <li>Analyze usage and comply with applicable laws.</li>
            </ul>
          </section>

          {/* 3. SMS / Text Messaging Disclosure */}
          <section className="glass-card p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-400 font-mono text-base">03.</span> SMS / Text Messaging Disclosure (A2P Compliance)
            </h2>
            <p className="mb-4">
              By providing your mobile number, you expressly consent to receive text (SMS/MMS) messages from Pushly for purposes including notifications, reminders, and promotional offers.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">Frequency</span>
                <span className="text-white text-sm">Message frequency may vary depending on your interaction with us.</span>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">Cost</span>
                <span className="text-white text-sm">Message &amp; Data Rates: Standard carrier rates apply.</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <strong className="text-white text-sm">Opt-Out Instructions</strong>
                <p className="mt-1 text-sm">Reply <span className="text-white font-mono bg-white/10 px-1 rounded">STOP</span> to any message to opt out. Reply <span className="text-white font-mono bg-white/10 px-1 rounded">HELP</span> for help or email <a href="mailto:info@pushly.nl" className="text-blue-400 hover:underline">info@pushly.nl</a>. After you send STOP, you will receive one final confirmation message.</p>
              </div>

              <div>
                <strong className="text-white text-sm">Data Use &amp; Sharing</strong>
                <p className="mt-1 text-sm">We do not sell, rent, or share mobile numbers or opt-in data with third parties for marketing purposes. Your consent data is used solely for delivering authorized communications and maintaining A2P 10DLC compliance.</p>
              </div>

              <p className="text-xs text-gray-400 mt-4 border-t border-white/10 pt-4">
                Consent to receive texts is not a condition of purchase. For more information about our terms, see our Terms &amp; Conditions.
              </p>
            </div>
          </section>

          {/* 4. Data Security & Rights */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">04.</span> Data Security &amp; Your Rights
            </h2>
            <p>
              We use reasonable safeguards to protect data but cannot guarantee absolute security. You may request access or deletion of your information by contacting <a href="mailto:info@pushly.nl" className="text-blue-400 hover:text-blue-300 transition-colors">info@pushly.nl</a>.
            </p>
          </section>

          {/* 5. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">05.</span> Contact Us
            </h2>
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-6">
              <p className="font-semibold text-white mb-2">Pushly</p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
                <a href="mailto:info@pushly.nl" className="flex items-center gap-2 hover:text-white transition-colors text-gray-400">
                  info@pushly.nl
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
