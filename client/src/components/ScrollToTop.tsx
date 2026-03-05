import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, backgroundColor: '#00A8A8' }}
          onClick={scrollToTop}
          data-testid="button-scroll-to-top"
          className="fixed bottom-5 right-5 z-[9999] flex items-center justify-center transition-all duration-300"
          style={{
            width: '44px',
            height: '44px',
            backgroundColor: '#00C9C8',
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0,201,200,0.4)',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
