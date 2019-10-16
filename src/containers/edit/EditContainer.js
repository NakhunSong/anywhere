import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreatos as editActions } from 'reducers/edit';
import EditView from '../../components/edit/EditView';
import EditTemplate from '../../components/edit/EditTemplate';
import PageTemplate from 'components/common/PageTemplate';

class EditContainer extends Component {

  handleChangeTitle = (event) => {
    const { value } = event.currentTarget;
    const { EditActions } = this.props;
    EditActions.changeTitle(value);
  }
  handleChangeContent = (event) => {
    const { value } = event.currentTarget;
    const { EditActions } = this.props;
    EditActions.changeContent(value);
  }
  handleConfirmButton = () => {
    const { EditActions } = this.props;
    EditActions.submitMemo();
  }
  render() {
    const { handleChangeTitle, handleChangeContent, handleConfirmButton } = this;
    return (
      <PageTemplate
        buttonType="check"
        handleRightButton={handleConfirmButton}
      >
        <EditView
          handleChangeTitle={handleChangeTitle}
          handleChangeContent={handleChangeContent}
          handleConfirmButton={handleConfirmButton}
        />
      </PageTemplate>
    );
  }
}

export default connect(
  (state) => ({
    title: state.edit.title,
    content: state.edit.content,
  }),
  (dispatch) => ({
    EditActions: bindActionCreators(editActions, dispatch),
  })
)(EditContainer);