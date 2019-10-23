import React from 'react';
import './style.scss';

const SmallButton = ({ big, color, name, handleClick }) => {
  return (
    <div
      className={`default-button ${big ? 'big' : ''} ${color || ''}`}
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex="0"
    >
      {name}
    </div>
  );
};

export default SmallButton;
