import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import MemoItem from '../MemoItem';

const MemoList = ({ list }) => {
  return (
    <div className="memolist-container">
      {list.map((memo) => <MemoItem memo={memo} />)}
    </div>
  );
};

MemoList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default MemoList;
