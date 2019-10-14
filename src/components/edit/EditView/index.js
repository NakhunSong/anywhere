import React from 'react';
import PropTypes from 'prop-types';
import TextArea from 'react-textarea-autosize';
import './style.scss';

const EditView = ({
  handleChangeTitle,
  handleChangeContent,
}) => {
  return (
    <div className="edit-container">
      <div className="edit-title">
        <TextArea
          onChange={handleChangeTitle}
          placeholder="Here is Title.(Max length: 140)"
          maxLength="140"
        />
      </div>
      <div className="edit-content">
        <div className="edit-content-input">
          <TextArea
            onChange={handleChangeContent}
            placeholder="Here is Content."
            maxLength="2500"
            maxRows={27}
          />
        </div>
        <div className="edit-content-preview">

        </div>
      </div>
    </div>
  );
};

EditView.propTypes = {
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeContent: PropTypes.func.isRequired,
};

export default EditView;
