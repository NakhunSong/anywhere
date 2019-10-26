import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const PageTemplate = ({
  children,
  button,
  to,
}) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/"><div className="logo">Memo</div></Link>
        {to
          ? <Link to={to}>{button}</Link>
          : button}
      </div>
      {children}
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  button: PropTypes.element.isRequired,
  to: PropTypes.string,
};

export default PageTemplate;
