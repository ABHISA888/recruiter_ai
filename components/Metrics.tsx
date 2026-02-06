
import React from 'react';
import { motion } from 'framer-motion';

interface MetricBarProps {
    label: string;
    value: string;
    percentage: number;
    delay: number;
}

const MetricBar: React.FC<MetricBarProps> = ({ label, value, percentage, delay }) => (
    <div className="flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-end mb-6">
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay, ease: "easeOut" }}
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-2xl relative group"
            >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-3 py-1 rounded text-xs font-bold whitespace-nowrap">
                    {value}
                </div>
            </motion.div>
        </div>
        <div className="text-center">
            <p className="text-2xl font-black mb-1">{value}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider leading-tight h-10 flex items-center justify-center">{label}</p>
        </div>
    </div>
);

const Metrics: React.FC = () => {
    const metrics = [
        { label: "Faster Screening", value: "10x", percentage: 90 },
        { label: "Faster Time-to-Hire", value: "70%", percentage: 70 },
        { label: "More Interview Capacity", value: "25x", percentage: 100 },
        { label: "Application Completion", value: "95%", percentage: 95 },
        { label: "More Qualified Apps", value: "89%", percentage: 85 },
        { label: "Lower Recruitment Costs", value: "80%", percentage: 80 },
    ];

    return (
        <section id="impact" className="py-32 bg-slate-900/20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black mb-4">The Impact of Intelligence</h2>
                    <p className="text-gray-400">Data-driven excellence for modern recruiting teams.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 h-[400px]">
                    {metrics.map((m, idx) => (
                        <MetricBar
                            key={idx}
                            label={m.label}
                            value={m.value}
                            percentage={m.percentage}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
