import React from 'react';
import PropTypes from 'prop-types';

import MemoContainer from 'containers/memo/MemoContainer';

const MemoPage = ({ match }) => {
  return (
    <MemoContainer
      match={match}
    />
  );
};

MemoPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MemoPage;
