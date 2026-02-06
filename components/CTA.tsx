
import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-40 px-6 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-10 py-24 rounded-[60px] bg-white text-black relative z-10 text-center flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tight"
                >
                    Ready to Hire <br />Better, Faster?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-gray-600 mb-12 font-medium"
                >
                    Join 500+ companies hiring smarter with AI
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                >
                    <button className="px-12 py-6 bg-black text-white font-bold rounded-full text-xl hover:scale-105 transition-transform">
                        Start Free Trial
                    </button>
                    <button className="px-12 py-6 border-2 border-black text-black font-bold rounded-full text-xl hover:bg-black hover:text-white transition-all">
                        Schedule Demo
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
