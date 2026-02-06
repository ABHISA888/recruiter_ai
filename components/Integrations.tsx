
import React from 'react';

const brands = [
    "LinkedIn", "Naukri.com", "Indeed", "AngelList", "Instahyre",
    "Wellfound", "IIMJobs", "Glassdoor", "Monster India", "Cutshort"
];

const Integrations = () => {
    return (
        <section id="integrations" className="py-24 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em]">Integrates with 50+ Platforms</h3>
            </div>

            <div className="relative">
                {/* Gradients to fade edges */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="flex animate-marquee whitespace-nowrap">
                    {[...brands, ...brands].map((brand, idx) => (
                        <div
                            key={idx}
                            className="mx-12 text-3xl md:text-5xl font-black text-gray-700 hover:text-white transition-colors cursor-default select-none"
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default Integrations;
