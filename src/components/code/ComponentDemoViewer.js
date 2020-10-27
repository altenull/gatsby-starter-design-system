import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CodeHighlighterContainer } from '../../containers/code';

const StdDemoViewer = styled.div`
  margin-bottom: -8px;
  padding: 40px 24px;
  border: 1px solid ${(props) => props.theme.colors.gray0};
  background-color: #ffffff;
  background: linear-gradient(90deg, #ffffff 21px, transparent 1%) center,
    linear-gradient(#ffffff 21px, transparent 1%) center, #868e96;
  background-size: 22px 22px;
`;

const ComponentDemoViewer = ({ demo, codeInHtml, codeInRawMarkdownBody, ...props }) => (
  <div {...props}>
    <StdDemoViewer>{demo}</StdDemoViewer>
    <CodeHighlighterContainer codeInHtml={codeInHtml} codeInRawMarkdownBody={codeInRawMarkdownBody} />
  </div>
);

ComponentDemoViewer.propTypes = {
  demo: PropTypes.element.isRequired,
  codeInHtml: PropTypes.string.isRequired,
  codeInRawMarkdownBody: PropTypes.string,
};

export default ComponentDemoViewer;
