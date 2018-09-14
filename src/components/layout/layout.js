import React from 'react';
import PropTypes from 'prop-types';
import Seo from '../seo/seo';

const Layout = ({ children }) => (
  <React.Fragment>
    <Seo />
    {/* Header component goes here */}
    <div>{children}</div>
    {/* Footer component goes here */}
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
