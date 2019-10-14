import React from 'react';
import PropTypes from 'prop-types';

const EditTemplate = ({ children }) => {
  return (
    <div className="edit-template">
      {children}
    </div>
  );
};

EditTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default EditTemplate;
