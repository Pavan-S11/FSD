import React from 'react';
// Import Router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our custom components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    // Wrap the entire application in the Router
    <Router>
      <div>
        {/* The Navbar stays visible on all pages */}
        <Navbar />
        
        {/* Quick Concept Recap Section */}
        <div style={{ 
          backgroundColor: '#e8f4fd', 
          padding: '15px', 
          margin: '20px auto',
          maxWidth: '600px',
          borderRadius: '8px',
          borderLeft: '4px solid #2196f3'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>Quick Concept Recap:</h3>
          <ul style={{ margin: '0', paddingLeft: '20px' }}>
            <li><strong>BrowserRouter:</strong> Keeps your UI in sync with the URL.</li>
            <li><strong>Routes & Route:</strong> Map a specific path (like /about) to a component.</li>
            <li><strong>Link:</strong> Used instead of &lt;a&gt; tags to prevent full page reloads.</li>
          </ul>
        </div>

        {/* Define the Routes */}
        <Routes>
          {/* When the path is "/", render the Home component */}
          <Route path="/" element={<Home />} />
          
          {/* When the path is "/about", render the About component */}
          <Route path="/about" element={<About />} />
          
          {/* When the path is "/contact", render the Contact component */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer with lab task reminder */}
        <footer style={{ 
          textAlign: 'center', 
          marginTop: '50px', 
          padding: '20px',
          color: '#666',
          borderTop: '1px solid #ddd'
        }}>
          <p>
            <strong>Lab Task:</strong> Click the buttons above. Notice how the URL 
            changes without the page refreshing.
          </p>
          <p style={{ fontSize: '14px', marginTop: '10px' }}>
            Current URL: <span style={{ fontFamily: 'monospace', background: '#f5f5f5', padding: '2px 6px', borderRadius: '4px' }}>
              {window.location.href}
            </span>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;