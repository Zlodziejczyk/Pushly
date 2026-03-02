import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta({
    title: 'Pagina niet gevonden | Pushly',
    description: 'De pagina die je zoekt bestaat niet. Ga terug naar de Pushly homepage.',
    canonical: 'https://www.pushly.nl/',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="text-6xl font-bold text-blue-500 mb-4">404</p>
      <h1 className="text-2xl font-semibold text-white mb-4">Pagina niet gevonden</h1>
      <p className="text-gray-400 mb-8 max-w-sm">De pagina die je zoekt bestaat niet of is verplaatst.</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg py-3 px-6 transition-colors"
      >
        Terug naar home
      </Link>
    </div>
  );
}
