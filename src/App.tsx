import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const Solutions = lazy(() => import('./pages/Solutions'));
const About = lazy(() => import('./pages/About'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const GetStarted = lazy(() => import('./pages/GetStarted'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Suspense><Solutions /></Suspense>} />
          <Route path="about" element={<Suspense><About /></Suspense>} />
          <Route path="privacy-policy" element={<Suspense><PrivacyPolicy /></Suspense>} />
          <Route path="terms-conditions" element={<Suspense><TermsConditions /></Suspense>} />
          <Route path="get-started" element={<Suspense><GetStarted /></Suspense>} />
          <Route path="*" element={<Suspense><NotFound /></Suspense>} />
        </Route>
      </Routes>
    </Router>
  );
}
