import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoError, setLogoError] = useState(false);
  const logoRef = useRef(null);
  const canvasRef = useRef(null);

  // Import logo dynamically
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    import('../assets/vyuhx_logo.jpg')
      .then(module => {
        setLogo(module.default);
      })
      .catch(err => {
        console.warn('Logo not found in src/assets/. Using placeholder.');
        setLogoError(true);
      });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle parallax effect
  useEffect(() => {
    if (logoRef.current) {
      const moveX = (mousePosition.x - window.innerWidth / 2) * 0.003;
      const moveY = (mousePosition.y - window.innerHeight / 2) * 0.003;
      logoRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  }, [mousePosition]);

  // Enhanced wave animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.2;
    };
    updateCanvasSize();

    let animationFrameId;
    let time = 0;

    const waves = [
      {
        amplitude: 28,
        frequency: 0.0018,
        speed: 0.016,
        yOffset: 0.6,
        color: 'rgba(79, 179, 217, 0.06)'
      },
      {
        amplitude: 32,
        frequency: 0.002,
        speed: 0.014,
        yOffset: 0.68,
        color: 'rgba(100, 195, 232, 0.05)'
      },
      {
        amplitude: 25,
        frequency: 0.0019,
        speed: 0.015,
        yOffset: 0.75,
        color: 'rgba(26, 43, 74, 0.03)'
      }
    ];

    const drawWave = (wave, phaseShift) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height * wave.yOffset + 
          Math.sin(x * wave.frequency + time * wave.speed + phaseShift) * wave.amplitude;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = wave.color;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      waves.forEach((wave, index) => {
        drawWave(wave, (Math.PI / 3) * index);
      });
      
      time += 0.4;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero-unified">
      {/* Extended canvas covering hero and services */}
      <canvas ref={canvasRef} className="unified-canvas"></canvas>
      
      <div className="unified-background">
        {/* Extended gradient orbs */}
        <div className="unified-orb orb-top-right"></div>
        <div className="unified-orb orb-bottom-left"></div>
        <div className="unified-orb orb-center"></div>
        
        {/* Continuous floating particles */}
        <div className="unified-particles">
          {[...Array(35)].map((_, i) => (
            <div key={`particle-${i}`} className="unified-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 120}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}></div>
          ))}
        </div>

        {/* Animated grid */}
        <div className="unified-grid">
          {[...Array(6)].map((_, i) => (
            <div key={`grid-h-${i}`} className="unified-grid-line grid-horizontal" style={{
              top: `${(i + 1) * 16.66}%`,
              animationDelay: `${i * 0.1}s`
            }}></div>
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={`grid-v-${i}`} className="unified-grid-line grid-vertical" style={{
              left: `${(i + 1) * 20}%`,
              animationDelay: `${i * 0.1}s`
            }}></div>
          ))}
        </div>
        
        {/* Tech nodes */}
        <div className="unified-tech-nodes">
          {[...Array(10)].map((_, i) => (
            <div 
              key={`tech-node-${i}`} 
              className="unified-tech-node" 
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${5 + Math.random() * 90}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${10 + Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Floating tech icons */}
        <div className="premium-floating-icons">
          <div className="premium-tech-icon icon-pos-1">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="hero-main-content">
        <div className="hero-content-wrapper">
          {/* LEFT SIDE - Logo */}
          <div className="hero-left">
            <div className="premium-logo-container" ref={logoRef}>
              <div className="premium-logo-wrapper">
                <div className="premium-logo-ring ring-outer"></div>
                <div className="premium-logo-ring ring-inner"></div>
                
                <div className="premium-orbit">
                  <div className="premium-orbit-dot"></div>
                </div>
                
                <div className="premium-logo-image-wrapper">
                  {logo && !logoError ? (
                    <img 
                      src={logo} 
                      alt="VyuhX Logo" 
                      className="premium-logo-image"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <div className="premium-logo-placeholder">
                      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="premiumLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#2d5a7b', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#4fb3d9', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
                              fill="url(#premiumLogoGradient)" fontSize="42" fontWeight="900" 
                              fontFamily="'Poppins', 'Montserrat', sans-serif">
                          VX
                        </text>
                      </svg>
                    </div>
                  )}
                  <div className="premium-logo-glow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Title and Tagline */}
          <div className="hero-right">
            <h1 className="premium-brand-title">
              <span className="brand-vyuh">Vyuh</span>
              <span className="brand-x">X</span>
              <span className="brand-tech">Technologies</span>
            </h1>

            <p className="premium-tagline">
              <span className="premium-tagline-word" style={{ animationDelay: '0.8s' }}>From</span>
              <span className="premium-tagline-word" style={{ animationDelay: '0.9s' }}>Vision</span>
              <span className="premium-tagline-word" style={{ animationDelay: '1s' }}>to</span>
              <span className="premium-tagline-word" style={{ animationDelay: '1.1s' }}>Execution</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;