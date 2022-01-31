import React, { useEffect, useRef } from 'react';
import Card from '../components/UI/Card/Card';

import './Portfolio.css';

const Portfolio = ({ projects }) => {
  let cardRefs = useRef();

  const cardClickHandler = event => {
    for (const ref of cardRefs.current) {
      if (ref.element === event.currentTarget) {
        console.log(ref.title);
      }
    }
  };

  const cards = projects.map(project => {
    console.log('first');
    return (
      <Card
        className='portfolio__card'
        title={project.title}
        imageUrl={project.imageUrl}
        reference={project.reference}
        onClick={cardClickHandler}
      >
        {project.description}
      </Card>
    );
  });

  useEffect(() => {
    cardRefs.current = projects.map(project => {
      return { element: project.reference.current, title: project.title };
    });
  }, [cardRefs, projects]);

  return <div className='portfolio'>{cards}</div>;
};

export default Portfolio;
