import React, { useRef } from 'react';
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaTelegram,
  FaGithubSquare,
  FaEnvelope,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Buttons/Button';

import './Footer.css';

const Footer = () => {
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
    <div className='footer'>
      <div className='footer__contact'>
        <div className='footer__contact-item'>
          <FaTwitterSquare className='footer__contact-icon' />
          <a
            className='footer__contact-link'
            href='https://twitter.com/navid___naseri'
          >
            Follow Me On Twitter
          </a>
        </div>
        <div className='footer__contact-item'>
          <FaInstagramSquare className='footer__contact-icon' />
          <a
            className='footer__contact-link'
            href='https://instagram.com/navid___naseri'
          >
            Follow Me On Instagram
          </a>
        </div>
        <div className='footer__contact-item'>
          <FaTelegram className='footer__contact-icon' />
          <a
            className='footer__contact-link'
            href='https://telegram.me/lnaxidl'
          >
            Keep In Touch On Telegram
          </a>
        </div>
        <div className='footer__contact-item'>
          <FaGithubSquare className='footer__contact-icon' />
          <a
            className='footer__contact-link'
            href='https://github.com/Navid079'
          >
            Check My Github For More
          </a>
        </div>
        <div className='footer__contact-item'>
          <FaEnvelope className='footer__contact-icon' />
          <a
            className='footer__contact-link'
            href='mailto://navid.asg079@gmail.com'
          >
            Send Me An Email
          </a>
        </div>
      </div>
      <div className='footer__navigate'>
        <Button
          className='footer__nav-button'
          onClick={navigateHandler}
          reference={homeButton}
        >
          Home
        </Button>
        <Button
          className='footer__nav-button'
          onClick={navigateHandler}
          reference={aboutButton}
        >
          About Me
        </Button>
        <Button
          className='footer__nav-button'
          onClick={navigateHandler}
          reference={projectsButton}
        >
          My Projects
        </Button>
        <Button
          className='footer__nav-button'
          onClick={navigateHandler}
          reference={contactButton}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Footer;
