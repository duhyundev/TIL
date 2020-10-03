import * as React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import styled from 'styled-components';

const CodeBlockRendererWrapper = styled.div`
  pre {
    border: 1px solid #ccc;
  }
`;

interface ICodeBlockRendererProps {
  value: string;
  language: string;
}

class CodeBlockRenderer extends React.PureComponent<ICodeBlockRendererProps> {
  constructor(props: ICodeBlockRendererProps) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  private codeEl: HTMLElement | undefined;

  private setRef(el: HTMLElement) {
    this.codeEl = el;
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    if (this.codeEl) {
      hljs.highlightBlock(this.codeEl);
    }
  }

  render() {
    return (
      <CodeBlockRendererWrapper>
        <pre>
          <code ref={this.setRef} className={`language-${this.props.language}`}>
            {this.props.value}
          </code>
        </pre>
      </CodeBlockRendererWrapper>
    );
  }
}

export default CodeBlockRenderer;
