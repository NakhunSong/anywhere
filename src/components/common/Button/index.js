import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './style.scss';

const Button = ({ type, handleButton }) => {
  return (
    <Icon
      className="button"
      type={type}
      style={{ color: 'white' }}
      onClick={handleButton}
    />
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleButton: PropTypes.func.isRequired,
};

export default Button;
