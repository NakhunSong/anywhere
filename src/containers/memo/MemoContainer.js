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
import { getItem, setItem } from 'lib/utils/listLocalStorage';

class MemoContainer extends PureComponent {

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const { match, MemoActions, list } = this.props;
    const { id } = match.params;
    const memoIndex = list.findIndex((l) => l.id === Number(id, 10));
    MemoActions.getMemo(list[memoIndex]);
  }

  handleRemove = () => {
    const {
      history,
      MemoActions,
      ListActions,
      match,
    } = this.props;
    let { id } = match.params;
    id = Number(id, 10);

    ListActions.removeMemo(id);
    MemoActions.resetMemo();
    const list = getItem('list').filter((l) => l.id !== id);
    setItem(list);
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
  ListActions: PropTypes.object.isRequired,
  MemoActions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
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
