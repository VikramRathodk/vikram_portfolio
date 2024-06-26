import React from 'react';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src="https://via.placeholder.com/150" alt="Profile" className="about-img" />
        <div className="about-header-text">
          <h1>Vikram Rathod</h1>
          <p>Full-Stack Developer</p>
        </div>
      </div>
      <div className="about-content">
        <section className="terminal-section">
          <h2>About Me</h2>
          <p>
            I am a passionate Full-Stack Developer with over 5 years of experience in building web and mobile applications. I enjoy working with the latest technologies and continuously improving my skills. My goal is to create efficient, scalable, and user-friendly applications.
          </p>
        </section>

        <section className="terminal-section">
          <h2>Socials</h2>
          <div className="social-links">
            <a href="https://twitter.com/example" className="social-link">Twitter</a>
            <a href="https://linkedin.com/in/example" className="social-link">LinkedIn</a>
            <a href="https://github.com/example" className="social-link">GitHub</a>
            {/* Add more social links as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
