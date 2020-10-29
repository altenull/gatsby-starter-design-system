/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it

const React = require('react');
const { createGlobalStyle, ThemeProvider } = require('styled-components');

const { defaultTheme } = require('./src/theme/theme');

require('prismjs/themes/prism-tomorrow.css');

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
  }

  * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.anchor};
    font-weight: ${(props) => props.theme.fontWeights.regular};

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
