import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as listActions } from 'reducers/list';

import PageTemplate from 'components/common/PageTemplate';

class ListContainer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <PageTemplate buttonType="plus-square" to="edit">
        {list.map((memo) => (<div>{memo.title}</div>))}
      </PageTemplate>
    );
  }
}

ListContainer.propTypes = {
  list: PropTypes.arrayOf.isRequired,
};

export default connect(
  (state) => ({
    list: state.list.list,
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch),
  }),
)(ListContainer);
