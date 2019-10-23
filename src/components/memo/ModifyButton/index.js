import React from 'react';
import { Icon, Popover } from 'antd';
import SmallButton from 'components/common/SmallButton';
import './style.scss';

const ModifyButton = ({ handleRemove }) => {
  return (
    <Popover
      placement="bottomRight"
      content={(
        <div className="popover-button-wrap">
          <SmallButton color="black" name="삭제" handleClick={handleRemove} />
          |
          <SmallButton color="black" name="수정" />
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

export default ModifyButton;
