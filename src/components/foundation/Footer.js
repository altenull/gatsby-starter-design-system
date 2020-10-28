import React from 'react';
import styled from 'styled-components';

const StdFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.gray0};
  padding: 24px 36px;
  text-align: center;
  font-size: 15px;
  font-weight: ${(props) => props.theme.fontWeights.light};
  color: ${(props) => props.theme.colors.gray3};

  ${(props) => props.theme.mediaQueries.viewPort9} {
    padding: 32px 96px;
  }
`;

const StdAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.anchor};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StdFooter>
      © 2020{' '}
      <StdAnchor href='https://github.com/altenull' target='_blank' rel='noreferrer'>
        altenull
      </StdAnchor>
      , it’s a demo site of the{' '}
      <StdAnchor href='https://github.com/altenull/gatsby-starter-design-system' target='_blank' rel='noreferrer'>
        gatsby-starter-design-system
      </StdAnchor>
    </StdFooter>
  );
};

export default Footer;
