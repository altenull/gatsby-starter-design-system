import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const StdLayout = styled.div`
  display: flex;
  height: 100%;
`;

const StdMain = styled.main`
  width: 100%;
  margin-left: ${(props) => props.theme.sharedSizes.sidebarWidth};
  margin-top: ${(props) => props.theme.sharedSizes.headerHeight};
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <StdLayout>
        <Sidebar />
        <StdMain>{children}</StdMain>
      </StdLayout>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
