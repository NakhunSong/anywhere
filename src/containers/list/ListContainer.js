import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as listActions } from 'reducers/list';

import PageTemplate from 'components/common/PageTemplate';
import MemoList from 'components/list/MemoList';

class ListContainer extends PureComponent {

  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    const { ListActions } = this.props;
    ListActions.getMemoList();
  };

  render() {
    const { memoList } = this.props;
    return (
      <PageTemplate buttonType="plus-square" to="edit">
        <MemoList
          list={memoList}
        />
      </PageTemplate>
    );
  }
}

ListContainer.propTypes = {
  ListActions: PropTypes.object.isRequired,
  memoList: PropTypes.array.isRequired,
};

export default connect(
  (state) => ({
    memoList: state.list.memoList,
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch),
  }),
)(ListContainer);
