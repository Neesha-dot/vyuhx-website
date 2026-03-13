import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects2.css';

// Import project images from assets folder
import cafeQueueImg from '../assets/projects/cafe queue.png';
import shreerathFeedbackImg from '../assets/projects/shreerath feedback.png';
import bombRollsFeedbackImg from '../assets/projects/bombrolls feedback.png';

const Projects2 = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'cafe-queue-management',
      title: 'Cafe Queue Management System',
      category: 'Queue Management System',
      description: 'Real-time queue management platform with automated token generation, live tracking dashboard, and instant customer-staff communication for streamlined operations.',
      thumbnail: cafeQueueImg,
      tags: ['React', 'Node.js', 'Real-time Updates', 'Queue System']
    },
    {
      id: 'shreerath-feedback-system',
      title: 'Shreerath Feedback System',
      category: 'Feedback Management Platform',
      description: 'QR code-based customer feedback platform with owner dashboard, real-time review collection, and actionable business insights for continuous improvement.',
      thumbnail: shreerathFeedbackImg,
      tags: ['React', 'QR Technology', 'Dashboard', 'Customer Insights']
    },  // REMOVED EXTRA } HERE
    {
      id: 'bombrolls-feedback-system',
      title: 'Bomb Rolls Feedback System',
      category: 'Feedback Management Platform',
      description: 'Smart feedback collection system featuring QR code scanning, comprehensive owner analytics panel, and detailed ratings for data-driven business decisions.',
      thumbnail: bombRollsFeedbackImg,
      tags: ['React', 'QR Code', 'Analytics Dashboard', 'Rating System']
    }
  ];

  const handleProjectClick = (projectId) => {
    if (projectId === 'cafe-queue-management') {
      navigate('/cafe-queue-management');
    } else if (projectId === 'shreerath-feedback-system') {
      navigate('/shreerath-feedback-system');
    } else if (projectId === 'bombrolls-feedback-system') {
      navigate('/bombrolls-feedback-system');
    }
  };

  return (
    <div className="projects2-page">
      <div className="projects2-header">
        <div className="header-wrapper">
          <button className="back-button" onClick={() => navigate('/')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="header-content">
            <h1 className="projects2-company-title">VYUHX TECHNOLOGIES</h1>
            <h2 className="projects2-section-title">Web Applications</h2>
            <p className="projects2-tagline">Powerful web-based solutions for modern businesses</p>
          </div>
        </div>
      </div>

      <div className="projects2-content-section">
        <div className="projects2-background">
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

        <div className="projects2-container">
          <div className="projects2-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project2-card"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="project2-thumbnail-wrapper">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="project2-image"
                  />
                  <div className="project2-overlay">
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
                
                <div className="project2-info">
                  <h3 className="project2-title">{project.title}</h3>
                  <p className="project2-description">{project.description}</p>
                  <div className="project2-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project2-tag">{tag}</span>
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

export default Projects2;