import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';
import MemoItem from '../MemoItem';

const MemoList = ({ list }) => {
  return (
    <div className="memolist-container">
      {list.map((memo) => <Link to={`/memo/${memo.id}`} key={memo.id}><MemoItem memo={memo} /></Link>)}
    </div>
  );
};

MemoList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default MemoList;
