
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { generateJobSummary } from '../services/gemini';

const AIDemo: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!jobTitle || !description) return;
    setLoading(true);
    const summary = await generateJobSummary(jobTitle, description);
    setResult(summary);
    setLoading(false);
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
           <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-3 h-1.5 bg-green-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Playground</span>
           </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Experience the Backbone</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Our API handles complex contextual understanding. Try our neural summary engine below.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <AnimatedSection direction="right">
            <div className="card-gladia p-10 h-full">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-blue-600/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </div>
                <span className="font-bold text-sm uppercase tracking-widest text-slate-300">API Inputs</span>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-3">Target Role</label>
                  <input 
                    type="text" 
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. Senior Backend Engineer"
                    className="w-full bg-[#050505] border border-white/5 rounded-2xl px-5 py-4 focus:border-white/20 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 mb-3">Context / Culture Vibe</label>
                  <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="High growth startup, focused on Rust/Wasm and developer tools."
                    rows={3}
                    className="w-full bg-[#050505] border border-white/5 rounded-2xl px-5 py-4 focus:border-white/20 outline-none transition-all resize-none placeholder:text-slate-700"
                  />
                </div>
                <button 
                  onClick={handleGenerate}
                  disabled={loading || !jobTitle || !description}
                  className="w-full bg-white hover:bg-slate-200 disabled:opacity-30 text-black font-black py-5 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  Execute Neural Mapping
                </button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2}>
            <div className="card-gladia p-1 flex flex-col h-full bg-[#050505] border-white/10">
               <div className="flex-1 rounded-[38px] p-10 flex flex-col">
                  {result ? (
                    <div className="animate-in fade-in duration-700 h-full flex flex-col">
                      <div className="flex items-center gap-2 text-green-500 mb-8 font-bold text-sm uppercase tracking-widest">
                        <CheckCircle2 size={16} />
                        Optimized Payload
                      </div>
                      <p className="text-2xl md:text-3xl font-bold leading-tight text-white mb-10">
                        "{result}"
                      </p>
                      <div className="mt-auto pt-10 border-t border-white/5 flex flex-wrap gap-4">
                         <span className="bg-slate-900 border border-white/5 px-4 py-2 rounded-full text-[11px] font-bold text-slate-400">Contextual: 99.4%</span>
                         <span className="bg-slate-900 border border-white/5 px-4 py-2 rounded-full text-[11px] font-bold text-slate-400">Sentiment: Professional</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 opacity-20 py-20">
                      <div className="w-20 h-20 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-xl font-bold">Awaiting neural input...</p>
                    </div>
                  )}
               </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
