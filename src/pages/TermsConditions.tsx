export default function TermsConditions() {
  return (
    <main className="flex-grow pt-32 pb-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-gray-400 font-mono text-sm">Effective Date: October 8, 2025</p>
        </div>

        {/* Legal Content */}
        <div className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
          {/* Introduction */}
          <section>
            <p className="mb-6">
              Welcome to Pushly (“we,” “our,” or “us”). These Terms govern your use of <a href="https://www.pushly.nl" className="text-blue-400 hover:text-blue-300 transition-colors">https://www.pushly.nl</a> and all services we provide, including digital marketing, review management, automation, and SMS communications.
            </p>
            <p>
              By using our site or services, you agree to these Terms. If you do not agree, please do not use our services.
            </p>
          </section>

          {/* 1. Use of Services */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">01.</span> Use of Services
            </h2>
            <p>
              Use our services only for lawful purposes and in accordance with these Terms. Do not damage or interfere with our platform or other users.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">02.</span> Eligibility
            </h2>
            <p>
              You must be at least 18 years old and authorized to enter this agreement on behalf of yourself or your business.
            </p>
          </section>

          {/* 3. Accounts and Subscriptions */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">03.</span> Accounts and Subscriptions
            </h2>
            <p>
              Keep login credentials confidential and ensure information is accurate and up-to-date.
            </p>
          </section>

          {/* 4. Payments and Billing */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">04.</span> Payments and Billing
            </h2>
            <p>
              All fees are due per the pricing terms presented. Prices are in USD and subject to change with notice.
            </p>
          </section>

          {/* 5. SMS / Text Messaging Disclosure */}
          <section className="glass-card p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2 relative z-10">
              <span className="text-blue-400 font-mono text-base">05.</span> SMS / Text Messaging Disclosure
            </h2>

            <div className="mb-6 relative z-10">
              <p className="mb-4">
                By providing your mobile number, you expressly consent to receive text (SMS/MMS) messages from Pushly for purposes such as:
              </p>
              <ul className="space-y-2 list-none pl-0 mb-6">
                <li className="flex gap-3 items-start">
                  <span>Appointment reminders and service notifications.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span>Account updates and security alerts (including 2FA).</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span>Promotional offers and marketing messages.</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6 relative z-10">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">Frequency</span>
                <span className="text-white text-sm">Message frequency may vary.</span>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">Cost</span>
                <span className="text-white text-sm">Message &amp; Data Rates: Standard carrier rates apply.</span>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="bg-gray-900/30 p-4 rounded-lg border border-white/5">
                <strong className="text-white text-sm block mb-1">Opt-Out Instructions</strong>
                <p className="text-sm text-gray-300">Text <span className="text-white font-mono bg-white/10 px-1 rounded">STOP</span> to opt out at any time. Text <span className="text-white font-mono bg-white/10 px-1 rounded">HELP</span> for assistance or contact <a href="mailto:info@pushly.nl" className="text-blue-400 hover:underline">info@pushly.nl</a>. After you send STOP, you will receive a final confirmation message.</p>
              </div>

              <div>
                <strong className="text-white text-sm">Data Use &amp; Privacy</strong>
                <p className="mt-1 text-sm">Your mobile information and opt-in consent will not be shared with third parties for marketing purposes. All SMS records are retained securely for compliance with CTIA and FCC regulations. Consent to receive texts is not a condition of purchase.</p>
                <p className="mt-2 text-sm">For details on how your data is handled, see our <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>.</p>
              </div>
            </div>
          </section>

          {/* 6. Carrier Liability */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">06.</span> Carrier Liability Disclaimer
            </h2>
            <p>
              Carriers are not liable for delayed or undelivered messages. Delivery may vary based on carrier and network conditions.
            </p>
          </section>

          {/* 7-13. Other Sections */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">07-13.</span> General Provisions
            </h2>
            <p className="mb-4">
              The following standard legal provisions apply to your agreement with Pushly:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="bg-white/5 p-3 rounded-md border border-white/5 text-sm">Eligibility Requirements</li>
              <li className="bg-white/5 p-3 rounded-md border border-white/5 text-sm">Intellectual Property Rights</li>
              <li className="bg-white/5 p-3 rounded-md border border-white/5 text-sm">Third-Party Tools Usage</li>
            </ul>
          </section>

          {/* 14. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-2">
              <span className="text-blue-500 font-mono text-base">14.</span> Contact Information
            </h2>
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-6">
              <p className="font-semibold text-white mb-2">Pushly</p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
                <a href="mailto:info@pushly.nl" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
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
