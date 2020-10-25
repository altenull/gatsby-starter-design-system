import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const StdLayout = styled.div`
  display: flex;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <StdLayout>
        <Sidebar />
        {children}
      </StdLayout>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
