import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Memo = ({
  title,
  content,
}) => {
  return (
    <div className="memopage-container">
      <div className="memopage-title">
        {title}
      </div>
      <div className="memopage-content">
        {content}
      </div>
    </div>
  );
};

Memo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Memo;
