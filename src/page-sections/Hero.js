import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/UI/Buttons/Button';

import './Hero.css';

const Hero = ({ title }) => {
  const homeButton = useRef();
  const aboutButton = useRef();
  const projectsButton = useRef();
  const contactButton = useRef();

  const navigate = useNavigate();

  const navigator = path => {
    if (window.location.pathname === path) return;
    navigate(path);
  };

  const navigateHandler = event => {
    switch (event.target) {
      case homeButton.current:
        navigator('/');
        break;
      case aboutButton.current:
        navigator('/about-me');
        break;
      case projectsButton.current:
        navigator('/my-projects');
        break;
      case contactButton.current:
        navigator('/contact-me');
        break;
      default:
        break;
    }
  };

  return (
    <div className='hero'>
      <div className='hero__navigate'>
        <div className='hero__name'>Ahmad Navid Asghari</div>
        <div className='hero__navigate-buttons'>
          <Button onClick={navigateHandler} reference={homeButton}>
            Home
          </Button>
          <Button onClick={navigateHandler} reference={aboutButton}>
            About me
          </Button>
          <Button onClick={navigateHandler} reference={projectsButton}>
            My Projects
          </Button>
          <Button onClick={navigateHandler} reference={contactButton}>
            Contact me
          </Button>
        </div>
      </div>
      <h1 className='hero__greeting'>{title}</h1>
    </div>
  );
};

export default Hero;
