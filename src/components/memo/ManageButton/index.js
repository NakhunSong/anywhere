import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popover } from 'antd';
import SmallButton from 'components/common/SmallButton';
import './style.scss';

const ManageButton = ({ handleRemove, handleModify }) => {
  return (
    <Popover
      placement="bottomRight"
      content={(
        <div className="popover-button-wrap">
          <SmallButton color="black" name="삭제" handleClick={handleRemove} />
          |
          <SmallButton color="black" name="수정" handleClick={handleModify} />
        </div>
      )}
      trigger="click"
    >
      <Icon
        type="more"
        className="big"
        style={{ color: 'white' }}
      />
    </Popover>
  );
};

ManageButton.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleModify: PropTypes.func.isRequired,
};

export default ManageButton;
