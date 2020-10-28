import React from 'react';
import styled from 'styled-components';
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery';
import { Button } from '../ui';
import HeroImage from './HeroImage';

const StdHeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 36px;
  background-color: ${(props) => props.theme.colors.gray0};

  ${(props) => props.theme.mediaQueries.viewPort9} {
    height: 448px;
    padding: 64px 96px;
  }
`;

const StdContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    flex-direction: row;
  }
`;

const StdCopyWrapper = styled.div`
  margin: auto 0 32px;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    margin: auto 0;
  }
`;

const StdTitle = styled.h1`
  margin: 0 0 16px;
  font-size: 48px;
  color: ${(props) => props.theme.colors.gray4};
`;

const StdDescription = styled.p`
  margin: 0 0 32px;
  color: ${(props) => props.theme.colors.gray2};
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.light};
  line-height: 1.5;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    max-width: 632px;
  }
`;

const StdHeroImage = styled(HeroImage)`
  width: 100%;
  max-width: 320px;
  height: auto;
  margin: 0 auto;

  ${(props) => props.theme.mediaQueries.viewPort9} {
    width: 360px;
    min-width: 240px;
    max-width: initial;
    margin-left: 56px;
  }
`;

const HeroSection = () => {
  const { description } = useSiteMetadataQuery();

  return (
    <StdHeroSection>
      <StdContentHolder>
        <StdCopyWrapper>
          <StdTitle>Design System Starter</StdTitle>
          <StdDescription>{description}</StdDescription>
          <Button kind='primary'>Getting Started</Button>
        </StdCopyWrapper>

        <StdHeroImage />
      </StdContentHolder>
    </StdHeroSection>
  );
};

export default HeroSection;
