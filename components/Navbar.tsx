
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  showContent: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showContent }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 flex justify-center px-6 py-6`}>
      <nav className={`w-full max-w-7xl h-[65px] px-10 flex items-center justify-between transition-all duration-500 rounded-full border border-white/5 backdrop-blur-2xl ${isScrolled ? 'bg-black/40 border-white/10' : 'bg-transparent'}`}>
        {/* Brand/Logo - Using layoutId for morphing */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <Logo size={24} className="group-hover:rotate-[15deg] transition-transform duration-500" />
          <motion.span
            layoutId="logo-text"
            className="text-[20px] font-black tracking-tighter text-white"
          >
            RecruitierAI
          </motion.span>
        </div>

        {/* Menu Links - Fades in after logo settles */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.1 }}
              className="text-[14px] font-medium text-[#999999] hover:text-white transition-colors tracking-tight"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Global Actions - Fades in after logo settles */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={showContent ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <button className="hidden sm:block text-[14px] font-medium text-[#999999] hover:text-white transition-colors">
            Request a demo
          </button>
          <button className="bg-white text-black text-[14px] font-black px-7 py-2.5 rounded-full hover:bg-slate-200 transition-all">
            Sign up
          </button>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
