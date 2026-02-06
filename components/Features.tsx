
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, Database, Radio, Share2, EyeOff, PiggyBank } from 'lucide-react';
const scaling_visual = "/scaling_visual.png";
const performance_visual = "/performance_visual.png";

const MotionDiv = motion.div as any;

const FeatureItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-10 flex flex-col items-start justify-center h-full">
    <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center mb-8 text-white">
      <Icon size={18} />
    </div>
    <h4 className="text-[20px] font-bold mb-4 tracking-tight">{title}</h4>
    <p className="text-[#888888] text-[15px] leading-relaxed font-medium">{desc}</p>
  </div>
);

const ScalingGridItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-12 flex flex-col items-start">
    <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center mb-8 text-white">
      <Icon size={18} />
    </div>
    <h4 className="text-[18px] font-bold mb-3 tracking-tight">{title}</h4>
    <p className="text-[#666666] text-[14px] leading-relaxed font-medium">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* PERFORMANCE SECTION */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-2.5 h-[10px] bg-purple-600 rounded-[3px]" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#555555]">Performance</span>
          <div className="flex-1 h-[1px] bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0 mb-32">
          {/* Large Hero Card (Left) */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-gladia-main h-full min-h-[680px] flex flex-col p-12 lg:mr-4 mb-4 lg:mb-0 border border-white/10"
          >
            <div className="relative z-20">
              <h2 className="text-[44px] md:text-[54px] font-bold mb-6 leading-[1.05] tracking-tight text-white">
                Selection that won't <br />disappoint
              </h2>
              <p className="text-[#888888] text-[17px] leading-relaxed max-w-sm font-medium mb-12">
                Our neural matching models offer top precision on key candidate attributes and cultural alignment.
              </p>
            </div>

            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={performance_visual}
                alt="Performance 3D"
                className="absolute right-[-10%] bottom-[-5%] w-[80%] h-auto object-contain opacity-80 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            </div>

            <div className="mt-auto relative z-20">
              <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-[15px] hover:bg-slate-100 transition-all shadow-xl">
                Check our benchmarks
              </button>
            </div>
          </MotionDiv>

          {/* Small Features Grid (Right) */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-gladia grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-white/10"
          >
            <div className="border-r border-b border-white/10">
              <FeatureItem icon={Layers} title="Sub-1s Matching" desc="To keep your pipeline moving at lightspeed, without interrupted analysis." />
            </div>
            <div className="border-b border-white/10">
              <FeatureItem icon={Shield} title="Merit-first AI" desc="Capture latent potential and verified skills as primary data points." />
            </div>
            <div className="border-r border-white/10">
              <FeatureItem icon={Database} title="Stable Sourcing" desc="Consistent high-quality candidates even for niche engineering roles." />
            </div>
            <div>
              <FeatureItem icon={Radio} title="Global Ready" desc="Optimized for multi-market sourcing with localized compliance." />
            </div>
          </MotionDiv>
        </div>

        {/* SCALING SECTION - RE-ALIGNING TO MATCH INSPIRATION */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2.5 h-[10px] bg-purple-600 rounded-[3px]" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#555555]">Scaling</span>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>

          {/* Main Scaling Hero Card */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-gladia-main p-16 bg-black relative min-h-[580px] overflow-hidden border border-white/10 mb-6"
          >
            <div className="max-w-md relative z-20 h-full flex flex-col">
              <h2 className="text-[44px] md:text-[54px] font-bold mb-6 leading-none tracking-tight text-white">
                Scale without <br />thinking
              </h2>
              <p className="text-[#888888] text-xl mb-12 font-medium leading-snug">
                Instant scalability. <br />No limits, no fine print.
              </p>
              <div className="mt-auto">
                <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-[15px] hover:bg-slate-100 transition-all shadow-xl">
                  Talk to sales
                </button>
              </div>
            </div>

            {/* Inspiration 3D Abstract Visual (Simulated with a high-end image/overlay) */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 z-10">
              <div className="w-full h-full relative">
                <img
                  src={scaling_visual}
                  alt="3D abstract scaling"
                  className="w-full h-full object-contain opacity-90 mix-blend-lighten transform scale-125 translate-x-1/4"
                />
                {/* Subtle vignette/gradient over image */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              </div>
            </div>
          </MotionDiv>

          {/* Scaling Triple Grid */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-gladia grid grid-cols-1 lg:grid-cols-3 border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 overflow-hidden"
          >
            <ScalingGridItem
              icon={Share2}
              title="Infinite parallel streams"
              desc="No need to forecast, give notice, or over-provision in advance."
            />
            <ScalingGridItem
              icon={EyeOff}
              title="Zero infra burden"
              desc="Save at least 20% of DevOps effort without sacrificing latency, with no need to self-host."
            />
            <ScalingGridItem
              icon={PiggyBank}
              title="Flexible, usage-based pricing"
              desc="Start small, test freely, scale-as-you-go with clear pricing tiers."
            />
          </MotionDiv>
        </div>

      </div>
    </section>
  );
};

export default Features;
