import React from 'react';
import ecoswiftImage from '../assets/images/ecoswift.png';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Image */}
      <img
        src={ecoswiftImage}
        alt="ecoswift"
        style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
      />
      {/* Map and Button Section */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <div style={{ width: '50%' }}>
          {/* Google Map Component */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31065.44630954018!2d-74.0060015713966!3d40.71278374827699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903ce155677%3A0xb4566b016c1e09f7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645919715106!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Button */}
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Your Button</button>
        </div>
      </div>
      {/* Additional Content */}
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2>Additional Content</h2>
        <p>This is additional content that appears below the map and button.</p>
      </div>
    </div>
  );
}
