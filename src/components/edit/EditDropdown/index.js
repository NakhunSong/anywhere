import React, { Component } from 'react';
import { TreeSelect } from 'antd';
import './style.scss';

const { TreeNode } = TreeSelect;

const menu = [
  {
    id: 0,
    name: '카테1',
  },
  {
    id: 1,
    name: '카테2',
  },
];

class EditDropdown extends Component {
  state = {
    value: '카테고리'
  };

  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <div className="edit-category">
        <TreeSelect
          showSearch
          style={{ width: 150 }}
          // value={this.state}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear
          treeDefaultExpandAll
          onChange={this.onChange}
        >
          {menu.map(m => <TreeNode key={m.id} value={m.name} title={m.name}></TreeNode>)}
        </TreeSelect>
      </div>
    )
  }
}

export default EditDropdown;