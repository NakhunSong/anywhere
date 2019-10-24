import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MemoItem = ({ memo }) => {

  return (
    <div
      className="memo-container"
    >
      <h2 className="memo-title">
        {memo.title.length < 11 ? memo.title : `${memo.title.substring(0, 11)}...` }
      </h2>
      <div></div>
      <div className="memo-content">
        {memo.content.length < 60
          ? memo.content
          : (
            <div>
              {memo.content.substring(0, 60)}
              <p> . . .</p>
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
