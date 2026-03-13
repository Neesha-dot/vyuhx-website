import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// Import project images
import cafeQueueHero from '../assets/projects/cafe queue.png';
// Add all gallery images in: src/assets/projects/cafequeue/
import cafeQueueImg1 from '../assets/projects/cafequeue/image1.png';
import cafeQueueImg2 from '../assets/projects/cafequeue/image2.png';
import cafeQueueImg3 from '../assets/projects/cafequeue/image3.png';
import cafeQueueImg4 from '../assets/projects/cafequeue/image4.png';
import cafeQueueImg5 from '../assets/projects/cafequeue/image5.png';
import cafeQueueImg6 from '../assets/projects/cafequeue/image6.png';
import cafeQueueImg7 from '../assets/projects/cafequeue/image7.png';
import cafeQueueImg8 from '../assets/projects/cafequeue/image8.png';

const CafeQueueManagement = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = {
    companyName: 'VYUHX TECHNOLOGIES',
    title: 'Cafe Queue Management System',
    description: 'A comprehensive queue management system designed specifically for Cafe Twenty Twenty to streamline customer flow and enhance operational efficiency. This intelligent platform revolutionizes the traditional waiting experience by providing real-time queue tracking, automated token generation, and seamless customer-staff communication. The system integrates advanced features like SMS notifications, dynamic wait time estimation, and comprehensive analytics dashboard, enabling cafe staff to manage peak hours effectively while providing customers with transparency and control over their dining experience. Built with scalability in mind, the platform handles high-volume traffic during rush hours while maintaining optimal performance and user experience.',
    heroImage: cafeQueueHero,
    gallery: [
      cafeQueueImg1,
      cafeQueueImg2,
      cafeQueueImg3,
      cafeQueueImg4,
      cafeQueueImg5,
      cafeQueueImg6,
      cafeQueueImg7,
      cafeQueueImg8,
    ],
    client: 'Cafe Twenty Twenty',
    industry: 'Food & Beverage Management',
    location: 'Ambernath, Kalyan',
    duration: '4 weeks',
    completed: 'January 2026',
    deployment: 'https://cafetwentytwenty.com',
    techStack: {
      frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '📘' },
        { name: 'Tailwind CSS', icon: '🎨' }
      ],
      backend: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Socket.io', icon: '🔌' }
      ],
      database: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '🔴' }
      ]
    },
    features: [
      {
        icon: '🎫',
        title: 'Smart Token Generation',
        description: 'Automated digital token system with QR codes for contactless check-in and real-time queue position tracking'
      },
      {
        icon: '📊',
        title: 'Real-time Dashboard',
        description: 'Comprehensive admin dashboard displaying live queue status, customer analytics, and performance metrics'
      },
      {
        icon: '📱',
        title: 'SMS & Push Notifications',
        description: 'Automated alerts for queue updates, estimated wait times, and table readiness notifications'
      },
      {
        icon: '⏱️',
        title: 'Dynamic Wait Time Calculator',
        description: 'AI-powered algorithm predicting accurate wait times based on historical data and current queue flow'
      }
    ],
    impact: [
      {
        icon: '✓',
        text: '60% Reduction in Wait Time: Streamlined queue management significantly improved customer flow and reduced perceived waiting time'
      },
      {
        icon: '✓',
        text: '85% Customer Satisfaction: Enhanced transparency and communication led to dramatically improved customer experience ratings'
      },
      {
        icon: '✓',
        text: '40% Increase in Table Turnover: Optimized seating management and reduced idle time resulted in higher operational efficiency'
      }
    ]
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setCurrentImageIndex((prev) => 
        prev === project.gallery.length - 1 ? 0 : prev + 1
      );
      if (e.key === 'ArrowLeft') setCurrentImageIndex((prev) => 
        prev === 0 ? project.gallery.length - 1 : prev - 1
      );
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, project.gallery.length]);

  return (
    <div className="project-detail-page">
      {/* Header Section */}
      <div className="detail-header-section">
        <div className="detail-header-wrapper">
          <button className="detail-back-button" onClick={() => navigate('/projects2')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="detail-header-content">
            <h1 className="detail-company-title">{project.companyName}</h1>
            <h2 className="detail-project-name">{project.title}</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="detail-main-content">
        <div className="detail-content-wrapper">
          
          {/* Compact Gallery Section */}
          <div className="compact-gallery-section">
            {/* Main Preview */}
            <div className="main-preview" onClick={() => openLightbox(0)}>
              <img src={project.heroImage} alt={project.title} />
              <div className="preview-overlay">
                <span>Click to view gallery</span>
              </div>
            </div>

            {/* Small Thumbnails Row */}
            <div className="thumbnails-row">
              {project.gallery.slice(0, 4).map((img, index) => (
                <div 
                  key={index} 
                  className="small-thumb"
                  onClick={() => openLightbox(index)}
                >
                  <img src={img} alt={`Preview ${index + 1}`} />
                </div>
              ))}
              {project.gallery.length > 4 && (
                <div 
                  className="small-thumb view-all-thumb"
                  onClick={() => openLightbox(4)}
                >
                  <img src={project.gallery[4]} alt="View All" />
                  <div className="view-all-overlay">
                    <span>View All ({project.gallery.length})</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="detail-desc-card">
            <p>{project.description}</p>
          </div>

          {/* Project Details */}
          <div className="detail-info-card">
            <h2 className="card-section-title-new">Project Details</h2>
            <div className="info-grid-new">
              <div className="info-item-new">
                <span className="info-label-new">Client</span>
                <span className="info-value-new">{project.client}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Industry</span>
                <span className="info-value-new">{project.industry}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Location</span>
                <span className="info-value-new">{project.location}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Duration</span>
                <span className="info-value-new">{project.duration}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Completed</span>
                <span className="info-value-new">{project.completed}</span>
              </div>
              <div className="info-item-new full-width">
                <span className="info-label-new">Deployment</span>
                <a href={project.deployment} target="_blank" rel="noopener noreferrer" className="info-link-url-new">
                  {project.deployment}
                </a>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="detail-tech-card-new">
            <h2 className="card-main-title-new">Technology Stack</h2>
            
            <div className="tech-category-section">
              <h3 className="tech-category-title">FRONTEND</h3>
              <div className="tech-items-grid">
                {project.techStack.frontend.map((tech, i) => (
                  <div key={i} className="tech-card-item">
                    <span className="tech-card-icon">{tech.icon}</span>
                    <span className="tech-card-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-section">
              <h3 className="tech-category-title">BACKEND</h3>
              <div className="tech-items-grid">
                {project.techStack.backend.map((tech, i) => (
                  <div key={i} className="tech-card-item">
                    <span className="tech-card-icon">{tech.icon}</span>
                    <span className="tech-card-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-section">
              <h3 className="tech-category-title">DATABASE</h3>
              <div className="tech-items-grid">
                {project.techStack.database.map((tech, i) => (
                  <div key={i} className="tech-card-item">
                    <span className="tech-card-icon">{tech.icon}</span>
                    <span className="tech-card-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features & Impact */}
          <div className="features-impact-wrapper">
            <div className="features-section">
              <h2 className="card-main-title-new">Project Features</h2>
              <div className="features-list">
                {project.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="impact-section">
              <h2 className="card-main-title-new">Project Impact</h2>
              <div className="impact-list">
                {project.impact.map((item, i) => (
                  <div key={i} className="impact-item">
                    <div className="impact-icon">{item.icon}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-fullscreen" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}>×</button>
          <button className="lb-prev" onClick={prevImage}>‹</button>
          <button className="lb-next" onClick={nextImage}>›</button>
          
          <div className="lb-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <img 
              src={project.gallery[currentImageIndex]} 
              alt={`${project.title} ${currentImageIndex + 1}`}
              className="lb-image"
            />
            <div className="lb-counter">
              {currentImageIndex + 1} / {project.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CafeQueueManagement;