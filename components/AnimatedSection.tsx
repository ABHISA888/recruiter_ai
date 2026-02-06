
import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Fix: Removed the Variants type annotation as it's not exported in the current environment's framer-motion version
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { 
        duration: 0.8, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98]
      } 
    }
  };

  // Fix: Cast motion.div to any to resolve issues where 'initial', 'animate', and 'variants' props are not correctly recognized by TypeScript
  const MotionDiv = motion.div as any;

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export default AnimatedSection;
