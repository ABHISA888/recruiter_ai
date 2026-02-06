
import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Workflow, Globe2 } from 'lucide-react';

const MotionDiv = motion.div as any;

const LanguageSupport: React.FC = () => {
  const chips = [
    { text: "How can I help you?", lang: "EN" },
    { text: "Jak mogę ci pomóc?", lang: "PL" },
    { text: "Hoe kan ik u helpen?", lang: "NL" },
    { text: "무엇을 도와드릴까요?", lang: "KO" },
    { text: "Size nasıl yardımcı olabilirim?", lang: "TR" },
    { text: "Wie kann ich Ihnen helfen?", lang: "DE" },
    { text: "Come posso aiutarvi?", lang: "IT" },
    { text: "どうされましたか？", lang: "JA" },
    { text: "Kā es varu jums palīdzēt?", lang: "LV" },
    { text: "Чим я можу вам допомогти?", lang: "UK" }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-10">
          <div className="w-2.5 h-[10px] bg-purple-600 rounded-[3px]" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#555555]">Language Support</span>
          <div className="flex-1 h-[1px] bg-white/5" />
        </div>

        <div className="card-gladia p-16 bg-black grid lg:grid-cols-2 gap-12 items-center mb-8 border-white/10 overflow-hidden relative">
           <div className="relative z-20">
              <h2 className="text-[44px] md:text-[54px] font-bold mb-6 leading-none tracking-tight text-white">
                1 provider <br />for any language
              </h2>
              <p className="text-[#666666] text-[19px] mb-12 font-medium max-w-md">
                Expand globally with a single API. <br />100+ languages included.
              </p>
              <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-[15px]">
                Talk to sales
              </button>
           </div>

           <div className="relative h-[400px] w-full overflow-hidden">
             {/* Floating language chips visualization */}
             <div className="absolute inset-0 flex flex-wrap gap-4 items-center justify-center -rotate-6 scale-110">
                {chips.map((chip, i) => (
                  <MotionDiv
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="lang-chip"
                  >
                    {chip.text}
                  </MotionDiv>
                ))}
             </div>
             {/* Gradient overlay for depth */}
             <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
           </div>
        </div>

        {/* Feature Grid Bottom */}
        <div className="grid lg:grid-cols-3 gap-0 border border-white/10 rounded-[40px] overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          <div className="p-10 flex flex-col items-start bg-black">
            <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center mb-8 border border-white/5">
              <Languages size={18} />
            </div>
            <h4 className="font-bold text-lg mb-4">Source in any language</h4>
            <p className="text-[#666666] text-sm leading-relaxed">Top precision in EN, FR, ES, and IT, with exclusive support for niche markets.</p>
          </div>
          <div className="p-10 flex flex-col items-start bg-black">
            <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center mb-8 border border-white/5">
              <Workflow size={18} />
            </div>
            <h4 className="font-bold text-lg mb-4">Advanced cultural match</h4>
            <p className="text-[#666666] text-sm leading-relaxed">Our models handle multilingual resumes and local professional nuances effortlessly.</p>
          </div>
          <div className="p-10 flex flex-col items-start bg-black">
            <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center mb-8 border border-white/5">
              <Globe2 size={18} />
            </div>
            <h4 className="font-bold text-lg mb-4">Any-to-any matching</h4>
            <p className="text-[#666666] text-sm leading-relaxed">Seamlessly match a candidate from one region to a role in another with localized context.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LanguageSupport;
