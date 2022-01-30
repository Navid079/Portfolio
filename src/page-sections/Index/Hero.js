import React from 'react';

import Button from '../../components/UI/Buttons/Button';

import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__navigate'>
        <div className='hero__name'>Ahmad Navid Asghari</div>
        <div className='hero__navigate-buttons'>
          <Button>Home</Button>
          <Button>About me</Button>
          <Button>Portfolio</Button>
          <Button>Contact me</Button>
        </div>
      </div>
      <h1 className='hero__greeting'>Greetings!</h1>
    </div>
  );
};

export default Hero;
