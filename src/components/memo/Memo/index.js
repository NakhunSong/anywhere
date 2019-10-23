import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Markdown from 'components/common/Markdown';

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
        <Markdown content={content} />
      </div>
    </div>
  );
};

Memo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Memo;
