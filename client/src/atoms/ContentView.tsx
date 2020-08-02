import React from 'react';
import Markdown from 'react-markdown';
import toc from 'remark-toc';
import CodeBlockRenderer from '../helpers/CodeBlockRenderer';
import styled from 'styled-components';

const ContentViewWrapper = styled.div`
  margin: 10px;

  blockquote {
    color: #666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #eee solid;
  }

  table {
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    border-spacing: 2px;
    border-color: grey;

    th {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }
    td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }

    tr:nth-child(2n) {
      background: #f6f8fa;
    }
  }
`;

interface IContentViewProps {
  source: string;
}

function ContentView({ source }: IContentViewProps) {
  return (
    <ContentViewWrapper>
      <Markdown
        source={source}
        skipHtml={false}
        escapeHtml={false}
        renderers={{ code: CodeBlockRenderer }}
        plugins={[toc]}
      />
    </ContentViewWrapper>
  );
}

export default ContentView;
