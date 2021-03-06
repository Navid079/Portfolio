import React, { cloneElement } from 'react';
import Button from '../Buttons/Button';

import './Card.css';

const Card = ({
  className,
  imageUrl,
  type,
  title,
  children,
  onClick,
  reference,
  ...props
}) => {
  let buttons = [];

  switch (type) {
    case 'none':
    default:
      break;
    case 'notify':
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
        cloneElement(btn, { className: btn.props.className + ' card__button' })
      );
      break;
  }

  return (
    <div className={`card ${className || ''}`} onClick={onClick} ref={reference} >
      <div className='card__image-container'>
        <img className='card__image' src={imageUrl} alt='card' />
      </div>
      <div className='card__body'>
        <div className='card__description'>
          <h3 className='card__title'>{title}</h3>
          <div className='card__text'>{children}</div>
        </div>
        <div className='card__buttons'>{buttons}</div>
      </div>
    </div>
  );
};

export default Card;
