import React from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';

const StdHeroSection = styled.section`
  position: relative;
  height: 80%;
  background-color: ${(props) => props.theme.colors.gray1};
`;

const StdHeading1 = styled.h1`
  margin: 0;
  font-size: 64px;
  transform: translate(220px, 140px);
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
      <StdHeading1>Design System</StdHeading1>
      <StdHeroImage />
    </StdHeroSection>
  );
};

export default HeroSection;
