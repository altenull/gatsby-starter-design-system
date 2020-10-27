import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';
import HeroImage from './HeroImage';

const StdHeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 448px;
  background-color: ${(props) => props.theme.colors.gray0};
`;

const StdContentHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StdCopyWrapper = styled.div`
  margin: auto 0;
`;

const StdTitle = styled.h1`
  margin: 0 0 16px;
  font-size: 48px;
  color: ${(props) => props.theme.colors.gray4};
`;

const StdDescription = styled.p`
  margin: 0 0 32px;
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.light};
  line-height: 1.5;
  max-width: 680px;
  color: ${(props) => props.theme.colors.gray2};
`;

const StdHeroImage = styled(HeroImage)`
  width: 360px;
  height: auto;
  margin-left: 56px;
`;

const HeroSection = () => {
  return (
    <StdHeroSection>
      <StdContentHolder>
        <StdCopyWrapper>
          <StdTitle>Design System Starter</StdTitle>
          <StdDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </StdDescription>
          <Button kind='primary'>Getting Started</Button>
        </StdCopyWrapper>

        <StdHeroImage />
      </StdContentHolder>
    </StdHeroSection>
  );
};

export default HeroSection;
