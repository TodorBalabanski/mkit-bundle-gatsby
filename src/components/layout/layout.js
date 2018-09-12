import React from 'react';
import PropTypes from 'prop-types';
import Head from '../head/head';

const Layout = ({ children }) => (
  <React.Fragment>
    <Head />
    {/* Header component goes here */}
    <div>{children}</div>
    {/* Footer component goes here */}
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
