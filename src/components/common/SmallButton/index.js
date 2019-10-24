import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SmallButton = ({
  big,
  color,
  name,
  handleClick,
}) => {
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

SmallButton.propTypes = {
  big: PropTypes.object.isRequired,
  color: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SmallButton;
