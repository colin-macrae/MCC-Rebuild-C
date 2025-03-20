import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
            obs.unobserve(entry.target); // Prevent re-triggering
          }
        });
      },
      { threshold: 0.02, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    // Fallback: If already visible, trigger immediately
    if (element.getBoundingClientRect().top < window.innerHeight) {
      controls.start({ opacity: 1, y: 0 });
    }

    return () => observer.unobserve(element);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{
        opacity: { duration: 0.8, ease: 'easeOut', delay: 0.3 }, // Delay for opacity transition
        y: { duration: 0.8, ease: 'easeOut', delay: 0.3 }, // Delay for Y transition
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;


