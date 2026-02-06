
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
    size?: number;
    className?: string;
    theme?: 'light' | 'dark';
    rotate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 24, className = "", theme = 'dark', rotate = false }) => (
    <motion.div
        layoutId="logo-icon"
        className={`relative flex items-center justify-center z-[100] ${className}`}
        style={{ width: size, height: size }}
        animate={rotate ? { rotate: 360 } : {}}
        transition={rotate ? { duration: 0.8, ease: "easeInOut" } : {}}
    >
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={theme === 'dark' ? 'text-white' : 'text-[#404040]'}
        >
            <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" fill="currentColor" />
        </svg>
    </motion.div>
);

export default Logo;
