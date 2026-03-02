import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-gray-900 border-t pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-3">
            <div className="flex items-center space-x-1 mr-2" aria-hidden="true">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:1s] [animation-iteration-count:3]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.2s] [animation-iteration-count:3]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.4s] [animation-iteration-count:3]"></div>
            </div>
            <span className="font-bold text-white">Pushly</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Wij helpen ondernemers groeien. Stap voor stap, meetbaar en eerlijk.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-sm font-medium text-white mb-4">Oplossingen</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <Link to="/solutions#websites" className="block py-2 hover:text-blue-400 transition-colors">
                Websites &amp; Funnels
              </Link>
            </li>
            <li>
              <Link to="/solutions#marketing" className="block py-2 hover:text-blue-400 transition-colors">
                Digitale Aanwezigheid &amp; Marketing
              </Link>
            </li>
            <li>
              <Link to="/solutions#automatisering" className="block py-2 hover:text-blue-400 transition-colors">
                Automatisering
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-medium mb-4 text-sm">Bedrijf</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <Link to="/about" className="block py-2 hover:text-blue-400 transition-colors">
                Over Ons
              </Link>
            </li>
            <li>
              <a href="mailto:info@pushly.nl" className="block py-2 hover:text-blue-400 transition-colors">
                info@pushly.nl
              </a>
            </li>
            <li>
              <Link to="/terms-conditions" className="block py-2 hover:text-blue-400 transition-colors">
                Algemene Voorwaarden
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="block py-2 hover:text-blue-400 transition-colors">
                Privacybeleid
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:text-left text-xs text-gray-600 text-center max-w-7xl border-gray-900 border-t mt-12 mr-auto ml-auto pt-8 pr-6 pl-6">
        © {new Date().getFullYear()} Pushly. | Alle rechten voorbehouden. | KVK: 96527129 | BTW: NL005217421B14
      </div>
    </footer>
  );
}
