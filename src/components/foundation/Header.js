import React from 'react';
import styled from 'styled-components';
import { ScrollDirection } from '../../enums/scroll-direction.enum';
import useScrollDirection from '../../hooks/useScrollDirection';

const StdHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  background-color: #ffffff;
  z-index: 1000;
  transform: ${(props) => (props.shouldHideHeader ? 'translateY(-64px)' : 'translateY(0)')};
  transition: transform 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
`;

const StdTitle = styled.span`
  font-size: 24px;
`;

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <StdHeader shouldHideHeader={scrollDirection === ScrollDirection.Down}>
      <StdTitle>Design System</StdTitle>
    </StdHeader>
  );
};

export default Header;
