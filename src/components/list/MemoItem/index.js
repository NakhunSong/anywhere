import React from 'react';
import './style.scss';

const MemoItem = ({ memo }) => {
  return (
    <div className="memo-container">
      <h2 className="memo-title">{memo.title}</h2>
      <div className="memo-content">{memo.content}</div>
    </div>
  );
};

export default MemoItem;
