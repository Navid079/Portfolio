import React from 'react';
import Card from '../../components/UI/Card/Card';

import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Card title='Project A'>
        Project A is a project that is going to do something in some way to
        achieve some goal. This project is written by me with some technologies.
      </Card>
      <Card title='Project B'>
        Project B is a project that is going to do something in some way to
        achieve some goal. This project is written by me with some technologies.
      </Card>
      <Card title='Project C'>
        Project C is a project that is going to do something in some way to
        achieve some goal. This project is written by me with some technologies.
      </Card>
    </div>
  );
};

export default Portfolio;
