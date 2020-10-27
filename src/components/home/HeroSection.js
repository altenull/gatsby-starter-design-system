import React from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';

const StdHeroSection = styled.section`
  position: relative;
  height: 80%;
  background-color: ${(props) => props.theme.colors.gray0};
`;

const StdTitle = styled.h1`
  margin: 0;
  font-size: 64px;
  transform: translate(220px, 140px);
  color: ${(props) => props.theme.colors.gray4};
`;

const StdDescription = styled.p`
  margin: 0;
  font-size: 21px;
  font-weight: ${(props) => props.theme.fontWeights.light};
  max-width: 600px;
  color: ${(props) => props.theme.colors.gray2};
  transform: translate(220px, 180px);
`;

const StdHeroImage = styled(HeroImage)`
  position: absolute;
  right: 128px;
  top: 320px;
  width: 440px;
  height: auto;
`;

const HeroSection = () => {
  return (
    <StdHeroSection>
      <StdTitle>Design System Starter</StdTitle>
      <StdDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.
      </StdDescription>
      <StdHeroImage />
    </StdHeroSection>
  );
};

export default HeroSection;
