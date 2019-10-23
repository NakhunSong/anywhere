import React from 'react';
import './style.scss';

export const BlockQuote = (props) => {
  return <div className="blockquote-render">{props.children}</div>;
};

export const Code = (props) => {
  return (
    <pre className="code-render">
      <code>
        {props.value}
      </code>
    </pre>
  );
};

export const Table = (props) => {
  return (
    <table className="table-render">
      {props.children}
    </table>
  );
};

export const TableCell = (props) => {
  return (
    <td className="table-cell-render">
      {props.children}
    </td>
  );
};

export const Inline = (props) => {
  return <span className="inline-render">{props.value}</span>;
};