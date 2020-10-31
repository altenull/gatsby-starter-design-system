import React from 'react';
import styled from 'styled-components';
import bmcLogoWithWordmark from '../../assets/images/bmc-logo-with-wordmark.png';
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery';

const StdAnchor = styled.a`
  width: 100%;
  border-radius: 12px;
  padding: 8px 24px;
  background-color: ${(props) => props.theme.colors.anchor};
  transition: background-color ${(props) => props.theme.duration.normal};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const StdImage = styled.img`
  width: 100%;
`;

const BMCButton = () => {
  const { ids } = useSiteMetadataQuery();

  return (
    <StdAnchor href={`https://www.buymeacoffee.com/${ids.buyMeACoffee}`} target='_blank' rel='noreferrer'>
      <StdImage src={bmcLogoWithWordmark} alt='Buy Me A Coffee' />
    </StdAnchor>
  );
};

export default BMCButton;
