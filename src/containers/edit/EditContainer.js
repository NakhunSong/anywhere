import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { actionCreators as editActions } from 'reducers/edit';
import { actionCreators as listActions } from 'reducers/list';
import { setItem } from 'lib/utils/listLocalStorage';
import PageTemplate from 'components/common/PageTemplate';
import EditView from 'components/edit/EditView';

class EditContainer extends PureComponent {
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
    const {
      EditActions,
      ListActions,
      id,
      title,
      content,
    } = this.props;
 
    const memo = {
      id,
      title,
      content,
    };
    ListActions.addMemo(memo);
    setItem(memo);
    EditActions.submitMemo();
  }

  render() {
    const { handleChangeTitle, handleChangeContent, handleConfirmButton } = this;
    const { title, content } = this.props;

    return (
      <PageTemplate
        buttonType="check"
        handleRightButton={handleConfirmButton}
      >
        <EditView
          title={title}
          content={content}
          handleChangeTitle={handleChangeTitle}
          handleChangeContent={handleChangeContent}
        />
      </PageTemplate>
    );
  }
}

EditContainer.propTypes = {
  EditActions: PropTypes.object.isRequired,
  ListActions: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default connect(
  (state) => ({
    id: state.edit.id,
    title: state.edit.title,
    content: state.edit.content,
  }),
  (dispatch) => ({
    EditActions: bindActionCreators(editActions, dispatch),
    ListActions: bindActionCreators(listActions, dispatch),
  }),
)(EditContainer);
