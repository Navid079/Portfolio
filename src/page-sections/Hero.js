import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/UI/Buttons/Button';

import './Hero.css';

const Hero = () => {
  const aboutButton = useRef();
  const projectsButton = useRef();
  const contactButton = useRef();

  const navigate = useNavigate();

  const navigateHandler = event => {
    switch (event.target) {
      case aboutButton.current:
        navigate('/about-me');
        break;
      case projectsButton.current:
        navigate('/my-projects');
        break;
      case contactButton.current:
        navigate('/contact-me');
        break;
    }
  };

  return (
    <div className='hero'>
      <div className='hero__navigate'>
        <div className='hero__name'>Ahmad Navid Asghari</div>
        <div className='hero__navigate-buttons'>
          <Button>Home</Button>
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
      <h1 className='hero__greeting'>Greetings!</h1>
    </div>
  );
};

export default Hero;
