import './Index.css';

import React from 'react';
import Hero from '../../page-sections/Hero';
import Biography from '../../page-sections/Biography';
import Splitter from '../../components/UI/Splitter/Splitter';
import Portfolio from '../../page-sections/Portfolio';
import Footer from '../../page-sections/Footer';

const Index = () => {
  return (
    <div className='index-page'>
      <Hero title='Greetings!' />
      <Splitter />
      <Biography title='Who am I?' imageUrl={require('../../images/avatar.jpg')}>
        My name is Ahmad Navid Asghari and I'm a 21-year-old web developer.
        <br />
        I am a bachelor's degree student in software engineering at the Persian
        Gulf University in Bushehr, Iran. It 's been two and a half years since
        I started programming, and during that time I've learned React and
        Express libraries. I also have some relative knowledge about artificial
        intelligence. During this time I lived and loved algorithms. <br />
        My main skill is web programming and I can work as a full stack
        developer but I also know Java, Python, C and R programming.
      </Biography>
      <Splitter />
      <Portfolio />
      <Splitter />
      <Footer />
    </div>
  );
};

export default Index;
