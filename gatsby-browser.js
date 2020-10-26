/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it
const React = require('react');
const { createGlobalStyle, ThemeProvider } = require('styled-components');

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
  const theme = {
    sharedSizes: {
      headerHeight: '64px',
      sidebarWidth: '240px',
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
    },
    zIndexes: {
      sidebar: 900,
      header: 1000,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
