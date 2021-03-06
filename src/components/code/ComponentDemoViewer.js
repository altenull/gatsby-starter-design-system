import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { CodeHighlighterContainer } from '../../containers/code';

// You can change background styles of demo pane here.
const demoPaneBackgroundCss = css`
  background-color: #ffffff;
  background: linear-gradient(90deg, #ffffff 10px, transparent 1%) center,
    linear-gradient(#ffffff 10px, transparent 1%) center, ${(props) => props.theme.colors.gray2};
  background-size: 11px 11px;
`;

const StdDemoPane = styled.div`
  margin-bottom: -8px;
  padding: 40px 24px;
  border: 1px solid ${(props) => props.theme.colors.gray0};

  ${demoPaneBackgroundCss}
`;

const ComponentDemoViewer = ({ demo, codeInHtml, codeInRawMarkdownBody, ...props }) => (
  <div {...props}>
    <StdDemoPane>{demo}</StdDemoPane>
    <CodeHighlighterContainer codeInHtml={codeInHtml} codeInRawMarkdownBody={codeInRawMarkdownBody} />
  </div>
);

ComponentDemoViewer.propTypes = {
  demo: PropTypes.element.isRequired,
  codeInHtml: PropTypes.string.isRequired,
  codeInRawMarkdownBody: PropTypes.string,
};

export default ComponentDemoViewer;
