import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// Import project images
import shreerathFeedbackHero from '../assets/projects/shreerath feedback.png';
// Add all gallery images in: src/assets/projects/shreerathfeedback/
import shreerathFeedbackImg1 from '../assets/projects/shreerathfeedback/image11.png';
import shreerathFeedbackImg2 from '../assets/projects/shreerathfeedback/image22.png';
import shreerathFeedbackImg3 from '../assets/projects/shreerathfeedback/image33.png';
import shreerathFeedbackImg4 from '../assets/projects/shreerathfeedback/image44.png';
import shreerathFeedbackImg5 from '../assets/projects/shreerathfeedback/image55.png';
import shreerathFeedbackImg6 from '../assets/projects/shreerathfeedback/image66.png';
import shreerathFeedbackImg7 from '../assets/projects/shreerathfeedback/image77.png';
import shreerathFeedbackImg8 from '../assets/projects/shreerathfeedback/image88.png';

const FeedbackSystemShreerath = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = {
    companyName: 'VYUHX TECHNOLOGIES',
    title: 'Shreerath Restaurant Feedback System',
    description: 'A streamlined QR code-based customer feedback system designed specifically for Shreerath Restaurant to collect genuine customer insights directly from diners. Customers simply scan a QR code placed on their table or at the billing counter using their smartphone, which instantly opens a quick and user-friendly feedback form. The collected feedback is directly accessible to the restaurant owner through a dedicated admin dashboard, enabling them to read every customer comment, view ratings for food quality, service, ambiance, and cleanliness in real-time. This direct connection between customers and management eliminates intermediaries and provides authentic, unfiltered insights that help the owner understand what\'s working well and what needs improvement. The system organizes feedback by date, rating, and category, making it easy for the owner to identify patterns, celebrate staff achievements, and make data-driven decisions to enhance the overall dining experience and grow their business.',
    heroImage: shreerathFeedbackHero,
    gallery: [
      shreerathFeedbackImg1,
      shreerathFeedbackImg2,
      shreerathFeedbackImg3,
      shreerathFeedbackImg4,
      shreerathFeedbackImg5,
      shreerathFeedbackImg6,
      shreerathFeedbackImg7,
      shreerathFeedbackImg8,
    ],
    client: 'Shreerath Restaurant',
    industry: 'Food & Beverage Management',
    location: 'Ambernath, Maharashtra',
    duration: '3 weeks',
    completed: 'December 2025',
    deployment: 'https://feedbackshreerath.bombrolls.com',
    techStack: {
      frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '📘' },
        { name: 'Material UI', icon: '🎨' }
      ],
      backend: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Socket.io', icon: '🔌' }
      ],
      database: [
  { name: 'MongoDB', icon: '🍃' }
],
    },
    features: [
      {
        icon: '📱',
        title: 'QR Code Instant Feedback',
        description: 'Customers scan table QR codes with their phones to instantly access feedback forms - no app installation required'
      },
      {
        icon: '👨‍💼',
        title: 'Owner Dashboard Access',
        description: 'Restaurant owner gets direct access to all customer feedback through a secure, easy-to-use admin dashboard'
      },
      {
        icon: '⭐',
        title: 'Real-time Review Monitoring',
        description: 'View customer ratings and comments as they come in - categorized by food, service, ambiance, and cleanliness'
      },
      {
        icon: '📊',
        title: 'Actionable Insights & Reports',
        description: 'Organized feedback data helps owner identify trends, track improvements, and make informed business decisions'
      }
    ],
    impact: [
      {
        icon: '✓',
        text: '85% Customer Participation: Easy QR code access significantly increased feedback submission rates from diners'
      },
      {
        icon: '✓',
        text: 'Direct Owner Insights: 100% of feedback goes straight to owner dashboard, enabling quick response to customer concerns'
      },
      {
        icon: '✓',
        text: '4.6★ Rating Improvement: Acting on customer feedback led to measurable improvements in food quality and service standards'
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

export default FeedbackSystemShreerath;