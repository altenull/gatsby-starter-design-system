import React from 'react';
import styled from 'styled-components';
import useDemoCodeQuery from '../../hooks/useDemoCodeQuery';
import { ComponentDemoViewer } from '../code';
import Button from '../ui/Button';

const StdCodeDemoSection = styled.section`
  position: relative;
  padding: 40px 36px;
  background-color: #ffffff;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    padding: 64px 96px;
  }
`;

const StdContentHolder = styled.div`
  max-width: 592px;
`;

const StdTitle = styled.h2`
  margin-bottom: 32px;
`;

const StdDescription = styled.p`
  margin-bottom: 32px;
  max-width: 792px;
  font-size: 1.125rem;
`;

const CodeDemoSection = () => {
  const { demoPrimaryButton, demoSecondaryButton } = useDemoCodeQuery();

  return (
    <StdCodeDemoSection>
      <StdTitle>Code Highlighter</StdTitle>
      <StdDescription>
        We provides a customizable code highlighter with code block copy feature. And you can also change the theme of
        it.
      </StdDescription>

      <StdContentHolder>
        <ComponentDemoViewer
          demo={<Button kind='primary'>Primary Button</Button>}
          codeInHtml={demoPrimaryButton.html}
          codeInRawMarkdownBody={demoPrimaryButton.rawMarkdownBody}
        />

        <br />
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
