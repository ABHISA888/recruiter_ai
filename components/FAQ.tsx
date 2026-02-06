
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex justify-between items-center text-left group"
            >
                <span className="text-xl md:text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-3xl text-gray-500"
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-10 text-gray-400 text-lg leading-relaxed max-w-4xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "How does AI screening work?",
            answer: "Our AI uses advanced Large Language Models (LLMs) to analyze resumes and portfolios against your specific job requirements. It doesn't just look for keywords; it understands context, project complexity, and even cultural alignment based on previous successful hires in your organization."
        },
        {
            question: "Does RecruitierAI integrate with our existing ATS?",
            answer: "Yes, we integrate with all major Applicant Tracking Systems including Greenhouse, Lever, Ashby, Workable, and more. Our API-first approach ensures that data flows seamlessly between RecruitierAI and your existing HR stack."
        },
        {
            question: "What's the pricing structure?",
            answer: "We offer flexible pricing based on your hiring volume. From a 'Pay as you Grow' plan for startups to Enterprise solutions with dedicated support and custom model training. All plans include unlimited candidate screening."
        },
        {
            question: "How long does setup take?",
            answer: "Most teams are up and running in under 30 minutes. Connecting your ATS and setting up your first AI-powered job workflow is a simple, guided process requiring no technical expertise."
        },
        {
            question: "Is candidate data secure?",
            answer: "Security is our top priority. We are SOC-2 Type II compliant and fully GDPR/CCPA ready. All candidate data is encrypted at rest and in transit, and we never use your proprietary candidate data to train models for other customers."
        }
    ];

    return (
        <section id="faq" className="py-32 px-6 bg-slate-900/10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">Frequently Asked <br /> Questions</h2>
                <div className="flex flex-col">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
