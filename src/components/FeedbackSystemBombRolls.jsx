import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// Import project images
import bombRollsFeedbackHero from '../assets/projects/bombrolls feedback.png';
// Add all gallery images in: src/assets/projects/bombrollsfeedback/
import bombRollsFeedbackImg1 from '../assets/projects/bombrollsfeedback/image111.png';
import bombRollsFeedbackImg2 from '../assets/projects/bombrollsfeedback/image22.png';
import bombRollsFeedbackImg3 from '../assets/projects/bombrollsfeedback/image33.png';
import bombRollsFeedbackImg4 from '../assets/projects/bombrollsfeedback/image44.png';
import bombRollsFeedbackImg5 from '../assets/projects/bombrollsfeedback/image55.png';
import bombRollsFeedbackImg6 from '../assets/projects/bombrollsfeedback/image66.png';
import bombRollsFeedbackImg7 from '../assets/projects/bombrollsfeedback/image77.png';
import bombRollsFeedbackImg8 from '../assets/projects/bombrollsfeedback/image88.png';

const FeedbackSystemBombRolls = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = {
    companyName: 'VYUHX TECHNOLOGIES',
    title: 'Bomb Rolls & Bowls Feedback System',
    description: 'A customer-centric QR code feedback platform built for Bomb Rolls & Bowls Restaurant that puts customer voices directly in the hands of the restaurant owner. Diners can effortlessly scan QR codes displayed at their tables or payment counter to share their dining experience through an intuitive mobile-optimized feedback form. Each submission—complete with ratings for food taste, presentation, service speed, and overall experience—flows directly into the owner\'s admin dashboard where every comment can be read and analyzed. The system makes it simple for the owner to track customer satisfaction trends over time, identify their most popular dishes, recognize staff members who deliver exceptional service, and spot areas needing attention. With organized feedback categorization and easy-to-read reports, the owner gains valuable insights to refine menu offerings, improve service standards, and maintain the explosive flavor experience that keeps customers coming back to Bomb Rolls & Bowls.',
    heroImage: bombRollsFeedbackHero,
    gallery: [
      bombRollsFeedbackImg1,
      bombRollsFeedbackImg2,
      bombRollsFeedbackImg3,
      bombRollsFeedbackImg4,
      bombRollsFeedbackImg5,
      bombRollsFeedbackImg6,
      bombRollsFeedbackImg7,
      bombRollsFeedbackImg8,
    ],
    client: 'Bomb Rolls & Bowls Restaurant',
    industry: 'Food & Beverage Management',
    location: 'Ambernath, Maharashtra',
    duration: '3 weeks',
    completed: 'December 2025',
    deployment: 'https://bombrolls-feedback.netlify.app/',
    techStack: {
      frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Chakra UI', icon: '🎨' }
      ],
      backend: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Socket.io', icon: '🔌' }
      ],
      database: [
        { name: 'MongoDB', icon: '🍃' },
      ]
    },
    features: [
      {
        icon: '📱',
        title: 'Simple QR Code Access',
        description: 'Customers scan QR codes at tables or billing counter to provide instant feedback on their mobile devices'
      },
      {
        icon: '👨‍💼',
        title: 'Owner Control Panel',
        description: 'Restaurant owner reviews all customer feedback directly through a centralized, user-friendly dashboard'
      },
      {
        icon: '🍽️',
        title: 'Dish-Level Ratings',
        description: 'Track individual menu item ratings to identify customer favorites and dishes needing recipe improvements'
      },
      {
        icon: '📈',
        title: 'Business Insights & Trends',
        description: 'Easy-to-understand reports help owner make smart decisions about menu changes, staffing, and service quality'
      }
    ],
    impact: [
      {
        icon: '✓',
        text: '80% Customer Feedback Rate: QR code convenience led to high participation with customers eager to share their experiences'
      },
      {
        icon: '✓',
        text: 'Owner-Driven Improvements: Direct feedback access enabled owner to make menu adjustments that increased customer satisfaction'
      },
      {
        icon: '✓',
        text: '4.7★ Overall Rating: Responding to customer suggestions improved food quality, service, and overall dining experience'
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

export default FeedbackSystemBombRolls;