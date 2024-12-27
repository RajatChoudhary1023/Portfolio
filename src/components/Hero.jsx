import React, { useEffect } from 'react';
import './Hero.css';
import Typewrite from './Typewrite';
import Heroimage from './Desktop - 5.jpg';

const Hero = () => {

  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar');

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-section" id="rajat">
      {/* Progress Bar */}
      <div className="progress-bar"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"><a href="#rajat" className='logo'>Rajat</a></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/Rajat_Choudhary.pdf" download="Rajat_Choudhary"className="cta-button2">Resume</a></li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I’m Rajat Choudhary</h1>
          <Typewrite />
          <p>I specialize in creating user-friendly designs and efficient code to bring ideas to life. Let's build something amazing together!</p>
          <a href="#contact" className="cta-button" id="about">Let's Connect</a>
        </div>
        <div className="hero-image">
          <img 
            src={Heroimage}
            alt="Hero" 
            className="image-placeholder"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
