
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { ContainerScroll } from './ContainerScroll';

const ConnectionBeam = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1200 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-20"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M 200 100 Q 600 200 600 400 Q 600 600 1000 700"
                    stroke="#3B82F6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ pathLength }}
                />
                <motion.circle
                    r="8"
                    fill="#A5D8FF"
                    style={{
                        offsetPath: "path('M 200 100 Q 600 200 600 400 Q 600 600 1000 700')",
                        motionDistance: pathLength
                    }}
                    className="shadow-[0_0_20px_rgba(165,216,255,1)]"
                />
                <motion.circle
                    r="15"
                    fill="#A5D8FF"
                    style={{
                        offsetPath: "path('M 200 100 Q 600 200 600 400 Q 600 600 1000 700')",
                        motionDistance: pathLength
                    }}
                    className="opacity-30"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </svg>
        </div>
    );
};

interface FlowNodeProps {
    text: string;
    index: number;
}

const FlowNode: React.FC<FlowNodeProps> = ({ text, index }) => (
    <div className="flex flex-col items-center relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="px-8 py-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-bold text-blue-100 shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-md whitespace-nowrap group-hover:border-blue-500/50 transition-colors"
        >
            {text}
        </motion.div>
        {index < 4 && (
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '32px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                className="w-px bg-gradient-to-b from-blue-500/50 to-transparent my-1"
            />
        )}
    </div>
);

const FlowCard = ({ title, steps, benefit, delay }: { title: string; steps: string[]; benefit: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="relative z-10 h-full"
    >
        <SpotlightCard className="h-full flex flex-col">
            <h3 className="text-xl md:text-2xl font-black mb-12 text-center text-white">{title}</h3>

            <div className="flex-grow flex flex-col items-center justify-center mb-12">
                {steps.map((step, idx) => {
                    if (step.startsWith('→')) return null;

                    const nextStep = steps[idx + 1];
                    const isBranch = nextStep && nextStep.includes('?');

                    return (
                        <React.Fragment key={idx}>
                            <FlowNode text={step} index={idx} />
                            {isBranch && (
                                <div className="flex flex-col items-center w-full">
                                    <div className="h-6 w-px bg-blue-500/30" />
                                    <div className="flex justify-between w-full max-w-[240px] gap-4">
                                        <div className="flex flex-col items-center flex-1">
                                            <span className="text-[10px] font-black text-gray-500 mb-2 uppercase tracking-tighter">Yes</span>
                                            <div className="w-full px-3 py-2 rounded-2xl bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-400 text-center">
                                                {steps[idx + 2].replace('→ Yes: ', '')}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center flex-1">
                                            <span className="text-[10px] font-black text-gray-500 mb-2 uppercase tracking-tighter">No</span>
                                            <div className="w-full px-3 py-2 rounded-2xl bg-red-500/10 border border-red-500/20 text-[10px] font-bold text-red-400 text-center">
                                                {steps[idx + 3]?.replace('→ No: ', '') || 'End'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            <div className="mt-auto pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <p className="text-xs font-black text-blue-400 uppercase tracking-widest">Efficiency Gain</p>
                </div>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium">{benefit}</p>
            </div>
        </SpotlightCard>
    </motion.div>
);

const Flowcharts = () => {
    return (
        <section id="process" className="py-20 md:py-32 px-6 relative bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-10 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white"
                    >
                        AI Recruiting Software That <br className="hidden md:block" /> Works Like Your Own HR Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Automate the repetitive, double the quality. Build custom hiring workflows in minutes.
                    </motion.p>
                </div>

                <ContainerScroll>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 h-full p-4 relative">
                        <ConnectionBeam />
                        <FlowCard
                            title="Screening & Scheduling"
                            steps={["Application", "AI Resume Screening (Top 20%)", "Qualification Score > 75%?", "→ Yes: Auto-Schedule Interview", "→ No: Rejection Email"]}
                            benefit="Screen 250+ applications in minutes vs. 8 hours manually"
                            delay={0}
                        />
                        <FlowCard
                            title="Multi-Stage Interview"
                            steps={["Round 1 AI Video Interview", "AI Score > 80%?", "→ Yes: Auto-Schedule Round 2", "Hiring Decision", "→ Offer Letter or Rejection"]}
                            benefit="Reduce time-to-hire from 42 days to 12 days"
                            delay={0.2}
                        />
                        <FlowCard
                            title="Passive Re-engagement"
                            steps={["Rejected (60–74%)", "Add to Future Talent DB", "Wait 3 Months", "New Role Open?", "AI Engagement Email"]}
                            benefit="Build a qualified talent pipeline automatically - never start from zero"
                            delay={0.4}
                        />
                    </div>
                </ContainerScroll>
            </div>
        </section>
    );
};

export default Flowcharts;
