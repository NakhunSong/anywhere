import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as memoActions } from 'reducers/memo';
import PageTemplate from 'components/common/PageTemplate';
import Memo from 'components/memo/Memo';

class MemoContainer extends PureComponent {

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const { MemoActions, match, list } = this.props;
    const { id } = match.params;
    const memoIndex = list.findIndex((l) => l.id === Number(id, 10));
    MemoActions.getMemo(list[memoIndex]);
  }

  render() {
    const { title, content } = this.props;
    return (
      <PageTemplate buttonType="edit">
        <Memo
          title={title}
          content={content}
        />
      </PageTemplate>
    );
  }
}

MemoContainer.propTypes = {
  MemoActions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
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
  }),
)(MemoContainer);
