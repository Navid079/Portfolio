import React, { cloneElement } from 'react';
import Button from '../Buttons/Button';

import './Card.css';

const Card = ({ className, imageUrl, type, title, children, ...props }) => {
  let buttons = [];

  switch (type) {
    case 'notify':
    default:
      buttons.push(<Button className='card__button'>Ok</Button>);
      break;
    case 'prompt':
      buttons.push(
        <Button className='card__button card__button--accept'>Yes</Button>
      );
      buttons.push(
        <Button className='card__button card__button--reject'>No</Button>
      );
      break;
    case 'custom':
      for (const btn of props.buttons) {
        buttons.push(<Button className='card__button'>{btn}</Button>);
      }
      break;
    case 'external':
      buttons = props.buttons.map(btn =>
        cloneElement(btn, {className: btn.props.className + ' card__button'})
      );
      break;
  }

  return (
    <div className='card'>
      <div className='card__image-container'>
        <img src={imageUrl} />
      </div>
      <div className='card__body'>
        <h3 className='card__title'>{title}</h3>
        <div className='card__text'>{children}</div>
        <div className='card__buttons'>{buttons}</div>
      </div>
    </div>
  );
};

export default Card;
