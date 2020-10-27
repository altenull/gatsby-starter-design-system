import React from 'react';
import styled from 'styled-components';
import useDemoCodeQuery from '../../hooks/useDemoCodeQuery';
import { ComponentDemoViewer } from '../code';
import Button from '../ui/Button';

const StdCodeDemoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40%;
  background-color: ${(props) => props.theme.colors.white};
`;

const StdComponentDemoViewerWrapper = styled.div`
  width: 640px;
`;

const CodeDemoSection = () => {
  const { demoButton } = useDemoCodeQuery();

  const demo = <Button>Hello</Button>;

  return (
    <StdCodeDemoSection>
      <StdComponentDemoViewerWrapper>
        <ComponentDemoViewer
          demo={demo}
          codeInHtml={demoButton.html}
          codeInRawMarkdownBody={demoButton.rawMarkdownBody}
        />
      </StdComponentDemoViewerWrapper>
    </StdCodeDemoSection>
  );
};

export default CodeDemoSection;
