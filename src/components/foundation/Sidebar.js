import React from 'react';
import styled from 'styled-components';

const StdSidebar = styled.nav`
  position: fixed;
  width: ${(props) => props.theme.sharedSizes.sidebarWidth};
  top: 0;
  bottom: 0;
  padding: 64px 0;
  background-color: #aaa;
  z-index: ${(props) => props.theme.zIndexes.sidebar};
`;

const Sidebar = () => {
  return <StdSidebar>Sidebar</StdSidebar>;
};

export default Sidebar;
