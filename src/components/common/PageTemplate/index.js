import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.scss';

const PageTemplate = ({ children, buttonType, to }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/"><div className="logo">Memo</div></Link>
        {to ? 
          <Link to={to}><Button type={buttonType} /></Link>
          : <Button type={buttonType} />
        }
      </div>
      {children}
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  buttonType: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
export default PageTemplate;