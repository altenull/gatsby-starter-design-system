/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it
const React = require('react');
const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

exports.wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {element}
    </React.Fragment>
  );
};
