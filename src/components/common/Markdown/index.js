import React from 'react';
import MarkDownRender from 'react-markdown/with-html';
import breaks from 'remark-breaks';
import PropTypes from 'prop-types';
import {
  BlockQuote,
  Code,
  Table,
  TableCell,
  Inline,
} from './config';

const Markdown = ({ content }) => {
  return (
    <MarkDownRender
      source={content}
      skipHtml={false}
      escapeHtml={false}
      plugins={[breaks]}
      renderers={{
        blockquote: BlockQuote,
        code: Code,
        table: Table,
        tableCell: TableCell,
        inlineCode: Inline,
      }}
    />
  );
};

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};


export default Markdown;
