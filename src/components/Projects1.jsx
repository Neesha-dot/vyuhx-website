import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects1.css';

// Import project image
// Store your image in: src/assets/projects/software/
import fraToolAnalyserImg from '../assets/projects/software/fra-tool-analyser.jpeg';

const Projects1 = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'fra-tool-analyser',
      title: 'FRA Tool Analyser',
      category: 'Software Development',
      description: 'Advanced financial risk assessment and analysis tool designed to streamline operations, enhance decision-making, and maximize efficiency in risk management.',
      thumbnail: fraToolAnalyserImg,
      tags: ['React', 'Python', 'Data Analytics', 'Financial Tools']
    }
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/software-project/${projectId}`);
  };

  return (
    <div className="projects1-page">
      {/* Header with same background as services */}
      <div className="projects1-header">
        <div className="header1-wrapper">
          <button className="back1-button" onClick={() => navigate('/')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="header1-content">
            <h1 className="projects1-company-title">VYUHX TECHNOLOGIES</h1>
            <h2 className="projects1-section-title">Software Development</h2>
            <p className="projects1-tagline">Explore our portfolio of powerful software solutions</p>
          </div>
        </div>
      </div>

      {/* Projects Content Section */}
      <div className="projects1-content-section">
        {/* Animated Background - matching Hero section */}
        <div className="projects1-background">
          {/* Gradient Orbs */}
          <div className="unified1-orb orb1-top-right"></div>
          <div className="unified1-orb orb1-bottom-left"></div>
          <div className="unified1-orb orb1-center"></div>

          {/* Floating Particles */}
          <div className="unified1-particles">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="unified1-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 16}s`,
                  animationDuration: `${12 + Math.random() * 8}s`
                }}
              />
            ))}
          </div>

          {/* Animated Grid */}
          <div className="unified1-grid">
            {[...Array(4)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="unified1-grid-line grid1-horizontal"
                style={{
                  top: `${(i + 1) * 20}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="unified1-grid-line grid1-vertical"
                style={{
                  left: `${(i + 1) * 16.66}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>

          {/* Tech Nodes */}
          <div className="unified1-tech-nodes">
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
                className="unified1-tech-node"
                style={{
                  ...pos,
                  animationDelay: pos.delay
                }}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects1-container">
          <div className="projects1-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project1-card"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Image */}
                <div className="project1-thumbnail-wrapper">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="project1-image"
                  />
                  <div className="project1-overlay">
                    <button className="view1-details-btn" onClick={(e) => {
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
                
                {/* Project Info */}
                <div className="project1-info">
                  <h3 className="project1-title">{project.title}</h3>
                  <p className="project1-description">{project.description}</p>
                  <div className="project1-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project1-tag">{tag}</span>
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

export default Projects1;