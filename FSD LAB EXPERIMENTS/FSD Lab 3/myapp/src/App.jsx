// src/App.jsx
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Inject custom CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .project-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      }
      
      .project-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
      }
      
      .navbar {
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
      
      .btn {
        transition: all 0.3s ease;
      }
      
      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }
      
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;