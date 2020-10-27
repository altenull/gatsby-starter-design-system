import React from 'react';
import styled from 'styled-components';
import useDemoCodeQuery from '../../hooks/useDemoCodeQuery';
import { CodeHighlighterContainer } from '../../containers/code';

const StdCodeDemoSection = styled.section`
  position: relative;
  height: 40%;
  background-color: ${(props) => props.theme.colors.gray2};
`;

const CodeDemoSection = () => {
  const { demoButton } = useDemoCodeQuery();

  return (
    <StdCodeDemoSection>
      <CodeHighlighterContainer codeInHtml={demoButton.html} codeInRawMarkdownBody={demoButton.rawMarkdownBody} />
    </StdCodeDemoSection>
  );
};

export default CodeDemoSection;
