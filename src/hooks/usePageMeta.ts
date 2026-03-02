import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setOgMeta(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export function usePageMeta({ title, description, canonical, ogTitle, ogDescription, ogImage }: PageMeta) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setCanonical(canonical);
    setOgMeta('og:title', ogTitle ?? title);
    setOgMeta('og:description', ogDescription ?? description);
    setOgMeta('og:url', canonical);
    setOgMeta('og:type', 'website');
    setOgMeta('og:site_name', 'Pushly');
    setOgMeta('og:locale', 'nl_NL');
    if (ogImage) {
      setOgMeta('og:image', ogImage);
      setOgMeta('og:image:width', '1200');
      setOgMeta('og:image:height', '630');
    }
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle ?? title);
    setMeta('twitter:description', ogDescription ?? description);
    if (ogImage) setMeta('twitter:image', ogImage);
  }, [title, description, canonical, ogTitle, ogDescription, ogImage]);
}
