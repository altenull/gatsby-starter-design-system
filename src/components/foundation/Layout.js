import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const StdLayout = styled.div`
  display: flex;
  height: 100%;
`;

const StdMain = styled.main`
  width: calc(100% - ${(props) => props.theme.sharedSizes.sidebarWidth});
  margin-left: ${(props) => props.theme.sharedSizes.sidebarWidth};
  margin-top: ${(props) => props.theme.sharedSizes.headerHeight};
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <StdLayout>
        <Sidebar />
        <StdMain>
          {children}
          <Footer />
        </StdMain>
      </StdLayout>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
