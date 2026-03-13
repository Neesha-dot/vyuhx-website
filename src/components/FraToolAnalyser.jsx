import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FraToolAnalyser.css';

// Import project images
// IMPORTANT: You need to add these images to your project:
// src/assets/projects/software/fra-tool-analyser.png (main hero image)
// src/assets/projects/fra-tool/image1.png through image8.png (gallery images)

import fraToolHero from '../assets/projects/software/fra-tool-analyser.jpeg';
import fraToolImg1 from '../assets/projects/fra-tool/image1.jpeg';
import fraToolImg2 from '../assets/projects/fra-tool/image2.jpeg';
import fraToolImg3 from '../assets/projects/fra-tool/image3.png';
import fraToolImg4 from '../assets/projects/fra-tool/image4.png';
import fraToolImg5 from '../assets/projects/fra-tool/image5.png';
import fraToolImg6 from '../assets/projects/fra-tool/image6.png';
import fraToolImg7 from '../assets/projects/fra-tool/image7.png';
import fraToolImg8 from '../assets/projects/fra-tool/image8.png';
import fraToolImg9 from '../assets/projects/fra-tool/image9.jpeg';
import fraToolImg10 from '../assets/projects/fra-tool/image10.jpeg';
import fraToolImg11 from '../assets/projects/fra-tool/image11.jpeg';

const FraToolAnalyser = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data
  const project = {
    companyName: 'VYUHX TECHNOLOGIES',
    title: 'FRA Tool Analyser',
    description: 'FRA Tool Analyser represents a breakthrough in financial risk assessment technology, designed to transform how organizations evaluate and manage financial risks. This sophisticated analytical platform combines advanced data processing with intuitive visualization to deliver comprehensive risk insights in real-time. Built with cutting-edge technologies and modern design principles, the tool provides predictive modeling, automated reporting capabilities, and seamless integration with existing financial infrastructure. The system empowers financial teams to make data-driven decisions with confidence through powerful customization options tailored to specific organizational needs. Every aspect of the platform—from its robust backend architecture to its elegant user interface—has been meticulously engineered to deliver enterprise-grade performance while maintaining exceptional usability and security standards.',
    heroImage: fraToolHero,
    gallery: [
      fraToolImg1,
      fraToolImg2,
      fraToolImg3,
      fraToolImg4,
      fraToolImg5,
      fraToolImg6,
      fraToolImg7,
      fraToolImg8,
      fraToolImg9,
      fraToolImg10,
      fraToolImg11,
    ],
    client: 'Financial Risk Analytics Inc.',
    industry: 'Financial Technology',
    location: 'Mumbai, India',
    duration: '4 weeks',
    completed: 'December 2025',
    deployment: 'https://fra-tool-analyser.com',
    techStack: {
      frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'D3.js', icon: '📊' }
      ],
      backend: [
        { name: 'Python', icon: '🐍' },
        { name: 'Flask', icon: '⚡' },
        { name: 'FastAPI', icon: '🚀' }
      ],
      database: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Redis', icon: '⚡' }
      ]
    },
    features: [
      {
        icon: '📊',
        title: 'Real-time Risk Analysis',
        description: 'Advanced algorithms process financial data in real-time to provide instant risk assessment and automated alerts'
      },
      {
        icon: '🎯',
        title: 'Predictive Modeling',
        description: 'Machine learning models forecast potential risks and provide actionable insights for proactive prevention'
      },
      {
        icon: '📈',
        title: 'Interactive Dashboards',
        description: 'Customizable visualization dashboards with comprehensive drill-down capabilities for detailed analysis'
      },
      {
        icon: '🔒',
        title: 'Secure Data Processing',
        description: 'Enterprise-grade security with encrypted data transmission and full compliance with financial regulations'
      }
    ],
    impact: [
      {
        icon: '✓',
        text: '40% Faster Risk Assessment: Dramatically reduced time required for comprehensive risk analysis and detailed reporting'
      },
      {
        icon: '✓',
        text: '95% Accuracy Rate: High-precision risk predictions powered by advanced machine learning algorithms and data analytics'
      },
      {
        icon: '✓',
        text: '60% Cost Reduction: Automated processes significantly reduced manual analysis costs, errors, and operational overhead'
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

  // Handle keyboard navigation
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
          <button className="detail-back-button" onClick={() => navigate('/projects1')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="detail-header-content">
            <h1 className="detail-company-title">VYUHX TECHNOLOGIES</h1>
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

export default FraToolAnalyser;