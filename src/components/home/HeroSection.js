import React from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';

const StdHeroSection = styled.section`
  position: relative;
  height: 448px;
  background-color: ${(props) => props.theme.colors.gray0};
`;

const StdContentHolder = styled.div`
  display: inline-block;
  padding-left: 64px;
  padding-top: 64px;
`;

const StdTitle = styled.h1`
  margin: 0 0 16px;
  font-size: 52px;
  color: ${(props) => props.theme.colors.gray4};
`;

const StdDescription = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: ${(props) => props.theme.fontWeights.light};
  max-width: 680px;
  color: ${(props) => props.theme.colors.gray2};
`;

const StdHeroImage = styled(HeroImage)`
  position: absolute;
  right: 32px;
  bottom: 48px;
  width: 400px;
  height: auto;
`;

const HeroSection = () => {
  return (
    <StdHeroSection>
      <StdContentHolder>
        <StdTitle>Design System Starter</StdTitle>
        <StdDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </StdDescription>
      </StdContentHolder>

      <StdHeroImage />
    </StdHeroSection>
  );
};

export default HeroSection;
