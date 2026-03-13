import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// Import project images
import cafe2020Hero from '../assets/projects/cafe 2020.png';
// Import your actual project images
import cafe2020Img1 from '../assets/projects/cafe2020/image1.png';
import cafe2020Img2 from '../assets/projects/cafe2020/image2.png';
import cafe2020Img3 from '../assets/projects/cafe2020/image3.png';
import cafe2020Img4 from '../assets/projects/cafe2020/image4.png';
import cafe2020Img5 from '../assets/projects/cafe2020/image5.png';
import cafe2020Img6 from '../assets/projects/cafe2020/image6.png';
import cafe2020Img7 from '../assets/projects/cafe2020/image7.png';
import cafe2020Img8 from '../assets/projects/cafe2020/image8.png';


const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data
  const projectsData = {
    'cafe-twenty-twenty': {
  companyName: 'VYUHX TECHNOLOGIES',
  title: 'Cafe Twenty Twenty',
  description: 'Cafe Twenty Twenty represents the perfect fusion of modern web design and the timeless appeal of a premium coffee experience. This comprehensive digital platform showcases the café\'s warm ambiance and artisanal quality through elegant design, intuitive navigation, and seamless user experience. Built with cutting-edge React technology and responsive design principles, the website delivers lightning-fast performance while maintaining rich, engaging visuals that capture the essence of handcrafted coffee culture.',
  heroImage: cafe2020Hero,
  gallery: [
    cafe2020Img1,
    cafe2020Img2,
    cafe2020Img3,
    cafe2020Img4,
    cafe2020Img5,
    cafe2020Img6,
    cafe2020Img7,
    cafe2020Img8,
  ],
  client: 'Cafe Twenty Twenty',
  industry: 'Food & Beverage',
  location: 'Ambernath, Kalyan',
  duration: '3 weeks',
  completed: 'January 2026',
  deployment: 'https://cafe12020.netlify.app/',
  techStack: {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Responsive Design', icon: '📱' }
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
      icon: '☕',
      title: 'Interactive Menu Showcase',
      description: 'Dynamic menu display with beautiful food photography, detailed descriptions, and organized categories for effortless browsing'
    },
    {
      icon: '📱',
      title: 'Mobile-First Responsive Design',
      description: 'Fully responsive interface optimized for seamless browsing across all devices, tablets, and screen sizes'
    },
   {
      icon: '📅',
      title: 'Table Reservation System',
      description: 'Easy online table booking with date, time, and guest selection for a seamless dine-in experience'
   },
    {
      icon: '📍',
      title: 'Location & Contact Integration',
      description: 'Easy-to-find location details with interactive maps, contact information, and up-to-date business hours'
    }
  ],
  impact: [
    {
      icon: '✓',
      text: '300+ Daily Visitors: Significant increase in online presence driving consistent engagement and customer inquiries'
    },
    {
      icon: '✓',
      text: '45% Online Engagement: Successfully converting website visits into customer actions through intuitive design'
    },
    {
      icon: '✓',
      text: '4.8★ User Experience: Enhanced digital presence leading to positive reviews and strong customer satisfaction'
    }
  ]
}
  };

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // smooth animation ke saath
  });
}, [projectId]);

  const project = projectsData[projectId];

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
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!project) return; // CRITICAL: Check if project exists first!
    
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
  }, [lightboxOpen, project]); // Changed dependency from project.gallery.length to project

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate('/projects')}>Back to Projects</button>
        </div>
      </div>
    );
  }

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

export default ProjectDetail;