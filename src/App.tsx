/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Achievements from './pages/Achievements';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-fg selection:text-bg">
      <ScrollToTop />
      <Navigation />
      
      <main className="pt-24 pb-12 px-6 md:px-12 max-w-[1800px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location}>
              <Route path="/" element={<About />} />
              <Route path="/work" element={<Home />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="px-6 md:px-12 py-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium text-accent">
        <p>© {new Date().getFullYear()} BYIRINGIRO HERITIER</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="https://www.instagram.com/__________ysl" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">Instagram</a>
          <a href="#" className="hover:text-fg transition-colors">Soundcloud</a>
          <a href="#" className="hover:text-fg transition-colors">Spotify</a>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
