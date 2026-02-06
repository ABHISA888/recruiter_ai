
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Phone, Cloud, Headphones, Zap } from 'lucide-react';

const MotionDiv = motion.div as any;

const IntegrationFeature = ({ icon: Icon, title, desc, logos }: { icon: any, title: string, desc: string, logos?: any[] }) => (
  <div className="p-12 flex flex-col items-start border-white/10 h-full">
    <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center mb-8 text-white border border-white/5">
      <Icon size={18} />
    </div>
    <h4 className="text-[19px] font-bold mb-4 tracking-tight text-white">{title}</h4>
    <p className="text-[#666666] text-[15px] leading-relaxed font-medium mb-6">{desc}</p>
    {logos && (
      <div className="flex items-center gap-4 opacity-40 grayscale invert brightness-200 mt-auto">
        {logos.map((Logo, idx) => <Logo key={idx} size={20} />)}
      </div>
    )}
  </div>
);

const Integration: React.FC = () => {
  return (
    <section id="integration" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-10">
          <div className="w-2.5 h-[10px] bg-purple-600 rounded-[3px]" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#555555]">Integration</span>
          <div className="flex-1 h-[1px] bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr_1fr] gap-0 border border-white/10 rounded-[48px] overflow-hidden bg-black">

          {/* Main Hero Integration Card (Spans 2 rows) */}
          <div className="lg:row-span-2 border-r border-white/10 bg-black flex flex-col p-12 min-h-[700px]">
            <h2 className="text-[44px] md:text-[54px] font-bold mb-6 leading-none tracking-tight text-white">
              Developer-first <br />experience
            </h2>
            <p className="text-[#666666] text-[19px] mb-12 font-medium">Plug. Build. Ship.</p>

            <div className="flex-1 flex items-center justify-center relative my-10 group">
              <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all" />
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                alt="Code visual"
                className="w-full h-full object-cover rounded-3xl opacity-100 transition-all duration-1000 border border-white/5"
              />
            </div>

            <div className="mt-auto">
              <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-slate-100 transition-all">
                RecruitierAI documentation
              </button>
            </div>
          </div>

          {/* Integration Grid - Column 2 */}
          <div className="border-r border-b border-white/10">
            <IntegrationFeature
              icon={Terminal}
              title="Lightweight SDK"
              desc="Minimal lines of code to make setup fast and painless."
              logos={[() => <span className="font-black text-sm">Python</span>, () => <span className="font-black text-sm">JS</span>]}
            />
          </div>
          <div className="border-b border-white/10">
            <IntegrationFeature
              icon={Zap}
              title="Fast integration"
              desc="REST or Webhook connections are simple to configure in under a day."
            />
          </div>

          {/* Spanning 2 columns for row 2 */}
          <div className="lg:col-span-2 grid md:grid-cols-2">
            <div className="border-r border-white/10 h-full">
              <IntegrationFeature
                icon={Phone}
                title="Telephony ready"
                desc="Designed to integrate seamlessly with top ATS and communication platforms."
                logos={[() => <span className="font-black text-xs">SLACK</span>, () => <span className="font-black text-xs">HUB</span>]}
              />
            </div>
            <div className="grid grid-rows-2">
              <div className="border-b border-white/10">
                <IntegrationFeature
                  icon={Cloud}
                  title="Ecosystem native"
                  desc="Works out-of-the-box with LinkedIn, Recall, and more."
                />
              </div>
              <div>
                <IntegrationFeature
                  icon={Headphones}
                  title="Direct support"
                  desc="High-touch Slack access for instant help from engineers building the tech."
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Integration;
