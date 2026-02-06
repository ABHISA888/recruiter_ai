
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Play } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Bubble = ({ text, author, position, delay }: { text: string; author: string; position: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      },
      opacity: { duration: 0.5, delay: delay * 0.2 },
      scale: { duration: 0.5, delay: delay * 0.2 }
    }}
    className={`absolute ${position} z-30 max-w-[260px] p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hidden xl:block pointer-events-none`}
  >
    <p className="text-sm text-gray-300 italic mb-3 leading-relaxed">"{text}"</p>
    <p className="text-xs font-bold text-blue-400">— {author}</p>
  </motion.div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 px-6 overflow-hidden bg-black">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-[100%] blur-[100px] pointer-events-none" />

      {/* Header Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
        >
          Every Hire, <br className="hidden md:block" /> Faster and Better
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagneticButton>
            <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Start Hiring Smarter
            </button>
          </MagneticButton>
          <MagneticButton>
            <button className="px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-all">
              See How It Works
            </button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Demo Video Section with Floating Bubbles */}
      <div className={`relative z-10 w-full mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative max-w-6xl mx-auto px-4">

          {/* Floating Pain Point Bubbles centered around the video */}
          <Bubble
            text="Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors."
            author="Sarah K., Founder"
            position="-top-24 -left-12"
            delay={0}
          />
          <Bubble
            text="Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months."
            author="Rahul M., Hiring Manager"
            position="-top-12 -right-12"
            delay={1}
          />
          <Bubble
            text="I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."
            author="Priya S., CEO"
            position="top-1/3 -left-48"
            delay={2}
          />
          <Bubble
            text="Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."
            author="Amit T., Head of HR"
            position="bottom-12 -right-32"
            delay={3}
          />

          {/* Video Container */}
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-x"></div>

            {/* Video Frame */}
            <div className="relative bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl p-4 overflow-hidden shadow-2xl">
              {/* Browser-like Header */}
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-white/5 rounded-lg px-6 py-1.5 text-sm text-gray-400 inline-block border border-white/5 font-mono">
                    Recruiter.ai/demo
                  </div>
                </div>
              </div>

              {/* Demo Interface */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden min-h-[500px] flex items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>

                {/* Floating Elements (Internal UI) */}
                <div className="absolute top-12 left-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 animate-float-up z-20 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-semibold">AI Analyzing...</span>
                  </div>
                  <div className="text-xs text-gray-400">candidate/portfolio/analysis</div>
                </div>

                <div className="absolute top-24 right-16 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-xl p-4 animate-float-down delay-1000 z-20 shadow-2xl">
                  <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-1">Issue #1234</div>
                  <div className="text-xs text-gray-400">Matching with Job: Senior Frontend</div>
                </div>

                <div className="absolute bottom-20 left-20 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-xl p-4 animate-float-up delay-2000 z-20 shadow-2xl">
                  <div className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-1">Success Rate</div>
                  <div className="text-xs text-gray-400">98.5% Matching Accuracy</div>
                </div>

                {/* Central Demo Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-10">
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="relative bg-black border border-white/20 rounded-full p-10 shadow-inner">
                      <Bot className="w-16 h-16 text-white animate-bounce-subtle" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
                    Watch RecruiterAI in Action
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed font-medium">
                    See how AI instantly maps candidate skills, explains complex experience patterns, and guides you to the perfect hire
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 group flex items-center shadow-lg shadow-blue-500/20 active:scale-95">
                    <Play className="w-5 h-5 mr-3 fill-current group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-lg">Play Demo</span>
                  </button>
                </div>

                {/* Code Snippets Floating */}
                <div className="absolute top-40 left-1/4 opacity-20 animate-code-float pointer-events-none">
                  <pre className="text-sm text-blue-400 font-mono italic">
                    {`function evaluate(candidate) {
  return ai.rank(candidate)
}`}
                  </pre>
                </div>

                <div className="absolute bottom-40 right-1/4 opacity-20 animate-code-float delay-3000 pointer-events-none">
                  <pre className="text-sm text-purple-400 font-mono italic">
                    {`const match = await 
  getAIInsights(resume)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
