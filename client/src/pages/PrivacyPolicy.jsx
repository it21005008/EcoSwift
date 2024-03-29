import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.subtitle}>Last Updated: March 29, 2024</p>
      <p style={styles.text}>
        Thank you for choosing EcoSwift. This Privacy Policy governs the manner in which EcoSwift collects, uses, maintains, and discloses information collected from users (each, a "User") of the EcoSwift application and website ("App"). This Privacy Policy applies to the App and all products and services offered by EcoSwift.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Personal Identification Information</h2>
        <p style={styles.text}>
          We may collect personal identification information from Users in various ways, including, but not limited to, when Users visit our App, register on the App, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features, or resources we make available on our App. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information.
        </p>
        <p style={styles.text}>
          We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain App-related activities.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Non-personal Identification Information</h2>
        <p style={styles.text}>
          We may collect non-personal identification information about Users whenever they interact with our App. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to our App, such as the operating system and the Internet service providers utilized, and other similar information.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>How We Use Collected Information</h2>
        <p style={styles.text}>
          EcoSwift may collect and use Users' personal information for the following purposes:
        </p>
        <ul style={styles.list}>
          <li>To improve customer service</li>
          <li>To personalize user experience</li>
          <li>To improve our App</li>
          
          <li>To send periodic emails</li>
        </ul>
        <p style={styles.text}>
          For detailed information, please refer to our full Privacy Policy on our website.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>How We Protect Your Information</h2>
        <p style={styles.text}>
          We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our App.
        </p>
      </div>
      {/* Add more content as necessary */}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#007bff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#666',
  },
  subHeading: {
    fontSize: '28px',
    marginBottom: '15px',
    color: '#007bff',
  },
  text: {
    marginBottom: '15px',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  section: {
    marginBottom: '40px',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '15px',
  },
};
