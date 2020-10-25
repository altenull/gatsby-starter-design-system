import React from 'react';
import styled from 'styled-components';

const StdHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  background-color: #ffffff;
`;

const StdTitle = styled.span`
  font-size: 24px;
`;

const Header = () => {
  return (
    <StdHeader>
      <StdTitle>Design System</StdTitle>
    </StdHeader>
  );
};

export default Header;
