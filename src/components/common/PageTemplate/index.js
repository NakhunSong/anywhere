import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.scss';

const PageTemplate = ({
  children,
  buttonType,
  to,
  handleRightButton,
}) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/"><div className="logo">Memo</div></Link>
        {to
          ? <Link to={to}><Button type={buttonType} /></Link>
          : <Button type={buttonType} handleButton={handleRightButton} />}
      </div>
      {children}
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  buttonType: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  handleRightButton: PropTypes.func.isRequired,
};

export default PageTemplate;
