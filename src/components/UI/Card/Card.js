import React from 'react';
import Button from '../Buttons/Button';

import './Card.css';

const Card = ({ className, imageUrl, type, ...handlers }) => {
  let buttons = [];

  switch (type) {
    case 'notify':
    default:
      buttons.push(<Button className='card__button'>Ok</Button>);
      break;
    case 'prompt':
      buttons.push(<Button className='card__button card__button--accept'>Yes</Button>);
      buttons.push(<Button className='card__button card__button--reject'>No</Button>);
      break;
  }

  return (
    <div className='card'>
      <div className='card__image-container'>
        <img src={imageUrl} />
      </div>
      <div className='card__body'>
        <div className='card__text'></div>
        <div className='card__buttons'>{buttons}</div>
      </div>
    </div>
  );
};

export default Card;
