import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import EditContainer from '../containers/edit/EditContainer';

const EditPage = () => {
  return (
    <PageTemplate buttonType="check">
      <EditContainer />
    </PageTemplate>
  );
};

export default EditPage;