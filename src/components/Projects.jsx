import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

// Import project images from assets folder
import cafeTwentyTwentyImg from '../assets/projects/cafe 2020.png';
import bombRollsBowlsImg from '../assets/projects/bombrollsbowls1.png';  // Keep this
import sjInteriorsImg from '../assets/projects/sj interiors1.png';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'cafe-twenty-twenty',
      title: 'Cafe Twenty Twenty',
      category: 'Website Development',
      description: 'Modern cafe website featuring elegant design, interactive menu showcase, and seamless online ordering system for enhanced customer experience.',
      thumbnail: cafeTwentyTwentyImg,
      tags: ['React', 'Responsive Design', 'Modern UI', 'Restaurant']
    },
    {
      id: 'bomb-rolls-bowls',
      title: 'Bomb Rolls and Bowls',
      category: 'Website Development',
      description: 'Dynamic restaurant website with vibrant design, stunning food photography gallery, and intuitive navigation for exceptional digital presence.',
      thumbnail: bombRollsBowlsImg,  // NOW USING IT
      tags: ['React', 'Image Gallery', 'Modern Design', 'Food & Beverage']
    },
    {
      id: 'sj-interior',
      title: 'SJ Interior',
      category: 'Website Development',
      description: 'Elegant interior design portfolio website showcasing premium projects with immersive visuals, smooth animations, and professional presentation.',
      thumbnail: sjInteriorsImg,
      tags: ['React', 'Portfolio Design', 'Visual Showcase', 'Interior Design']
    }
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="header-wrapper">
          <button className="back-button" onClick={() => navigate('/')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="header-content">
            <h1 className="projects-company-title">VYUHX TECHNOLOGIES</h1>
            <h2 className="projects-section-title">Website Development</h2>
            <p className="projects-tagline">Explore our portfolio of innovative web solutions</p>
          </div>
        </div>
      </div>

      <div className="projects-content-section">
        <div className="projects-background">
          <div className="unified-orb orb-top-right"></div>
          <div className="unified-orb orb-bottom-left"></div>
          <div className="unified-orb orb-center"></div>

          <div className="unified-particles">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="unified-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 16}s`,
                  animationDuration: `${12 + Math.random() * 8}s`
                }}
              />
            ))}
          </div>

          <div className="unified-grid">
            {[...Array(4)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="unified-grid-line grid-horizontal"
                style={{
                  top: `${(i + 1) * 20}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="unified-grid-line grid-vertical"
                style={{
                  left: `${(i + 1) * 16.66}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>

          <div className="unified-tech-nodes">
            {[
              { top: '15%', left: '10%', delay: '0s' },
              { top: '25%', right: '15%', delay: '2s' },
              { bottom: '20%', left: '12%', delay: '4s' },
              { bottom: '30%', right: '10%', delay: '6s' },
              { top: '50%', left: '8%', delay: '8s' },
              { top: '60%', right: '12%', delay: '10s' }
            ].map((pos, i) => (
              <div
                key={i}
                className="unified-tech-node"
                style={{
                  ...pos,
                  animationDelay: pos.delay
                }}
              />
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="project-thumbnail-wrapper">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <button className="view-details-btn" onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}>
                      View Details
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;