import React from 'react';

// This is a Functional Component
function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This component was created using a standard Function.</p>
      <p style={{ color: '#666', marginTop: '20px' }}>
        <small>Notice how the URL changes without page refresh when you click navigation links!</small>
      </p>
    </div>
  );
}

export default Home;