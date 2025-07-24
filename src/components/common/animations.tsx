'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Reusable animation components
interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variants?: any;
}

export const AnimatedDiv = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  variants = fadeInUp 
}: AnimatedDivProps) => (
  <motion.div
    className={className}
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedDivProps) => (
  <motion.section
    className={className}
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    transition={{ delay }}
  >
    {children}
  </motion.section>
);

// Page transition component
export const PageTransition = ({ children }: { children: ReactNode }) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

// Hover animation component
export const HoverCard = ({ 
  children, 
  className = '' 
}: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    whileHover={{ 
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);

// Loading spinner component
export const LoadingSpinner = ({ className = '' }: { className?: string }) => (
  <motion.div
    className={`inline-block ${className}`}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </motion.div>
); 