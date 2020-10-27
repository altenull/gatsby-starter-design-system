import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { CodeHighlighterContainer } from '../../containers/code';

const StdDemoViewer = styled.div`
  margin-bottom: -8px;
  padding: 40px 24px;
  background-color: ${(props) => props.theme.colors.white};
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
