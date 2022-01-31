import React, { useRef } from 'react';
import Card from '../../components/UI/Card/Card';

import './Portfolio.css';

const Portfolio = () => {
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();

  const cardClickHandler = event => {
    switch (event.currentTarget) {
      case card1.current:
        console.log('one');
        break;
      case card2.current:
        console.log('two');
        break;
      case card3.current:
        console.log('three');
        break;
      default:
        break;
    }
  };

  return (
    <div className='portfolio'>
      <Card
        className='portfolio__card'
        title='Project A'
        imageUrl={require('../../images/project.jpg')}
        reference={card1}
        onClick={cardClickHandler}
      >
        Project A is a project that is going to do something in some way to
        achieve some goal. This project is written by me with some technologies.
      </Card>
      <Card
        className='portfolio__card'
        title='Project B'
        imageUrl={require('../../images/project.jpg')}
        reference={card2}
        onClick={cardClickHandler}
      >
        Project B is a project that is going to do something in some way to
        achieve some goal. This project is written by me with some technologies.
      </Card>
      <Card
        className='portfolio__card'
        title='Project C'
        imageUrl={require('../../images/project.jpg')}
        reference={card3}
        onClick={cardClickHandler}
      >
        Project C is a project that is going to do something in some way to
        achieve some goal. This project is written by me with some technologies.
        But this one has more text as its description. I just add this text to
        show to height difference in cards.
      </Card>
    </div>
  );
};

export default Portfolio;
