import React from 'react';
import PropTypes from 'prop-types';

import MemoContainer from 'containers/memo/MemoContainer';

const MemoPage = ({ match, history }) => {
  return (
    <MemoContainer
      match={match}
      history={history}
    />
  );
};

MemoPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MemoPage;
