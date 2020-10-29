import React from 'react';
import styled from 'styled-components';

const StdFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.gray0};
  padding: 24px 36px;
  text-align: center;
  font-size: 0.937rem;
  font-weight: ${(props) => props.theme.fontWeights.light};
  color: ${(props) => props.theme.colors.gray3};

  ${(props) => props.theme.mediaQueries.viewPort9} {
    padding: 32px 96px;
  }
`;

const Footer = () => {
  return (
    <StdFooter>
      © 2020{' '}
      <a href='https://github.com/altenull' target='_blank' rel='noreferrer'>
        altenull
      </a>
      , it’s a demo site of the{' '}
      <a href='https://github.com/altenull/gatsby-starter-design-system' target='_blank' rel='noreferrer'>
        gatsby-starter-design-system
      </a>
    </StdFooter>
  );
};

export default Footer;
