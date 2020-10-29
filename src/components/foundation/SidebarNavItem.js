import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SidebarNavItemLink from './SidebarNavItemLink';

const StdSidebarNavItem = styled.li`
  padding: 16px 0;

  & + & {
    border-top: 1px solid ${(props) => props.theme.colors.gray0};
  }
`;

const StdTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  height: 48px;
  margin: 0;
  padding-left: ${(props) => props.theme.sharedSizes.sidebarPaddingLeft};
  color: ${(props) => props.theme.colors.gray4};
`;

const SidebarNavItem = ({ title, links }) => {
  const sidebarNavItemLinks = links.map((link) => <SidebarNavItemLink key={link} text={link} />);

  return (
    <StdSidebarNavItem>
      <StdTitle>{title}</StdTitle>
      <ul>{sidebarNavItemLinks}</ul>
    </StdSidebarNavItem>
  );
};

SidebarNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SidebarNavItem;
