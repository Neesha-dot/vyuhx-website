import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Projects2 from './components/Projects2';
import ProjectDetail from './components/ProjectDetail';
import BombRollsBowlsDetail from './components/BombRollsBowlsDetail';
import SJInteriorDetail from './components/Sjinteriordetail';
import CafeQueueManagement from './components/CafeQueueManagement';
import FeedbackSystemShreerath from './components/FeedbackSystemShreerath';
import FeedbackSystemBombRolls from './components/FeedbackSystemBombRolls';

// NEW IMPORTS FOR SOFTWARE DEVELOPMENT
import Projects1 from './components/Projects1';
import FraToolAnalyser from './components/FraToolAnalyser';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
            </>
          } />
          
          {/* Website Development Projects */}
          <Route path="/projects" element={<Projects />} />

          <Route path="/projects2" element={<Projects2 />} />

          
          {/* Specific Website project routes */}
          <Route path="/project/bomb-rolls-bowls" element={<BombRollsBowlsDetail />} />
          <Route path="/project/sj-interior" element={<SJInteriorDetail />} />
          
          {/* Dynamic Website route */}
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          

           {/* Web Applications Projects - NEW ROUTE */}
  <Route path="/projects2" element={<Projects2 />} />
  
          {/* Cafe Queue Management */}
          <Route path="/cafe-queue-management" element={<CafeQueueManagement />} />
          
          {/* SOFTWARE DEVELOPMENT ROUTES */}
          <Route path="/projects1" element={<Projects1 />} />
          <Route path="/software-project/fra-tool-analyser" element={<FraToolAnalyser />} />

          {/* Feedback Systems */}
          <Route path="/shreerath-feedback-system" element={<FeedbackSystemShreerath />} />
          <Route path="/bombrolls-feedback-system" element={<FeedbackSystemBombRolls />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;