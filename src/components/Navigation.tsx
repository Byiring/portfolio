import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: 'ABOUT', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'ACHIEVEMENTS', path: '/achievements' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-sm px-6 md:px-12 py-8 flex justify-between items-baseline">
      <Link to="/" className="group">
        <h1 className="text-xl md:text-2xl font-serif tracking-widest leading-none">
          BYIRINGIRO HERITIER
        </h1>
        <p className="text-[9px] tracking-[0.4em] font-medium text-accent mt-1 group-hover:text-fg transition-colors">
          MUSIC PRODUCER & COMPOSER
        </p>
      </Link>

      <div className="flex gap-8 md:gap-12">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-[10px] md:text-[11px] tracking-[0.2em] font-medium transition-colors hover:text-fg ${
              location.pathname === item.path ? 'text-fg' : 'text-accent'
            }`}
          >
            {item.name}
            {location.pathname === item.path && (
              <motion.div
                layoutId="nav-underline"
                className="h-[1px] bg-fg mt-1"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
