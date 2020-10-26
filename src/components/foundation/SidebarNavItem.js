import React from 'react';
import styled from 'styled-components';
import SidebarNavItemLink from './SidebarNavItemLink';

const StdSidebarNavItem = styled.li`
  padding: 16px 0;
  background-color: ${(props) => props.theme.colors.white};

  & + & {
    border-top: 1px solid ${(props) => props.theme.colors.gray0};
  }
`;

const StdHeading4 = styled.h4`
  display: flex;
  align-items: center;
  height: 48px;
  margin: 0;
  padding-left: 24px;
  color: ${(props) => props.theme.colors.gray4};
`;

const StdUlWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SidebarNavItem = ({ title, links }) => {
  const sidebarNavItemLinks = links.map((link) => <SidebarNavItemLink key={link} text={link} />);

  return (
    <StdSidebarNavItem>
      <StdHeading4>{title}</StdHeading4>
      <StdUlWrapper>{sidebarNavItemLinks}</StdUlWrapper>
    </StdSidebarNavItem>
  );
};

export default SidebarNavItem;
