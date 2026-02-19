import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true); // Forced true for debugging

  useEffect(() => {
    const toggleVisibility = () => {
      console.log('Scroll position:', window.scrollY);
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(true); // Keep visible for debugging
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

  // if (!isVisible) return null; // Commented out for debugging

  return (
    <button
      onClick={scrollToTop}
      data-testid="button-scroll-to-top"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '80px',
        height: '80px',
        background: 'red',
        border: '5px solid yellow',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        fontSize: '40px',
        color: 'white',
      }}
      aria-label="Scroll to top"
    >
      <span>↑</span>
    </button>
  );
};

export default ScrollToTop;
