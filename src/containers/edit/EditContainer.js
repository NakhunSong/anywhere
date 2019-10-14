import React, { Component } from 'react';
import EditView from '../../components/edit/EditView';
import EditDropdown from '../../components/edit/EditDropdown';
import EditTemplate from '../../components/edit/EditTemplate';

class EditContainer extends Component {
  handleChangeTitle = () => {

  }
  handleChangeContent = () => {

  }
  render() {
    const { handleChangeTitle, handleChangeContent } = this;
    return (
      <EditTemplate>
        <EditDropdown />
        <EditView
          handleChangeTitle={handleChangeTitle}
          handleChangeTitle={handleChangeContent}
        />
      </EditTemplate>
    );
  }
}

export default EditContainer;