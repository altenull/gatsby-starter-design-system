import React from 'react';
import styled from 'styled-components';
import useDemoCodeQuery from '../../hooks/useDemoCodeQuery';
import CodeHighlighter from '../code/CodeHighlighter';

const StdCodeDemoSection = styled.section`
  position: relative;
  height: 40%;
  background-color: ${(props) => props.theme.colors.gray2};
`;

const CodeDemoSection = () => {
  const { demoButton } = useDemoCodeQuery();

  return (
    <StdCodeDemoSection>
      <CodeHighlighter codeInHtml={demoButton.html} />
    </StdCodeDemoSection>
  );
};

export default CodeDemoSection;
