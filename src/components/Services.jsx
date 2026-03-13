import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Transform your vision into a powerful digital presence with custom-built websites that captivate audiences, drive engagement, and deliver exceptional user experiences across all devices.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 8H22M8 3V8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="6" cy="6" r="1" fill="currentColor"/>
          <circle cx="9" cy="6" r="1" fill="currentColor"/>
          <circle cx="12" cy="6" r="1" fill="currentColor"/>
        </svg>
      ),
      technologies: ['React', 'HTML5', 'CSS3', 'Responsive Design'],
      hasProjects: true
    },
    {
      id: 2,
      title: 'Web Applications',
      description: 'Build powerful, scalable web applications tailored to your business needs—from real-time queue systems to feedback platforms—designed for seamless performance and user satisfaction.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9H21M9 3V9M15 3V9" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8" cy="14" r="1.5" fill="currentColor"/>
          <circle cx="12" cy="14" r="1.5" fill="currentColor"/>
          <circle cx="16" cy="14" r="1.5" fill="currentColor"/>
          <circle cx="8" cy="18" r="1.5" fill="currentColor"/>
          <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
          <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
        </svg>
      ),
      technologies: ['React', 'Node.js', 'MongoDB', 'Real-time Systems'],
      hasProjects: true  // CHANGED TO TRUE
    },
    {
      id: 3,
      title: 'Software Development',
      description: 'Transform complex business challenges into powerful software systems designed to streamline operations, accelerate growth, and maximize efficiency.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9L7 12L9 15M15 9L17 12L15 15M13 7L11 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      technologies: ['Python', 'Java', 'C++', 'Desktop Apps'],
      hasProjects: true
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Amplify your online presence with data-driven marketing strategies that boost visibility, engagement, and conversions across all digital channels.',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L9 21L12 12L21 9L3 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      technologies: ['SEO', 'SEM', 'Social Media', 'Analytics'],
      hasProjects: false
    }
  ];

  const handleViewProjects = (service, e) => {
    e.stopPropagation();
    if (service.hasProjects) {
      window.scrollTo(0, 0);
      
      // Route to different projects pages based on service
      if (service.id === 1) {
        navigate('/projects');        // Website Development
      } else if (service.id === 2) {
        navigate('/projects2');        // Web Applications (UPDATED ROUTE)
      } else if (service.id === 3) {
        navigate('/projects1');        // Software Development
      }
    }
  };

  return (
    <section className="services-unified">
      <div className="services-unified-container">
        {/* Section Header */}
        <div className="services-unified-header">
          <h2 className="services-unified-title">Our Services</h2>
          <p className="services-unified-subtitle">
            Comprehensive digital solutions tailored to transform your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-unified-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-premium-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-premium-icon">
                {service.icon}
              </div>
              
              <h3 className="service-premium-title">{service.title}</h3>
              <p className="service-premium-description">{service.description}</p>
              
              <div className="service-premium-technologies">
                <p className="service-premium-tech-label">TECHNOLOGIES:</p>
                <div className="service-premium-tech-tags">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="service-premium-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <button 
                className={`service-premium-cta ${!service.hasProjects ? 'cta-not-clickable' : ''}`}
                onClick={(e) => handleViewProjects(service, e)}
                style={{ cursor: service.hasProjects ? 'pointer' : 'default' }}
              >
                View Projects
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Hover glow effect */}
              <div className="service-premium-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;