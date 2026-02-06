
import React from 'react';
import { motion } from 'framer-motion';

import SpotlightCard from './SpotlightCard';

const TestimonialCard = ({ quote, author, role, delay }: { quote: string; author: string; role: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="h-full"
  >
    <SpotlightCard className="h-full flex flex-col justify-between">
      <div className="mb-8">
        <div className="flex gap-1 mb-6">
          {[1, 2, 3, 4, 5].map(i => (
            <svg key={i} className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-xl text-gray-200 leading-relaxed font-medium overflow-hidden">
          "{quote}"
        </p>
      </div>
      <div>
        <p className="font-bold text-white">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </SpotlightCard>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6">What hiring leaders <br /> are saying</h2>
            <p className="text-xl text-gray-400">Join 500+ forward-thinking teams using RecruitierAI.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="We went from 6 weeks to hire a developer to just 10 days. RecruitierAI handled everything from screening to scheduling."
            author="Rahul Mehta"
            role="Founder, TechStart Solutions"
            delay={0}
          />
          <TestimonialCard
            quote="The quality of candidates post-AI screening is night and day. No more interviewing people who don't fit the technical bar."
            author="Ananya R."
            role="HR Director, GlobalTech"
            delay={0.1}
          />
          <TestimonialCard
            quote="It feels like having an army of recruiters working 24/7. The automation of follow-ups alone saved us 20 hours a week."
            author="David Chen"
            role="Head of Talent, Nexus AI"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
