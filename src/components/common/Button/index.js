import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './style.scss';

const Button = ({ type }) => {
  return (
    <Icon className="button" type={type} style={{ color: 'white' }} />
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
