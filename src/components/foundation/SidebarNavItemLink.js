import React from 'react';
import styled from 'styled-components';

const StdSidebarNavItemLink = styled.li`
  display: flex;
  align-items: center;
  padding-left: 32px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: lightgray;
  }
`;

const SidebarNavItemLink = ({ text }) => {
  return <StdSidebarNavItemLink>{text}</StdSidebarNavItemLink>;
};

export default SidebarNavItemLink;
