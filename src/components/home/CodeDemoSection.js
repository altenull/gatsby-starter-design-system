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
  background-color: ${(props) => props.theme.colors.white};
`;

const StdComponentDemoViewerWrapper = styled.div`
  width: 640px;
`;

const CodeDemoSection = () => {
  const { demoPrimaryButton, demoSecondaryButton } = useDemoCodeQuery();

  return (
    <StdCodeDemoSection>
      <StdComponentDemoViewerWrapper>
        <ComponentDemoViewer
          demo={<Button kind='primary'>Primary Button</Button>}
          codeInHtml={demoPrimaryButton.html}
          codeInRawMarkdownBody={demoPrimaryButton.rawMarkdownBody}
        />

        <br />
        <ComponentDemoViewer
          demo={<Button kind='secondary'>Secondary Button</Button>}
          codeInHtml={demoSecondaryButton.html}
          codeInRawMarkdownBody={demoSecondaryButton.rawMarkdownBody}
        />
      </StdComponentDemoViewerWrapper>
    </StdCodeDemoSection>
  );
};

export default CodeDemoSection;
