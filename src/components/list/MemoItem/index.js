import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MemoItem = ({ memo }) => {
  return (
    <div className="memo-container">
      <h2 className="memo-title">{memo.title}</h2>
      <div className="memo-content">{memo.content}</div>
    </div>
  );
};

MemoItem.propTypes = {
  memo: PropTypes.object.isRequired,
};

export default MemoItem;
