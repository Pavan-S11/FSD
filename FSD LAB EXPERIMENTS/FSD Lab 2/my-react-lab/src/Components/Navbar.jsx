import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      padding: '20px', 
      background: '#f0f0f0', 
      textAlign: 'center',
      borderBottom: '2px solid #ddd'
    }}>
      {/* Using Link instead of <a> tags to prevent page refresh */}
      <Link 
        to="/" 
        style={{ 
          margin: '0 15px',
          textDecoration: 'none',
          color: '#333',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        Home
      </Link>
      
      <Link 
        to="/about" 
        style={{ 
          margin: '0 15px',
          textDecoration: 'none',
          color: '#333',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        About
      </Link>
      
      <Link 
        to="/contact" 
        style={{ 
          margin: '0 15px',
          textDecoration: 'none',
          color: '#333',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '8px 16px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;