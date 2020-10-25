/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it
const React = require('react');
const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
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
