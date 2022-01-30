import React from 'react';

import './Button.css';

const Button = ({ className = '', onClick, reference, children }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} ref={reference}>
      {children}
    </button>
  );
};

export default Button;
