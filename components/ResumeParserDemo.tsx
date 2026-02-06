
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Cpu, Code2, GraduationCap, Star, UserCheck } from 'lucide-react';

const chips = [
    { id: 1, label: "Skill: React", icon: <Code2 className="w-4 h-4" />, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30", x: -150, y: -100 },
    { id: 2, label: "Exp: 5 Years", icon: <Cpu className="w-4 h-4" />, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", x: 150, y: -120 },
    { id: 3, label: "Education: Masters", icon: <GraduationCap className="w-4 h-4" />, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", x: -160, y: 100 },
    { id: 4, label: "Status: Top 10%", icon: <Star className="w-4 h-4" />, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30", x: 160, y: 80 },
    { id: 5, label: "Hired: Abhinivesh", icon: <UserCheck className="w-4 h-4" />, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", x: 0, y: -180 },
];

const ResumeParserDemo: React.FC = () => {
    const [isScanning, setIsScanning] = useState(true);
    const [isExploded, setIsExploded] = useState(false);

    useEffect(() => {
        const sequence = async () => {
            // Loop forever
            while (true) {
                setIsScanning(true);
                setIsExploded(false);

                await new Promise(r => setTimeout(r, 2000));
                setIsScanning(false);
                setIsExploded(true);

                await new Promise(r => setTimeout(r, 4000));
                setIsExploded(false);

                await new Promise(r => setTimeout(r, 1000));
            }
        };
        sequence();
    }, []);

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        The World's Fastest <br /> Holographic Parser
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Watch RecruitierAI turn unstructured PDF chaos into organized, actionable talent intelligence in milliseconds.
                    </p>
                </div>

                <div className="relative h-[500px] flex items-center justify-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full" />

                    <AnimatePresence>
                        {!isExploded && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.2 }}
                                className="relative z-20"
                            >
                                <div className="p-10 rounded-[40px] bg-slate-900/50 backdrop-blur-xl border border-white/20 shadow-2xl">
                                    <FileText className="w-32 h-32 text-blue-500" />

                                    {/* Scanning Beam */}
                                    {isScanning && (
                                        <motion.div
                                            initial={{ top: "0%" }}
                                            animate={{ top: "100%" }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Explosion Chips */}
                    <AnimatePresence>
                        {isExploded && chips.map((chip) => (
                            <motion.div
                                key={chip.id}
                                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                                animate={{ opacity: 1, x: chip.x, y: chip.y, scale: 1 }}
                                exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    delay: chip.id * 0.05
                                }}
                                className={`absolute z-30 px-6 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-xl border ${chip.bg} ${chip.border} shadow-2xl`}
                            >
                                <span className={chip.color}>{chip.icon}</span>
                                <span className={`text-sm font-black tracking-tight ${chip.color}`}>{chip.label}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Connecting Rays */}
                    {isExploded && (
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                            <defs>
                                <linearGradient id="ray-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {chips.map((chip) => (
                                <motion.line
                                    key={`line-${chip.id}`}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    x1="50%"
                                    y1="50%"
                                    x2={`calc(50% + ${chip.x}px)`}
                                    y2={`calc(50% + ${chip.y}px)`}
                                    stroke="url(#ray-grad)"
                                    strokeWidth="2"
                                />
                            ))}
                        </svg>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ResumeParserDemo;
