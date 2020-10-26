import React from 'react';
import styled from 'styled-components';

const StdCodeHighlighter = styled.div`
  position: relative;
`;

const CodeHighlighter = ({ codeInHtml, codeInRawMarkdownBody }) => {
  return (
    <StdCodeHighlighter>
      <div
        dangerouslySetInnerHTML={{
          __html: codeInHtml,
        }}
      />
    </StdCodeHighlighter>
  );
};

export default CodeHighlighter;
