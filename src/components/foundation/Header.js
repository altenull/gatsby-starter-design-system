import React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/images/logo(160x160).png';
import { ScrollDirection } from '../../enums/scroll-direction.enum';
import useScrollDirection from '../../hooks/useScrollDirection';
import { SearchIcon } from '../icon';

const StdHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 24px 0px;
  height: ${(props) => props.theme.sharedSizes.headerHeight};
  background-color: ${(props) => props.theme.colors.white};
  z-index: ${(props) => props.theme.zIndexes.header};
  transform: ${(props) => (props.shouldHideHeader ? 'translateY(-64px)' : 'translateY(0)')};
  transition: transform 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
`;

const StdLogoWrapper = styled.div`
  width: ${(props) => props.theme.sharedSizes.sidebarWidth};
`;

const StdLogo = styled.img`
  height: 48px;
  margin-left: 24px;
  cursor: pointer;
`;

const StdSearchIconWrapper = styled.span`
  cursor: pointer;
  border-left: 1px solid ${(props) => props.theme.colors.gray1};
`;

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <StdHeader shouldHideHeader={scrollDirection === ScrollDirection.Down}>
      <StdLogoWrapper>
        <StdLogo src={logoImage} alt='logo' />
      </StdLogoWrapper>

      <StdSearchIconWrapper>
        <SearchIcon />
      </StdSearchIconWrapper>
    </StdHeader>
  );
};

export default Header;
