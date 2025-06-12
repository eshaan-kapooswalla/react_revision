import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <h1>Eshaan Kapoor</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">Full Stack Developer</h1>
          <p className="hero-subtitle">Crafting beautiful and functional web experiences</p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button primary">View Projects</a>
            <a href="#contact" className="cta-button secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      <main>
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with expertise in modern web technologies.
              I love creating beautiful, responsive, and user-friendly applications that solve real-world problems.
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5/CSS3</li>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>A full-stack web application built with React and Node.js</p>
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>An e-commerce platform with modern UI/UX</p>
              </div>
              <div className="project-card">
                <h3>Project 3</h3>
                <p>A real-time chat application using WebSocket</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Eshaan Kapoor</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: your.email@example.com</p>
            <p>Location: Your Location</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Eshaan Kapoor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 