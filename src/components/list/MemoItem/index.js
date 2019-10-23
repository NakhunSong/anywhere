import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MemoItem = ({ memo }) => {

  return (
    <div
      className="memo-container"
    >
      <h2 className="memo-title">
        {memo.title.length < 14 ? memo.title : `${memo.title.substring(0, 14)}...` }
      </h2>
      <div className="memo-content">
        {memo.content.length < 130
          ? memo.content
          : (
            <div>
              <p>{memo.content.substring(0, 100)}</p>
              <p>. . .</p>
            </div>
          )}
      </div>
    </div>
  );
};

MemoItem.propTypes = {
  memo: PropTypes.object.isRequired,
};

export default MemoItem;
