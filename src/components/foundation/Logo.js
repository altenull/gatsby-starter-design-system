import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/images/logo(160x160).png';

const StdLogo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const Logo = () => {
  return <StdLogo src={logoImage} alt='logo' />;
};

export default Logo;
