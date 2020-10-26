import React from 'react';
import styled from 'styled-components';

const StdHeroSection = styled.section`
  height: 80%;
  background-color: green;
`;

const StdHeading1 = styled.h1`
  margin: 0;
`;

const HeroSection = () => {
  return (
    <StdHeroSection>
      <StdHeading1>Design System</StdHeading1>
    </StdHeroSection>
  );
};

export default HeroSection;
