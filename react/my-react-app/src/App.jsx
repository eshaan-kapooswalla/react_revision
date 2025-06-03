import React from 'react';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <h1>Eshaan's Portfolio</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <main>
        <About />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Eshaan Kapooswalla. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
