import React from 'react';

// This is a Functional Component
function Contact() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>This component was created using a standard Function.</p>
      <div style={{ marginTop: '30px' }}>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Address:</strong> 123 React Street, Component City</p>
      </div>
    </div>
  );
}

export default Contact;