
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const ROICalculator: React.FC = () => {
    const [hires, setHires] = useState(50);

    // Logic
    const hoursSaved = hires * 15;
    const moneySaved = hires * 500;

    // Spring animations for numbers
    const hoursSpring = useSpring(0, { stiffness: 100, damping: 30 });
    const moneySpring = useSpring(0, { stiffness: 100, damping: 30 });

    useEffect(() => {
        hoursSpring.set(hoursSaved);
        moneySpring.set(moneySaved);
    }, [hires, hoursSaved, moneySaved]);

    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        See how much <br /> RecruitierAI saves you
                    </h2>
                    <p className="text-xl text-gray-400 font-medium">Quantify the impact of automated intelligence on your bottom line.</p>
                </div>

                <div className="bg-slate-900/40 border border-white/5 rounded-[48px] p-8 md:p-16 backdrop-blur-sm relative overflow-hidden group hover:border-[#3B82F6]/30 transition-all duration-700">
                    {/* Subtle Background Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#3B82F6]/20 transition-all duration-700" />

                    <div className="relative z-10 flex flex-col gap-12">
                        <div>
                            <div className="flex justify-between items-end mb-8">
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Monthly Hiring Volume</span>
                                <span className="text-4xl font-black text-white">{hires} <span className="text-lg text-[#3B82F6]">Hires</span></span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="500"
                                value={hires}
                                onChange={(e) => setHires(parseInt(e.target.value))}
                                className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#3B82F6] hover:accent-[#2563EB] transition-all"
                                style={{
                                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(hires / 500) * 100}%, rgba(255,255,255,0.1) ${(hires / 500) * 100}%, rgba(255,255,255,0.1) 100%)`
                                }}
                            />
                            <div className="flex justify-between mt-4 text-xs font-bold text-gray-600">
                                <span>1 HIRE</span>
                                <span>500 HIRES</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            <div className="flex flex-col">
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Time Saved Per Month</span>
                                <div className="text-5xl font-black text-white flex items-baseline gap-2">
                                    <AnimatedNumber value={hoursSpring} />
                                    <span className="text-xl text-[#3B82F6]">Hours</span>
                                </div>
                                <p className="mt-4 text-gray-500 text-sm italic font-medium">Equivalent to 1.5 full-time recruiters</p>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Budget Saved Per Month</span>
                                <div className="text-5xl font-black text-white flex items-baseline gap-2">
                                    <span className="text-3xl text-green-500">$</span>
                                    <AnimatedNumber value={moneySpring} />
                                </div>
                                <p className="mt-4 text-gray-500 text-sm italic font-medium">Reducing cost-per-hire by 74%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AnimatedNumber = ({ value }: { value: any }) => {
    const displayValue = useTransform(value, (latest) => Math.floor(latest as number).toLocaleString());
    const [current, setCurrent] = useState("0");

    useEffect(() => {
        return displayValue.onChange((v) => setCurrent(v));
    }, [displayValue]);

    return <motion.span>{current}</motion.span>;
};

export default ROICalculator;
