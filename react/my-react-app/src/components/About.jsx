import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Eshaan</h2>
        <div className="about-content">
          <div className="profile-section">
            <div className="profile-image">
              {/* Placeholder for profile image */}
              <div className="image-placeholder"></div>
            </div>
            <div className="profile-info">
              <h3>Eshaan Kapooswalla</h3>
              <p className="title">Software Developer</p>
              <p className="location">Based in San Francisco Bay Area</p>
            </div>
          </div>
          <div className="bio-section">
            <h4>Bio</h4>
            <p>
              A passionate software developer with a keen interest in building modern web applications.
              Experienced in frontend development with React and committed to creating elegant,
              user-friendly interfaces.
            </p>
          </div>
          <div className="skills-section">
            <h4>Skills</h4>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Frontend Development</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Web Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 