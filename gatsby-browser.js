/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it

const React = require('react');
const { createGlobalStyle, ThemeProvider } = require('styled-components');

const { baseCss } = require('./src/styles/css/base');
const { resetCss } = require('./src/styles/css/reset');
const { defaultTheme } = require('./src/styles/theme/default-theme');

require('prismjs/themes/prism-tomorrow.css');

const GlobalStyle = createGlobalStyle`
  ${resetCss}
  ${baseCss}
`;

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
