import React from 'react';
import PropTypes from 'prop-types';
import EditContainer from 'containers/edit/EditContainer';

const EditPage = ({ history }) => {
  return (
    <EditContainer
      history={history}
    />
  );
};

EditPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default EditPage;
