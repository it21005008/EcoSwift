
import React from 'react';

export default function TermsConditions() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms & Conditions</h1>
      <p style={styles.subtitle}>Last Updated: March 29, 2024</p>
      <p style={styles.text}>
        Welcome to EcoSwift. These Terms and Conditions outline the rules and regulations for the use of our website and application.
      </p>
      <p style={styles.text}>
        By accessing this website and using our application, you accept these terms and conditions in full. Do not continue to use EcoSwift if you do not accept all of the terms and conditions stated on this page.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>License to Use</h2>
        <p style={styles.text}>
          Unless otherwise stated, EcoSwift and/or its licensors own the intellectual property rights for all material on our website and application. All intellectual property rights are reserved. You may view and/or print pages from EcoSwift for your own personal use subject to restrictions set in these terms and conditions.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Restrictions</h2>
        <p style={styles.text}>
           You must not:
        </p>
        <ul style={styles.list}>
          <li>Republish material from EcoSwift</li>
          <li>Sell, rent, or sub-license material from EcoSwift</li>
          <li>Reproduce, duplicate, or copy material from EcoSwift</li>
          <li>Redistribute content from EcoSwift</li>
        </ul>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Acceptable Use</h2>
        <p style={styles.text}>
          You must not use our website and application in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of EcoSwift, or in any way which is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
        </p>
      </div>
      {/* Add more sections as necessary */}
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
