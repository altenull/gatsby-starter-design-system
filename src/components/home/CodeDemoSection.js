import React from 'react';
import styled from 'styled-components';
import useDemoCodeQuery from '../../hooks/useDemoCodeQuery';
import { ComponentDemoViewer } from '../code';
import Button from '../ui/Button';

const StdCodeDemoSection = styled.section`
  position: relative;
  height: 40%;
  background-color: ${(props) => props.theme.colors.gray2};
`;

const CodeDemoSection = () => {
  const { demoButton } = useDemoCodeQuery();

  const demo = <Button>Hello</Button>;

  return (
    <StdCodeDemoSection>
      <ComponentDemoViewer
        demo={demo}
        codeInHtml={demoButton.html}
        codeInRawMarkdownBody={demoButton.rawMarkdownBody}
      />
    </StdCodeDemoSection>
  );
};

export default CodeDemoSection;
