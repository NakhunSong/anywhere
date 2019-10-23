import React from 'react';
import PropTypes from 'prop-types';
import TextArea from 'react-textarea-autosize';

import './style.scss';
import Markdown from 'components/common/Markdown';

const EditView = ({
  title,
  content,
  handleChangeTitle,
  handleChangeContent,
}) => {
  return (
    <div className="edit-container">
      <div className="edit-title">
        <TextArea
          onChange={handleChangeTitle}
          placeholder="Title."
          maxLength="140"
          value={title}
        />
      </div>
      <div className="edit-content">
        <div className="edit-content-input">
          <TextArea
            onChange={handleChangeContent}
            placeholder="Content."
            maxLength="2500"
            maxRows={27}
            value={content}
          />
        </div>
        <div className="edit-content-preview">
          <Markdown content={content} />
        </div>
      </div>
    </div>
  );
};

EditView.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeContent: PropTypes.func.isRequired,
};

export default EditView;
