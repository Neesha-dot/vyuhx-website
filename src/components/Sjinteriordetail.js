import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// Import project images
import sjInteriorHero from '../assets/projects/sj interiors1.png';
// Import gallery images from sjinterior folder
import sjInteriorImg1 from '../assets/projects/sj interiors/image1.png';
import sjInteriorImg2 from '../assets/projects/sj interiors/image2.png';
import sjInteriorImg3 from '../assets/projects/sj interiors/image3.png';
import sjInteriorImg4 from '../assets/projects/sj interiors/image4.png';
import sjInteriorImg5 from '../assets/projects/sj interiors/image5.png';
import sjInteriorImg6 from '../assets/projects/sj interiors/image6.png';
import sjInteriorImg7 from '../assets/projects/sj interiors/image7.png';
import sjInteriorImg8 from '../assets/projects/sj interiors/image8.png';
import sjInteriorImg9 from '../assets/projects/sj interiors/image9.png';
import sjInteriorImg10 from '../assets/projects/sj interiors/image10.png';
import sjInteriorImg11 from '../assets/projects/sj interiors/image11.png';

const SJInteriorDetail = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data
  const projectData = {
    companyName: 'VYUHX TECHNOLOGIES',
    title: 'SJ Interior',
    description: 'SJ Interior represents a masterclass in digital craftsmanship, bringing the elegance and sophistication of high-end interior design into the digital realm. This comprehensive platform was meticulously designed to showcase the transformative power of professional interior design through stunning visuals, immersive portfolio galleries, and seamless user experience. Every pixel has been carefully considered to reflect the brand\'s commitment to excellence, attention to detail, and innovative design philosophy. The website serves as a digital showroom where creativity meets functionality, featuring an extensive portfolio of residential and commercial projects that demonstrate SJ Interior\'s versatility across modern, contemporary, and classic design aesthetics. With intuitive navigation, responsive layouts, and high-performance optimization, the platform ensures that potential clients can explore design possibilities, understand the design process, and connect with the team effortlessly, making their dream spaces a reality.',
    heroImage: sjInteriorHero,
    gallery: [
      sjInteriorImg1,
      sjInteriorImg2,
      sjInteriorImg3,
      sjInteriorImg4,
      sjInteriorImg5,
      sjInteriorImg6,
      sjInteriorImg7,
      sjInteriorImg8,
        sjInteriorImg9,
        sjInteriorImg10,
        sjInteriorImg11
    ],
    client: 'SJ Interior',
    industry: 'Interior Design & Architecture',
    location: 'Mumbai, Maharashtra',
    duration: '5 weeks',
    completed: 'December 2025',
    deployment: 'https://sjintdesign.netlify.app/',
    techStack: {
      frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '📘' },
        { name: 'Bootstrap CSS', icon: '🎨' }
      ],
      backend: [
        { name: 'Node.js', icon: '🟢' },
      ],
      database: [
        { name: 'MongoDB', icon: '🍃' }
      ]
    },
    features: [
      {
        icon: '🏠',
        title: 'Interactive Portfolio Gallery',
        description: 'Stunning visual showcase of completed projects with high-resolution imagery, detailed descriptions, and filterable categories across residential and commercial spaces'
      },
      {
        icon: '🎨',
        title: 'Virtual Design Consultation',
        description: 'Integrated booking system allowing clients to schedule consultations, upload space photos, and receive preliminary design concepts online'
      },
      {
        icon: '📐',
        title: '3D Visualization Preview',
        description: 'Interactive 3D room visualizations and before-after comparisons showcasing transformation potential with immersive design previews'
      },
      {
        icon: '💬',
        title: 'Client Testimonials Hub',
        description: 'Comprehensive review system featuring client stories, project testimonials, and satisfaction ratings building trust and credibility'
      }
    ],
    impact: [
      {
        icon: '✓',
        text: '250+ Project Inquiries: Significant increase in consultation requests with streamlined contact forms driving qualified leads and client engagement'
      },
      {
        icon: '✓',
        text: '85% Mobile Users: Optimized responsive design ensuring seamless browsing experience across all devices with portfolio accessibility on-the-go'
      },
      {
        icon: '✓',
        text: '4.9★ Client Rating: Outstanding customer satisfaction reflecting exceptional service quality, design expertise, and professional project execution'
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
      prev === projectData.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? projectData.gallery.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setCurrentImageIndex((prev) => 
        prev === projectData.gallery.length - 1 ? 0 : prev + 1
      );
      if (e.key === 'ArrowLeft') setCurrentImageIndex((prev) => 
        prev === 0 ? projectData.gallery.length - 1 : prev - 1
      );
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, projectData.gallery.length]);

  return (
    <div className="project-detail-page">
      {/* Header Section */}
      <div className="detail-header-section">
        <div className="detail-header-wrapper">
          <button className="detail-back-button" onClick={() => navigate('/projects')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="detail-header-content">
            <h1 className="detail-company-title">VYUHX TECHNOLOGIES</h1>
            <h2 className="detail-project-name">{projectData.title}</h2>
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
              <img src={projectData.heroImage} alt={projectData.title} />
              <div className="preview-overlay">
                <span>Click to view gallery</span>
              </div>
            </div>

            {/* Small Thumbnails Row */}
            <div className="thumbnails-row">
              {projectData.gallery.slice(0, 4).map((img, index) => (
                <div 
                  key={index} 
                  className="small-thumb"
                  onClick={() => openLightbox(index)}
                >
                  <img src={img} alt={`Preview ${index + 1}`} />
                </div>
              ))}
              {projectData.gallery.length > 4 && (
                <div 
                  className="small-thumb view-all-thumb"
                  onClick={() => openLightbox(4)}
                >
                  <img src={projectData.gallery[4]} alt="View All" />
                  <div className="view-all-overlay">
                    <span>View All ({projectData.gallery.length})</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="detail-desc-card">
            <p>{projectData.description}</p>
          </div>

          {/* Project Details */}
          <div className="detail-info-card">
            <h2 className="card-section-title-new">Project Details</h2>
            <div className="info-grid-new">
              <div className="info-item-new">
                <span className="info-label-new">Client</span>
                <span className="info-value-new">{projectData.client}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Industry</span>
                <span className="info-value-new">{projectData.industry}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Location</span>
                <span className="info-value-new">{projectData.location}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Duration</span>
                <span className="info-value-new">{projectData.duration}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Completed</span>
                <span className="info-value-new">{projectData.completed}</span>
              </div>
              <div className="info-item-new full-width">
                <span className="info-label-new">Deployment</span>
                <a href={projectData.deployment} target="_blank" rel="noopener noreferrer" className="info-link-url-new">
                  {projectData.deployment}
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
                {projectData.techStack.frontend.map((tech, i) => (
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
                {projectData.techStack.backend.map((tech, i) => (
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
                {projectData.techStack.database.map((tech, i) => (
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
                {projectData.features.map((feature, i) => (
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
                {projectData.impact.map((item, i) => (
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
              src={projectData.gallery[currentImageIndex]} 
              alt={`${projectData.title} ${currentImageIndex + 1}`}
              className="lb-image"
            />
            <div className="lb-counter">
              {currentImageIndex + 1} / {projectData.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SJInteriorDetail;