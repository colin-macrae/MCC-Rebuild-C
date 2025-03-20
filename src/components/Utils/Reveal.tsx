// import React, { useEffect, useRef } from "react";
// import { motion, useAnimation } from "framer-motion";

// interface RevealProps {
//   children: React.ReactNode;
// }

// const Reveal: React.FC<RevealProps> = ({ children }) => {
//   const controls = useAnimation();
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!ref.current) return;

//       const elementTop = ref.current.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;
      
//       if (elementTop < windowHeight - 0) { // smaller number = animation starts earlier/lower
//         controls.start({ y: 0, opacity: 1 });
//       }
//     };

//     onScroll(); 

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [controls]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ y: 50, opacity: 0 }} // y axis value: greater = animations travel farther distance from start to end 
//       animate={controls}
//       transition={{ duration: 0.3, delay: 0 }} 
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default Reveal;


// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// interface RevealProps {
//   children: React.ReactNode;
//   delay?: number;
// }

// const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
//   const controls = useAnimation();
//   const ref = useRef<HTMLDivElement>(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current || hasAnimated) return;

//       const elementTop = ref.current.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (elementTop < windowHeight * 0.8) {
//         // Start animation when 80% in viewport
//         controls.start({ y: 0, opacity: 1 });
//         setHasAnimated(true); // Prevent repeated animations
//       }
//     };

//     // Use requestAnimationFrame for smoother performance
//     const onScroll = () => requestAnimationFrame(handleScroll);

//     handleScroll(); // Run once on mount
//     window.addEventListener('scroll', onScroll);

//     return () => window.removeEventListener('scroll', onScroll);
//   }, [controls, hasAnimated]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ y: 50, opacity: 0 }}
//       animate={controls}
//       transition={{ duration: 0.5, ease: 'easeOut', delay }}
//       style={{ willChange: 'transform, opacity' }} // Optimized for GPU acceleration
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default Reveal;


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
      { threshold: 0.02, rootMargin: '0px 0px -50px 0px' } // Matches your CSS's trigger point
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
      initial={{ opacity: 0, y: 50 }} // Matches your CSS .slide-up starting state
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


