
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface IntroAnimationProps {
    onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence timing
        const timers = [
            setTimeout(() => setStep(1), 100),   // Show logo & rotate
            setTimeout(() => setStep(2), 1000),  // Show text & glow
            setTimeout(() => setStep(3), 1800),  // Show tagline
            setTimeout(() => setStep(4), 3300),  // Start fade out tagline
            setTimeout(() => onComplete(), 3800) // Transition to main app
        ];
        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f0f7ff] overflow-hidden"
        >
            {/* Step 2: Pulsing Glow */}
            <AnimatePresence>
                {step >= 2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, #B197FC 0%, #A5D8FF 100%)'
                        }}
                    />
                )}
            </AnimatePresence>

            <div className="relative z-[110] flex flex-col items-center">
                <div className="flex items-center gap-6">
                    {/* Step 1: Logo Rotation */}
                    <AnimatePresence>
                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Logo size={100} theme="light" rotate={true} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Step 2: Text Reveal */}
                    <AnimatePresence>
                        {step >= 2 && (
                            <motion.span
                                layoutId="logo-text"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-7xl font-black tracking-tighter text-[#404040] z-[120]"
                            >
                                RecruitierAI
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                {/* Step 3: Tagline slides up */}
                <div className="h-12 mt-8 overflow-hidden">
                    <AnimatePresence>
                        {(step === 3) && (
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                className="text-xl font-bold text-[#404040]/50 tracking-[0.2em] uppercase"
                            >
                                Smart way for hiring
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default IntroAnimation;
