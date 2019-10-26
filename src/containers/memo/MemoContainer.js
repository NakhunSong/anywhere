import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as memoActions } from 'reducers/memo';
import { actionCreators as listActions } from 'reducers/list';
import { actionCreators as editActions } from 'reducers/edit';
import PageTemplate from 'components/common/PageTemplate';
import Memo from 'components/memo/Memo';
import ManageButton from 'components/memo/ManageButton';

class MemoContainer extends PureComponent {

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const { match, MemoActions } = this.props;
    const { id } = match.params;
    MemoActions.getMemo(Number(id, 10));
  }

  handleRemove = () => {
    const {
      history,
      EditActions,
      match,
    } = this.props;
    const { id } = match.params;
    EditActions.removeMemo(Number(id, 10));
    history.goBack();
  }

  handleModify = () => {
    const {
      history,
      EditActions,
      id,
      title,
      content,
    } = this.props;
    const memo = {
      id,
      title,
      content,
      isModify: true,
    };
    EditActions.getMemo(memo);
    history.push('/edit');
  }

  render() {
    const { id, title, content } = this.props;
    const { handleRemove, handleModify } = this;
    return (
      <PageTemplate
        button={(
          <ManageButton
            memoId={id}
            handleRemove={handleRemove}
            handleModify={handleModify}
          />
        )}
      >
        <Memo
          title={title}
          content={content}
        />
      </PageTemplate>
    );
  }
}

MemoContainer.propTypes = {
  history: PropTypes.object.isRequired,
  EditActions: PropTypes.object.isRequired,
  MemoActions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default connect(
  (state) => ({
    id: state.memo.id,
    title: state.memo.title,
    content: state.memo.content,
    list: state.list.memoList,
  }),
  (dispatch) => ({
    MemoActions: bindActionCreators(memoActions, dispatch),
    ListActions: bindActionCreators(listActions, dispatch),
    EditActions: bindActionCreators(editActions, dispatch),
  }),
)(MemoContainer);
