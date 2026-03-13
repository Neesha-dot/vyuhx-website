import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// Import project images
import bombHero from '../assets/projects/bombrollsbowls.png';
// Import gallery images from bombrollsbowls folder
import bombImg1 from '../assets/projects/bombrollsbowls/image1.png';
import bombImg2 from '../assets/projects/bombrollsbowls/image2.png';
import bombImg3 from '../assets/projects/bombrollsbowls/image3.png';
import bombImg4 from '../assets/projects/bombrollsbowls/image4.png';
import bombImg5 from '../assets/projects/bombrollsbowls/image5.png';
import bombImg6 from '../assets/projects/bombrollsbowls/image6.png';
import bombImg7 from '../assets/projects/bombrollsbowls/image7.png';
import bombImg8 from '../assets/projects/bombrollsbowls/image8.png';

const BombRollsBowlsDetail = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data
  const projectData = {
    companyName: 'VYUHX TECHNOLOGIES',
    title: 'Bomb Rolls and Bowls',
    description: 'Bomb Rolls and Bowls emerges as a revolutionary digital experience in the fast-casual dining space, seamlessly blending bold flavors with cutting-edge web technology. This dynamic platform was meticulously crafted to capture the explosive taste sensations and vibrant energy that define the brand\'s signature rolls and bowls. Through an innovative design approach that combines striking visuals with intuitive functionality, the website transforms casual browsing into an engaging culinary journey. Every interaction has been thoughtfully engineered to reflect the brand\'s commitment to fresh ingredients, bold combinations, and exceptional customer experience. The platform features a sophisticated ordering system that streamlines the customer journey from menu exploration to doorstep delivery, while maintaining the energetic and adventurous spirit that makes Bomb Rolls and Bowls a standout in the competitive food delivery market.',
    heroImage: bombHero,
    gallery: [
      bombImg1,
      bombImg2,
      bombImg3,
      bombImg4,
      bombImg5,
      bombImg6,
      bombImg7,
      bombImg8,
    ],
    client: 'Bomb Rolls and Bowls',
    industry: 'Food & Beverage - Fast Casual',
    location: 'Ambernath, Kalyan',
    duration: '4 weeks',
    completed: 'January 2026',
    deployment: 'https://bomb-rolls-bowls.netlify.app/',
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
        icon: '🍱',
        title: 'Dynamic Menu Builder',
        description: 'Interactive menu system allowing customers to customize their perfect bowl or roll with real-time ingredient selection and nutritional information'
      },
      {
        icon: '🚀',
        title: 'Express Ordering System',
        description: 'Streamlined checkout process with saved preferences, quick reorder functionality, and multiple payment gateway integrations'
      },
      {
        icon: '📲',
        title: 'Real-Time Order Tracking',
        description: 'Live order status updates with GPS-enabled delivery tracking and estimated arrival times for complete transparency'
      },
      {
        icon: '🎯',
        title: 'Loyalty Rewards Program',
        description: 'Integrated points-based rewards system with exclusive offers, birthday bonuses, and referral incentives to drive customer retention'
      }
    ],
    impact: [
      {
        icon: '✓',
        text: '500+ Daily Orders: Explosive growth in online orders with streamlined digital ordering system driving significant revenue increase'
      },
      {
        icon: '✓',
        text: '65% Mobile Traffic: Optimized mobile experience resulting in majority of orders placed through smartphones and tablets'
      },
      {
        icon: '✓',
        text: '4.9★ Customer Rating: Exceptional user experience translating to outstanding customer satisfaction scores and positive brand perception'
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

export default BombRollsBowlsDetail;