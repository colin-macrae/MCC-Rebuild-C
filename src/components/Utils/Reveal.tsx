import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;

      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 0) { // smaller number = animation starts earlier/lower
        controls.start({ y: 0, opacity: 1 });
      }
    };

    onScroll(); 

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }} // y axis value: greater = animations travel farther distance from start to end 
      animate={controls}
      transition={{ duration: 0.3, delay: 0 }} 
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
