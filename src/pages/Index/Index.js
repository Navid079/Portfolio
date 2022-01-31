import './Index.css';

import React, { useRef } from 'react';
import Hero from '../../page-sections/Hero';
import Biography from '../../page-sections/Biography';
import Splitter from '../../components/UI/Splitter/Splitter';
import Portfolio from '../../page-sections/Portfolio';
import Footer from '../../page-sections/Footer';

const Index = () => {
  const projects = [
    {
      title: 'Project A',
      imageUrl: require('../../images/project.jpg'),
      reference: useRef(),
      description:
        'Project A is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies.',
    },
    {
      title: 'Project B',
      imageUrl: require('../../images/project.jpg'),
      reference: useRef(),
      description:
        'Project A is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies.',
    },
    {
      title: 'Project C',
      imageUrl: require('../../images/project.jpg'),
      reference: useRef(),
      description:
        'Project A is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies. But this one has more text as its description. I just add this text to show to height difference in cards.',
    },
  ];

  return (
    <div className='index-page'>
      <Hero title='Greetings!' />
      <Splitter />
      <Biography
        title='Who am I?'
        imageUrl={require('../../images/avatar.jpg')}
      >
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
      <Portfolio projects={projects} />
      <Splitter />
      <Footer />
    </div>
  );
};

export default Index;
