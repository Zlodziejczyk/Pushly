import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useJsonLd } from '../hooks/useJsonLd';

const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.pushly.nl/#website',
      url: 'https://www.pushly.nl',
      name: 'Pushly',
      description: 'Digitaal bureau dat groeisystemen ontwerpt voor ambitieuze MKB-ondernemers in Nederland.',
      inLanguage: 'nl-NL',
      publisher: { '@id': 'https://www.pushly.nl/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.pushly.nl/#organization',
      name: 'Pushly',
      url: 'https://www.pushly.nl',
      description: 'Wij helpen ondernemers groeien. Stap voor stap, meetbaar en eerlijk.',
      taxID: 'NL005217421B14',
      legalName: 'Pushly',
      areaServed: { '@type': 'Country', name: 'Nederland' },
      sameAs: [],
    },
  ],
};

export default function Layout() {
  useJsonLd('site-schema', SITE_SCHEMA);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const navbarHeight = document.querySelector('header')?.offsetHeight ?? 80;
          const top = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 16;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
