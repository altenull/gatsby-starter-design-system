import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SidebarNavItem from './SidebarNavItem';

const SIDEBAR_NAV_ITEM_LINKS_WITH_TITLE = [
  {
    title: 'Getting Started',
    links: ['About', 'For designers', 'For developers'],
  },
  {
    title: 'Foundation',
    links: ['Design principles', 'Colors', 'Typographys', 'Icons'],
  },
  {
    title: 'Components',
    links: [
      'Accordion',
      'Alert',
      'Badge',
      'Button',
      'Card',
      'Checkbox',
      'Dialog',
      'Dropdown',
      'Input',
      'Loading',
      'Radio button',
      'Select',
      'Table',
      'Tabs',
      'Toggle',
    ],
  },
];

const StdSidebar = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: ${(props) => props.theme.sharedSizes.sidebarWidth};
  /* padding: ${(props) => props.theme.sharedSizes.headerHeight} 0 0; */
  z-index: ${(props) => props.theme.zIndexes.sidebar};
  border-right: 1px solid ${(props) => props.theme.colors.gray0};
`;

const StdLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: ${(props) => props.theme.sharedSizes.headerHeight};
`;

const StdUlWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Sidebar = () => {
  const sidebarNavItems = SIDEBAR_NAV_ITEM_LINKS_WITH_TITLE.map(({ title, links }, index) => (
    <SidebarNavItem key={index} title={title} links={links} />
  ));

  return (
    <StdSidebar>
      <StdLogoWrapper>
        <Logo />
      </StdLogoWrapper>

      <StdUlWrapper>{sidebarNavItems}</StdUlWrapper>
    </StdSidebar>
  );
};

export default Sidebar;
