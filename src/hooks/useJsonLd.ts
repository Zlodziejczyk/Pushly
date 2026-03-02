import { useEffect } from 'react';

export function useJsonLd(id: string, schema: object) {
  useEffect(() => {
    let el = document.querySelector<HTMLScriptElement>(`script[data-jsonld="${id}"]`);
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute('data-jsonld', id);
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);

    return () => {
      document.querySelector(`script[data-jsonld="${id}"]`)?.remove();
    };
  }, [id, JSON.stringify(schema)]);
}
