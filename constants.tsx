
import React from 'react';
import {
  Zap,
  Shield,
  Users,
  Cpu,
  Globe,
  LineChart
} from 'lucide-react';

export const FEATURES = [
  {
    id: 'f1',
    title: 'AI Matching Engine',
    description: 'Proprietary LLM technology that matches candidates to roles based on latent skills and culture fit, not just keywords.',
    icon: <Cpu className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'f2',
    title: 'Automated Outreach',
    description: 'Personalized messaging at scale that feels human, increasing response rates by up to 300%.',
    icon: <Zap className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'f3',
    title: 'Bias Prevention',
    description: 'Blind screening protocols designed to ensure every candidate is evaluated purely on merit and potential.',
    icon: <Shield className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'f4',
    title: 'Talent Pool Analytics',
    description: 'Real-time insights into your hiring pipeline with predictive modeling for time-to-hire.',
    icon: <LineChart className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'f5',
    title: 'Collaborative Hiring',
    description: 'Intuitive workspaces for hiring managers and recruiters to sync effortlessly on candidate feedback.',
    icon: <Users className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'f6',
    title: 'Global Sourcing',
    description: 'Access talent across 150+ countries with localized compliance and currency support built-in.',
    icon: <Globe className="w-6 h-6 text-blue-400" />
  }
];

export const NAV_LINKS = [
  { name: 'Product', href: '#process' },
  { name: 'Impact', href: '#impact' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' }
];
