import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { actionCreators as editActions } from 'reducers/edit';
import { actionCreators as listActions } from 'reducers/list';
import PageTemplate from 'components/common/PageTemplate';
import EditView from 'components/edit/EditView';
import SmallButton from 'components/common/SmallButton';

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
      history,
      EditActions,
      id,
      title,
      content,
      isModify,
    } = this.props;

    const memo = {
      id,
      title,
      content,
    };
    if (isModify) {
      EditActions.editMemo(memo);
      history.push(`/memo/${id}`);
      return;
    }
    EditActions.addMemo(memo);
    history.push(`/memo/${id}`);
  }

  render() {
    const { handleChangeTitle, handleChangeContent, handleConfirmButton } = this;
    const { title, content } = this.props;

    return (
      <PageTemplate
        button={
          <SmallButton big name="저장" handleClick={handleConfirmButton} />
        }
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
  history: PropTypes.object.isRequired,
  EditActions: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isModify: PropTypes.bool.isRequired,
};

export default connect(
  (state) => ({
    id: state.edit.id,
    title: state.edit.title,
    content: state.edit.content,
    isModify: state.edit.isModify,
  }),
  (dispatch) => ({
    EditActions: bindActionCreators(editActions, dispatch),
    ListActions: bindActionCreators(listActions, dispatch),
  }),
)(EditContainer);
