import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StdSidebarNavItemLink = styled.li`
  display: flex;
  align-items: center;
  padding-left: 24px;
  font-size: 15px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray2};

  &:hover {
    background-color: ${(props) => props.theme.colors.gray0};
    color: ${(props) => props.theme.colors.gray3};
  }
`;

const SidebarNavItemLink = ({ text }) => {
  return <StdSidebarNavItemLink>{text}</StdSidebarNavItemLink>;
};

SidebarNavItemLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SidebarNavItemLink;
