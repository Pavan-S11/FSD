import React, { Component } from 'react';

// This is a Class Component
class About extends Component {
  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>About Us</h1>
        <p>This component was created using ES6 Class syntax.</p>
        <p style={{ color: '#666', marginTop: '20px' }}>
          <small>Class components were the standard before React 16.8!</small>
        </p>
      </div>
    );
  }
}

export default About;