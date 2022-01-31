import React, { useRef } from 'react';
import Hero from '../../page-sections/Hero';
import Splitter from '../../components/UI/Splitter/Splitter';
import Portfolio from '../../page-sections/Portfolio';
import Footer from '../../page-sections/Footer';

import './Projects.css';

const Projects = () => {
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
        'Project B is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies.',
    },
    {
      title: 'Project C',
      imageUrl: require('../../images/project.jpg'),
      reference: useRef(),
      description:
        'Project C is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies. But this one has more text as its description. I just add this text to show to height difference in cards.',
    },
    {
      title: 'Project D',
      imageUrl: require('../../images/project.jpg'),
      reference: useRef(),
      description:
        'Project D is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies.',
    },
    {
      title: 'Project E',
      imageUrl: require('../../images/project.jpg'),
      reference: useRef(),
      description:
        'Project E is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies. But this one has more text as its description. I just add this text to show to height difference in cards.',
    },
    {
      title: 'Project F',
      imageUrl: require('../../images/project.jpg'),
      reference: useRef(),
      description:
        'Project F is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies. But this one has more text as its description. I just add this text to show to height difference in cards.',
    },
    {
      title: 'Project G',
      imageUrl: require('../../images/project.jpg'),
      reference: useRef(),
      description:
        'Project G is a project that is going to do something in some way to achieve some goal. This project is written by me with some technologies.',
    },
  ];

  return (
    <div>
      <Hero title='My Projects' />
      <Splitter />
      <Portfolio projects={projects} />
      <Footer />
    </div>
  );
};

export default Projects;
