/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
// You can delete this file if you're not using it
const React = require('react');
const { createGlobalStyle, ThemeProvider } = require('styled-components');

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
  const theme = {
    sharedSizes: {
      headerHeight: '64px',
      sidebarWidth: '240px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray0: '#e9ecef',
      gray1: '#ced4da',
      gray2: '#868e96',
      gray3: '#495057',
      gray4: '#343a40',
    },
    zIndexes: {
      sidebar: 900,
      header: 1000,
    },
    fontWeights: {
      light: 300,
      regular: 400,
      semiBold: 600,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
