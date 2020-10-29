import { css } from 'styled-components';

export const baseCss = css`
  html {
    font-size: 16px;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
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

  h1 {
    font-size: 3rem;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    color: ${(props) => props.theme.colors.gray4};
  }

  h2 {
    font-size: 1.875rem;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    color: ${(props) => props.theme.colors.gray4};
  }

  p {
    font-weight: ${(props) => props.theme.fontWeights.light};
    line-height: 1.5;
    color: ${(props) => props.theme.colors.gray3};
  }
`;
