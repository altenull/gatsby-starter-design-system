import React from 'react';
import styled from 'styled-components';
import useDemoCodeQuery from '../../hooks/useDemoCodeQuery';
import { ComponentDemoViewer } from '../code';
import Button from '../ui/Button';

const StdCodeDemoSection = styled.section`
  position: relative;
  padding: 48px 80px;
  background-color: #ffffff;
`;

const StdContentHolder = styled.div`
  max-width: 560px;
`;

const StdTitle = styled.h2`
  margin: 0 0 32px;
  font-size: 30px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.gray4};
`;

const StdDescription = styled.p`
  max-width: 720px;
  font-size: 18px;
  font-weight: ${(props) => props.theme.fontWeights.light};
  line-height: 1.5;
  color: ${(props) => props.theme.colors.gray3};
`;

const CodeDemoSection = () => {
  const { demoPrimaryButton, demoSecondaryButton } = useDemoCodeQuery();

  return (
    <StdCodeDemoSection>
      <StdTitle>Code Highlighter</StdTitle>
      <StdDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.
      </StdDescription>

      <StdContentHolder>
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
      </StdContentHolder>
    </StdCodeDemoSection>
  );
};

export default CodeDemoSection;
