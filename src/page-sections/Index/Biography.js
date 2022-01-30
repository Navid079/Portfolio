import React from 'react';

import './Biography.css';

const Biography = ({ title, imageUrl, flipped, children }) => {
  return (
    <div className={`biography ${flipped ? 'biography--flipped' : ''}`}>
      <div className='biography__image-container'>
        <img className='biography__image' src={imageUrl} alt='bio'></img>
      </div>
      <div className='biography__body'>
        <h2 className='biography__title'>{title}</h2>
        <p className='biography__text'>{children}</p>
      </div>
    </div>
  );
};

export default Biography;
