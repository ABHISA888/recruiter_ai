
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    {
        id: 1,
        type: 'ai',
        text: "Hi! I noticed you have 5 years of React experience. Can you tell me about a challenge you solved recently?",
        delay: 1000
    },
    {
        id: 2,
        type: 'typing',
        delay: 1500
    },
    {
        id: 3,
        type: 'candidate',
        text: "At my last role, I optimized rendering for a complex dashboard, reducing TTFB by 40% using memoization and custom hooks.",
        delay: 1000
    },
    {
        id: 4,
        type: 'badge',
        text: "✅ Strong Match (92%)",
        delay: 800
    }
];

const AISimulator: React.FC = () => {
    const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
    const [iteration, setIteration] = useState(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const runSequence = async () => {
            setVisibleMessages([]);

            for (let i = 0; i < messages.length; i++) {
                await new Promise(resolve => setTimeout(resolve, messages[i].delay));
                setVisibleMessages(prev => [...prev, i]);

                // If it's the typing bubble, wait a bit then replace with candidate message
                if (messages[i].type === 'typing') {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    setVisibleMessages(prev => prev.filter(id => id !== i));
                }
            }

            // Final pause before swipe
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIteration(prev => prev + 1);
        };

        runSequence();
    }, [iteration]);

    return (
        <section className="w-full py-20 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Left side text animations */}
                <div className="hidden lg:flex flex-col gap-12 text-right">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-black text-white mb-2">Real-time EQ Analysis</h3>
                        <p className="text-gray-400 text-sm">Our AI detects sentiment and cultural fit beyond just keywords.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-black text-blue-400 mb-2">Domain Expertise</h3>
                        <p className="text-gray-400 text-sm">Deep technical screening for 500+ specialized roles and skills.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-black text-white mb-2">Bias-Free Evaluation</h3>
                        <p className="text-gray-400 text-sm">Fair, data-driven assessments focused exclusively on merit.</p>
                    </motion.div>
                </div>

                {/* Center: Simulator */}
                <div className="flex justify-center flex-col items-center gap-8">
                    <div className="text-center lg:hidden mb-12">
                        <h2 className="text-4xl font-black text-white mb-4">AI Interview Agent</h2>
                        <p className="text-gray-400">Experience the future of candidate screening.</p>
                    </div>

                    <motion.div
                        key={iteration}
                        initial={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
                        animate={{
                            x: visibleMessages.length === messages.length ? [0, 500] : 0,
                            opacity: visibleMessages.length === messages.length ? [1, 0] : 1,
                            rotate: visibleMessages.length === messages.length ? [0, 15] : 0,
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 2 }}
                        className="relative w-full max-w-md aspect-[4/5] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col p-8"
                    >
                        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-5 h-5 bg-purple-400 rounded-full blur-[2px]"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-white">AI Interview Agent</p>
                                <p className="text-xs text-green-400">● Live Screening</p>
                            </div>
                        </div>

                        <div className="flex-grow space-y-6 overflow-y-auto no-scrollbar">
                            <AnimatePresence mode="popLayout">
                                {visibleMessages.map((msgIdx) => {
                                    const msg = messages[msgIdx];
                                    if (msg.type === 'ai') {
                                        return (
                                            <motion.div
                                                key="ai-msg"
                                                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                className="bg-[#B197FC]/20 border border-[#B197FC]/30 p-5 rounded-2xl rounded-tl-none max-w-[85%] self-start"
                                            >
                                                <p className="text-sm text-gray-200 leading-relaxed font-medium">{msg.text}</p>
                                            </motion.div>
                                        );
                                    }
                                    if (msg.type === 'typing') {
                                        return (
                                            <motion.div
                                                key="typing"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tr-none self-end"
                                            >
                                                <div className="flex gap-1.5">
                                                    {[0, 1, 2].map((i) => (
                                                        <motion.div
                                                            key={i}
                                                            animate={{ y: [0, -5, 0] }}
                                                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                                        />
                                                    ))}
                                                </div>
                                            </motion.div>
                                        );
                                    }
                                    if (msg.type === 'candidate') {
                                        return (
                                            <motion.div
                                                key="candidate-msg"
                                                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                className="bg-white/10 border border-white/20 p-5 rounded-2xl rounded-tr-none max-w-[85%] self-end"
                                            >
                                                <motion.p className="text-sm text-gray-200 leading-relaxed font-medium">
                                                    {msg.text?.split('').map((char, i) => (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: i * 0.02 }}
                                                        >
                                                            {char}
                                                        </motion.span>
                                                    ))}
                                                </motion.p>
                                            </motion.div>
                                        );
                                    }
                                    if (msg.type === 'badge') {
                                        return (
                                            <motion.div
                                                key="badge-msg"
                                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                className="self-center mt-4 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                                            >
                                                <span className="text-sm font-bold text-green-400">{msg.text}</span>
                                            </motion.div>
                                        );
                                    }
                                    return null;
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Shortlisted Indicator Overlay for Swipe */}
                        <AnimatePresence>
                            {visibleMessages.length === messages.length && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1.2 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
                                >
                                    <div className="px-8 py-4 border-4 border-green-500 rounded-2xl rotate-[-15deg]">
                                        <span className="text-4xl font-black text-green-500 uppercase tracking-widest">Shortlisted</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Right side text animations */}
                <div className="hidden lg:flex flex-col gap-12 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-black text-white mb-2">24/7 Availability</h3>
                        <p className="text-gray-400 text-sm">Interview candidates anywhere in the world, any time of day.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-black text-purple-400 mb-2">Multi-lingual</h3>
                        <p className="text-gray-400 text-sm">Screen candidates in 30+ languages with native-level fluency.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-black text-white mb-2">Seamless Integration</h3>
                        <p className="text-gray-400 text-sm">Automatically syncs with your existing ATS and calendars.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AISimulator;
