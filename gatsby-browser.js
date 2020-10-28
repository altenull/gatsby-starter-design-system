/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it

const React = require('react');
const { createGlobalStyle, ThemeProvider } = require('styled-components');

const { defaultTheme } = require('./src/theme/theme.util');

require('prismjs/themes/prism-tomorrow.css');

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

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
`;

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
