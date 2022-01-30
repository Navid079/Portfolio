import React, { useRef } from 'react';
import Button from '../../components/UI/Buttons/Button';
import Card from '../../components/UI/Card/Card';

import './Portfolio.css';

const Portfolio = () => {
  const project1 = useRef();
  const project2 = useRef();
  const project3 = useRef();

  const seeMoreHandler = event => {
    switch (event.target) {
      case project1.current:
        console.log('one');
        break;
      case project2.current:
        console.log('two');
        break;
      case project3.current:
        console.log('three');
        break;
      default:
        break;
    }
  };

  const seeMoreButton1 = (
    <Button
      className='portfolio__button'
      onClick={seeMoreHandler}
      reference={project1}
    >
      See more
    </Button>
  );
  const seeMoreButton2 = (
    <Button
      className='portfolio__button'
      onClick={seeMoreHandler}
      reference={project2}
    >
      See more
    </Button>
  );
  const seeMoreButton3 = (
    <Button
      className='portfolio__button'
      onClick={seeMoreHandler}
      reference={project3}
    >
      See more
    </Button>
  );

  return (
    <div className='portfolio'>
      <Card
        className='portfolio__card'
        title='Project A'
        type='external'
        buttons={[seeMoreButton1]}
        imageUrl={require('../../images/project.jpg')}
      >
        Project A is a project that is going to do something in some way to
        achieve some goal. This project is written by me with some technologies.
      </Card>
      <Card
        className='portfolio__card'
        title='Project B'
        type='external'
        buttons={[seeMoreButton2]}
        imageUrl={require('../../images/project.jpg')}
      >
        Project B is a project that is going to do something in some way to
        achieve some goal. This project is written by me with some technologies.
      </Card>
      <Card
        className='portfolio__card'
        title='Project C'
        type='external'
        buttons={[seeMoreButton3]}
        imageUrl={require('../../images/project.jpg')}
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
